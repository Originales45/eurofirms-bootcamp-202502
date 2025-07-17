import { User, Product } from '../data/index.js'

import { validate, SystemError, NotFoundError } from 'com'


export const createProduct = (userId, name, image, category, description, price) => {

    validate.id(userId)
    validate.name(name)
    validate.image(image)
    validate.category(category)
    validate.description(description)
    validate.price(price)

    return User.findById (userId)
        .catch(error => {
            throw new
                SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new
                NotFoundError('user not found')

            return Product.create({ author: userId, name, image, category, description, price })
                .catch(error => {
                    throw new SystemError(error.message)
                })
                .then(() => { })
        })

}