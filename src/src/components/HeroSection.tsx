import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.55,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
      <div
        ref={glowRef}
        className="pointer-events-none absolute right-[20%] top-16 z-0 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Presentación multimedia universitaria
        </motion.p>

        <motion.h1
          className="font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Voces, trabajos y narrativas de nuestro grupo
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Explora integrantes, proyectos académicos y cuentos narrados en una
          experiencia interactiva pensada para compartir nuestro trabajo en el
          aula y más allá.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#equipo"
            className="inline-flex rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Conocer al equipo ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
