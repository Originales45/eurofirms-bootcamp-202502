import { logic } from '../../logic'

import { useContext } from '../../context'

export const Product = ({ product, onProductDeleted }) => {
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        confirm('Delete product?')
            .then(result => {
                if (result)
                    try {
                        logic.removeProduct(product.id)
                            .then(() => onProductDeleted())
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })
    }

    console.log('Product -> render')

    return <article>
        <h3 className="font-bold">{products.author.username}</h3>

        <img src={product.image} alt="" />

        <p>{product.text}</p>

        <time>{product.date}</time>

        {prouct.own && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}