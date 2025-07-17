import { data } from '../data'
import { validate, SystemError, errors, AuthorizationError } from 'com'


export const getProducts = (category) => {
    validate.category(category)


    return fetch(import.meta.env.VITE_API_URL + '/products/' + category, {
        method: 'GET',
            headers: {
                Authorization: 'Bearer ' + data.getToken()
            }

    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(clothe => clothe)

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}