import { connect, disconnect } from '../data/index.js'
import { removeProduct } from './removeProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return removeProduct('6868eba27c217a5b571a2d5f', '6868eba27c217a5b571a2d5f')
                .then(() => console.log('product removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())