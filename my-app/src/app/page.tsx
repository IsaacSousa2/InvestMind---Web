import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import Problem from "@/components/ComumComponent";
import AiTalk from "@/components/ReversedComponent";
import HowItWorks from "@/components/ComumComponent";
import Dashboard from "@/components/ReversedComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Problem 
        comment="O problema"
        tittle="Porque investir parece tão difícil?"
        subtittle="Muita informação? Escolhas dificeis?"
        text="No fim, muitas pessoas deixam de investir não por falta de interesse, mas porque a quantidade de informações, opiniões e gráficos complexos torna a tomada de decisão confusa e cansativa."
        image={{
          src: "/box-differentials.svg",
          alt: "Diferenciais fluxo"
        }}
      />
      <AiTalk 
        image={{
          src: "/ia-talk-box.svg",
          alt: "Bate papo humano-ia"
        }}
        comment="Ia InvestMind"
        tittle="Converse com a sua consultoria de investimentos"
        subtittle=""
        text="Tire dúvidas, entenda estratégias e receba recomendações personalizadas para as suas necessidades sempre que precisar."
      />
      <HowItWorks 
        comment="Como funciona"
        tittle="Diga nos o que você quer, e nós mostramos o caminho."
        subtittle=""
        text=""
        image={{
          src: "/graphs-objectives.svg",
          alt: "Diferenciais fluxo"
        }}
      />
      <Dashboard 
        image={{
          src: "/dashboard-graphs.svg",
          alt: "Bate papo humano-ia"
        }}
        comment="Dashboard"
        tittle="Seu dashboard completo"
        subtittle="Acompanhe tudo em um só lugar de forma simples e intuitiva."
        text=""
      />
    </div>

  );
}
