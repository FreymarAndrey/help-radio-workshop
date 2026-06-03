import { motion } from "framer-motion";
import type { IEvidence } from "../interfaces/evidence.interface";

interface EvidenceCardProps {
  evidence: IEvidence;
  index: number;
  onImageClick: (image: string, alt: string) => void;
}

export function EvidenceCard({
  evidence,
  index,
  onImageClick,
}: EvidenceCardProps) {
  const cover = evidence.images[0];
  const extraCount = evidence.images.length - 1;

  return (
    <motion.article
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:shadow-md"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <button
        type="button"
        className="group relative block w-full overflow-hidden"
        onClick={() => onImageClick(cover, evidence.title)}
      >
        <img
          src={cover}
          alt={evidence.title}
          className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {extraCount > 0 ? (
          <span className="absolute bottom-3 right-3 rounded-full bg-ink/75 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            +{extraCount}
          </span>
        ) : null}
      </button>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
            {evidence.category}
          </span>
          {evidence.date ? (
            <span className="text-xs text-ink-muted">{evidence.date}</span>
          ) : null}
        </div>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {evidence.title}
        </h3>
        {evidence.description ? (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
            {evidence.description}
          </p>
        ) : null}

        {evidence.images.length > 1 ? (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {evidence.images.slice(1).map((image, imageIndex) => (
              <button
                key={String(imageIndex)}
                type="button"
                onClick={() =>
                  onImageClick(image, `${evidence.title} ${imageIndex + 2}`)
                }
                className="shrink-0 overflow-hidden rounded-xl border border-slate-200/80"
              >
                <img
                  src={image}
                  alt={`${evidence.title} ${imageIndex + 2}`}
                  className="h-16 w-20 object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
