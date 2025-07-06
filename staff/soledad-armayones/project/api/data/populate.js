import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {

        return User.create({
            name: 'Mar Garcia',
            email: 'Mar20@gmail.com',
            username: 'mar20',
            password: '123123123'
        })
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())