import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { IMember } from '../interfaces/member.interface'

interface MemberCardProps {
  member: IMember
  index?: number
}

export function MemberCard({ member, index = 0 }: MemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/integrantes/${member.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:border-accent/40 hover:shadow-md"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-accent-soft">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
            {member.role}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
              {member.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-3">
              {member.description}
            </p>
          </div>
          <span className="text-sm font-semibold text-accent">Ver perfil →</span>
        </div>
      </Link>
    </motion.article>
  )
}
