import { connect, disconnect } from '../data/index.js'
import { createExercise } from './createExercise.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return createProduct(
                'Coffe Machine',
                'https://futurbar.com/wp-content/uploads/2014/12/6726-Cafetera-Automatica-de-3-Grupos-F3-Futurmat.jpg',
                'medium',
                'arms',
                'Moddel Fututmmat Opptima Evo 2G 2 Grupos.'

            )
                .then(() => console.log('create product'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())