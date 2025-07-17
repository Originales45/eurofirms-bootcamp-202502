import { logic } from '../logic'
import { useContext } from '../context'
import { BottomNav } from './components/BottomNav'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()
    
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
            <img src="/logo.jpg" className="w-[50vw]" />
        </div>

        <div className="mt-2">
            <h1 className="text-xl">Register</h1>

            <form className="mt-2 flex flex-col gap-4 p-3" onSubmit={handleRegisterSubmit}>
                <div className="flex flex-col gap">
                    <label htmlFor="name">Name</label>
                    <input className="border-2 px-1" type="text" id="name" name="name"
                    placeholder="Name" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="email">E-mail</label>
                    <input className="border-2 px-1" type="email" id="email" name="email"
                    placeholder="Email" />
                </div>

                
                <div className="flex flex-col gap">
                    <label htmlFor="username">Username</label>
                    <input className="border-2 px-1" type="text" id="username" name="username"
                    placeholder="Username min 8 caracters"/>
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="password">Password</label>
                    <input className="border-2 px-1" type="password" id="password" name="password"
                    placeholder="Password min 8 caracters" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="address">Address</label>
                    <input className="border-2 px-1" type="text" id="address" name="address"
                    placeholder="Address" />
                </div>

                <div className="flex flex-col gap">
                    <label htmlFor="phone">Phone</label>
                    <input className="border-2 px-1" type="text" id="phone" name="phone"
                    placeholder="Telephone number"/>
                </div>

                <div className="flex justify-between">
                    <button type="button" onClick={handleLoginClick} className="underline">
                        Login

                    </button>
                    <button type="submit" className=" p-1 bg-black cursor-pointer text-yellow-500 ">
                        Register
                    </button>
                </div>

            </form>

            <BottomNav />

        </div>
    </div>


}