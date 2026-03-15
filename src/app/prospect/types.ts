export type LeadStatus =
  | 'capturados'
  | 'qualificados'
  | 'abordados'
  | 'respondeu'
  | 'reuniao'
  | 'ganho'
  | 'perdido';

export interface Lead {
  id: string;
  nome: string;
  endereco: string;
  bairro: string;
  telefone: string;
  instagram: string;
  rating: number;
  totalReviews: number;
  status: LeadStatus;
  nicho: string;
  cidade: string;
  createdAt: string;
}

export interface ColumnDef {
  id: LeadStatus;
  label: string;
  accent: string;
  dotColor: string;
}
