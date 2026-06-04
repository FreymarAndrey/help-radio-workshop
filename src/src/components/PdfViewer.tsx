interface PdfViewerProps {
  src: string
  title: string
}

export function PdfViewer({ src, title }: PdfViewerProps) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-xl font-semibold text-ink">Documento PDF</h2>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
        >
          Descargar PDF
        </a>
      </div>

      <iframe
        src={src}
        title={title}
        className="h-[min(70vh,720px)] w-full rounded-2xl border border-slate-200 bg-slate-50"
      />

      <p className="mt-3 text-center text-xs text-ink-muted sm:hidden">
        Si no ves el documento,{' '}
        <a href={src} target="_blank" rel="noopener noreferrer" className="font-medium text-accent">
          ábrelo en una pestaña nueva
        </a>
        .
      </p>
    </section>
  )
}
