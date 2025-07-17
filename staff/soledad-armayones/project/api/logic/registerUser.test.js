import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return registerUser('Jesus Garcia', 'jesus40@gmail.com', 'Jesus40', '123123123', 'calle Valencia 32', '678909090')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())