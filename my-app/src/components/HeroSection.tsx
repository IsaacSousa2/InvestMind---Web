import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";
import DestaqueHero from "./DestaqueHero";
import { Sparkles } from "lucide-react";

export default function HeroSection(){
    return(
        <div>
            <div>
                <div>
                    <h1>Invista com <span className="text-(--green-t)">clareza</span>, e alcance seus <span className="text-(--green-t)">objetivos</span></h1>
                    <h3>A IA da investMind transforma seus objetivos financeiro em estratégias claras e personalizadas.</h3>
                </div>
                <div>
                    <GreenButton text="Começar"/>
                    <BlackButton text="Saiba mais"/>
                </div>
                <div>
                    <DestaqueHero icon={Sparkles} tittleDestaque="Objetivo 1" textDestaque="Descrição do objetivo 1" />
                    <DestaqueHero icon={Sparkles} tittleDestaque="Objetivo 2" textDestaque="Descrição do objetivo 2" />
                    <DestaqueHero icon={Sparkles} tittleDestaque="Objetivo 3" textDestaque="Descrição do objetivo 3" />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}