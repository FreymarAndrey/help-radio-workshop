import { universityLogos } from "../../data/logos.mock";

interface UniversityLogosProps {
  variant?: "navbar" | "footer";
}

export function UniversityLogos({ variant = "navbar" }: UniversityLogosProps) {
  const isNavbar = variant === "navbar";

  return (
    <div
      className={
        isNavbar
          ? "border-b border-slate-200/70 bg-surface/85 backdrop-blur-md z-2"
          : "border-b border-slate-200/70 bg-white z-2"
      }
    >
      <div
        className={`mx-auto flex max-w-6xl flex-wrap items-center justify-center px-4 sm:px-6 lg:px-8 ${
          isNavbar
            ? "gap-3 py-2 sm:gap-5 sm:py-2.5"
            : "gap-4 py-5 sm:gap-6 sm:py-6"
        }`}
      >
        {universityLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            decoding="async"
            className={
              isNavbar
                ? "h-9 w-auto max-w-[80px] object-contain sm:h-11 sm:max-w-[80px]"
                : "h-9 w-auto max-w-[80px] object-contain opacity-90 sm:h-11 sm:max-w-[96px]"
            }
          />
        ))}
      </div>
    </div>
  );
}
