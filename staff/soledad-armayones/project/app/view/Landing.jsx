import { BottomNav } from './components/BottomNav'
import { AiOutlineWhatsApp, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { IconContext } from "react-icons";

export const Landing = () => {
    console.log('Landing -> render')


    return (
        <div className="p-15">
            <div className="w-full flex justify-center pt-3 ">
                <img src="/logo.jpg" className="w-[50vw]" />
            </div>

            <div className="w-full flex justify-center pt-1">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPcto99u4VVGZ-ylrlgPU2w_FdAAHnaEz5g&s" className="w-[50vw]" />

            </div>

            <div className="flex flex-col justify items-center ">

                <div className="flex flex-col-revera text-center " />


                <AiOutlineWhatsApp size={26} /><>+34 658 88 88 88/</>
                <AiOutlineMail size={26} /><> j.l.g.cafeteras@gmail.com</>
                <AiOutlineHome size={26} /><> www.j.l.g.cafeteras.com</>
            </div>

            <BottomNav />

        </div>





    )
}