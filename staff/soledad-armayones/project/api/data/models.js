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
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },


})

const product = new Schema({

    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,

    },
    category: {
        type: String,
        required: true,
        enum: ['coffee-machine', 'refrigerator', 'food-exhibitor']
    },




})

const User = model('User', user)
const Product = model('Product', product)

export {
    User,
    Product
}