export const Confirm = ({ message, onCancelled, onAccepted }) => {
    const handleCancelConfirm = () => onCancelled()

    const handleAcceptConfirm = () => onAccepted()

    return <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
        <div className="bg-yellow text-black p-2 flex flex-col gap-2">
            <p>{message}</p>

            <div className="self-end flex gap-2">
                <button className="text-yellow-300 border-black px-2" type="button" onClick={handleCancelConfirm}>Cancel</button>

                <button className="bg-black text-yellow-300 px-2" type="button" onClick={handleAcceptConfirm}>Accept</button>
            </div>
        </div>
    </div>
}