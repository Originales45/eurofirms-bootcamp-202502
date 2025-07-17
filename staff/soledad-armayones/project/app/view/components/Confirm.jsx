export const Confirm = ({ message, onCancelled, onAccepted }) => {

    return <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
        <div className="bg-yellow text-black p-2 flex flex-col gap-2">
            <div className="flex justify-center gap-4">

                <button
                    className="text-yellow-300 bg-black px-2 transition"
                    onClick={onCancelled}
                >
                    Cancel

                </button>

                <button
                    className="bg-black text-yellow-300 px-2 transition"
                    onClick={onAccepted}
                >
                    Accept
                </button>

            </div>
        </div>
    </div>
}