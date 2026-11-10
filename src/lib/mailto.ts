import { profile } from '@/data/profile'
import type { ContactForm } from './schema'

// Troque por Formspree / Web3Forms / função serverless quando quiser envio direto.
export function openMailClient(data: ContactForm) {
  const subject = data.subject || `Contato pelo portfólio: ${data.name}`
  const body = `${data.message}\n\n${data.name} (${data.email})`
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
