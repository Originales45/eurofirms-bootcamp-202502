import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return registerUser('Juan Sanchez', 'juan54@gmail.com', 'Juan54', '123123123', 'calle Aragon 32', '678545454')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())