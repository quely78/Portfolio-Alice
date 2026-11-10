import { profile } from '@/data/profile'

const quick = [
  ['#topo', 'Início'], ['#sobre', 'Sobre'], ['#experiencia', 'Experiência'], ['#projetos', 'Projetos'], ['#contato', 'Contato'],
]

export function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-5xl border-t border-line px-4 pb-8">
      <div className="grid gap-8 pt-9 text-center md:grid-cols-[1.4fr_1fr_1fr] md:text-left">
        <div>
          <strong className="text-xl text-accent-text">{profile.name}</strong>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted md:mx-0">
            Desenvolvedora front-end em Manaus. Crio interfaces e conduzo produtos do requisito à entrega.
          </p>
        </div>
        <nav aria-label="Links rápidos" className="grid gap-2 text-sm">
          <h4 className="font-bold">Links rápidos</h4>
          {quick.map(([href, label]) => (
            <a key={href} href={href} className="text-muted hover:text-accent-text">{label}</a>
          ))}
        </nav>
        <div className="text-sm">
          <h4 className="mb-2 font-bold">Redes sociais</h4>
          <div className="flex justify-center gap-3 md:justify-start">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-surface px-3 py-2">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-line bg-surface px-3 py-2">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="rounded-xl border border-line bg-surface px-3 py-2">E-mail</a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-line pt-5 text-sm text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#topo" className="hover:text-accent-text">↑ Voltar ao topo</a>
      </div>
    </footer>
  )
}
