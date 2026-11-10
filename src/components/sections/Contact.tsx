import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { profile } from '@/data/profile'
import { contactSchema, type ContactForm } from '@/lib/schema'
import { openMailClient } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'

const field = 'mt-1 w-full rounded-xl border-[1.5px] border-solimoes bg-white/10 px-3 py-2.5 text-papel placeholder:text-papel/50'

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })
  const items = [
    { label: 'E-mail', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Telefone', value: profile.phone, href: profile.phoneHref },
    { label: 'LinkedIn', value: profile.name, href: profile.linkedin },
    { label: 'Localização', value: profile.city },
  ]

  return (
    <section id="contato" className="mx-auto mt-8 max-w-5xl px-4">
      <div className="grid gap-10 rounded-3xl bg-rio p-6 text-papel sm:p-12 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="grid gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-solimoes">Contato</span>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
            Tem uma vaga ou um projeto?<em className="block not-italic text-solimoes">Vamos conversar.</em>
          </h2>
          <ul className="mt-2 grid gap-4">
            {items.map((i) => (
              <li key={i.label}>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-solimoes">{i.label}</p>
                {i.href ? <a href={i.href} className="underline">{i.value}</a> : <p>{i.value}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/15 bg-black/30 p-5 sm:p-6">
          <h3 className="text-lg font-bold">Envie uma mensagem</h3>
          <p className="text-sm text-papel/75">Conta o que você precisa. O envio abre o seu app de e-mail já preenchido.</p>
          <form onSubmit={handleSubmit(openMailClient)} className="mt-4 grid gap-3" noValidate>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm font-bold">Nome
                <input className={field} placeholder="Seu nome" {...register('name')} />
                {errors.name && <span role="alert" className="text-xs font-normal text-solimoes">{errors.name.message}</span>}
              </label>
              <label className="text-sm font-bold">E-mail
                <input type="email" className={field} placeholder="seu@email.com" {...register('email')} />
                {errors.email && <span role="alert" className="text-xs font-normal text-solimoes">{errors.email.message}</span>}
              </label>
            </div>
            <label className="text-sm font-bold">Assunto
              <input className={field} placeholder="Vaga, freela ou outro assunto" {...register('subject')} />
            </label>
            <label className="text-sm font-bold">Mensagem
              <textarea rows={4} className={field} placeholder="Descreva a vaga ou o projeto" {...register('message')} />
              {errors.message && <span role="alert" className="text-xs font-normal text-solimoes">{errors.message.message}</span>}
            </label>
            <Button type="submit" className="mx-auto !border-mata !bg-mata !text-rio dark:!border-sol dark:!bg-sol">Enviar mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
