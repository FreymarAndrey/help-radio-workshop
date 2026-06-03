import { motion } from 'framer-motion'

interface EvidenceFilterProps {
  categories: readonly string[]
  active: string
  onChange: (category: string) => void
}

export function EvidenceFilter({ categories, active, onChange }: EvidenceFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => {
        const isActive = active === category
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'text-white'
                : 'text-ink-muted hover:bg-slate-100 hover:text-ink'
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="evidence-filter-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            ) : null}
            <span className="relative z-10">{category}</span>
          </button>
        )
      })}
    </div>
  )
}
