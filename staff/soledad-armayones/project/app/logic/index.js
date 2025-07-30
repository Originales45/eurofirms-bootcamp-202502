import { registerUser } from './registerUser.js'
import { loginUser } from './loginUser.js'
import { getUserUsername } from './getUserUsername.js'
import { isUserLoggedIn } from './isUserLoggedIn.js'

import { createProduct } from './createProduct.js'
import { getProducts } from './getProducts.js'
import { removeProduct } from './removeProduct.js'


export const logic = {
    registerUser,
    loginUser,
    getUserUsername,
    isUserLoggedIn,

    createProduct,
    getProducts,
    removeProduct
}
