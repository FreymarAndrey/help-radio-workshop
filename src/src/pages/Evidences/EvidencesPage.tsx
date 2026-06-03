import { useEffect, useState } from "react";
import { AnimatedTitle } from "../../components/AnimatedTitle";
import { EvidenceGallery } from "../../components/EvidenceGallery";
// import { MediaBackground } from "../../components/MediaBackground";
import type { IEvidence } from "../../interfaces/evidence.interface";
import { getEvidences } from "../../services/evidences.service";

export function EvidencesPage() {
  const [evidences, setEvidences] = useState<IEvidence[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getEvidences().then((data) => {
      if (active) {
        setEvidences(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  console.log("EvidencesPage render");
  console.log({ loading, evidences });
  return (
    <div className="relative isolate min-h-full">
      {/* <MediaBackground /> */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <AnimatedTitle
          title="Evidencias"
          subtitle="Portafolio visual de nuestros procesos, grabaciones y trabajos en el taller de radio."
        />

        {loading ? (
          <p className="mt-12 text-center text-ink-muted">
            Cargando evidencias…
          </p>
        ) : (
          <EvidenceGallery items={evidences} />
        )}
      </div>
    </div>
  );
}
