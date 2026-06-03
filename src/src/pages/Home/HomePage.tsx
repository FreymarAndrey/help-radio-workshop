import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroSection } from "../../components/HeroSection";
import { MediaBackground } from "../../components/MediaBackground";
import { MemberPreviewCard } from "../../components/MemberPreviewCard";
import type { IMember } from "../../interfaces/member.interface";
import { getMembers } from "../../services/members.service";

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
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Nuestro equipo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-ink-muted">
            Conoce a cada integrante, escucha su presentación y descubre su rol
            en el taller de radio.
          </p>
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
