import { data } from '../data'
import { validate, SystemError, errors } from 'com'

export const createProduct = (name, image, category, description, price) => {

    validate.name(name)
    validate.image(image)
    validate.category(category)
    validate.description(description)
    validate.price(price)

    return fetch(import.meta.env.VITE_API_URL + '/products', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + data.getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, image, category, description, price })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 201) return Promise.resolve()

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)
                })
        })
}