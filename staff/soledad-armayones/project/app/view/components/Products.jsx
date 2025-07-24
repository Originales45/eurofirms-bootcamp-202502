import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { logic } from '../../logic'
import { Context } from '../../context'
import { Product } from './Product'
import { BottomNav } from './BottomNav'

export const Products = () => {
    const { category } = useParams()
    const { alert } = useContext(Context)

    const [products, setProducts] = useState([])

    const loadProducts = () => {
        try {
            logic.getProducts(category)
                .then(setProducts)
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

            useEffect(() => {
                loadProducts()
            }, [category])

            return (
                <div className="p-2 pb-2 font-serif ">
                    <h1 className="p-10 pb-0.5 text-3xl font-semibold mb-4  text-yellow-300 uppercase justify-self-center">{category}</h1>

                    <div className="grid grid-cols-3 p-4 justify-around">
                        {products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                onProductDeleted={loadProducts}

                            />
                        ))}


                    </div>
                    <BottomNav />
                </div>

            )
        }