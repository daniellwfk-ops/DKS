import ProposalSlideDeck from "@/components/ProposalSlideDeck";

export const metadata = {
    title: "Apresentação Estratégica | DKS Marketing",
    description: "Conheça o Método ROMA e como a DKS acelera vendas de restaurantes e deliveries de forma previsível.",
};

export default function ApresentacaoCorporativaPage() {
    return (
        <main className="min-h-screen bg-black w-full text-white">
            <ProposalSlideDeck />
        </main>
    );
}
