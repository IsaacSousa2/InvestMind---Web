import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface HighlightsProps {
    tittle: string;
    text: string;
    icon: LucideIcon;
}

export default function Highlights({ tittle, text, icon: Icon }: HighlightsProps){
    return(
        <div className="flex flex-col md:flex-row">
            <div>
                <Icon className="w-8 h-8 text-white"/>
            </div>
            <div>
                <h1>{tittle}</h1>
                <h3>{text}</h3>
            </div>
        </div>
    )
}