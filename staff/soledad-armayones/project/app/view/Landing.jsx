import { BottomNav } from './components/BottomNav'

export const Landing = () => {
    console.log('Landing -> render')


    return (
            <div className="p-15">
                <div className="w-full flex justify-center pt-3 ">
                    <img src="/logo.jpg" className="w-[50vw]" />
                </div>

                <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">"

                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQfkrwOuMZLKIqtWiTL02CwbWL6ldLRDL9dQ&s"
                        alt="Cofee machine"
                        className="w-[25vW] h-auto rounded shadow-md"

                    />

                    <img
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT01fyOJDa6tf7PSz6inG9UsIEBNfTbxHUfLVtTVy1KbkAvO-HIhhTz5o-4XhJ8vCiEmxVsgE_aKaBjKlH9fjKZIrSBknPUYsFrLZTiq15hpV1DIVHhYdpm "
                    alt="Image1"
                    className="w-[25vW] h-auto rounded shadow-md"
                    />

                </div>

                <BottomNav />

            </div>
    )
}
