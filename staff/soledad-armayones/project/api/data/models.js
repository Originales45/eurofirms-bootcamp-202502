import mongoose, { trusted } from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true

    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    }

})

const product = new Schema({

    image: {
        type: String,
        required: true,
        unique: false
    },


    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: ['coffee-machine, refigetator, food-exhibitors']
    },

    price: {
        type: String,
        required: true,
        enum: ['text, number, €'],
    },

    name: {
        type: String,
        required: true
    }

})

const User = model('User', user)
const Product = model('Product', product)

export {
    User,
    Product
}
