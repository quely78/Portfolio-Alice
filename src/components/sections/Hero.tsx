import foto from '@/assets/foto.jpg'
import { profile } from '@/data/profile'
import { Button } from '@/components/ui/Button'
import { Pill } from '@/components/ui/Pill'

export function Hero() {
  return (
    <section id="topo" className="mx-auto grid max-w-5xl justify-items-center gap-5 px-4 pb-4 pt-12 text-center sm:pt-20">
      <img
        src={foto}
        alt={`Foto de ${profile.name}`}
        width={200}
        height={200}
        className="h-44 w-44 rounded-[28px] border-4 border-accent object-cover object-[center_30%] ring-8 ring-surface2 sm:h-52 sm:w-52"
      />
      {/* <Pill>{profile.availability}</Pill> */}
      <div>
        <p className="text-muted">Olá, eu sou</p>
        <h1 className="text-5xl font-bold leading-none tracking-tight text-accent-text sm:text-6xl">{profile.name}</h1>
        <p className="mt-2 text-2xl font-bold sm:text-3xl">{profile.role}</p>
      </div>
      {/* <p className="max-w-prose text-lg text-muted">{profile.tagline}</p> */}
      <p className="max-w-sm text-balance text-sm text-muted">{profile.location}</p>
      <div className="flex gap-3">
        <Button href="#projetos">Ver projetos</Button>
        <Button href={profile.resume} variant="outline" target="_blank" rel="noopener noreferrer">Baixar currículo</Button>
      </div>
    </section>
  )
}
