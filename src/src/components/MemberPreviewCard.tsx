import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { IMember } from "../interfaces/member.interface";

interface MemberPreviewCardProps {
  member: IMember;
  index?: number;
}

export function MemberPreviewCard({ member }: MemberPreviewCardProps) {
  return (
    <motion.article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <Link
        to={`/integrantes/${member.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:border-accent/40 hover:shadow-md"
      >
        <div className="relative aspect-4/5 overflow-hidden bg-accent-soft">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
            {member.role}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">
              {member.name}
            </h3>
            <p className="mt-2 min-h-12 text-sm leading-relaxed text-ink-muted line-clamp-2">
              {member.description}
            </p>
          </div>

          <span className="mt-auto pt-4 text-sm font-semibold text-accent transition hover:text-accent-hover">
            Ver perfil →
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
