import { User, Product } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const createProduct = (userId, name, image, description, price, category) => {
    validate.userId(userId)
    validate.name(name)
    validate.image(image)
    validate.description(description)
    validate.price(price)
    validate.category(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.create({ author: userId, image, text })
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })
}