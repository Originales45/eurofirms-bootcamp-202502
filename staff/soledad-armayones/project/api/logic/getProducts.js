import { User, Product } from '../data/index.js'
import { validate, SystemError, } from 'com'

export const getProducts = (category) => {

    const query = {}

    if (category) {
        validate.category(category)
        query.category = category

    }

    return Product.find(query).select('-__v').populate('author', 'username').lean()
        .catch(() => { throw new SystemError('mongo error') })
        .then(products => {
            products.forEach(product => {
                product.id = product._id.toString()
                delete product._id

            })
            return products
        })
}