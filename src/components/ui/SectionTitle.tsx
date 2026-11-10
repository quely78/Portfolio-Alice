export function SectionTitle({ before, highlight }: { before: string; highlight: string }) {
  return (
    <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
      {before} <span className="text-accent-text">{highlight}</span>
    </h2>
  )
}
