import Highlights from "./HighlightsBox"
import { BrainCircuit, TrendingUp, ShieldCheck, Wallet, BellRing, ChartCandlestick } from "lucide-react";

export default function HighlightComponent(){
    return(
        <div className="flex flex-col md:flex-row px-8 md:justify-between">
            <Highlights 
                tittle="IA Financeira"
                text="Receba recomendações inteligentes e personalizadas para investir com mais confiança."
                icon={BrainCircuit}
            />
            <Highlights 
                tittle="Análises de Mercado"
                text="Acompanhe tendências e oportunidades em tempo real para tomar decisões melhores."
                icon={TrendingUp}
            />
            <Highlights 
                tittle="Segurança Garantida"
                text="Seus dados são protegidos com criptografia e as melhores práticas de segurança."
                icon={ShieldCheck}
            />
            <Highlights 
                tittle="Gestão de Patrimônio"
                text="Organize seus investimentos e acompanhe sua evolução financeira em um só lugar."
                icon={Wallet}
            />
            <Highlights 
                tittle="Alertas Inteligentes"
                text="Seja notificado sobre mudanças importantes no mercado e oportunidades relevantes."
                icon={BellRing}
            />
            <Highlights 
                tittle="Estratégias de Investimento"
                text="Visualize indicadores e estratégias para investir de forma mais consistente."
                icon={ChartCandlestick}
            />
        </div>
    )
}