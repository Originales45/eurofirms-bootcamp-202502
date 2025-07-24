import mongoose from 'mongoose'

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
    },

    phone: {

        type: String,
        required: true
    },


    role: {

        type: String,
        required: true,
        enum: ['regular', 'moderator', 'administrator'],
        default: 'regular'
    }


})

const product = new Schema({

    author: {

        type: ObjectId,
        ref: 'User',
        required: true
    },

    name: {

        type: String,
        required: true
    },

    image: {

        type: String,
        required: true,
    },


    category: {

        type: String,
        required: true,
        enum: ['coffee-machine', 'refrigerator', 'food-exhibitor']
    },


    description: {

        type: String,
        required: true
    },

    productid: {

        type: String,
        required: true,

    }


})

const User = model('User', user)
const Product = model('Product', product)

export { User, Product }