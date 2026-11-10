import mascot from '@/assets/mascote.svg'

// SVG animado (CSS dentro do próprio arquivo). Respeita prefers-reduced-motion.
export function Mascot({ className = '' }: { className?: string }) {
  return <img src={mascot} alt="Mascote em pixel art com café e notebook" className={className} />
}
