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
        <h1 className="font-serif italic text-l underline font-bold ">{product.author.username}</h1>

        <img src={product.image} />

        <p>{product.name}</p>

        <p>{product.category}</p>

        <p>{product.description}</p>

        <p>{product.price}€"</p>


        <button className="bg-black px-2 p-1 cursor-pointer " onClick={handleDeleteClick}>🗑️</button>

    </article>
    

}