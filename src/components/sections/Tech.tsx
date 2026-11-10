import { tech } from '@/data/tech'
import type { TechItem } from '@/types'
import { SectionTitle } from '@/components/ui/SectionTitle'

function TechTile({ item }: { item: TechItem }) {
  const Icon = item.icon
  return (
    <li
      title={item.name}
      className="flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-line bg-bg/60 px-2 py-3 text-center transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {item.logo ? (
        <img
          src={item.logo}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          className={`size-8 shrink-0 object-contain ${item.invertDark ? 'dark:invert' : ''} ${item.outlineDark ? 'dark:rounded-md dark:ring-1 dark:ring-papel/40' : ''}`}
        />
      ) : Icon ? (
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-text" aria-hidden="true">
          <Icon className="size-5" />
        </span>
      ) : null}
      <span className="min-w-0 text-sm font-semibold">{item.name}</span>
    </li>
  )
}

export function Tech() {
  return (
    <section id="tecnologias" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle before="Minhas" highlight="tecnologias" />
      <div className="grid gap-5 lg:grid-cols-2">
        {tech.map((g) => {
          const GroupIcon = g.icon
          return (
            <article key={g.title} className="rounded-2xl border border-line bg-surface p-5 transition-shadow hover:shadow-md sm:p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-line pb-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-text" aria-hidden="true">
                  <GroupIcon className="size-5" />
                </span>
                <h3 className="text-xl font-bold">{g.title}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {g.items.map((i) => <TechTile key={i.name} item={i} />)}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}
