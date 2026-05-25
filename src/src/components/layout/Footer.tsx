export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center text-sm text-ink-muted sm:px-6 lg:px-8">
        <p className="font-display text-ink">
          Taller de radio I — Proyecto universitario
        </p>
        <p>Presentación multimedia interactiva · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
