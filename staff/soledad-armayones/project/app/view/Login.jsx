import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { logic } from '../logic'
import { useContext } from '../context'
import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'

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
        <div className=" flex flex-col px-6 py-6 font-arial ">

            <div className="p-5">
                <i className="text-2xl font-arial text-yellow-400">Cofee Shop</i>

                <div className="w-full flex justify-center pt-3 ">
                    <img src="/logo.jpg" className="w-[50vw]" />
                </div>

                <div className="mt-2 p-2">
                    <h1 className="text-xl text-yellow-400 ">Wellcom to Cofee Shop</h1>

                    <form className="flex flex-col gap-4 p-3" onSubmit={handleLoginSubmit}>
                        <div className="flex flex-col gap">
                            <label htmlFor="username">Username</label>
                            <input className="border-2 px-1" type="text" id="username" name="username" />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="password">Password</label>
                            <input className="border-2 px-1" type="password" id="password" name="password" />
                        </div>

                        <div className="flex justify-between">
                            <button type="button" onClick={handleRegisterClick} className="underline cursor-pointer">
                                Registro
                            </button>
                            <button type="submit" className=" underline cursor-pointer  ">
                                Entrar
                            </button>

                        </div>
                    </form>
                    <BottomNav />
                </div>
            </div>
        </div>
    )
}