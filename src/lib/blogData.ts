export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    content: string;
    date: string;
    readTime: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "como-aumentar-ticket-medio-restaurante",
        title: "Como aumentar o ticket médio no restaurante sem perder clientes",
        excerpt: "Descubra as táticas de engenharia de cardápio e neuromarketing que fazem os clientes gastarem mais na mesma mesa de forma natural.",
        category: "Aumento de Ticket Médio",
        date: "15 Fev 2026",
        readTime: "6 min de leitura",
        content: `
            <h2>O Segredo do Ticket Médio Alto</h2>
            <p>Muitos donos de restaurante acreditam que a única forma de faturar mais é atraindo novos clientes constantemente. No entanto, a estratégia mais lucrativa (e barata) é fazer com que o cliente que já está sentado à sua mesa consuma 20%, 30% ou até 50% a mais.</p>
            <h3>1. Engenharia de Cardápio (Menu Design)</h3>
            <p>O cardápio não é apenas uma lista de pratos, é sua principal ferramenta de vendas. O princípio do "Olhar em Z" e a técnica da Ancoragem de Preços direcionam a atenção do cliente para os itens de maior margem de lucro (seus Pratos Estrela).</p>
            <h3>2. O Poder do Upsell Natural</h3>
            <p>Treinar a brigada não é pedir para os garçons empurrarem produtos, é ensiná-los a resolver o problema do cliente com adições que complementam a experiência. Exemplo: "Aceita nossa maionese trufada exclusiva para acompanhar a porção?"</p>
            <h3>3. A Estratégia dos Combos Invisíveis</h3>
            <p>Agrupar entradas, pratos principais e bebidas num único pacote visual reduz a dor do pagamento isolado e aumenta o desembolso final do consumidor.</p>
        `
    },
    {
        id: "2",
        slug: "como-lotar-seu-restaurante-semana",
        title: "Como lotar seu restaurante durante a semana (Terça a Quinta)",
        excerpt: "Aprenda o método exato da DKS para criar motores perpétuos de atração nos dias tradicionalmente parados na gastronomia.",
        category: "Marketing para Restaurantes",
        date: "02 Fev 2026",
        readTime: "8 min de leitura",
        content: `
            <h2>O Fim das Mesas Vazias na Terça-Feira</h2>
            <p>Sobreviver apenas do movimento orgânico de sexta e sábado é um modelo de negócios arriscado. Para uma operação saudável, seu restaurante precisa pagar os custos fixos ainda na metade da semana.</p>
            <h3>1. Ofertas "Isca" Imbatíveis</h3>
            <p>Uma oferta de terça-feira não precisa dar prejuízo, mas precisa ser agressiva o suficiente para quebrar a inércia do cliente sair de casa. Nós chamamos isso de Oferta Magnética.</p>
            <h3>2. Anúncios Geolocalizados Ativos</h3>
            <p>Ligue as campanhas do Meta Ads num raio de 5km horas antes do jantar, focando exclusivamente no público quente que já interagiu com o seu Instagram.</p>
        `
    },
    {
        id: "3",
        slug: "depender-menos-do-ifood",
        title: "Como depender menos do iFood e aumentar sua margem de lucro",
        excerpt: "Um guia estratégico prático para construir seus canais de vendas diretas enquanto utiliza os aplicativos apenas como ferramenta de aquisição primária.",
        category: "Gestão de Delivery",
        date: "28 Jan 2026",
        readTime: "5 min de leitura",
        content: `
            <h2>O iFood é seu parceiro, mas não pode ser o dono do negócio</h2>
            <p>Taxas que chegam a 27% comprometem quase toda a margem de lucro líquido de uma operação culinária. A virada de chave acontece quando você entende como o jogo funciona.</p>
            <h3>1. O iFood como Topo de Funil</h3>
            <p>Aceite investir no iFood não pelo lucro imediato daquele pedido, mas para "comprar" um novo cliente na região. O desafio não está em pagar a taxa do primeiro pedido, e sim na repetição.</p>
            <h3>2. A Estrutura do Remarketing Offline</h3>
            <p>Insira panfletos estratégicos, brindes ou QR Codes que direcionam a segunda compra diretamente para o seu WhatsApp ou site próprio em troca de uma bonificação especial.</p>
        `
    },
    {
        id: "4",
        slug: "trafego-pago-delivery-restaurantes",
        title: "Estratégias avançadas de Tráfego Pago para Delivery",
        excerpt: "Vá além do botão impulsionar. O passo a passo matemático para escalar campanhas de aquisição que levam pratos até a porta do seu cliente.",
        category: "Tráfego Pago",
        date: "14 Jan 2026",
        readTime: "7 min de leitura",
        content: `
            <h2>Tráfego Pago para Gastronomia é diferente de E-commerce</h2>
            <p>Ninguém compra uma pizza na terça para receber na quinta. Tráfego gastronômico exige resposta imediata baseada na vontade impulsiva e no relógio.</p>
            <h3>1. Campanhas de Fome (Timing Ads)</h3>
            <p>Sincronize seus orçamentos diários para os horários de pico emocional. Campanhas ativadas estrategicamente às 11:30 (almoço) e 18:30 (jantar).</p>
        `
    },
    {
        id: "5",
        slug: "promocoes-restaurante-sem-perder-margem",
        title: "Como estruturar promoções sem destruir margem de lucro",
        excerpt: "Dar desconto genérico quebra negócios. Saiba como criar ganchos de atração que preservam seu caixa enquanto garantem volume de pedidos.",
        category: "Estratégia de Cardápio",
        date: "05 Jan 2026",
        readTime: "5 min de leitura",
        content: `
            <h2>Promoção não é Sinônimo de Prejuízo</h2>
            <p>Se a promoção só serve para trazer clientes buscando o menor preço possível, você está atraindo o público errado. O segredo é ancorar valor e não depreciar o Ticker Base.</p>
            <h3>1. Promoções Baseadas em Condicionantes</h3>
            <p>Ao invés de "20% OFF no Lanche", utilize "Ganhe X na compra de Y". Isso garante que o CAC seja absorvido pelo volume mínimo garantido (Ticket).</p>
        `
    }
];
