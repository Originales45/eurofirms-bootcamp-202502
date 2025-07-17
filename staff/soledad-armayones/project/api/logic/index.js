import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'
import { createProduct } from './createProduct.js'
import { removeProduct } from './removeProduct.js'
import { getProducts } from './getProducts.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUserUsername,

    createProduct,
    getProducts,
    removeProduct
}