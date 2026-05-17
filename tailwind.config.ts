import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        'navy-2': '#132033',
        'navy-3': '#1A2D45',
        indigo: '#4F46E5',
        'indigo-2': '#6366F1',
        ice: '#C7D2FE',
        'text-2': '#94A3B8',
        'text-3': '#64748B',
        amber: '#F59E0B',
        green: '#10B981',
        red: '#EF4444',
      },
    },
  },
  plugins: [],
}
export default config
