import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { getProducts } from './getProducts'
import { createProduct } from './createProduct'
import { removeProduct } from './removeProduct'

export const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserUsername,
    logoutUser,
    getProducts,
    createProduct,
    removeProduct
}