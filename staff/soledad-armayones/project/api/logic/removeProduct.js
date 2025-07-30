import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorizationError } from 'com'


export const removeProduct = (userId, productId) => {
    validate.id(productId)

    return User.findById(userId)
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