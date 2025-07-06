import { logic } from '../../logic'

import { useContext } from '../../context'

export const CreateProduct = ({ onCancelClicked, onProductCreated }) => {
    const { alert } = useContext()

    const handleCancelClick = () => onCancelClicked()

    const handleCreateProductSubmit = event => {
        event.preventDefault()

        const form = event.target
        
        const name = form.text
        const image = form.image.value
        const description = form.text.value
        const price = form.number
        const category = form.text
       

        try {
            logic.createProduct(name,image, description, price, category )
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
        <h1 className="text-xl">Create Product</h1>

        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreateProductSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="image">Image</label>
                <input className="border-2 px-1" type="text" id="image" image="image" placeholder="the post image" />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="text">Text</label>
                <input className="border-2 px-1" type="text" id="text" name="text" placeholder="the post text" />
            </div>

            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-white px-2" type="submit">Create</button>
            </div>
        </form>
    </div>
}