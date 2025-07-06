import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return registerUser('Mari Garcia', 'mari30@gmail.com', 'Mari30', '123123123', 'Colom 40', 'Barcelona', '650505050')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())