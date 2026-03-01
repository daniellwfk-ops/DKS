import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProposalSlideDeck from "@/components/ProposalSlideDeck";

export default async function PropostaPublicPage({
    params,
}: {
    params: { slug: string };
}) {
    const proposal = await prisma.proposal.findUnique({
        where: { slug: params.slug },
    });

    if (!proposal) {
        notFound();
    }

    const services = JSON.parse(proposal.services);

    return (
        <ProposalSlideDeck
            proposal={{
                ...proposal,
                services
            }}
        />
    );
}
