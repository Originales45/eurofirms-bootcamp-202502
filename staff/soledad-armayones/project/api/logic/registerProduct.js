import bcrypt from 'bcryptjs'

import { User } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const registerProduct = (name, username, password, image, category, description, price) => {

    validate.name(name)
    validate.username(username)
    validate.password(password)
    validate.image(image)
    validate.category(category)
    validate.description(description)
    validate.price(text)


    return bcrypt.hash(password, 10)
        .catch(error => { throw new SystemError(error.message) })
        .then(hash => {
            return Product.create({ name, username, password, text: hash, image, price })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('user already exists')

                    throw new SystemError('mongo error')
                })
                .then(() => { })
        })
}