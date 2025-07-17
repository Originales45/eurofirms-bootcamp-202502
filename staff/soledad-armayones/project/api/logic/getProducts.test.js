import { connect, disconnect } from '../data/index.js'
import { getProducts } from './getProducts.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getProducts('refrigerator')
                .then(products => console.log('products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())