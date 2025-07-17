import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'


export const Menu = () => {
    const navigate = useNavigate()

    return <div className="p-15">
        <div className="w-full flex justify-center pt-3 ">
            <img src="/logo.jpg" className="w-[50vw]" />
        </div>

        <div className="mt-20 space-y-6 text-lg">
            <a
                onClick={() => navigate('/products/coffee-machine')}
                className="text-left cursor-pointer block mb-8"
            >

                Cofee-Machine
            </a>

            <a
                onClick={() => navigate('/products/refrigerator')}
                className="text-left cursor-pointer block mb-8"
            >

                Refrigerator
            </a>

            <a
                onClick={() => navigate('/products/food-exhibitor')}
                className="text-left cursor-pointer block mb-8"
            >

                Food-Exhibitors
            </a>

            <BottomNav />

        </div>

    </div>

}