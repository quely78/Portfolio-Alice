import { profile } from '@/data/profile'
import { Mascot } from '@/components/Mascot'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-4 py-16">
      <SectionTitle before="Sobre" highlight="mim" />
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4 text-muted">
          {profile.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
        </div>
        <Mascot className="mx-auto w-full max-w-[488px]" />
      </div>
    </section>
  )
}
