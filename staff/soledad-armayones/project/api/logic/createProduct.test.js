import { connect, disconnect } from '../data/index.js'
import { createProduct } from './createProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct('6831e7a7fd98fd111ae2800d', 'https://futurbar.com/wp-content/uploads/2014/12/6726-Cafetera-Automatica-de-3-Grupos-F3-Futurmat.jpg', 'pin8 dancing')
                .then(() => console.log('product created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())