import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/shopapp')
    .then(() => {
        try {
            return registerUser('Mar Garcia', 'mar30@gmail.com', 'Mar30', '123123123', 'Colom 40', '650505050')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())