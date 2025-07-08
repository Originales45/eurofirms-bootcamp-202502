import { connect, disconnect } from '../data/index.js'
import { getProducts } from './getProducts.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getProducts('686d32bb3c2f168e0265a411', 'food-exhibitor')
                .then(products => console.log('products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())