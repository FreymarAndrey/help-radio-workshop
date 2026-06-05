import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroSection } from "../../components/HeroSection";
import { MediaBackground } from "../../components/MediaBackground";
import { MemberPreviewCard } from "../../components/MemberPreviewCard";
import type { IMember } from "../../interfaces/member.interface";
import { getMembers } from "../../services/members.service";

const photoGroup = `${import.meta.env.BASE_URL}images/integrantes/grupal.jpg`;

export function HomePage() {
  const [members, setMembers] = useState<IMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getMembers().then((data) => {
      if (active) {
        setMembers(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="relative isolate min-h-full">
      <MediaBackground />

      <HeroSection />

      <section
        id="equipo"
        className="relative z-10 mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 sm:px-6 lg:px-8"
      >
        <h2 className="text-center font-semibold text-ink sm:text-4xl leading-tight mb-4 text-4xl sm:mb-6 lg:mb-8">
          Nuestro equipo
        </h2>
        <motion.header
          className="mb-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="mt-4 text-base leading-relaxed text-subtitle sm:text-lg">
              Somos un equipo de cinco estudiantes creativos, comprometidos y
              apasionados por la comunicación. Nos caracterizamos por nuestra
              actitud positiva, el trabajo colaborativo y la capacidad de
              transformar ideas en proyectos innovadores. Juntos combinamos
              nuestros talentos y perspectivas para crear contenidos dinámicos,
              inspiradores y auténticos, demostrando que cuando la creatividad y
              el trabajo en equipo se unen, se pueden lograr grandes resultados.
            </p>
          </div>

          <motion.figure
            className="order-1 relative mx-auto w-full max-w-xs overflow-visible sm:max-w-sm lg:order-2 lg:mx-0 lg:max-w-md lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-4xl bg-accent/30 blur-2xl sm:-inset-3 sm:bg-accent/20 sm:blur-xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 shadow-[0_20px_50px_-10px_rgba(249,115,22,0.45)]">
              <img
                src={photoGroup}
                alt="Foto grupal del equipo en el estudio de radio"
                className="aspect-3/4 max-h-[65vh] w-full rounded-2xl object-cover object-[center_15%]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.figure>
        </motion.header>

        {loading ? (
          <p className="text-center text-ink-muted">Cargando integrantes…</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {members.map((member, index) => (
              <MemberPreviewCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
