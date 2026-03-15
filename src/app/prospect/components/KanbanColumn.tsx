'use client';

import { useState } from 'react';
import { Lead, LeadStatus, ColumnDef } from '../types';
import LeadCard from './LeadCard';

interface KanbanColumnProps {
  column: ColumnDef;
  leads: Lead[];
  allStatuses: { id: LeadStatus; label: string }[];
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  onDrop: (status: LeadStatus) => void;
  onMove: (leadId: string, newStatus: LeadStatus) => void;
}

export default function KanbanColumn({
  column,
  leads,
  allStatuses,
  onDragStart,
  onDragEnd,
  onDrop,
  onMove,
}: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Only fire when leaving the column itself, not child elements
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    onDrop(column.id);
  };

  const otherStatuses = allStatuses.filter((s) => s.id !== column.id);

  return (
    <div className="flex-shrink-0 w-[272px] flex flex-col">
      {/* Column header */}
      <div
        className="flex items-center justify-between mb-3 px-1"
        style={{ borderBottom: `1px solid ${column.accent}22` }}
      >
        <div className="flex items-center gap-2 pb-3">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: column.dotColor }}
          />
          <span className="text-[12px] font-semibold text-white/80 tracking-wide whitespace-nowrap">
            {column.label}
          </span>
        </div>
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-3"
          style={{
            color: column.dotColor,
            backgroundColor: `${column.dotColor}18`,
            border: `1px solid ${column.dotColor}30`,
          }}
        >
          {leads.length}
        </span>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex flex-col gap-3 flex-1 min-h-[120px] rounded-xl p-1 transition-all duration-150 ${
          isDragOver
            ? 'bg-[#D4AF37]/5 ring-1 ring-[#D4AF37]/20'
            : 'bg-transparent'
        }`}
      >
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            onDragStart={() => onDragStart(lead.id)}
            onDragEnd={onDragEnd}
            onMove={onMove}
            statuses={otherStatuses}
          />
        ))}

        {leads.length === 0 && (
          <div
            className={`flex items-center justify-center h-20 rounded-lg border border-dashed text-[11px] transition-colors duration-150 ${
              isDragOver
                ? 'border-[#D4AF37]/30 text-[#D4AF37]/50'
                : 'border-[#1e1e1e] text-[#333]'
            }`}
          >
            {isDragOver ? 'Soltar aqui' : 'Vazio'}
          </div>
        )}
      </div>
    </div>
  );
}
