import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

export const getProducts = userId => {
    validate.userId(userId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.find({}).select('-__v').populate('name', 'email', 'username', 'password').sort('-date').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(products => {
                    products.forEach(product => {
                        product.id = product._id.toString()
                        delete product._id

                        if (!product.author) throw new AuthorshipError('post has not author')

                        if (product.author._id) {
                            product.author.id = product.author._id.toString()
                            delete product.author._id
                        }

                        product.own = product.author.id === userId
                    })

                    return products
                })
        })
}