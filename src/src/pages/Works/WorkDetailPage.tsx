import { Link, useParams } from "react-router-dom";
import { BackLink } from "../../components/BackLink";
import { WorkSection } from "../../components/WorkSection";
import { useDetailResource } from "../../hooks/useDetailResource";
import { getWorkById } from "../../services/works.service";

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>();
  const {
    data: work,
    isLoading,
    notFound,
  } = useDetailResource(id, getWorkById);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center text-ink-muted">
        Cargando trabajo…
      </div>
    );
  }

  if (notFound || !work) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <p className="text-ink-muted">No encontramos este trabajo.</p>
        <Link
          to="/trabajos"
          className="mt-4 inline-block font-semibold text-accent"
        >
          Volver a trabajos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <BackLink to="/producciones" label="Volver a producciones" />
      <div className="mt-8">
        <WorkSection work={work} />
      </div>
    </div>
  );
}
