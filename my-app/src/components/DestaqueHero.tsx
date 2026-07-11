import { LucideIcon } from "lucide-react";

interface DestaqueHeroProps {
    icon: LucideIcon;
    tittleDestaque: string;
    textDestaque: string;
}

export default function DestaqueHero({icon: Icon, tittleDestaque, textDestaque}: DestaqueHeroProps){
    return(
        <div className="flex justify-center items-center gap-1 py-3 rounded-2xl">
            <div className="flex items-center justify-center w-10 h-1 rounded-full">
                <Icon className="w-6 h-6 text-white"/>
            </div>
            <div className="flex flex-col ">
                <h2 className="text-[16px] font-bold">{tittleDestaque}</h2>
                <h3 className="text-[12px] font-medium text-(--link)">{textDestaque}</h3>
            </div>
        </div>
    );
}