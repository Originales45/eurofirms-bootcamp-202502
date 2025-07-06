import { connect, disconnect } from '../data/index.js'
import { getProducts } from './getProducts.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getProducts('683a0322553623b7794171e3')
                .then(products => console.log('products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())