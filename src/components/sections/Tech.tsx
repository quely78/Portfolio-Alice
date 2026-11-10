import { tech } from '@/data/tech'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Tech() {
  return (
    <section id="tecnologias" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle before="Minhas" highlight="tecnologias" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tech.map((g) => (
          <article key={g.title} className="rounded-2xl border border-line bg-surface p-5">
            <h3 className="font-bold">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-full border-[1.5px] border-accent px-3 py-0.5 text-xs text-accent-text">{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
