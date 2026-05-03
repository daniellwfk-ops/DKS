"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, TrendingUp, Bike, MessageCircle, BarChart3, MapPin, Clapperboard, ShieldCheck, Clock, Award, Quote, ChevronDown, Menu, X } from 'lucide-react';
import { BlurText } from '@/components/BlurText';
import { ScrubSequence } from '@/components/ScrubSequence';
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT } from '@/lib/constants';

// --- DATA ---
const BRAND_NAME = "DKS";
const BRAND_TAGLINE = "Assessoria para Restaurantes";
const PARTNERS = ["Fratelli's", "Steak Grill", "Dan Sushi", "Tempero Brasileiro", "Chiquinho", "Deco Pizzas", "Padaria Bublitz"];

const services = [
  { icon: TrendingUp, title: "Tráfego Pago", body: "Campanhas de alta conversão no Meta e Google. Análise de dados e métricas semanais com metas reais de faturamento." },
  { icon: Bike, title: "Delivery", body: "Análise de cardápios no iFood, estratégias de rankeamento e melhoria na taxa de conversão." },
  { icon: MessageCircle, title: "CRM", body: "Disparo de mensagens via WhatsApp, reativação de clientes inativos e aumento do LTV e recorrência." },
  { icon: BarChart3, title: "Análises", body: "Reuniões mensais de performance, suporte via Grupo de WhatsApp e relatórios detalhados por canal." },
  { icon: MapPin, title: "Google Local", body: "Otimização local, gestão de avaliações e aumento maciço de visibilidade no salão." },
  { icon: Clapperboard, title: "Conteúdo", body: "Estratégia editorial para Insta/TikTok, roteiros para vídeos virais e posicionamento de marca." },
];

const reasons = [
  { icon: ShieldCheck, title: "Método Validado", body: "Aplicamos estratégias já validadas em centenas de operações para gerar previsibilidade e lucro constante." },
  { icon: Award, title: "100% Especialistas", body: "Não somos agência generalista. Somos apaixonados pelo setor de alimentação e conhecemos a sua operação." },
  { icon: TrendingUp, title: "Foco Extremo", body: "Somos movidos por faturamento. Não perdemos tempo com métricas de vaidade." },
  { icon: Clock, title: "Sem Fidelidade", body: "Contratos mensais renováveis. O nosso resultado é o que te mantém conosco." },
];

const romaSteps = [
  { n: "1", title: "Resultado", body: "Definimos metas reais de faturamento antes de qualquer ação. Tudo começa com um objetivo claro e mensurável." },
  { n: "2", title: "Otimização", body: "Otimizamos o que já existe antes de escalar: cardápio, perfis, campanhas e precificação baseada em lucro." },
  { n: "3", title: "Método", body: "Processos consistentes e repetíveis. Cada semana tem ações definidas, responsáveis e resultados estritos." },
  { n: "4", title: "Autoridade", body: "Transformamos seu restaurante em referência local. Quando você é autoridade, custa muito menos captar." },
];

const stats = [
  { value: "30+", label: "Marcas Gerenciadas" },
  { value: "10M+", label: "Faturamento Gerado" },
  { value: "100%", label: "Foco em Gastronomia" },
  { value: "24/7", label: "Acompanhamento" },
];

const testimonials = [
  { quote: "A DKS mudou completamente o rumo do nosso faturamento no iFood. Deixamos de ser reféns da plataforma e começamos a dominar a região.", name: "Dono", role: "Fratelli's Pizzaria" },
  { quote: "As campanhas no Meta Ads trouxeram não só vendas no delivery, mas encheram o salão. O atendimento deles é fenomenal.", name: "Gestor", role: "Steak Grill Burger" },
  { quote: "Nunca achei que o Google Meu Negócio pudesse trazer tanto fluxo espontâneo pra nossa casa. Foi uma virada de chave absoluta.", name: "Sócio", role: "Dan Sushi" },
  { quote: "Eles entendem a realidade de uma cozinha. Não são teóricos, falam a nossa língua e focam em lucro no bolso.", name: "Fundador", role: "Tempero Brasileiro" },
  { quote: "O método ROMA trouxe previsibilidade. Antes eu não sabia quanto ia vender, hoje eu escalo com segurança.", name: "Diretor", role: "Pizza&Cia" },
  { quote: "O melhor investimento em assessoria que já fizemos. O CRM e o contato via WhatsApp com os clientes inativos dobraram nosso LTV.", name: "Proprietário", role: "Deco Pizzas" },
];

const faqs = [
  { q: "Preciso já ter um restaurante estruturado para contratar a DKS?", a: "Não. Atendemos restaurantes em diferentes estágios — desde quem está começando até quem quer escalar um delivery já em operação. Fazemos um diagnóstico inicial gratuito para entender onde você está." },
  { q: "Em quanto tempo vejo resultado?", a: "A maioria dos nossos clientes já sente diferença nos primeiros 30 a 45 dias. Resultados consistentes e escalonáveis aparecem a partir do 2º e 3º mês de trabalho com o Método ROMA." },
  { q: "A DKS atende só restaurantes?", a: "Sim. Somos 100% focados em restaurantes, bares, pizzarias e deliverys. Esse foco nos faz entender profundamente o comportamento do seu cliente e o que realmente move vendas no seu segmento." },
  { q: "Como funciona o contrato?", a: "Trabalhamos com contratos mensais renováveis, sem multa de fidelidade. Acreditamos que o nosso resultado é o que te mantém — e não um papel de amarras." },
];

// --- UI COMPONENTS ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Button({ variant = "hero", className = "", children, asChild, href, ...props }: any) {
  const base = "inline-flex items-center justify-center transition-colors cursor-pointer whitespace-nowrap";
  const variants = {
    hero: "bg-[#D4AF37] text-black rounded-full px-7 py-3.5 text-base font-bold hover:bg-[#C5A028] shadow-[0_0_20px_rgba(212,175,55,0.4)]",
    heroGlass: "bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/5 text-white rounded-full px-7 py-3.5 text-base font-normal hover:bg-white/10",
    heroSolid: "bg-white text-black rounded-full px-7 py-3.5 text-base font-bold hover:bg-white/90",
  };
  
  const Comp = asChild ? "a" : "button";
  return (
    <Comp href={href} className={`${base} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </Comp>
  );
}

// --- SECTIONS ---
function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 40));

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100vw-32px))] transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}
      >
        <div className={`rounded-full px-2 py-2 flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'liquid-glass backdrop-blur-xl bg-black/40 border border-white/10' : 'bg-transparent'}`}>
          <div className="flex items-center gap-2 pl-3">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-black">D</div>
            <span className="font-heading font-black text-lg tracking-tight text-white">{BRAND_NAME}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-1">
            {["Serviços", "Por que Nós", "Método", "Resultados"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="px-3.5 py-2 text-sm text-white/80 hover:text-white transition-colors font-body">
                {l}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <Button variant="heroSolid" className="px-5 py-2 text-sm" href="#formulario" asChild>
              Contato <ArrowUpRight className="ml-1 size-4" />
            </Button>
          </div>

          <button className="md:hidden pr-3 text-white" onClick={() => setMobileOpen(true)}>
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setMobileOpen(false)}>
              <X className="size-8" />
            </button>
            {["Serviços", "Por que Nós", "Método", "Resultados"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} onClick={() => setMobileOpen(false)} className="text-3xl font-heading font-bold text-white">
                {l}
              </a>
            ))}
            <Button variant="hero" href="#formulario" asChild onClick={() => setMobileOpen(false)}>
              Quero Escalar <ArrowUpRight className="ml-2 size-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero({ scrollRef }: { scrollRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={scrollRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Frame sequence canvas */}
        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={scrollRef}
          className="absolute inset-0 w-full h-full z-0 opacity-40 mix-blend-screen"
        />
        {/* Cinematic vignette */}
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_60%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-[40vh] z-[2] gradient-fade-b" />
        
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 mt-16">
          <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2 border border-white/10">
              <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">Líder</span>
              <span className="pr-3 text-sm text-white/85 font-medium">{BRAND_TAGLINE}</span>
            </div>
          </motion.div>

          <BlurText
            text="Foco Extremo em Vendas."
            as="h1"
            className="mt-6 font-heading font-medium tracking-[-0.03em] text-[clamp(46px,8vw,120px)] leading-[0.95] tracking-[-0.04em] text-white max-w-[14ch]"
            delay={0.09}
            startDelay={0.15}
          />

          <motion.p
            initial={{filter:"blur(10px)", opacity:0, y:16}}
            animate={{filter:"blur(0)", opacity:1, y:0}}
            transition={{delay:0.9, duration:0.7, ease:[0.22,1,0.36,1]}}
            className="mt-8 font-body text-base md:text-xl text-white/70 max-w-2xl leading-relaxed"
          >
            Do salão ao delivery. Transformamos operações estagnadas em líderes inquestionáveis de faturamento na sua região.
          </motion.p>

          <motion.div
            initial={{opacity:0, y:12}}
            animate={{opacity:1, y:0}}
            transition={{delay:1.1, duration:0.6}}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="hero" href="#formulario" asChild>
              Quero Escalar <ArrowUpRight className="ml-1 size-4" />
            </Button>
            <Button variant="heroGlass" href="#metodo" asChild>
              <Play className="mr-2 size-4 fill-current" /> Ver Método ROMA
            </Button>
          </motion.div>

          {/* Partners row */}
          <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-neutral-400 uppercase tracking-widest border border-white/5">
              Restaurantes que faturam
            </span>
            <div className="flex items-center gap-6 md:gap-14 flex-wrap justify-center px-6">
              {PARTNERS.map(p => (
                <span key={p} className="font-heading font-bold uppercase text-lg md:text-2xl text-white/30 tracking-tight">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBento() {
  return (
    <section id="serviços" className="relative py-28 md:py-40 bg-[#000]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <span className="rounded-full px-4 py-1.5 text-xs text-neutral-400 font-medium tracking-widest uppercase border border-white/10 bg-white/5">Nosso Arsenal</span>
        <BlurText as="h2" text="Tudo que você precisa. Sob um único teto." className="font-heading font-medium tracking-[-0.03em] text-[clamp(32px,5vw,72px)] leading-[0.9] tracking-tight mt-6 mb-16 max-w-[18ch] mx-auto" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              className={`bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-10 text-left relative overflow-hidden group hover:border-white/10 transition-colors duration-500
                ${i === 0 ? 'md:row-span-2 md:col-span-1 min-h-[480px]' : ''}
                ${i === 3 ? 'md:col-span-2 min-h-[228px]' : ''}
                ${i === 4 ? 'md:col-span-1 min-h-[228px]' : ''}
                ${i === 5 ? 'md:col-span-3 min-h-[200px]' : 'min-h-[228px]'}
              `}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/15 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/5">
                <srv.icon className="size-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-medium tracking-[-0.03em] text-2xl md:text-3xl leading-[1] tracking-tight mb-4 max-w-[18ch] text-white">
                {srv.title}
              </h3>
              <p className="font-body text-[15px] text-neutral-400 max-w-[38ch] leading-relaxed">
                {srv.body}
              </p>
              <ArrowUpRight className="absolute top-8 right-8 size-6 text-white/10 group-hover:text-[#D4AF37] transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pourquoi() {
  return (
    <section id="por-que-nós" className="relative py-28 md:py-40 border-t border-white/5 bg-[#030303]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <BlurText as="h2" text="Por que a DKS?" className="font-heading font-medium tracking-tight text-[clamp(40px,6vw,80px)] leading-[0.9] mb-4" />
          <p className="text-neutral-400 text-lg font-body max-w-xl mx-auto">A assessoria escolhida pelas marcas que buscam lucro real.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#0a0a0a] rounded-[32px] p-8 flex flex-col gap-6 min-h-[300px] border border-white/5 group hover:border-[#D4AF37]/30 transition-colors duration-500">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5">
                <r.icon className="size-6 text-white group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <h3 className="font-heading font-medium tracking-tight text-xl text-white">{r.title}</h3>
              <p className="font-body text-[15px] text-neutral-500 leading-relaxed">{r.body}</p>
              <div className="mt-auto h-px w-12 bg-gradient-to-r from-[#D4AF37] to-transparent opacity-50 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="método" className="relative py-28 md:py-40 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <span className="rounded-full px-4 py-1.5 text-xs text-neutral-400 font-medium tracking-widest uppercase border border-white/10 bg-white/5">Engenharia Reversa</span>
        <BlurText as="h2" text="Método ROMA." className="font-heading font-medium tracking-[-0.03em] text-[clamp(48px,7vw,100px)] leading-[0.9] tracking-tight mt-6 mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          <div className="absolute top-20 -right-0 h-px w-full bg-gradient-to-r from-white/10 via-white/10 to-transparent hidden md:block" />
          
          {romaSteps.map((step) => (
            <div key={step.n} className="relative px-0 md:px-8 py-10 md:py-14 flex flex-col gap-5 items-start">
              <div className="hidden md:block absolute top-20 left-0 w-px h-full bg-gradient-to-b from-white/10 to-transparent" />
              <span className="font-heading font-black text-[120px] md:text-[140px] leading-none text-white/5 -mb-8 select-none tracking-tighter">
                {step.n.padStart(2, "0")}
              </span>
              <h3 className="font-heading font-medium tracking-[-0.02em] text-2xl md:text-3xl tracking-tight text-[#D4AF37]">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-neutral-400 leading-relaxed max-w-[28ch]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="resultados" className="relative py-32 md:py-44 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[#050505] z-0"></div>
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(100%_100%_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_100%)]" />
      
      <div className="bg-[#0a0a0a] rounded-[40px] p-10 md:p-16 mx-6 max-w-[1200px] xl:mx-auto relative z-10 border border-white/5 shadow-[0_0_80px_rgba(212,175,55,0.05)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative">
          {stats.map((s, i) => (
            <div key={i} className="text-center relative">
              <span className="font-heading font-medium tracking-tight text-5xl md:text-6xl lg:text-7xl leading-none text-white drop-shadow-md">
                {s.value}
              </span>
              <p className="font-body text-xs md:text-sm text-[#D4AF37] mt-4 tracking-widest uppercase font-bold">
                {s.label}
              </p>
              {i < 3 && <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-4 w-px h-16 bg-white/10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28 md:py-40 bg-black overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
        <BlurText as="h2" text="Eles falam por nós." className="font-heading font-medium tracking-[-0.03em] text-[clamp(40px,6vw,80px)] leading-[0.9] tracking-tight" />
      </div>

      <div className="relative flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
        <div className="flex gap-6 w-max animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 w-[340px] md:w-[420px] shrink-0 flex flex-col gap-6">
              <Quote className="size-8 text-[#D4AF37]/40" />
              <p className="font-body text-neutral-300 italic leading-relaxed text-[16px]">&quot;{t.quote}&quot;</p>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-black border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black font-heading">{t.name[0]}</div>
                <div>
                  <p className="font-heading font-bold text-white">{t.name}</p>
                  <p className="font-body text-xs text-[#D4AF37] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 w-max animate-[marquee-reverse_32s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials.slice(3), ...testimonials.slice(0,3), ...testimonials.slice(3), ...testimonials.slice(0,3)].map((t, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 w-[340px] md:w-[420px] shrink-0 flex flex-col gap-6">
              <Quote className="size-8 text-[#D4AF37]/40" />
              <p className="font-body text-neutral-300 italic leading-relaxed text-[16px]">&quot;{t.quote}&quot;</p>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="size-12 rounded-full bg-gradient-to-br from-[#D4AF37]/40 to-black border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black font-heading">{t.name[0]}</div>
                <div>
                  <p className="font-heading font-bold text-white">{t.name}</p>
                  <p className="font-body text-xs text-[#D4AF37] uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-40 bg-[#030303] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <span className="rounded-full px-4 py-1.5 text-xs text-neutral-400 font-medium tracking-widest uppercase border border-white/10 bg-white/5">Respostas</span>
          <BlurText as="h2" text="Perguntas Frequentes." className="font-heading font-medium tracking-[-0.03em] text-[clamp(40px,6vw,72px)] leading-[0.9] tracking-tight mt-6 mb-8 text-white" />
          <p className="text-neutral-400 font-body text-lg mb-10 max-w-[90%]">Tudo o que você precisa saber antes de dar o próximo passo rumo ao topo do faturamento.</p>
          <Button variant="heroGlass" href="#formulario" asChild>
            Falar no WhatsApp <ArrowUpRight className="ml-2 size-5" />
          </Button>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/10 pb-2">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`font-heading font-medium tracking-[-0.02em] text-lg md:text-xl tracking-tight transition-colors ${openIndex === i ? 'text-[#D4AF37]' : 'text-white group-hover:text-white/80'}`}>
                  {f.q}
                </span>
                <ChevronDown className={`size-5 text-white/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#D4AF37]' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-neutral-400 text-[16px] leading-relaxed pb-8 max-w-[60ch]">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFooter() {
  return (
    <section id="formulario" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(212,175,55,0.15)_0%,transparent_100%)]" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-[800px] mx-auto py-32">
        <BlurText as="h2" text="Prontos para Escalar?" className="font-heading font-medium tracking-tight text-[clamp(56px,10vw,160px)] leading-[0.88] tracking-[-0.04em] text-white" />
        <p className="mt-8 font-body text-lg md:text-xl text-neutral-400 max-w-xl">
          Um contato. Um plano de ação. Faturamento escalando.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Button variant="hero" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
              Falar com Consultor <ArrowUpRight className="ml-2 size-5" />
            </a>
          </Button>
          <Button variant="heroGlass" asChild>
            <a href="#serviços">Ver Serviços</a>
          </Button>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/10 mt-auto bg-black/50 backdrop-blur-xl">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-black text-xs">D</div>
             <span className="font-heading font-bold text-sm text-neutral-500">© 2026 {BRAND_NAME}. Todos os direitos reservados.</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="font-body text-xs text-white/40 hover:text-[#D4AF37] transition-colors uppercase tracking-widest font-bold">Instagram</a>
            <a href="#" className="font-body text-xs text-white/40 hover:text-[#D4AF37] transition-colors uppercase tracking-widest font-bold">LinkedIn</a>
          </nav>
        </div>
      </div>
    </section>
  );
}

// --- MAIN EXPORT ---
export default function Page() {
  const heroRef = useRef<HTMLElement>(null);
  
  return (
    <div className="bg-black text-white min-h-screen font-body selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      <main>
        <Hero scrollRef={heroRef} />
        <ServicesBento />
        <Pourquoi />
        <Process />
        <Stats />
        <Testimonials />
        <Faq />
        <CtaFooter />
      </main>
    </div>
  );
}
