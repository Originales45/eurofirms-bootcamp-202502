import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const productsRouter = Router()

productsRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { name, image, category, description, price } = request.body

        logic.createProduct(userId, name, image, category, description, price)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

productsRouter.get('/:category', (request, response, next) => {
    try {


        const { category } = request.params

        logic.getProducts(category)
            .then(products => response.status(200).json(products))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

productsRouter.delete('/:products', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: username } = jwt.verify(token, JWT_SECRET)

        const { productId } = request.params

        logic.removeProduct(username, productId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})