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
        <div className="p-4 pb-32">
            <h1 className="text-xl font-semibold mb-4 text-center capitalize">{category}</h1>

            <div className="grid grid-cols-3 gap-6">
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