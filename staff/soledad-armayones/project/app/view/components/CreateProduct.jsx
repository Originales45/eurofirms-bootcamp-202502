import { logic } from '../../logic'
import { validate, SystemError, errors } from 'com'

export const CreateProduct = ({ onProductCreated }) => {

    const navigate = useNavigate()

    const { alert } = useContext()

    const handleCancelClick = () => navigate('/menu')

    const handleCreateProductSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const image = form.image.value
        const category = form.category.value
        const description = form.description.value
        const price = Number(form.price.value)

        try {
            logic.createProduct(name, image, category, description, price)
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

    console.log('CreateProduct -> render')

    return <div className="mt-2">
        <h1 className="text-xl">Crear Producto</h1>

        <form className="font-serif text-xl mt-2 flex flex-col gap-4" onSubmit={handleCreateProductSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input className="border-2 px-1" type="text" id="name" name="name" placeholder="the product text" />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="image">Image</label>
                <input className="border border-black px-12 py-12 rounded" type="text" id="image" name="image" placeholder="URL de la imagen" />
            </div>


            <div className="font-serif text-xl mt-2 flex flex-col ">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="font-serif px-12 py-2">
                    <option value="coffee-machine">Coffee-Machine</option>
                    <option value="refrigerator">Refrigerator</option>
                    <option value="food-exhibitor">Food-exhibitor</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description">Descripción</label>
                <textarea className="border border-black px-12 py-2 rounded" id="description" name="description" placeholder="Descripción detallada"></textarea>
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="Price">Price</label>
                <input className="border border-black px-12 py-12 rounded" type="number" id="price" name="price" placeholder="Price of Product" />
            </div>



            <div className="flex justify-between">
                <a className="underline text-yellow-300" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-yellow-300 px-2" type="submit">Create</button>
            </div>
        </form>
        <BottomNav />
    </div>
}