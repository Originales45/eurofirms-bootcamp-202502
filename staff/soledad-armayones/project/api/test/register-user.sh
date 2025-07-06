import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-shopapp  ')
    .then(() => {
        try {
            //return registerUser('Mar Garcia', 'mar20@gmail.com', 'mar1', '123123123')
            return registerUser('Sole', 'sole40@gmail.com', 'sole40', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())