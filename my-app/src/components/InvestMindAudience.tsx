import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface AudienceCard {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

const AUDIENCE_CARDS: AudienceCard[] = [
  {
    name: "Universitário",
    title: "Universitários",
    description:
      "Dê os primeiros passos no mundo dos investimentos de forma segura.",
    imageSrc: "/universitario.svg",
  },
  {
    name: "Jovem profissional",
    title: "Jovens profissionais",
    description:
      "Organize suas finanças e construa patrimônio para o futuro.",
    imageSrc: "/jovem-profissional.svg",
  },
  {
    name: "Empreendedor",
    title: "Empreendedores",
    description:
      "Tenha estratégias inteligentes para investir e fazer seu dinheiro trabalhar.",
    imageSrc: "/empreendedor.svg",
  },
];

export default function InvestMindAudience() {
  return (
    <section className="bg-[#0B0D0F] py-20 px-6">
      <h2 className="text-center text-white text-3xl sm:text-4xl font-semibold mb-12">
        Pra quem é a{" "}
        <span className="inline-flex items-center gap-2">
          <span className="text-emerald-400">InvestMind</span>
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        {AUDIENCE_CARDS.map((card) => (
          <article
            key={card.title}
            className="flex overflow-hidden rounded-2xl border border-white/10 bg-[#14171A] transition-colors hover:border-white/20"
          >
            <div className="relative w-2/5 min-w-[120px]">
              <Image
                src={card.imageSrc}
                alt={card.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, 160px"
              />
            </div>

            <div className="flex w-3/5 flex-col justify-center gap-3 p-5">
              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {card.description}
              </p>
              <button
                type="button"
                className="group mt-1 flex w-fit items-center gap-1.5 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              >
                Começar agora
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}