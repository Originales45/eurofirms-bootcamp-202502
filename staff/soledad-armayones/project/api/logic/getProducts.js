import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

export const getProducts = (userId, category) => {
    validate.id(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.find({ category }).select('-__v').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(products => {
                    products.forEach(product => {
                        product.id = product._id.toString()
                        delete product._id

                    })

                    return products
                })
        })
}