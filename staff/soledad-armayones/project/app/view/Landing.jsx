import { Link } from 'react-router'
import { AiOutlineHome, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'


export const Landing = () => {
    console.log('Landing -> render')

    return (
        <div className="p-5">
            <i className="text-2xl flex flex-col justify-center mb-6 ">Venta & Sat Cafetera</i>

            <div className="img">


                <div className="w-full flex justify-center pt-4 ">
                    <img src="https://futurbar.com/wp-content/uploads/2014/12/6726-Cafetera-Automatica-de-3-Grupos-F3-Futurmat.jpg" />
                </div>

                
            </div>
        </div>
    )
}