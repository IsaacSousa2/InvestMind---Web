import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";
import DestaqueHero from "./DestaqueHero";
import { Sparkles, Bot, Brain } from "lucide-react";
import Image from "next/image";

export default function HeroSection(){
    return(
        <section className="relative py-10 px-16 overflow-hidden">
        <Image 
            src="/hero-background.svg"
            alt="Hero Background" 
            fill 
            className="object-cover -z-10" 
            priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
  
            <div className="relative flex gap-4 md:justify-between">
                <div className="flex gap-4 py-24 px-16">
                    <div className="flex flex-col gap-16 w-full text-center md:text-start items-center md:items-start justify-center md:justify-start">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl md:text-7xl max-w-xl font-bold">Invista com <span className="text-(--green-t)">clareza,</span><br/>e alcance seus <span className="text-(--green-t)">objetivos. </span></h1>
                            <h3 className="text-[1rem] md:text-2xl text(--link)">A IA da investMind transforma seus objetivos financeiros <br /> em estratégias claras e personalizadas.</h3>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <GreenButton text="Comece agora"/>
                                <BlackButton text="Saiba mais"/>
                            </div>
                        </div>
                        <div className="flex gap-4 w-full flex-col md:flex-row">
                            <DestaqueHero icon={Sparkles} tittleDestaque="Inteligência artificial" textDestaque="Uma IA avançada que analisa seus dados." />
                            <DestaqueHero icon={Bot} tittleDestaque="Investimento automatizado" textDestaque="Automatize suas decisões de investimento." />
                            <DestaqueHero icon={Brain} tittleDestaque="Análise de risco" textDestaque="Identifique e gerencie todos os seus riscos." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}