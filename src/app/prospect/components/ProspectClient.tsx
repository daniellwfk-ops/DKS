'use client';

import { useState } from 'react';
import {
  FunnelSimple,
  Export,
  Plus,
  TrendUp,
  WhatsappLogo,
  InstagramLogo,
  Trophy,
} from '@phosphor-icons/react';
import { Lead, LeadStatus } from '../types';
import KanbanBoard from './KanbanBoard';
import SearchModal from './SearchModal';

interface ProspectClientProps {
  initialLeads: Lead[];
}

export default function ProspectClient({ initialLeads }: ProspectClientProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMove = async (leadId: string, newStatus: LeadStatus) => {
    // Optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );

    try {
      await fetch(`/api/prospect/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (error) {
      console.error('Falha ao atualizar status do lead:', error);
      // Aqui poderíamos reverter o estado em caso de erro no mundo real
    }
  };

  const handleLeadsFound = async (newLeads: Lead[]) => {
    try {
      // Salva no banco de dados primeiro
      const res = await fetch('/api/prospect/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeads),
      });

      if (!res.ok) throw new Error('Falha ao salvar leads');

      const savedLeads = await res.json();

      // Atualiza a UI com os novos leads já dedupados e salvos
      setLeads((prev) => {
        const existingIds = new Set(prev.map((l) => l.nome + l.telefone)); // Deduplicação simples pra UI
        const toAdd = savedLeads.filter((l: Lead) => !existingIds.has(l.nome + l.telefone));
        return [...toAdd, ...prev];
      });
    } catch (error) {
      console.error('Erro ao salvar os leads na base de dados:', error);
    }
  };

  const total = leads.length;
  const comWhatsApp = leads.filter((l) => l.telefone).length;
  const comInstagram = leads.filter((l) => l.instagram).length;
  const ganhos = leads.filter((l) => l.status === 'ganho').length;

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col">
      {/* Top bar */}
      <header className="shrink-0 border-b border-[#111] bg-[#050505]">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37] font-bold text-lg tracking-tight">DKS</span>
              <span className="text-[#2a2a2a] text-lg font-light">/</span>
              <span className="text-white font-semibold text-lg">Prospect</span>
              <span className="text-[10px] font-bold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-2 py-0.5 rounded-full ml-1 tracking-wider">
                BETA
              </span>
            </div>
            <p className="text-[#3a3a3a] text-[11px] mt-0.5 tracking-wide">
              Mini-CRM · Prospecção B2B Restaurantes
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-[11px] font-medium text-[#555] hover:text-[#888] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-lg px-3 py-2 transition-all">
              <FunnelSimple size={13} />
              Filtros
            </button>
            <button className="flex items-center gap-2 text-[11px] font-medium text-[#555] hover:text-[#888] border border-[#1a1a1a] hover:border-[#2a2a2a] rounded-lg px-3 py-2 transition-all">
              <Export size={13} />
              Exportar
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-[11px] font-bold bg-[#D4AF37] hover:bg-[#C5A028] text-black rounded-lg px-4 py-2 transition-all"
            >
              <Plus size={13} weight="bold" />
              Buscar Leads
            </button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="flex items-center gap-1 px-6 pb-4 overflow-x-auto">
          {[
            {
              icon: <TrendUp size={12} />,
              value: total,
              label: 'Total de Leads',
              color: 'text-white',
              bg: 'bg-white/5',
            },
            {
              icon: <WhatsappLogo size={12} weight="fill" />,
              value: comWhatsApp,
              label: 'Com WhatsApp',
              color: 'text-[#25D366]',
              bg: 'bg-[#25D366]/8',
            },
            {
              icon: <InstagramLogo size={12} weight="fill" />,
              value: comInstagram,
              label: 'Com Instagram',
              color: 'text-[#E1306C]',
              bg: 'bg-[#E1306C]/8',
            },
            {
              icon: <Trophy size={12} weight="fill" />,
              value: ganhos,
              label: 'Ganhos',
              color: 'text-emerald-400',
              bg: 'bg-emerald-400/8',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`flex items-center gap-2 ${stat.bg} rounded-lg px-3 py-1.5 mr-2 shrink-0`}
            >
              <span className={stat.color}>{stat.icon}</span>
              <span className={`text-[13px] font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-[10px] text-[#444]">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      {/* Board */}
      <main className="flex-1 p-6 overflow-hidden">
        <KanbanBoard leads={leads} onMove={handleMove} />
      </main>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onLeadsFound={handleLeadsFound}
      />
    </div>
  );
}
