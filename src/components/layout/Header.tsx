import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { profile } from '@/data/profile'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

// Ícones sobrepostos: o sol aparece no tema claro e a lua no escuro.
const icon = 'h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none'

export function Header() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'claro' : 'escuro'

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      {/* justify-between: nome à esquerda, links no meio, botão de tema no canto direito */}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href="#topo" className="text-lg font-bold text-accent-text">{profile.name.toLowerCase()}</a>

        <nav aria-label="Seções" className="flex items-center gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hidden text-sm text-muted hover:text-accent-text md:inline">{l.label}</a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggle}
          aria-label={`Mudar para o tema ${next}`}
          title={`Mudar para o tema ${next}`}
          className="relative grid size-11 shrink-0 place-items-center rounded-full border-[1.5px] border-line text-accent-text transition-colors hover:border-accent hover:bg-accent/10"
        >
          <Sun aria-hidden="true" className={`${icon} col-start-1 row-start-1 rotate-0 scale-100 dark:-rotate-90 dark:scale-0`} />
          <Moon aria-hidden="true" className={`${icon} col-start-1 row-start-1 rotate-90 scale-0 dark:rotate-0 dark:scale-100`} />
        </button>
      </div>
    </header>
  )
}
