import { LucideIcon } from "lucide-react";

interface HighlightsProps {
  tittle: string;
  text: string;
  icon: LucideIcon;
  className?: string;
}

export default function Highlights({ tittle, text, icon: Icon, className }: HighlightsProps){
    return(
        <div className={`flex items-center gap-8 md:gap-3 ${className ?? ""}`}>
            <div>
                <Icon className="w-12 h-12 text-(--green-t)"/>
            </div>
            <div>
                <h1 className="text-xl text-white font-bold">{tittle}</h1>
                <h3 className="text-xs font-medium text-(--texts)">{text}</h3>
            </div>
        </div>
    )
}