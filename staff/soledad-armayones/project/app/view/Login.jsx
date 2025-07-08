import { CredentialsError, NotFoundError, SystemError, ValidationError } from 'com'
import { BottomNav } from './components/BottomNav'


import { logic } from '../logic'

import { useContext } from '../context'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const { alert } = useContext()

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

    return <div className="p-15">
        <div className="w-full flex justify-center pt-3 ">
            <img src="/logo.jpg" className="w-[50vw]" />
        </div>

        <div className="mt-2">
            <h1 className="gap-5 flex p-2 justify-center"> Usar tus datos de tu cuenta para entrar </h1>
        </div>

        {/* <div className="flex justify-center gap-[20vw]">
            <button className="gap-4 flex flex-nowrap bg-black text-[yellow] text-l p-3">
                Google
            </button>
            <button className="gap-4 flex flex-nowrap bg-black text-[yellow] text-l p-3">
                Apple
            </button>
        </div> */}

        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="username">Usuario</label>
                <input className="border-2 px-1" type="text" id="username" name="username" placeholder=" " />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="password">Contraseña</label>
                <input className="border-2 px-1" type="password" id="password" name="password" placeholder=" " />
            </div>

            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleRegisterClick}>Registro</a>

                <div className="flex justify-between">
                    <button className="underline" type="submit" >Acceso</button>
                </div>

                <BottomNav />
            </div>
        </form>

    </div>
}