import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { logic } from '../../logic'
import { useContext } from '../../context'
import { BottomNav } from './BottomNav'
import { Product } from './Product'

export const Products = () => {
    const { category } = useParams()
    const { alert } = useContext()

    const [products, setProducts] = useState([])

    const loadProducts = () => {
        try {
            logic.getProducts(category)
                .then((products) => setProducts(products))
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

            <div className="grid grid-cols-3 p-4 justify-around 3 text-around text-red[price]">
                {products.map(product => ( 
                    <Product
                        key={product.id}
                        product={product}
                        onProductDeleted={loadProducts}

                    />
                ))}

                <BottomNav />
            </div>
        </div>

    )
}