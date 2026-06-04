import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { IEvidenceMedia } from "../interfaces/evidence-media.interface";

interface EvidenceMediaGalleryProps {
  items: IEvidenceMedia[];
}

function prefetchImage(src: string) {
  const img = new Image();
  img.src = src;
}

function MediaGridItem({
  item,
  index,
  onOpen,
}: {
  item: IEvidenceMedia;
  index: number;
  onOpen: (index: number) => void;
}) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const [shouldLoadPreview, setShouldLoadPreview] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);

  useEffect(() => {
    if (item.type !== "video" || item.poster) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadPreview(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [item.type, item.poster]);

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
    >
      <button
        ref={containerRef}
        type="button"
        className="group relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-accent/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        onClick={() => onOpen(index)}
        aria-label={`Ver ${item.alt}`}
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            fetchPriority={index < 6 ? "high" : "low"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            {item.poster && !posterFailed ? (
              <img
                src={item.poster}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                onError={() => {
                  setPosterFailed(true);
                  setShouldLoadPreview(true);
                }}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : shouldLoadPreview ? (
              <video
                muted
                playsInline
                preload="metadata"
                poster={item.poster}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-subtitle/10 to-accent/10" />
            )}
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/20 transition group-hover:bg-ink/30">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-accent shadow-md">
                <Play className="h-5 w-5 fill-current" aria-hidden />
              </span>
            </span>
          </>
        )}
      </button>
    </motion.li>
  );
}

function LightboxMedia({
  item,
  onVideoMount,
}: {
  item: IEvidenceMedia;
  onVideoMount: (el: HTMLVideoElement | null) => void;
}) {
  if (item.type === "video") {
    return (
      <video
        ref={onVideoMount}
        key={item.src}
        src={item.src}
        controls
        autoPlay
        playsInline
        className="max-h-[80vh] max-w-full rounded-xl bg-black shadow-2xl"
      >
        <track kind="captions" />
      </video>
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt}
      className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl"
    />
  );
}

export function EvidenceMediaGallery({ items }: EvidenceMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const close = useCallback(() => {
    videoRef.current?.pause();
    setActiveIndex(null);
  }, []);

  const goTo = useCallback((index: number) => {
    videoRef.current?.pause();
    setActiveIndex(index);
  }, []);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    goTo((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, goTo, items.length]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    goTo((activeIndex + 1) % items.length);
  }, [activeIndex, goTo, items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, goPrev, goNext]);

  useEffect(() => {
    if (activeIndex === null) return;

    const next = items[activeIndex + 1];
    const prev = items[activeIndex - 1];

    if (next?.type === "image") prefetchImage(next.src);
    if (prev?.type === "image") prefetchImage(prev.src);
  }, [activeIndex, items]);

  if (items.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-16 text-center">
        <p className="font-display text-xl font-semibold text-ink">
          Próximamente
        </p>
        <p className="max-w-md text-sm text-ink-muted">
          Aquí agregaremos fotografías y videos de nuestros trabajos en el
          taller de radio.
        </p>
      </div>
    );
  }

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, index) => (
          <MediaGridItem
            key={item.id}
            item={item}
            index={index}
            onOpen={setActiveIndex}
          />
        ))}
      </ul>

      <AnimatePresence>
        {activeItem && activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Galería ampliada"
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink/85"
              onClick={close}
              aria-label="Cerrar galería"
            />

            <motion.button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              onClick={close}
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" aria-hidden />
            </motion.button>

            <p className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {activeIndex + 1} / {items.length}
            </p>

            <div className="relative z-10 flex w-full max-w-5xl items-center justify-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden />
              </button>

              <motion.div
                key={activeItem.src}
                className="flex min-h-0 min-w-0 flex-1 items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <LightboxMedia
                  item={activeItem}
                  onVideoMount={(el) => {
                    videoRef.current = el;
                  }}
                />
              </motion.div>

              <button
                type="button"
                onClick={goNext}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:h-12 sm:w-12"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-6 w-6" aria-hidden />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
