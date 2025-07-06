import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'

import { createProduct } from './createProduct.js'
import { getProducts } from './getProducts.js'
import { removeProduct } from './removeProduct.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUserUsername,

    createProduct,
    getProducts,
    removeProduct
}