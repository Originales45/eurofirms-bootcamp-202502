import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { logic } from '../logic'
import { useContext } from '../context'
import { BottomNav } from './components/BottomNav'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const { alert } = useContext()
    const navigate = useNavigate()
        
    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target
        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()
                    onUserLoggedIn()
                })
                .catch(error => {
                    console.error(error)

                    if (error instanceof NotFoundError || error instanceof CredentialsError)
                        alert('WARN: ' + error.message)
                    else
                        alert('ERROR: ' + error.message)
                })
        } catch (error) {
            console.error(error)

            if (error instanceof ValidationError)
                alert('WARN: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('Login -> render')


    return (
        <div className="p-5">
            <div className="w-full flex justify-center pt-3 ">
                    <img src="/logo.jpg" className="w-[50vw]" />
                </div>
                

                <form className="flex flex-col gap-4 p-3" onSubmit={handleLoginSubmit}>
                        <div className="flex flex-col gap">
                            <label htmlFor="username">Username</label>
                            <input 
                                className="border-2 px-1" type="text" id="username" name="username"
                                placeholder="Username" 
                            />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="password">Password</label>
                            <input  
                                className="border-2 px-1" type="password" id="password" name="password" 
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex justify-between">
                            <button 
                                type="button" onClick={handleRegisterClick} className="underline text-yellow-300 font-semibold cursor-pointer"
                            >
                                Register
                            </button>
                            <button type="submit"
                            className=" p-1 bg-black cursor-pointer text-yellow-500 semibold ">                    
                            Login
                            </button>
                        </div>
                    </form>
                    <BottomNav />
                </div>
            
        
    )
}