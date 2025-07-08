import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Product } from 'Product'
import { useContext } from '../../context'


export const Products = () => {
    const { alert } = useContext()

    const [Poducts, setProducts] = useState([])

    useEffect(() => {
        try {
            logic.getProducts()
                .then(products => {
                    setproducts(products)
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

    const handleproductDeleted = () => {
        try {
            logic.getproducts()
                .then(products => {
                    setproducts(prooducts)
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

    console.log('products -> render')

    return <>
        {products.map(product => <product key={product.id} product={product} onproductDeleted={handleclotheDeleted} />)}
    </>
}