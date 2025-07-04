import { Exercise } from '../data/index.js'
import { validate, SystemError, DuplicityError } from 'com'

export const createProduct = (name, description, image, price, category) => {
    validate.name(name)
    validate.description(description)
    validate.image(image)
    validate.price(price)

    return ProductCategory.findOne({ name })
        .catch(error => { throw new SystemError('mongo error') })
        .then(exercise => {
            if (exercise) throw new DuplicityError('exercise already exits')

            return ProductCategory.create({
                name,
                description,
                image,
                price
            })
        })


        .catch(error => { throw new SystemError('mongo error') })
        .then(() => { })
}