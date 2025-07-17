import { BottomNav } from './components/BottomNav'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

export const WhatsApp = () => {
    console.log('Whatapp -> render')

return(
    <div className="p-15">
        <div className="w-full flex justify-center pt-3 ">
            <img src="/logo.jpg" className="w-[50vw]" />
        </div>

    <div className="flex flex-col items-center justify-center p-15 ">

        <img
            src="/qpwhat.png" className="w-[30vw]"/>
        </div>        
            
    </div>
)
        
}
