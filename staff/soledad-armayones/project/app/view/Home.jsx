import { useEffect, useState } from 'react'
import { BottomNav } from './components/BottomNav'
import { logic } from '../logic'
import { CreateProduct } from './components/CreateProduct'
import { Product } from './components/Product'
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

    const handleCreateProductClick = () => setView('/create-product')

    const handleCreateProductCancelClicked = () => setView('/product')

    const handleProductsCreated = () => setView('/products')

    console.log('Home -> render')

    return <div className="p-5">
                <div className="w-full flex justify-center pt-3 ">
                    <img src="/logo.jpg" className="w-[50vw]" />
                </div>

                <div className="mt-2 ">
                    <h1 className="text-xl">Wellcome {username}</h1>

                        {view === 'home' && (
                            <>
                            data.getToken() && <button
                            className="bg-yellow-300 text-black px-2 mx-1"
                            type="button"
                            onClick={handleCreateProductClick}
                        >+</button>

                        <button className="bg-yellow-300 text-black px-2 mx-1"
                            type="button"
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </button>
                    </>
                )} 

              
  

                {view === 'product' && <Product alert={alert} confirm={confirm} />}
                {view === 'create-product' && <CreateProduct
                    onCancelClicked={handleCreateProductCancelClicked}
                    onProductCreated={handleProductsCreated}
                />}

            </div>

            <BottomNav />

        </div>
    

}