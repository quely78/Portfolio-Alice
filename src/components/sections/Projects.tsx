import { useState } from 'react'
import { projects } from '@/data/projects'
import type { ProjectCategory } from '@/types'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'

const filters: ('Todos' | ProjectCategory)[] = ['Todos', 'Front-end', 'Full-stack', 'Produto', 'Design']

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('Todos')
  const [open, setOpen] = useState<string | null>(null)
  const visible = projects.filter((p) => filter === 'Todos' || p.categories.includes(filter))

  return (
    <section id="projetos" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle before="Meus" highlight="projetos" />
      <div role="group" aria-label="Filtrar projetos" className="mb-6 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className="rounded-full border-[1.5px] border-line px-4 py-1.5 text-sm aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-ink"
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => {
          const expanded = open === p.id
          return (
            <article key={p.id} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
              {p.image ? (
                <img src={p.image.src} alt={p.image.alt} loading="lazy" className="h-40 w-full border-b border-line object-cover object-top" />
              ) : (
                <div className="grid h-28 place-items-center bg-accent text-3xl font-bold text-accent-ink" aria-hidden="true">{p.name}</div>
              )}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="text-xs font-bold text-accent-text">{p.status} · {p.categories.join(' · ')}</p>
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-xs text-muted">{p.role}</p>
                <p className="text-sm text-muted">{p.summary}</p>
                {expanded && (
                  <ul className="list-disc pl-5 text-sm text-muted">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
                )}
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => <li key={s} className="rounded-full border-[1.5px] border-accent px-3 py-0.5 text-xs text-accent-text">{s}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <Button variant="outline" className="!px-3 !py-2" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : p.id)}>
                    {expanded ? 'Fechar' : 'Ver detalhes'}
                  </Button>
                  {p.links?.case && <Button href={p.links.case} className="!px-3 !py-2" target="_blank" rel="noopener noreferrer">Case</Button>}
                  {p.links?.github && <Button href={p.links.github} variant="outline" className="!px-3 !py-2" target="_blank" rel="noopener noreferrer">GitHub</Button>}
                  {p.links?.site && <Button href={p.links.site} variant="outline" className="!px-3 !py-2" target="_blank" rel="noopener noreferrer">Site</Button>}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
