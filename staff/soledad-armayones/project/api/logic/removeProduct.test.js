import { connect, disconnect } from '../data/index.js'
import { removeProduct } from './removeProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return removeProduct('6870ee42dc0b360bbfa81fc2', '68790ef548c6877de6dbed70')
                .then(() => console.log('product removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())