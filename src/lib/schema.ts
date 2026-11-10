import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Escreva um pouco mais (mín. 10 caracteres)'),
})

export type ContactForm = z.infer<typeof contactSchema>
