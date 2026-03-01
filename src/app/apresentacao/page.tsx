export const metadata = {
    title: "Apresentação Comercial | DKS Marketing",
    description: "Apresentação comercial estratégica da DKS Marketing — Método ROMA para restaurantes.",
};

export default function ApresentacaoPage() {
    return (
        <iframe
            src="/apresentacao.html"
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
            title="Apresentação Comercial DKS Marketing"
        />
    );
}
