export const Alert = ({ message, onAccepted }) => {
    const handleAcceptAlert = () => onAccepted()

    return <div className="p-10 bg-gray-500/70  absolute w-full h-full flex flex-col justify-center">
        <div className="bg-white text-black border-black p-2 flex flex-col gap-2">
            <p>{message}</p>

            <button className="bg-grew text-white-200 px-2 self-end" type="button" onClick={handleAcceptAlert}>Accept</button>
        </div>
    </div>
}