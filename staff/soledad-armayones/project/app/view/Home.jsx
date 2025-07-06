import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Product } from './components/Product'
import { CreateProduct } from './components/CreateProduct'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState('products')
    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(username => setUsername(username))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCreateProductClick = () => setView('create-product')

    const handleCreateProductCancelClicked = () => setView('product')

    const handleProductCreated = () => setView('product')

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Venta & Sat Cafeteras </i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}!</h1>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleCreateClotheClick}
            >+</button>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>

        {view === 'product' && <Product alert={alert} confirm={confirm} />}
        {view === 'create-product' && <CreateProduct
            onCancelClicked={handleCreateProductCancelClicked}
            onClotheCreated={handleProductCreated}
        />}
    </div>
}