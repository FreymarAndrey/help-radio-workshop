import { motion } from 'framer-motion'

interface AnimatedTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function AnimatedTitle({
  title,
  subtitle,
  align = 'center',
}: AnimatedTitleProps) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.header
      className={`flex flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  )
}
