import { connect, disconnect } from '../data/index.js'
import { removeProduct } from './removeProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return removeProduct('686d32bb3c2f168e0265a411', '686d70d2f80f2d18bd2574ca')
                .then(() => console.log('product removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())