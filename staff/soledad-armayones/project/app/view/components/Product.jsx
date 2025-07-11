import { logic } from '../../logic'

import { useContext } from '../../context'

export const Product = ({ Product, onProductDeleted }) => {
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
        <h3 className="font-arial">{product.title}</h3>

        <img src={product.image} alt="" />

        <p>{product.description}</p>

    </article>
}