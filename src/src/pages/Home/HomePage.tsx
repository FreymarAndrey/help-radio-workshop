import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroSection } from '../../components/HeroSection'

const highlights = [
  {
    title: 'Integrantes',
    description: 'Conoce al equipo y escucha sus presentaciones en audio.',
    to: '/integrantes',
  },
  {
    title: 'Trabajos',
    description: 'Explora proyectos académicos con galerías e imágenes.',
    to: '/trabajos',
  },
  {
    title: 'Cuentos',
    description: 'Narraciones e historias con ilustraciones y audio.',
    to: '/cuentos',
  },
]

export function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.to}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
              >
                <h2 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent">
                  Explorar →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}
