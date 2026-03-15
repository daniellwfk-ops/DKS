'use client';

import { useState } from 'react';
import {
  X,
  MagnifyingGlass,
  MapPin,
  Sliders,
  CircleNotch,
  InstagramLogo,
  WhatsappLogo,
  CheckCircle,
  Warning,
  ForkKnife,
} from '@phosphor-icons/react';
import { Lead } from '../types';

const NICHO_TAGS = [
  'Hamburgueria', 'Pizzaria', 'Churrascaria', 'Sushi',
  'Italiana', 'Mexicano', 'Frutos do Mar', 'Bar e Petiscos',
  'Café e Bistrô', 'Vegano',
];

const CIDADE_TAGS = [
  'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG',
  'Curitiba, PR', 'Porto Alegre, RS', 'Florianópolis, SC',
  'Salvador, BA', 'Brasília, DF',
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadsFound: (leads: Lead[]) => void;
}

type Phase = 'form' | 'loading' | 'result';

export default function SearchModal({ isOpen, onClose, onLeadsFound }: SearchModalProps) {
  const [nicho, setNicho] = useState('');
  const [cidade, setCidade] = useState('');
  const [max, setMax] = useState(20);
  const [phase, setPhase] = useState<Phase>('form');
  const [error, setError] = useState('');
  const [foundLeads, setFoundLeads] = useState<Lead[]>([]);

  if (!isOpen) return null;

  const reset = () => {
    setPhase('form');
    setError('');
    setFoundLeads([]);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSearch = async () => {
    if (!nicho.trim() || !cidade.trim()) {
      setError('Preencha o nicho e a cidade antes de buscar.');
      return;
    }
    setError('');
    setPhase('loading');

    try {
      const res = await fetch('/api/prospect/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nicho: nicho.trim(), cidade: cidade.trim(), max }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Erro ${res.status}`);
      }

      setFoundLeads(data.leads ?? []);
      setPhase('result');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Falha ao buscar leads.');
      setPhase('form');
    }
  };

  const handleAddToCRM = () => {
    onLeadsFound(foundLeads);
    handleClose();
  };

  const withInstagram = foundLeads.filter((l) => l.instagram).length;
  const withPhone = foundLeads.filter((l) => l.telefone).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-[#080808] border border-[#1c1c1c] rounded-2xl w-full max-w-[520px] shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#111]">
          <div>
            <h2 className="text-[14px] font-bold text-white">Buscar Leads no Google Maps</h2>
            <p className="text-[11px] text-[#444] mt-0.5">
              Motor: Apify · compass/google-maps-scraper
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-[#383838] hover:text-white transition-colors p-1 rounded-lg hover:bg-[#111]"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {/* Loading phase */}
          {phase === 'loading' && (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <CircleNotch size={36} className="text-[#D4AF37] animate-spin" />
              <div className="text-center">
                <p className="text-[13px] font-semibold text-white">Buscando no Google Maps...</p>
                <p className="text-[11px] text-[#444] mt-1">
                  {nicho} · {cidade} · até {max} resultados
                </p>
                <p className="text-[10px] text-[#333] mt-3">Isso pode levar até 60 segundos.</p>
              </div>
            </div>
          )}

          {/* Result phase */}
          {phase === 'result' && (
            <div className="space-y-4">
              {foundLeads.length === 0 ? (
                <div className="flex flex-col items-center py-10 gap-3 text-center">
                  <Warning size={32} className="text-[#555]" />
                  <p className="text-[13px] text-[#888]">Nenhum resultado encontrado.</p>
                  <p className="text-[11px] text-[#444]">Tente um nicho ou cidade diferente.</p>
                </div>
              ) : (
                <>
                  {/* Summary cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-xl p-3 text-center">
                      <p className="text-[22px] font-bold text-white">{foundLeads.length}</p>
                      <p className="text-[10px] text-[#555] mt-0.5">Leads encontrados</p>
                    </div>
                    <div className="bg-[#0f0f0f] border border-[#25D366]/15 rounded-xl p-3 text-center">
                      <p className="text-[22px] font-bold text-[#25D366]">{withPhone}</p>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <WhatsappLogo size={10} className="text-[#25D366]/60" weight="fill" />
                        <p className="text-[10px] text-[#444]">Com WhatsApp</p>
                      </div>
                    </div>
                    <div className="bg-[#0f0f0f] border border-[#E1306C]/15 rounded-xl p-3 text-center">
                      <p className="text-[22px] font-bold text-[#E1306C]">{withInstagram}</p>
                      <div className="flex items-center justify-center gap-1 mt-0.5">
                        <InstagramLogo size={10} className="text-[#E1306C]/60" weight="fill" />
                        <p className="text-[10px] text-[#444]">Com Instagram</p>
                      </div>
                    </div>
                  </div>

                  {/* Lead preview list */}
                  <div className="bg-[#050505] border border-[#111] rounded-xl overflow-hidden max-h-52 overflow-y-auto">
                    {foundLeads.slice(0, 8).map((lead, i) => (
                      <div
                        key={lead.id}
                        className={`flex items-center justify-between px-4 py-2.5 ${
                          i !== foundLeads.length - 1 ? 'border-b border-[#0f0f0f]' : ''
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] font-semibold text-white truncate">{lead.nome}</p>
                          <p className="text-[10px] text-[#444] truncate">{lead.bairro || lead.cidade}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-3 shrink-0">
                          {lead.telefone && (
                            <WhatsappLogo size={12} className="text-[#25D366]" weight="fill" />
                          )}
                          {lead.instagram && (
                            <InstagramLogo size={12} className="text-[#E1306C]" weight="fill" />
                          )}
                          <span className="text-[10px] text-[#D4AF37]">★ {lead.rating}</span>
                        </div>
                      </div>
                    ))}
                    {foundLeads.length > 8 && (
                      <div className="px-4 py-2 text-[10px] text-[#333] text-center border-t border-[#0f0f0f]">
                        + {foundLeads.length - 8} outros resultados
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Form phase */}
          {phase === 'form' && (
            <div className="space-y-5">
              {/* Nicho */}
              <div>
                <label className="block text-[10px] font-bold text-[#555] uppercase tracking-widest mb-2">
                  Nicho / Tipo de Estabelecimento
                </label>
                <div className="relative">
                  <ForkKnife
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#333] pointer-events-none"
                  />
                  <input
                    type="text"
                    value={nicho}
                    onChange={(e) => { setNicho(e.target.value); setError(''); }}
                    placeholder="ex: Hamburgueria, Pizzaria, Sushi..."
                    className="w-full bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl pl-9 pr-4 py-2.5 text-[13px] text-white placeholder-[#2a2a2a]
                      focus:outline-none focus:border-[#D4AF37]/35 transition-colors"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {NICHO_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => { setNicho(tag); setError(''); }}
                      className={`text-[10px] px-2.5 py-0.5 rounded-full border transition-all ${
                        nicho === tag
                          ? 'bg-[#D4AF37]/12 text-[#D4AF37] border-[#D4AF37]/25'
                          : 'bg-transparent text-[#444] border-[#1a1a1a] hover:text-[#777] hover:border-[#272727]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cidade */}
              <div>
                <label className="block text-[10px] font-bold text-[#555] uppercase tracking-widest mb-2">
                  Cidade / Localização
                </label>
                <div className="relative">
                  <MapPin
                    size={13}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#333] pointer-events-none"
                  />
                  <input
                    type="text"
                    value={cidade}
                    onChange={(e) => { setCidade(e.target.value); setError(''); }}
                    placeholder="ex: São Paulo, SP"
                    className="w-full bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl pl-9 pr-4 py-2.5 text-[13px] text-white placeholder-[#2a2a2a]
                      focus:outline-none focus:border-[#D4AF37]/35 transition-colors"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {CIDADE_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => { setCidade(tag); setError(''); }}
                      className={`text-[10px] px-2.5 py-0.5 rounded-full border transition-all ${
                        cidade === tag
                          ? 'bg-[#D4AF37]/12 text-[#D4AF37] border-[#D4AF37]/25'
                          : 'bg-transparent text-[#444] border-[#1a1a1a] hover:text-[#777] hover:border-[#272727]'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantidade */}
              <div>
                <label className="flex items-center justify-between text-[10px] font-bold text-[#555] uppercase tracking-widest mb-2">
                  <span className="flex items-center gap-1.5">
                    <Sliders size={11} />
                    Quantidade máxima
                  </span>
                  <span className="text-[#D4AF37] font-bold text-[14px] normal-case tracking-normal">
                    {max}
                  </span>
                </label>
                <input
                  type="range"
                  min={5}
                  max={40}
                  step={5}
                  value={max}
                  onChange={(e) => setMax(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#2a2a2a] mt-1">
                  <span>5</span>
                  <span>40</span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-2.5">
                  <Warning size={14} className="text-red-400 shrink-0" />
                  <p className="text-[12px] text-red-400">{error}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#0f0f0f]">
          {phase === 'result' && foundLeads.length > 0 ? (
            <div className="flex gap-3">
              <button
                onClick={reset}
                className="flex-1 text-[12px] font-medium text-[#555] hover:text-white border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-xl py-2.5 transition-all"
              >
                Nova busca
              </button>
              <button
                onClick={handleAddToCRM}
                className="flex-1 flex items-center justify-center gap-2 text-[12px] font-bold bg-[#D4AF37] hover:bg-[#C5A028] text-black rounded-xl py-2.5 transition-all"
              >
                <CheckCircle size={14} weight="fill" />
                Adicionar {foundLeads.length} ao CRM
              </button>
            </div>
          ) : phase === 'result' && foundLeads.length === 0 ? (
            <button
              onClick={reset}
              className="w-full text-[12px] font-medium text-[#555] hover:text-white border border-[#1a1a1a] rounded-xl py-2.5 transition-all"
            >
              Tentar novamente
            </button>
          ) : (
            <button
              onClick={handleSearch}
              disabled={phase === 'loading' || !nicho.trim() || !cidade.trim()}
              className="w-full flex items-center justify-center gap-2 text-[12px] font-bold
                bg-[#D4AF37] hover:bg-[#C5A028] text-black rounded-xl py-2.5
                disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {phase === 'loading' ? (
                <>
                  <CircleNotch size={14} className="animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  <MagnifyingGlass size={14} weight="bold" />
                  Buscar Agora
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
