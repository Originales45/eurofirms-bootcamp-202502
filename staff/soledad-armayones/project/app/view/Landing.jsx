import { BottomNav } from './components/BottomNav'

export const Landing = ({ }) => {

    console.log('Landing -> render')

    return (
        <div className="p-15">
            <div className="w-full flex justify-center pt-3 ">
                <img src="/logo.jpg" className="w-[50vw]" />
            </div>

            <div className="w-full flex justify-center pt-3 ">
                <img src="/coffee.webp" className="w-[50vw]" />
            </div>

            <BottomNav />

        </div>

    )
}