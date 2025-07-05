import { useEffect, useState } from 'react'
import { logic } from '../logic'
import { CreateProduct } from './components/CreateProduct.jsx'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState(null)

    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(({ username, profileCompleted }) => {
                    setUsername(username)

                    if (!profileCompleted) setView('profile')
                    else setView('home')
                })
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
    npm i react react-dom