import { connect, disconnect } from '../data/index.js'
import { removeProduct } from './removeProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return removeProduct('6870ee42dc0b360bbfa81fc2', '687e2ef04fff47f584331052')
                .then(() => console.log('product removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())