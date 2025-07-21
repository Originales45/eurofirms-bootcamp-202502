import { logic } from '../../logic'

import { Context, useContext } from '../../context'
import { BottomNav } from './BottomNav'


export const CreateProduct = ({ onCancelClicked, onProductcreated }) => {

    const {alert} = useContext

    const handleCancelClick = () => onCancelClicked()

    const handleCreateProductSubmit = event => {
        event.preventDefault()
        
        const form = event.target

        const category = form.category.value
        const description = form.description.value
        const price = form.price.value
        
        try {
            logic.createProduct(name, image, category, description, price )
                .then(() => {
                    form.reset()


                    onProductcreated()
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
            <div className="flex flex-col gap-1 font-serif text-yellow-300">
                <label htmlFor="category">Categoría</label>
                <select name="category" id="category"  className="font-serif px-12 py-2">
                    <option value="coffee-macine">Coffee-Machine</option>
                    <option calue="refrigerator">Refrigerator</option>
                    <option value="food-exhibitor">Food-exhibitor</option>
                </select>
            </div>
            
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Nombre Producto</label>
                <input className="border-2 px-1" type="text" id="text" name="text" placeholder="the product text" />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="description">Descripción</label>
                <textarea className="border border-black px-12 py-2 rounded" id="description" name="description" placeholder="Descripción detallada"></textarea>
            </div>


            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-yellow-300 px-2" type="submit">Create</button>
            </div>
        </form>
        <BottomNav />
    </div>
}