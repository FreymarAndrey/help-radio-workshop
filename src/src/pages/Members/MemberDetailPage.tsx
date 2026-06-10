import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { AudioPlayer } from "../../components/AudioPlayer";
import { MediaBackground } from "../../components/MediaBackground";
import { PdfViewer } from "../../components/PdfViewer";
import { useDetailResource } from "../../hooks/useDetailResource";
import { getMemberById } from "../../services/members.service";

export function MemberDetailPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: member,
    isLoading,
    notFound,
  } = useDetailResource(id, getMemberById);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-ink-muted">
        Cargando integrante…
      </div>
    );
  }

  if (notFound || !member) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-ink-muted">No encontramos este integrante.</p>
        <Link
          to="/integrantes"
          className="mt-4 inline-block font-semibold text-accent"
        >
          Volver a integrantes
        </Link>
      </div>
    );
  }

  const firstName = member.name.split(" ")[0];

  return (
    <div className="relative isolate min-h-full">
      <MediaBackground />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm">
            <div className="relative aspect-4/5 bg-accent-soft">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <header>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                {member.role}
              </span>
              <h1 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {member.name}
              </h1>
              <p className="mt-2 text-base text-ink-muted">
                {member.description}
              </p>
            </header>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                Sobre {firstName}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {member.bio}
              </p>
            </section>

            <AudioPlayer src={member.audio} label="Audio de presentación" />
          </div>
        </motion.div>
        <div className="mt-8 ">
          <PdfViewer src={member.pdf} title={member.name} />
        </div>
      </div>
    </div>
  );
}
