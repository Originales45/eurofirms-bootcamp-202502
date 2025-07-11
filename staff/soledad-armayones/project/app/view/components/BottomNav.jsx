import { AiOutlineUser, AiOutlineSearch, AiOutlineHome, AiOutlineShoppingCart, AiOutlineWechat } from 'react-icons/ai'
import { useNavigate } from 'react-router'



export function BottomNav() {
    const navigate = useNavigate()


    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center">
            <button onClick={() => navigate('/login')}>
                <AiOutlineUser size={25} />
            </button>

            <button onClick={() => navigate('/Search')}>
                <AiOutlineSearch size={25} />
            </button>

            <button onClick={() => navigate('/menu')}>
                <span className="text-xs font-semibold cursor-pointer ">MENU</span>
            </button>

            <button onClick={() => navigate('/Home')}>
                <AiOutlineHome size={25} />
            </button>

            <button onClick={() => navigate('/Carrito')}>
                <AiOutlineShoppingCart size={25} />
            </button>


        </nav>
    )
}