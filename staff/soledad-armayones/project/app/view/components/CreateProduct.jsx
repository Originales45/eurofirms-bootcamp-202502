import { logic } from '../../logic'
import { useNavigate } from 'react-router'
import { useContext } from '../../context'
import { BottomNav } from './BottomNav'

export const CreateProduct = ({ onProductCreated }) => {

    const navigate = useNavigate()

    const { alert } = useContext()

    const handleCancelClick = () => navigate('/menu')

    const handleCreateProductSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const image = form.image.value
        const description = form.description.value
        const price = form.price.value
        const category = form.category.value.toUpperCase()

        try {
            logic.createProduct(name, image, description, price, category)
                .then(() => {
                    form.reset()

                    onProductCreated()
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

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('CreateProduct -> render')

    return <div className="mt-2">
                <h1 className="text-xl">Crear Producto</h1>

                <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreateProductSubmit}>
                    <div className="flex flex-col gap">
                        <label htmlFor="category">Categoría</label>
                        <select name="category" id="category" className="text-arial-black px-11 py-11 rounded">
                            <option value="coffee-machine">Coffee-Machine</option>
                            <option value="refrigerator">Refrigerator</option>
                            <option value="food-exhibitor">Food-Exhibitor</option>
                        </select>

                        <div className="text-arial-black px-11 py-11 rounded">
                            <label htmlFor="name">Name</label> <imput className="text-arial-black px-11 py-11 rounded" type="texto detallado del producto" />
                        </div>


                        <div className="text-arial-black px-11 py-11 rounded">
                            <label htmlFor="image">Imagen</label> <imput className="text-arial-black px-11 py-11 rounded" type="text" id="image" name="image" placeholder="URL de la imagen" />
                        </div>


                        <div className="text-arial-black px-11 py-11 rounded">
                            <label htmlFor="description">Descripción</label>
                            <imput className="text-arial-black px-11 py-11 rounded" id="description" name="description" placeholder="Descripción detallada" /
                            >

                        </div>

                        <div className="text-arial-black px-11 py-11 rounded">
                            <label htmlFor="price">Precio</label>
                            <imput className="text-arial-black px-11 py-11 rounded" id="precio" name="precio" placeholder="Descripción detallada" />

                            <div className="flex justify-between">

                                <div className="flex justify-between">
                                    <a className="underline" href='#' onClick={handleCancelClick}>Cancelar</a>
                                    <button className="bg-yellow-300 text-black px-2" type="submit">Create</button>
                                </div>

                                

                            </div>
                        </div>

                    <BottomNav />  

                    </div>
                
                </form>
            </div>    
            
}