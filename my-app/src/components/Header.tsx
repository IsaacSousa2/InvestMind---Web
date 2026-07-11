import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";

import Logo from "@/../public/white-logo.svg";

export default function Header(){

    return(
        <div className="flex items-center text-center justify-between px-10 py-10 bg-(--background) h-16 w-full">
            <div>
                <Image src={Logo} alt="Logo" className="h-50 w-50"/>
            </div>
            <div>
                <HeaderLinks />
            </div>
            <div className="flex gap-4 ">
                <BlackButton text="Entrar"/>
                <GreenButton text="Crie sua conta"/>
            </div>
        </div>
    );

}