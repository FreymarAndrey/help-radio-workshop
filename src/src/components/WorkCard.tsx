import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { IWork } from "../interfaces/work.interface";

interface WorkCardProps {
  work: IWork;
  index?: number;
}

export function WorkCard({ work, index = 0 }: WorkCardProps) {
  const cover = work.images[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link
        to={`/trabajos/${work.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:border-accent/40 hover:shadow-md"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
          <img
            src={cover}
            alt={work.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
            {work.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {work.date ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-ink-muted">
                {work.date}
              </span>
            ) : null}
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
              PDF incluido
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent">
            {work.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
            {work.summary}
          </p>
          <span className="mt-4 text-sm font-semibold text-accent">
            Ver detalle →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
