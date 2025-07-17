import mongoose from 'mongoose'
import { User, Product } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-shopapp')
    .then(() => {

        // return User.create({
        //     name: 'Mar Garcia',
        //     email: 'Mar20@gmail.com',
        //     username: 'mar20',
        //     password: '123123123',
        //     address: 'calle Aragón 32',
        //     phone: '678545454'
        // })

        const products = [
            { 
                name: "Frigorifico GN2/ 1, 200 x 134 x 81.5 cm, con cerradura, 1200L",
                image : 'https://prod-metro-markets.imgix.net/item_image/2e08d0c4-d56c-4002-b353-79f350b6cdce?auto=format,compress&w=393&q=50&dpr=2&ar=1:1&fill-color=00FFFFFF',
                category : "refrigerator",
                description : "Frigorífico profesional acero inoxidable, refrigeración por aire 1200L",
                price : 1571.79
            },
        ]

        return Products.insertMany(products)

    })

    .catch(error => console.error(error))
    .finally(() => disconnect())