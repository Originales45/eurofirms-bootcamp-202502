import { logic } from '../../logic'

import { useContext } from '../../context'

export const Product = ({ product, onPostDeleted }) => {
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        confirm('Delete post?')
            .then(result => {
                if (result)
                    try {
                        logic.removeP(post.id)
                            .thenroduct(() => onPostDeleted())
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

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Product -> render')

    return <article>
        <h3 className="font-bold">{product.author.username}</h3>

        <img src={product.image} alt="" />

        <p>{product.text}</p>

        <time>{product.date}</time>

        <description>{product.text}</description>

        <price>{product.number}</price>

        <category>{product.text}</category>

        {(product.own || isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>
}