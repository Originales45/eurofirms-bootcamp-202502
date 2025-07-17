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
        <h1 className="font-arial text-xl w[20]">{product.author.username}</h1>

        <img src={product.image}  />

        <p>{product.name}</p>

        <p>{product.category}</p>
        
        <p>{product.description}</p>

        <p>{product.price}€</p>

        <button className="bg-black text-yellow-300 px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>Borrar</button>

    </article>
}