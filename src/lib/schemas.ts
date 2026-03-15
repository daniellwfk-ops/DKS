import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, "Nome precisa ter no mínimo 2 caracteres."),
  email: z.string().email("E-mail inválido."),
  password: z.string().min(8, "Senha precisa ter no mínimo 8 caracteres."),
  restaurant: z.string().optional(),
  phone: z.string().optional(),
});

export const ProposalSchema = z.object({
  clientName: z.string().min(2, "Nome do cliente obrigatório."),
  restaurantName: z.string().optional(),
  email: z.string().email("E-mail inválido.").optional().or(z.literal("")),
  phone: z.string().optional(),
  services: z.array(z.unknown()).min(1, "Ao menos um serviço obrigatório."),
  total: z.number().positive("Total deve ser positivo."),
  validity: z.number().int().positive(),
  contractMonths: z.number().int().positive(),
  observations: z.string().optional(),
});
