import { connect, disconnect } from '../data/index.js'
import { createProduct } from './createProduct.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct('686ad429005dc065e6f6cd94', 'Vitrina modelo TY2-48', 'https://diagnhos.com/wp-content/uploads/2021/05/vitrinas-para-comida-caliente-ty2-48.jpg', 'food-exhibitor', 'Vitrina calefactada, modelo TY2-48, marca «Alto-Shaam»', 789.18)
                .then(() => console.log('Product registered'))
        }

        catch (error) {
            console.error(error)
        }

    })
    .catch(error => console.error(error))
    .finally(() => disconnect())