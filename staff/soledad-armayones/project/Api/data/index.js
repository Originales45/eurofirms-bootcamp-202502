import mongoose from 'mongoose'
import { User } from './models.js'
import { Products } from './models.js'


const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Products
}