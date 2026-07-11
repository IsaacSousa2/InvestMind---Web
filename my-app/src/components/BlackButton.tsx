interface BlackButtonProps {
    text: string;
}

export default function BlackButton({text}: BlackButtonProps){
    return(
        <button className="flex gap-1 bg-(--back-button) px-7 py-3 rounded-2xl hover:bg-(--black-button-hover) transition duration-300 ease-in-out cursor-pointer">
            <div className="flex items-center text-white">
                <h3>{text}</h3>
            </div>
        </button>
    );  
}