import { motion } from 'framer-motion'
import type { IWork } from '../interfaces/work.interface'
import { AudioPlayer } from './AudioPlayer'
import { Gallery } from './Gallery'
import { PdfViewer } from './PdfViewer'

interface WorkSectionProps {
  work: IWork
  showPdf?: boolean
}

export function WorkSection({ work, showPdf = true }: WorkSectionProps) {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            {work.category}
          </span>
          {work.date ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-muted">
              {work.date}
            </span>
          ) : null}
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{work.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {work.description}
        </p>
      </header>

      <Gallery images={work.images} altPrefix={work.title} />

      {work.audio ? (
        <AudioPlayer src={work.audio} label="Audio del trabajo" />
      ) : null}

      {showPdf ? <PdfViewer src={work.pdf} title={work.title} /> : null}
    </motion.div>
  )
}
