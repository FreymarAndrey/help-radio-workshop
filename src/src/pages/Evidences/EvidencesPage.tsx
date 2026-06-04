import { useEffect, useState } from "react";
import { AnimatedTitle } from "../../components/AnimatedTitle";
import { EvidenceMediaGallery } from "../../components/EvidenceMediaGallery";
import { MediaBackground } from "../../components/MediaBackground";
import type { IEvidenceMedia } from "../../interfaces/evidence-media.interface";
import { getEvidenceMedia } from "../../services/evidence-media.service";

export function EvidencesPage() {
  const [media, setMedia] = useState<IEvidenceMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getEvidenceMedia().then((data) => {
      if (active) {
        setMedia(data);
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
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AnimatedTitle
          title="Evidencias"
          subtitle="Portafolio visual de nuestros procesos, grabaciones y trabajos en el taller de radio."
        />

        {loading ? (
          <p className="mt-12 text-center text-ink-muted">
            Cargando evidencias…
          </p>
        ) : (
          <EvidenceMediaGallery items={media} />
        )}
      </div>
    </div>
  );
}
