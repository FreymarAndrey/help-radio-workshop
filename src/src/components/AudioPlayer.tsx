import { useAudioPlayer } from "../hooks/useAudioPlayer";

interface AudioPlayerProps {
  src: string;
  label?: string;
  compact?: boolean;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, label, compact = false }: AudioPlayerProps) {
  const { isPlaying, progress, duration, isReady, error, toggle, seekTo } =
    useAudioPlayer({ src });

  const showProgress = isReady || progress > 0;

  return (
    <div
      key={src}
      className={`rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm ${
        compact ? "p-3" : "p-4"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          disabled={!showProgress && !error}
          aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPlaying ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 translate-x-0.5"
              fill="currentColor"
            >
              <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11.14-7.36a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </button>

        <div className="min-w-0 flex-1">
          {label ? (
            <p className="mb-1 truncate text-sm font-medium text-ink">
              {label}
            </p>
          ) : null}
          {error ? (
            <p className="text-sm text-amber-700">{error}</p>
          ) : (
            <>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={progress}
                onChange={(event) => seekTo(Number(event.target.value))}
                disabled={!showProgress}
                aria-label="Progreso del audio"
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-accent disabled:opacity-50"
              />
              <div className="mt-1 flex justify-between text-xs text-ink-muted">
                <span>{formatTime(progress * duration)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
