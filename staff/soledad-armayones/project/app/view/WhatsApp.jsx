import { BottomNav } from './components/BottomNav'
import { useNavigate } from 'react-router'

export const WhatsApp = () => {
    const navigate = useNavigate()

    const handleWhatsAppClicked = () => handleWhatsAppAcces
    
    return(
        <div className="p-15">
            <div className="w-full flex justify-center pt-3 ">
                 <img src="/logo.jpg" className="w-[50vw]"/>
            </div>

            <div className= "flex flex-row justify-center pt-20 sont font-semibold text-3xl" 
            >
                Link contacto Whats App
                    
            </div>


            <div className="flex justify-center">
            
                <img src="/wqr.jpg" className="w[25vw]"/>
                     
            

            </div>
            
            <BottomNav />

        </div>
            

            
            
        
    )
        
}
