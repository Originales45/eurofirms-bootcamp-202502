import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        try {
            return getUserUsername('68790df74b72a8912b996f10')
                .then(username => console.log('username gotten ', username))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())