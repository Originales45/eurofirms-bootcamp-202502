import { logic } from '../logic'
import { useContext } from '../context'
import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()
    const navigate = useNavigate()

    const handleLoginClick = () => onLoginClicked()

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const address = form.address.value
        const phone = form.phone.value


        try {
            logic.registerUser(name, email, username, password, address, phone)
                .then(() => {
                    form.reset()
                    onUserRegistered()
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

    console.log('Register -> render')


    return <div className="p-25">
        <div className="w-full flex justify-center pt-3">
            <img src="/logo.jpg" className="w-[25vw]" />
        </div>

        <div className="mt-2">
            <h1 className="text-xl">Register</h1>

            <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="email">Email</label>
                    <input className="border-2 px-1" type="email" id="email" name="email" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="username">User Name</label>
                    <input className="border-2 px-1" type="text" id="username" name="username" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="address">Address</label>
                    <input className="border-2 px-1" type="text" id="address" name="address" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="phone">Phone</label>
                    <input className="border-2 px-1" type="text" id="phone" name="phone" />
                </div>

                <div className="flex justify-between">
                    <button type="button" onClick={handleLoginClick} className="underline">
                        Register

                    </button>
                    <button type="submit" className=" underline cursor-pointer text-yellow-500 ">
                        Login
                    </button>
                </div>

            </form>

            <BottomNav />

        </div>
    </div>


}