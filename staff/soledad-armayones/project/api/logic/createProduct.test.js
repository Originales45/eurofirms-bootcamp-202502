import { connect, disconnect } from '../data/index.js'
import { createProduct } from './createProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct('6870ee42dc0b360bbfa81fc2', 'Vitrina neutra expositora 3 estantes', '68790df74b72a8912b996f10', 'food-exhibitor', 'Vitrina neutra expositora 3 estantes Expo Black-1 varias medidas con y sin luz VG', 350,52)
                .then(() => console.log('Product registered'))
        }

        catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())