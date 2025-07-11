import { connect, disconnect } from '../data/index.js'
import { createProduct } from './createProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct('6870ee42dc0b360bbfa81fc2', 'Frigorifico GN2/1, 200 x 134 x 81.5 cm, con cerradura, 1200L', 'https://prod-metro-markets.imgix.net/item_image/2e08d0c4-d56c-4002-b353-79f350b6cdce?auto=format,compress&w=393&q=50&dpr=2&ar=1:1&fill-color=00FFFFFF', 'refrigerator', 'Frigorífico profesional acero inoxidable, refrigeración por aire 1200L', 1571.79)
            
                .then(() => console.log('Product registered'))
        }

        catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())