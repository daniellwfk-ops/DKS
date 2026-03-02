export const metadata = {
    title: "Podcast | DKS Marketing",
    description: "Apresentação comercial estratégica da DKS Marketing — Método ROMA para restaurantes.",
};

export default function PodcastPage() {
    return (
        <iframe
            src="/podcast.html"
            style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
            title="Apresentação Comercial DKS Marketing"
        />
    );
}
