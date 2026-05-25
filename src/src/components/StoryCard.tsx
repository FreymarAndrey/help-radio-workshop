import { motion } from 'framer-motion'
import type { IStory } from '../interfaces/story.interface'
import { AudioPlayer } from './AudioPlayer'

interface StoryCardProps {
  story: IStory
  index?: number
}

export function StoryCard({ story, index = 0 }: StoryCardProps) {
  return (
    <motion.article
      className="group grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="relative min-h-56 overflow-hidden bg-gradient-to-br from-teal-900/10 to-amber-500/10">
        <motion.img
          src={story.coverImage}
          alt={story.title}
          className="h-full w-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">{story.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            {story.description}
          </p>
        </div>
        <AudioPlayer src={story.audio} label="Escuchar cuento" />
      </div>
    </motion.article>
  )
}
