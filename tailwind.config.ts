import type { Config } from 'tailwindcss'

// Cores semânticas vêm de variáveis CSS (src/index.css).
// Para trocar o tema, mude só os valores lá.
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        surface2: token('surface-2'),
        fg: token('fg'),
        muted: token('muted'),
        line: token('line'),
        accent: token('accent'),
        'accent-text': token('accent-text'),
        'accent-ink': token('accent-ink'),
        // Paleta da marca (fixa nos dois temas)
        rio: '#3a2e22',
        papel: '#f8f3e9',
        sol: '#cb7c4e',
        solimoes: '#c9a468',
        mata: '#7e9473',
      },
      fontFamily: { sans: ['Arimo', 'Liberation Sans', 'Arial', 'sans-serif'] },
    },
  },
} satisfies Config
