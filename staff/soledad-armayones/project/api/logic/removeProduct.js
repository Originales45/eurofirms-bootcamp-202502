import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorizationError } from 'com'


export const removeProduct = (username, productId) => {
    validate.id(productId)
    validate.username(username)

    return User.findById(username)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.findById(productId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(product => {
                    if (!product) throw new NotFoundError('product not found')

                    return Product.deleteOne({ _id: productId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })

                })
        })
}