import { BottomNav } from './components/BottomNav'

export const Landing = ({ }) => {

    console.log('Landing -> render')

    return (
        <div className="p-15">
            <i className=" flex justify-center
            font-bold text-[yellow] text-3xl bg-black p-3 " >J.L.G Venta & SAT Cafeteras </i>

            <div className="img">

                <div className="w-full flex justify-center pt-3 ">
                    <img src="C:\Users\armay\Downloads\logo jordi.jpg" />
                </div>
            </div>
              
            
            <div className="img">

                <div className="w-full flex justify-center pt-3 ">
                    <img src="https://futurbar.com/wp-content/uploads/2014/12/6726-Cafetera-Automatica-de-3-Grupos-F3-Futurmat.jpg" />
                </div>

                <BottomNav />
                
            </div> 
        </div>   
    )
}