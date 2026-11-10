import { experience } from '@/data/experience'
import type { ExperienceItem } from '@/types'
import { SectionTitle } from '@/components/ui/SectionTitle'

function Timeline({ items }: { items: ExperienceItem[] }) {
  // Zigue-zague: cada item ocupa a própria linha (grid-row), alternando as colunas.
  return (
    <ol className="relative grid grid-cols-1 gap-y-5 before:absolute before:inset-y-1 before:left-3 before:w-0.5 before:bg-line md:grid-cols-2 md:gap-x-16 md:gap-y-6 md:before:left-1/2 md:before:-translate-x-px">
      {items.map((it, idx) => {
        const left = idx % 2 === 0
        return (
          <li
            key={it.id}
            style={{ gridRow: idx + 1 }}
            className={`relative ml-8 grid gap-2 rounded-2xl border border-line bg-surface p-4 md:ml-0 md:p-5 ${left ? 'md:col-start-1' : 'md:col-start-2'}
              before:absolute before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-accent before:shadow-[0_0_0_5px_rgb(var(--bg))]
              ${left ? 'before:-left-[calc(1.5rem+6px)] md:before:-left-auto md:before:-right-[calc(2rem+6px)]' : 'before:-left-[calc(1.5rem+6px)] md:before:-left-[calc(2rem+6px)]'}`}
          >
            <p className="text-xs text-muted">{it.period}</p>
            <h3 className="font-bold leading-tight">{it.title}</h3>
            <p className="text-sm font-bold text-accent-text underline underline-offset-4">{it.organization}</p>
            {it.location && <p className="text-xs text-muted">{it.location}</p>}
            <p className="text-sm text-muted">{it.description}</p>
            {it.highlights && (
              <ul className="grid gap-1.5 text-xs">
                {it.highlights.map((h) => (
                  <li key={h} className="relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">{h}</li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle before="Minha" highlight="Experiência" />
      <Timeline items={experience.filter((e) => e.group === 'experience')} />
      <h3 className="mb-6 mt-12 text-center text-xl font-bold">Formação e comunidade</h3>
      <Timeline items={experience.filter((e) => e.group === 'education')} />
    </section>
  )
}
