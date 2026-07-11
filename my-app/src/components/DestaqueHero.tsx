import { LucideIcon } from "lucide-react";

interface DestaqueHeroProps {
    icon: LucideIcon;
    tittleDestaque: string;
    textDestaque: string;
}

export default function DestaqueHero({icon: Icon, tittleDestaque, textDestaque}: DestaqueHeroProps){
    return(
        <div>
            <div>
                <Icon className="w-6 h-6 text-white"/>
            </div>
            <div>
                <h2 className="text-xl font-bold">{tittleDestaque}</h2>
                <h3 className="text-lg">{textDestaque}</h3>
            </div>
        </div>
    );
}