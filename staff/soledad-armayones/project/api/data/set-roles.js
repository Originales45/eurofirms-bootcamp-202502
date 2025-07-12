import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test')
    .then(() => {
        return User.id('6870ee42dc0b360bbfa81fc2')
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