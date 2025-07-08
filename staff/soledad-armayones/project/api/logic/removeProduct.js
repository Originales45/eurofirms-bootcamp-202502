import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

export const removeProduct = (userId, productId) => {
    validate.userId(userId)
    validate.productId(productId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(prouct => {
                    if (!product) throw new NotFoundError('product not found')

                    if (user.role !== 'administrator' && product.author.toString() !== userId) throw new AuthorshipError('user not author of product')

                    return Product.deleteOne({ _id: prouctId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}