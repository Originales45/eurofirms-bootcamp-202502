import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {

        return User.create({
            name: 'Mar Garcia',
            username: 'Mar30',
            password: '123123123',
            address: 'Colom 40',
            email: 'mar30@gmail.com',
            phone: '650505050'
        })

    })

    .catch(error => console.error(error))
    .finally(() => disconnect())