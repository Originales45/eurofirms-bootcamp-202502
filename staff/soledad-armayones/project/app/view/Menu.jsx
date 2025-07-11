import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'

export const Menu = () => {
    const navigate = useNavigate()

    return <div className="p-15">
        <div className="w-full flex justify-center pt-3 ">
            <img src="/logo.jpg" className="w-[50vw]" />
        </div>

        <div className="mt-20 space-y-6 text-lg">
            <button
                onClick={() => navigate('/product/coffee-machine')}
                className="text-left cursor-pointer block mb-8">Cofee-Machine
            </button>

            <button
                onClick={() => navigate('/product/refrigerator')}
                className="text-left cursor-pointer block mb-8">Refrigerator
            </button>

            <button
                onClick={() => navigate('/products/expositors')}
                className="text-left cursor-pointer block mb-8">Food-Expositors
            </button>

        </div>
        <BottomNav />
    </div>

}