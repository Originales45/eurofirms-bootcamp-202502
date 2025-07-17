import { BottomNav } from './components/BottomNav'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

export const Landing = () => {
    console.log('Landing -> render')


    return (
        <div className="p-15">
            <div className="w-full flex justify-center pt-3 ">
                <img src="/logo.jpg" className="w-[50vw]" />
            </div>

            <div className="flex flex-col items-center justify-center p-15 ">

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfkrwOuMZLKIqtWiTL02CwbWL6ldLRDL9dQ&s"
                    alt="Cofee machine"
                    className="w-[50vW] h-auto rounded shadow-md"

                />

                <div className="p-5 2xl">
                    
                    <p>"WhatsApp : +34 628 88 88 88" </p>

                    <p>"Email: j.l.g.cafeteras@gmail.com"</p>

                    <p>"Web : j.l.g.cafeteras.com"</p>
                   

                </div>

                
            </div>

            <BottomNav />
            
        </div>
            )
}
