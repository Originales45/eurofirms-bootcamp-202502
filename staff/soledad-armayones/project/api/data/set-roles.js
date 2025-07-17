import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose


connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {
        return User.fineById('6877b815894d57beadd14838')
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