import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { logic } from '../../logic'
import { Product } from './Product'
import { useContext } from '../../context'
import { BottomNav } from './BottomNav'

export const Products = () => {
    const { alert } = useContext()
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            logic.getProducts(category.toUpperCase())
                .then(products => {
                    setProducts(Products)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [category])

    return <>
        <div className="p-4" >
            <h1 className="text-2xl  mb-4">
                {category}
            </h1>

            <div className="justify-centerid grid-cols-1 md:grid-cols-2 gap-4 m-10">
                {products.map(product => (
                    <Product key={product.id} product={product} onProductDeleted={() => { }} />
                ))}
            </div>
        </div >


        <BottomNav />


    </>
}