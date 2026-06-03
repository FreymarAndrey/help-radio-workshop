import { useEffect, useState } from "react";
import { AnimatedTitle } from "../../components/AnimatedTitle";
import { MediaBackground } from "../../components/MediaBackground";
import { WorkCard } from "../../components/WorkCard";
import type { IWork } from "../../interfaces/work.interface";
import { getWorks } from "../../services/works.service";

export function WorksPage() {
  const [works, setWorks] = useState<IWork[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getWorks().then((data) => {
      if (active) {
        setWorks(data);
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
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AnimatedTitle
          title="Trabajos realizados"
          subtitle="Explora cada proyecto y consulta el detalle con galería, audio y documento PDF adjunto."
        />

        {loading ? (
          <p className="mt-12 text-center text-ink-muted">Cargando trabajos…</p>
        ) : (
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work, index) => (
              <WorkCard key={work.id} work={work} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
