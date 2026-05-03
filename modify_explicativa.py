import re

with open('public/apresentacao2.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace document title
html = html.replace('A Nova Era do Restaurante', 'Apresentação Explicativa - Padaria Bublitz')

# Replace slide 1 content (Hero)
html = re.sub(r'Marketing que não enche salão.*?nada\.', 'Entenda exatamente <strong>o que</strong> vamos fazer, <strong>como</strong> vamos fazer e <strong>por que</strong> a união das nossas três alavancas vai transformar a tradição da Padaria Bublitz em previsibilidade financeira.', html, flags=re.DOTALL)
html = re.sub(r'Transformamos restaurantes em referências de <span class="gold">faturamento e mesas cheias.</span>', 'Nosso Plano Explicado:<br><span class="gold">Padaria Bublitz</span>', html)

# Slide 2 
html = re.sub(r'Enquanto você foca na cor da arte do Instagram, seu concorrente que entendeu o jogo digital está roubando seus clientes terça-feira à noite\.', 'O diagnóstico real da Padaria Bublitz: O que precisamos resolver para escalar seus resultados.', html)
html = html.replace('Salão vazio em dias de semana', 'Potencial Orgânico Desperdiçado')
html = html.replace('Delivery dependente 100% do app', 'Falta de Previsibilidade Diária')
html = html.replace('Clientes que pedem uma vez e somem', 'Dinheiro Deixado na Mesa (Recorrência)')

# Slide 3 (Eixos explicados detalhadamente)
html = re.sub(r'Estratégias agressivas de\s*anúncios no Meta e Google para colocar sua marca na frente de quem tem fome agora\.', 
'<br><br><strong style="color:#fff;">O que:</strong> Campanhas no Google e Meta Ads.<br><strong style="color:#fff;">Como:</strong> Anúncios geolocalizados na Itoupava Central.<br><strong style="color:#fff;">Por que:</strong> Sem atrair pessoas novas, você depende do acaso. Com anúncios, forçamos o salão a encher.', html)

html = re.sub(r'Engenharia de cardápio, fotos alinhadas,\s*otimizacao forte dentro do cardápio proprio e dos apps \(ifood/keeta/99food\)', 
'<br><br><strong style="color:#fff;">O que:</strong> Engenharia de Cardápio.<br><strong style="color:#fff;">Como:</strong> Posicionando combos estrategicamente no iFood e Goomer.<br><strong style="color:#fff;">Por que:</strong> Tráfego sem conversão é lixo. A engenharia faz o cliente gastar mais na mesma mesa.', html)

html = re.sub(r'Implantação de CRM ativo\.\s*Mandar mensagens programadas, fazer o aniversariante comemorar aí e gerar caixa recorrente\.', 
'<br><br><strong style="color:#fff;">O que:</strong> Máquina de Relacionamento (CRM).<br><strong style="color:#fff;">Como:</strong> Captar contatos e enviar ofertas via WhatsApp.<br><strong style="color:#fff;">Por que:</strong> O lucro verdadeiro está na recompra. O CRM traz o cliente inativo de volta sem custo de anúncio.', html)

# Slide 4 
html = re.sub(r'Sua operação<br>\s*blindada e<br>\s*vendendo 24/7\.', 'A Inteligência<br>das 3 Alavancas<br><span class="gold">Juntas</span>.', html)
html = re.sub(r'Chega de ações isoladas\.\s*Nós estruturamos um ecossistema digital onde Tráfego, Cardápio, Avaliações e Retenção conversam para formar uma máquina que injeta clientes todo dia na sua esteira\.', 
'Se só fizermos Atração, o cliente não compra. Se só tivermos Conversão, não tem volume de pessoas. E se não tiver CRM, o lucro acaba rápido. Ao juntar as três, a Bublitz terá previsibilidade todo santo dia.', html)

# Slide 5 (Hackear Algoritmo)
html = re.sub(r'A Arte de hackear<br>\s*o algoritmo do<br>\s*Delivery\.', 'Como vamos dominar<br>as buscas em<br><span class="gold">Blumenau</span>', html)
html = re.sub(r'Estar no iFood é fácil\.\s*Ser o primeiro nas buscas da sua região é onde nós entramos com SEO para restaurantes, engenharia de categorias e táticas de conversão de combos\.', 
'<strong>Como funciona o Domínio Local:</strong> Quando pesquisam "almoço" no celular, o Google e iFood sugerem quem está otimizado. Nós estruturamos sua ficha para você aparecer sempre no topo de forma orgânica e "roubar" a atenção da concorrência.', html)

# Slide 6 (CRM e LTV)
html = re.sub(r'Vender uma vez é o dever de casa\.<br>\s*Fazer voltar é o lucro\.', 'O segredo do<br>nosso modelo:<br><span class="gold">O CRM ativo</span>', html)
html = re.sub(r'Restaurantes quebram no CAC\. Sobrevivem no\s*LTV\.<br>Veja o que um sistema de retenção CRM faz com seu caixa ao longo dos meses\.', 
'<strong>Por que focamos no CRM?</strong> Porque restaurantes quebram gastando muito em anúncios. Nosso CRM constrói uma lista de clientes. Num dia fraco, disparamos uma promo de cucas para o WhatsApp e o caixa gira sem gastar R$1 a mais. Isso é aumentar o "LTV".', html)

# Slide 7 (Como a revolução começa)
html = re.sub(r'Como a revolução começa nos primeiros <span class="gold">30 Dias</span>\.', 'Na prática: Como<br>vamos começar a<br><span class="gold">Parceria</span>', html)
html = re.sub(r'Nosso processo de on-boarding não demora para dar tração\.\s*Entramos rasgando na execução porque tempo com mesa vazia custa muito caro\.', 
'Esse é o nosso mapa de implementação para colocar a máquina das 3 alavancas para rodar nos primeiros 30 a 60 dias.', html)

html = html.replace('Auditoria de redes, engenharia do cardápio digital e marketplace.', '<strong>Arrumando a casa (Conversão):</strong> Arrumamos as fotos, descrições e engenharia do seu iFood/Goomer para que tudo converta muito antes de investir 1 real em anúncios.')
html = html.replace('Pixel, UTMs, estruturação de campanhas Locais (Google) e de Conversão Direta (Meta Ads) com criativos de alto apetite visual.', '<strong>Início da Atração (Tráfego):</strong> Ligamos as campanhas no Google e Meta Ads para atrair novas pessoas da Itoupava Central.')
html = html.replace('Anúncios no ar. Coleta de dados do CRM para entender comportamento de compra dos clientes. Início de disparos via whatsapp para aumentar a recorrência.', '<strong>Estruturação do Relacionamento (CRM):</strong> Coletamos o contato de quem pede delivery e compra no balcão.')
html = html.replace('Primeiro relatório de performance focado em faturamento. Ajustes, otimizações e análise de todo o cenário atual do restaurante. Ajustes e escala.', '<strong>Ativação da Recorrência (Retenção):</strong> Damos início aos disparos automáticos no WhatsApp, trazendo seus clientes de volta e multiplicando os lucros.')

html = html.replace('Semana 1: Raio X e Engenharia', 'Passo 1: Conversão / Setup')
html = html.replace('Semana 2: Setup de Tráfego', 'Passo 2: Início da Atração')
html = html.replace('Semana 3: Disparo de Tração', 'Passo 3: Setup do CRM')
html = html.replace('Semana 4: Ciclo e Escala', 'Passo 4: Ativação e Escala')

# Slide 9
html = re.sub(r'O que vamos fazer para o seu restaurante <span class="text-glow">bater recorde de faturamento</span>', 'Os Entregáveis da <span class="text-glow">DKS para a Bublitz</span>', html)

with open('public/bublitz_explicativa.html', 'w', encoding='utf-8') as f:
    f.write(html)
