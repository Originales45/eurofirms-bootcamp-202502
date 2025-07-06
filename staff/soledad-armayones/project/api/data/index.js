import mongoose from 'mongoose'
import { User, Product } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Product
}