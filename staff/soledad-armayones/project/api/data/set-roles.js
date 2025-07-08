import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-shaopapp')
    .then(() => {
        return User.findById('686ad429005dc065e6f6cd94')
            .catch(error => { throw new Error(error.message) })
            .then(user => {
                user.role = 'administrator'

                return user.save()
                    .catch(error => { throw new Error(error.message) })
            })
            .then(() => console.log('roles set'))
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())