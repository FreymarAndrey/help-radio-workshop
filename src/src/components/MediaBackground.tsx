const BACKGROUND_IMAGE = `${import.meta.env.BASE_URL}images/backgrounds/background.jpeg`;

export function MediaBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-5 overflow-hidden"
      aria-hidden
    >
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="h-full w-full scale-105 object-cover object-center opacity-[0.97]"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,#ccfbf1_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-surface/75 via-surface/88 to-surface/95" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_68%_at_50%_42%,rgba(255,253,248,0.78)_0%,rgba(255,253,248,0.42)_50%,rgba(255,253,248,0.18)_100%)]" />

      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/25 to-white/50" />

      <div className="absolute inset-0 bg-subtitle/3" />

      <div className="absolute -right-32 bottom-[8%] h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute -left-24 top-[18%] h-72 w-72 rounded-full bg-subtitle/5 blur-3xl" />
    </div>
  );
}
