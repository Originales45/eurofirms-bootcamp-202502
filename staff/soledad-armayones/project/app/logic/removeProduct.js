import { data } from '../data'
import { validate, errors } from 'com'

const { SystemError } = errors

export const removeProduct = (ProductId) => {
    validate.productId(productId)

    return fetch(import.meta.env.VITE_API_URL + '/products/' + productId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, messsage } = body

                    const constructor = errors[error] || SystemError

                    throw new constructor(message)

                })

        })
}