import { connect, disconnect } from '../data/index.js'
import { authenticateUser } from './authenticateUser.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return authenticateUser('sonia34', '123123123')
                .then(userId => console.log('user authenticated', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())