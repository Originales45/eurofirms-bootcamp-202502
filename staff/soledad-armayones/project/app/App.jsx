import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { BottomNav } from './view/components/BottomNav'

import { Home } from './view/Home'
import { Landing } from './view/Landing'
import { Login } from './view/Login'
import { Register } from './view/Register'
import { Menu } from './view/Menu'
import { WhatsApp } from './view/WhatsApp'

import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Products } from './view/components/Products'
import { CreateProduct} from './view/components/CreateProduct'

import { Context } from './context'
import { logic } from './logic'


export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')
    const handleLoginClicked = () => navigate('/login')
    const handleUserRegistered = () => navigate('/login')
    const handleUserLoggedIn = () => navigate('/menu')
    const handleWhatsAppClicked = () => navigate('/WhatsApp')
    const handleMenuClicked = () => navigate('/menu')
    const handleWhatsAppAcces = () => navigate('/WhatsApp')
    const handleMenuLoggedIn = () => navigate('/menu')

    const handleAlertAccepted = () => setAlertMessage('')

    const handleAcceptConfirm = () => {
        setConfirmMessage('')
        confirmAction?.resolve(true)
    }

    const handleCancelConfirm = () => {
        setConfirmMessage('')
        confirmAction?.resolve(false)
    }

    const handleShowConfirm = message => {
        setConfirmMessage(message)
        return new Promise(resolve => setConfirmAction({ resolve }))
    }

    let loggedIn
    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)
        alert(error.message)
    }

    return (
        <Context.Provider value={{
            alert: setAlertMessage,
            confirm: handleShowConfirm
        }}>
            {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}
            {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

            <div className="pb-16">

                <Routes>
                    <Route path="/" element={<Navigate to="/landing" replace />} />

                    <Route path="/landing" element={
                        <Landing
                            onRegisterClicked={handleRegisterClicked}
                            onLoginClicked={handleLoginClicked}
                        />
                    } />

                    <Route path="/register" element={
                        <Register
                            onLoginClicked={handleLoginClicked}
                            onUserRegistered={handleUserRegistered}
                        />
                    } />

                    <Route path="/login" element={
                        <Login
                            onRegisterClicked={handleRegisterClicked}
                            onUserLoggedIn={handleUserLoggedIn}
                        />
                    } />

                    <Route path="/menu" element={
                        <Menu
                            onMenuClicked={handleMenuClicked}
                            onMenuLoggedIn={handleMenuLoggedIn}
                        />
                    } />

                    
                    <Route path="/WhatsApp" element={                        
                        <WhatsApp
                            onWhatsAppClicked={handleWhatsAppClicked}
                            handleWhatsAppAcces={handleWhatsAppAcces}
                        />
                    } />

                    <Route path="/products/:category" element={<Products />} />

                    <Route path="/create-product" element={
                        <CreateProduct
                            onProductCreated={() => navigate('/menu')}
                        />
                    } />


                </Routes>
            </div>
        </Context.Provider>
    )
}