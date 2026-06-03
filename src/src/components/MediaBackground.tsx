import gsap from "gsap";
import {
  Camera,
  Clapperboard,
  Headphones,
  Mic,
  Radio,
  Video,
  Volume2,
  Waves,
} from "lucide-react";
import { useEffect, useRef } from "react";

const BACKGROUND_IMAGE = `${import.meta.env.BASE_URL}images/backgrounds/taller-radio.svg`;

const icons = [
  { Icon: Mic, className: "left-[6%] top-[6%] -rotate-12", delay: 0 },
  { Icon: Camera, className: "right-[8%] top-[10%] rotate-6", delay: 0.4 },
  { Icon: Radio, className: "left-[38%] top-[4%] rotate-12", delay: 0.6 },
  { Icon: Waves, className: "right-[5%] top-[28%] -rotate-3", delay: 1 },
  { Icon: Video, className: "left-[12%] top-[32%] rotate-3", delay: 0.8 },
  {
    Icon: Headphones,
    className: "right-[14%] top-[38%] -rotate-6",
    delay: 1.2,
  },
  { Icon: Volume2, className: "left-[4%] top-[52%] rotate-8", delay: 0.5 },
  {
    Icon: Clapperboard,
    className: "right-[10%] top-[58%] -rotate-8",
    delay: 0.9,
  },
  { Icon: Mic, className: "left-[18%] top-[68%] -rotate-6", delay: 1.4 },
  { Icon: Camera, className: "right-[6%] top-[72%] rotate-10", delay: 0.3 },
  { Icon: Waves, className: "left-[42%] top-[78%] rotate-3", delay: 1.1 },
  {
    Icon: Headphones,
    className: "right-[20%] top-[85%] -rotate-12",
    delay: 0.7,
  },
  { Icon: Radio, className: "left-[8%] top-[88%] rotate-6", delay: 1.3 },
  { Icon: Video, className: "right-[32%] top-[92%] -rotate-4", delay: 0.2 },
];

export function MediaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    const items = container.querySelectorAll("[data-float]");
    const ctx = gsap.context(() => {
      items.forEach((item, index) => {
        gsap.to(item, {
          y: index % 2 === 0 ? -18 : 18,
          duration: 5 + (index % 6) * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: icons[index]?.delay ?? 0,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <img
        src={BACKGROUND_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,#ccfbf1_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-surface/75 via-surface/88 to-surface/95" />

      {icons.map(({ Icon, className }) => (
        <div
          key={className}
          data-float
          className={`absolute text-accent/9 ${className}`}
        >
          <Icon
            className="h-14 w-14 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            strokeWidth={1.25}
          />
        </div>
      ))}

      <div className="absolute -right-24 top-[10%] h-80 w-80 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="absolute -left-20 top-[45%] h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="absolute -right-16 bottom-[15%] h-64 w-64 rounded-full bg-teal-400/12 blur-3xl" />
    </div>
  );
}
