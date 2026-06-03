import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { evidenceCategories } from "../data/evidences.mock";
import type { IEvidence } from "../interfaces/evidence.interface";
// import { EvidenceCard } from "./EvidenceCard";
import { EvidenceFilter } from "./EvidenceFilter";

interface EvidenceGalleryProps {
  items: IEvidence[];
}

interface LightboxState {
  src: string;
  alt: string;
}

export function EvidenceGallery({ items }: EvidenceGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox, closeLightbox]);

  if (items.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          Próximamente
        </p>
        <p className="max-w-md text-sm text-ink-muted">
          Aquí agregaremos fotografías y capturas de nuestros trabajos en el
          taller de radio.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10">
        <EvidenceFilter
          categories={evidenceCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-ink-muted">
          No hay evidencias en esta categoría.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((evidence, index) => {
            const remainder = filtered.length % 3;
            let extraClass = "";
            if (remainder === 1 && index === filtered.length - 1) {
              extraClass = "lg:col-start-2";
            }
            if (remainder === 2 && index === filtered.length - 2) {
              extraClass = "lg:col-start-1";
            }
            return (
              <div key={evidence.id} className={extraClass}>
                <div className="rounded-xl border bg-white p-4">
                  <h3>{evidence.title}</h3>
                  <p>{evidence.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada"
          >
            <motion.button
              type="button"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Cerrar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✕
            </motion.button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
