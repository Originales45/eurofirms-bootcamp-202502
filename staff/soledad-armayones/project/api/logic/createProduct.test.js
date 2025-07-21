import { connect, disconnect } from '../data/index.js'
import { createProduct } from './createProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct('687942a29242542f08406565', 'Armario Refrigerado 600 Litros - Positivo Inox', 'https://es.fourniresto.com/167631-large_default/armario-refrigerado-600-litros-positivo-inox.jpg', 'refrigerator','Armario refrigerado positivo de 600 litros a frío estático de 0 a +8°C con acabado inox. Apertura de la puerta reversible' ,669.99)
                .then(() => console.log('Product registered'))
        }

        catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())