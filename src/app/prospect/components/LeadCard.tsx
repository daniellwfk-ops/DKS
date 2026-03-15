'use client';

import { useState } from 'react';
import {
  WhatsappLogo,
  InstagramLogo,
  CopySimple,
  Star,
  MapPin,
  Phone,
  CaretDown,
  Check,
} from '@phosphor-icons/react';
import { Lead, LeadStatus } from '../types';

const DM_TEMPLATES = [
  (nome: string) =>
    `Oi! Vi o perfil do ${nome} aqui e fiquei impressionado com as avaliações. Vocês estão atraindo novos clientes pelo digital? Tenho algo que pode escalar isso. Posso compartilhar?`,
  (nome: string) =>
    `Olá! Acabei de ver o ${nome} no Maps e achei incrível. Sou especialista em marketing para restaurantes e vi uma oportunidade aqui. Posso te mostrar em 2 minutos?`,
  (nome: string) =>
    `E aí! Pesquisando restaurantes no bairro, vi o ${nome} se destacando. Trabalho com restaurantes para aumentar faturamento — tem 2 min pra eu te mostrar como?`,
  (nome: string) =>
    `Oi! Estava no Maps e o ${nome} apareceu pra mim. Curioso: vocês usam alguma estratégia pra trazer clientes novos todo mês? A gente ajuda restaurantes a fazer isso de forma previsível.`,
];

function getWhatsAppMessage(nome: string) {
  return encodeURIComponent(
    `Oi! Vi o perfil do ${nome} e gostaria de apresentar algo que tem ajudado restaurantes a aumentar o faturamento. Podemos conversar?`
  );
}

function generateDM(nome: string): string {
  const idx = Math.floor(Math.random() * DM_TEMPLATES.length);
  return DM_TEMPLATES[idx](nome);
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          weight={i < full ? 'fill' : 'regular'}
          size={11}
          className={i < full ? 'text-[#D4AF37]' : 'text-[#2a2a2a]'}
        />
      ))}
    </div>
  );
}

interface LeadCardProps {
  lead: Lead;
  onDragStart: () => void;
  onDragEnd: () => void;
  onMove: (leadId: string, newStatus: LeadStatus) => void;
  statuses: { id: LeadStatus; label: string }[];
}

export default function LeadCard({ lead, onDragStart, onDragEnd, onMove, statuses }: LeadCardProps) {
  const [copied, setCopied] = useState(false);
  const [showMove, setShowMove] = useState(false);

  const handleCopyDM = async () => {
    const dm = generateDM(lead.nome);
    await navigator.clipboard.writeText(dm);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMove = (status: LeadStatus) => {
    onMove(lead.id, status);
    setShowMove(false);
  };

  const phone = lead.telefone;
  const formattedPhone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className="group relative bg-[#080808] border border-[#1a1a1a] rounded-xl p-4 cursor-grab active:cursor-grabbing select-none
        hover:border-[#D4AF37]/25 hover:shadow-[0_0_24px_rgba(212,175,55,0.06)]
        transition-all duration-200"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] font-bold text-white truncate leading-snug">{lead.nome}</h3>
          <span className="inline-block text-[10px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2 py-0.5 rounded-full mt-1">
            {lead.nicho}
          </span>
        </div>

        {/* Move dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowMove((v) => !v)}
            className="p-1 text-[#444] hover:text-[#D4AF37] transition-colors rounded"
            title="Mover para etapa"
          >
            <CaretDown size={13} weight="bold" />
          </button>
          {showMove && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowMove(false)}
              />
              <div className="absolute right-0 top-6 z-20 bg-[#0f0f0f] border border-[#222] rounded-xl shadow-2xl w-48 overflow-hidden">
                <div className="px-3 py-2 border-b border-[#1a1a1a]">
                  <p className="text-[10px] font-semibold text-[#555] uppercase tracking-wider">Mover para</p>
                </div>
                {statuses.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleMove(s.id)}
                    className="w-full text-left text-[11px] text-[#888] hover:text-white hover:bg-[#1a1a1a] px-3 py-2 transition-colors"
                  >
                    → {s.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Info rows */}
      <div className="space-y-1.5 mb-4">
        <div className="flex items-center gap-2">
          <StarRating rating={lead.rating} />
          <span className="text-[10px] text-[#666]">
            {lead.rating} <span className="text-[#3a3a3a]">({lead.totalReviews} avaliações)</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#555]">
          <MapPin size={11} className="shrink-0 text-[#383838]" />
          <span className="truncate">{lead.bairro} · {lead.cidade.split(',')[0]}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#555]">
          <Phone size={11} className="shrink-0 text-[#383838]" />
          <span>{formattedPhone}</span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#666]">
          <InstagramLogo size={11} className="shrink-0 text-[#444]" />
          <span className="truncate">@{lead.instagram}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <a
          href={`https://wa.me/55${lead.telefone}?text=${getWhatsAppMessage(lead.nome)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 flex-1 text-[11px] font-semibold
            bg-[#25D366]/8 text-[#25D366] border border-[#25D366]/20 rounded-lg px-2 py-1.5
            hover:bg-[#25D366]/15 transition-colors"
          title="Chamar no WhatsApp"
        >
          <WhatsappLogo size={13} weight="fill" />
          WhatsApp
        </a>

        <a
          href={`https://instagram.com/${lead.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 flex-1 text-[11px] font-semibold
            bg-[#E1306C]/8 text-[#E1306C] border border-[#E1306C]/20 rounded-lg px-2 py-1.5
            hover:bg-[#E1306C]/15 transition-colors"
          title="Abrir Instagram"
        >
          <InstagramLogo size={13} weight="fill" />
          Instagram
        </a>

        <button
          onClick={handleCopyDM}
          className={`flex items-center justify-center gap-1 text-[11px] font-semibold rounded-lg px-2.5 py-1.5 border transition-all duration-200 ${
            copied
              ? 'bg-[#D4AF37]/15 text-[#D4AF37] border-[#D4AF37]/30'
              : 'bg-[#111] text-[#555] border-[#1e1e1e] hover:text-[#D4AF37] hover:border-[#D4AF37]/25'
          }`}
          title="Copiar script de DM"
        >
          {copied ? <Check size={13} weight="bold" /> : <CopySimple size={13} weight="bold" />}
          <span>{copied ? 'OK!' : 'DM'}</span>
        </button>
      </div>
    </div>
  );
}
