import { connect, disconnect } from '../data/index.js'
import { removeProduct } from './removeProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return removeProduct('687942a29242542f08406565', '687d62df325f7b07db92de48')
                .then(() => console.log('product removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())