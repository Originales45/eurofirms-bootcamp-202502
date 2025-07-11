import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user Id.
 * @param {string} postId The post id to remove.
 */
export const removeProduct = (userId, productId) => {
    validate.id(userId)
    validate.id(productId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.findById(productId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(post => {
                    if (!post) throw new NotFoundError('product not found')

                    // if (user.role !== 'administrator' && post.author.toString() !== userId) throw new AuthorshipError('user not author of post')
                    //TODO version control rol administrador del producto para publicar el producto para vender.

                    return Product.deleteOne({ _id: productId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}