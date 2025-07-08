

import { BottomNav } from './components/BottomNav'
import { useNavigate } from 'react-router'

export const Menu = ({ onBack }) => {
    const navigate = useNavigate()

export className = "gap-4 flex-nowrap text-lg p-3"
    < button onclick = {() => navigate('/')} className = "justify-right" >
    
    </button >

    <div className="gap-[4vw] flex justify-evenly text-xl px-[1vw] >Category</div>

            <div> Coffe Markers</div>
            <div>Refigerators</div>
            <div>Food Exibitors</div>
            <div>Repairs & Assistence</div>
            </div>
        </div>

            <BottomNav />

    </div>
    
}