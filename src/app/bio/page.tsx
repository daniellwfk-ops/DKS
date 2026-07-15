export const metadata = {
    title: "Links | DKS Marketing",
    description: "Conecte-se com a DKS Marketing. Nossos links oficiais, redes sociais e canais de contato em um só lugar.",
};

export default function BioPage() {
    return (
        <iframe
            src="/bio.html"
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
            title="Links de Contato DKS Marketing"
        />
    );
}
