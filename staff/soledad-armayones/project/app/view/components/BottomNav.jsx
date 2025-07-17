import { AiOutlineUser, AiOutlineSearch, AiOutlineHome, AiOutlineWhatsApp } from 'react-icons/ai'
import { useNavigate } from 'react-router'
import { logic } from '../../logic'



export function BottomNav() {
    const navigate = useNavigate()

    const handleCreateProductClick = () => navigate('/create-product')

    const handleLogin = () => {
        navigate('/login')
    }



    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md py-2 flex justify-around items-center">
            <button onClick={() => navigate('/login')}>
                <AiOutlineUser size={24} />
            </button>

            
            <button onClick={() => navigate('/')}>
                <AiOutlineHome size={24} />
            </button>

            <button onClick={() => navigate('/menu')}>
                <span className="text-xs font-semibold">MENU</span>
            </button>

            <button onClick={() => navigate('/buscar')}>
                <AiOutlineSearch size={24} />
            </button>

            <button onClick={() => navigate('/WhatsApp')}>
                <AiOutlineWhatsApp size={24} />
            </button>        

        </nav>
    )
}