import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getUserUsername('686d32bb3c2f168e0265a411')
                .then(username => console.log('user username', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())