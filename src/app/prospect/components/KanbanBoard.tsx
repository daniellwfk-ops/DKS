'use client';

import { useState } from 'react';
import { Lead, LeadStatus, ColumnDef } from '../types';
import KanbanColumn from './KanbanColumn';

const COLUMNS: ColumnDef[] = [
  { id: 'capturados',   label: 'Capturados',       accent: '#3B82F6', dotColor: '#60A5FA' },
  { id: 'qualificados', label: 'Qualificados',      accent: '#8B5CF6', dotColor: '#A78BFA' },
  { id: 'abordados',    label: 'Abordados',         accent: '#EAB308', dotColor: '#FDE047' },
  { id: 'respondeu',   label: 'Respondeu',          accent: '#F97316', dotColor: '#FB923C' },
  { id: 'reuniao',      label: 'Reunião Agendada',  accent: '#10B981', dotColor: '#34D399' },
  { id: 'ganho',        label: '✓ Ganho',           accent: '#22C55E', dotColor: '#4ADE80' },
  { id: 'perdido',      label: '✕ Perdido',         accent: '#EF4444', dotColor: '#F87171' },
];

export const ALL_STATUSES = COLUMNS.map((c) => ({ id: c.id, label: c.label }));

interface KanbanBoardProps {
  leads: Lead[];
  onMove: (leadId: string, newStatus: LeadStatus) => void;
}

export default function KanbanBoard({ leads, onMove }: KanbanBoardProps) {
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = (id: string) => setDraggedId(id);
  const handleDragEnd = () => setDraggedId(null);
  const handleDrop = (status: LeadStatus) => {
    if (draggedId) onMove(draggedId, status);
  };

  return (
    <div className="flex gap-5 overflow-x-auto pb-6">
      {COLUMNS.map((col) => (
        <KanbanColumn
          key={col.id}
          column={col}
          leads={leads.filter((l) => l.status === col.id)}
          allStatuses={ALL_STATUSES}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDrop={handleDrop}
          onMove={onMove}
        />
      ))}
    </div>
  );
}
