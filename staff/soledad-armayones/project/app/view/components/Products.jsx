import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Product } from './Product'
import { useContext } from '../../context'


export const Products = () => {
    const { alert } = useContext()

    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            logic.getProducts()
                .then(posts => {
                    setProducts(products)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleProductDeleted = () => {
        try {
            logic.getProducts()
                .then(products => {
                    setProducts(products)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.log('Products -> render')

    return <>
        {productss.map(product => <Product key={product.id} product={product} onProductDeleted={handleProductDeleted} />)}
    </>
}