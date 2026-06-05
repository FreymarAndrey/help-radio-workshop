import { UniversityLogos } from "./UniversityLogos";

export function Footer() {
  return (
    <footer className="z-1 border-t border-slate-200/70 bg-white">
      <UniversityLogos variant="footer" />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center text-sm text-ink-muted sm:px-6 lg:px-8">
        <p className="font-display text-ink">
          Taller de radio <span className="text-accent">I</span> — Comunicación
          Social
        </p>
        <p>©{new Date().getFullYear()} - Universidad de Pamplona</p>
      </div>
    </footer>
  );
}
