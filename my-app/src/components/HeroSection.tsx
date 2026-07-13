import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";
import DestaqueHero from "./DestaqueHero";
import { Sparkles, Bot, Brain } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <Image
        src="/hero-background.svg"
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="relative flex flex-col items-center md:items-start text-center md:text-left gap-10">
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
            Invista com <span className="text-(--green-text)">clareza,</span>
            <br className="hidden md:block" /> e alcance seus{" "}
            <span className="text-(--green-text)">objetivos.</span>
          </h1>
          <h3 className="text-base md:text-2xl text-(--texts)">
            A IA da investMind transforma seus objetivos financeiros em
            estratégias claras e personalizadas.
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <GreenButton text="Comece agora" />
          <BlackButton text="Saiba mais" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-3xl">
          <DestaqueHero icon={Sparkles} tittleDestaque="Inteligência artificial" textDestaque="Uma IA avançada que analisa seus dados." />
          <DestaqueHero icon={Bot} tittleDestaque="Investimento automatizado" textDestaque="Automatize suas decisões de investimento." />
          <DestaqueHero icon={Brain} tittleDestaque="Análise de risco" textDestaque="Identifique e gerencie todos os seus riscos." />
        </div>
      </div>
    </section>
  );
}