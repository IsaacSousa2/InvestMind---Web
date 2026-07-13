import Image from "next/image";
import Icon from "@/../public/rigth-arrow-vector.svg";

interface GreenButtonProps {
    text: string;
}

export default function GreenButton({text}: GreenButtonProps){

    return(
        <button className="flex gap-1 items-center justify-center text-center bg-(--green-t) px-5 py-3 rounded-2xl hover:bg-(--green-d) transition duration-300 ease-in-out cursor-pointer">
            <div className="font-medium text-white flex items-center justify-center">
                <h3>{text}</h3>
            </div>
            <div className="flex items-center justify-center">
                <Image src={Icon} alt="Right Arrow" className="h-3 w-3"/>
            </div>
        </button>
    );

}