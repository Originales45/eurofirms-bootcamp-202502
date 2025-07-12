import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getUserUsername('6870ee42dc0b360bbfa81fc2')
                .then(username => console.log('username gotten ', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())