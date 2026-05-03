import re

with open('public/bublitz.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace document title
html = html.replace('A Nova Era do Restaurante', 'Diagnóstico e Plano de Ação - Padaria Bublitz')

# Replace slide 1 content (Hero)
html = re.sub(r'<h1 class="h-xl[^>]*>.*?</h1>', '<h1 class="h-xl a">Diagnóstico e Plano de Ação:<br><span class="gold">Padaria Bublitz</span></h1>', html, count=1, flags=re.DOTALL)
html = re.sub(r'<p class="sub a"[^>]*>Marketing que não enche salão e não foca em aumento de faturamento não serve para nada.*?</p>', '<p class="sub a">Plano estratégico de aceleração digital e estruturação de vendas focado em traduzir os mais de 40 anos de tradição da Padaria e Restaurante Bublitz em lucro escalável.</p>', html, count=1, flags=re.DOTALL)

# Slide 2 (Problemas / Oportunidades)
html = re.sub(r'<h2 class="h-lg a">Enquanto você foca na cor da arte do Instagram.*?</h2>', '<h2 class="h-lg a">O cenário atual da<br><span class="gold">Padaria Bublitz</span></h2>', html, count=1, flags=re.DOTALL)
html = re.sub(r'Salão vazio em dias de semana', 'Autoridade e tradição mal exploradas no digital', html, count=1)
html = re.sub(r'Delivery dependente 100% do app', 'Dependência do fluxo orgânico presencial', html, count=1)
html = re.sub(r'Clientes que pedem uma vez e somem', 'Falta de uma máquina de atração contínua', html, count=1)

# Slide 3 (Eixos)
html = re.sub(r'Estratégias agressivas de anúncios no Meta e Google para colocar sua marca na frente de quem tem fome agora.', 'Campanhas geolocalizadas em Blumenau, direcionadas para horários-chave (almoço e café da tarde), atraindo novos clientes todos os dias.', html, count=1)
html = re.sub(r'Engenharia de cardápio, fotos alinhadas, otimizacao forte dentro do cardápio proprio e dos apps \(ifood/keeta/99food\)', 'Reestruturação visual e estratégica do Goomer e iFood. Foco em produtos curva A, combos e gatilhos de conversão rápidos.', html, count=1)
html = re.sub(r'Implantação de CRM ativo. Mandar mensagens programadas, fazer o aniversariante comemorar aí e gerar caixa recorrente.', 'Captura de base de clientes do almoço e padaria. Automações de WhatsApp para fazer o cliente voltar com ofertas irresistíveis.', html, count=1)

# Slide 4 
html = re.sub(r'<h2 class="h-lg a">Sua operação<br>blindada e<br>vendendo 24/7\.</h2>', '<h2 class="h-lg a">A união da<br><span class="gold">Tradição e</span><br>Tecnologia.</h2>', html, count=1, flags=re.DOTALL)
html = re.sub(r'Chega de ações isoladas. Nós estruturamos um ecossistema digital onde Tráfego, Cardápio, Avaliações e Retenção conversam para formar uma máquina que injeta clientes todo dia na sua esteira.', 'Vamos estruturar um ecossistema digital onde a qualidade impecável dos seus produtos (cucas, almoço, pães) encontre a demanda exata da Itoupava Central e de Blumenau.', html, count=1)

# Slide 5 (Hackear Algoritmo)
html = re.sub(r'<h2 class="h-lg a">A Arte de hackear<br>o algoritmo do<br>Delivery\.</h2>', '<h2 class="h-lg a">Dominando o<br>Digital na<br><span class="gold">Itoupava Central</span></h2>', html, count=1, flags=re.DOTALL)
html = re.sub(r'Estar no iFood é fácil. Ser o primeiro nas buscas da sua região é onde nós entramos com SEO para restaurantes, engenharia de categorias e táticas de conversão de combos.', 'Mais do que postar fotos bonitas, vamos otimizar sua presença no Google e nas redes para que quem busca por "almoço" ou "padaria" encontre a Bublitz primeiro.', html, count=1)

# Slide 7 (Como a revolução começa) - THIS IS THE CORE OF THE USER REQUEST
html = re.sub(r'<h2 class="h-lg a">Como a revolução começa nos primeiros <span class="gold">30 Dias</span>\.</h2>', '<h2 class="h-lg a">O Plano de Ação:<br>Nossos <span class="gold">Primeiros Passos</span></h2>', html, count=1, flags=re.DOTALL)
html = re.sub(r'Nosso processo de on-boarding não demora para dar tração\. Entramos rasgando na execução porque tempo com mesa vazia custa muito caro\.', 'Como vamos implementar a inteligência DKS na Padaria Bublitz para escalar os resultados rapidamente.', html, count=1)

html = re.sub(r'Auditoria de redes, engenharia do cardápio digital e marketplace\.', '<strong>O que faremos:</strong> Avaliação completa do Instagram e adequação da bio. <strong>Como:</strong> Vamos padronizar o visual ("food porn") e reestruturar o Goomer/iFood com Engenharia de Cardápio para destacar combos e produtos de maior margem.', html, count=1)
html = re.sub(r'Pixel, UTMs, estruturação de campanhas Locais \(Google\) e de Conversão Direta \(Meta Ads\) com criativos de alto apetite visual\.', '<strong>O que faremos:</strong> Dominar as buscas locais. <strong>Como:</strong> Otimização extrema da ficha do Google Meu Negócio para captar tráfego orgânico de quem procura comida na Itoupava Central, além de configurar campanhas no Google Ads.', html, count=1)
html = re.sub(r'Anúncios no ar\. Coleta de dados do CRM para entender comportamento de compra dos clientes\. Início de disparos via whatsapp para aumentar a recorrência\.', '<strong>O que faremos:</strong> Tráfego pago focado em horários-chave. <strong>Como:</strong> Criação de campanhas no Meta Ads (Instagram/Facebook) segmentadas geograficamente para atrair movimento no almoço e no café colonial.', html, count=1)
html = re.sub(r'Primeiro relatório de performance focado em faturamento\. Ajustes, otimizações e análise de todo o cenário atual do restaurante\. Ajustes e escala\.', '<strong>O que faremos:</strong> Criação de base de clientes (CRM). <strong>Como:</strong> Implementação de automações de WhatsApp para capturar contatos do delivery e disparar campanhas de recompra, aumentando o LTV dos clientes.', html, count=1)

html = re.sub(r'Semana 1: Raio X e Engenharia', 'Passo 1: Diagnóstico e Cardápio', html, count=1)
html = re.sub(r'Semana 2: Setup de Tráfego', 'Passo 2: Domínio do Google Local', html, count=1)
html = re.sub(r'Semana 3: Disparo de Tração', 'Passo 3: Tráfego de Alta Conversão', html, count=1)
html = re.sub(r'Semana 4: Ciclo e Escala', 'Passo 4: Implementação de CRM', html, count=1)

# Slide 8 (Alavancas)
html = re.sub(r'Essas são as 3 alavancas para o seu restaurante vender mais, e nós da DKS sabemos o que e como fazer para isso acontecer\.', 'Abaixo detalhamos a lista exata do que será executado e entregue para a Padaria Bublitz ao longo do projeto.', html, count=1)

# Slide 9 (Entregáveis detalhados) - Let's modify the list header
html = re.sub(r'<h2 class="h-lg a">O que vamos fazer para o seu restaurante bater recorde de faturamento</h2>', '<h2 class="h-lg a">Nossas Entregas para a <span class="gold">Padaria Bublitz</span></h2>', html, count=1, flags=re.DOTALL)

with open('public/bublitz.html', 'w', encoding='utf-8') as f:
    f.write(html)
