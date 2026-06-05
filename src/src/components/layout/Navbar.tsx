import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UniversityLogos } from "./UniversityLogos";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/producciones", label: "Producciones" },
  { to: "/evidencias", label: "Evidencias" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-accent text-white shadow-sm"
      : "text-ink-muted hover:bg-slate-100 hover:text-ink"
  }`;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UniversityLogos variant="navbar" />
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-surface/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="font-display text-lg font-semibold text-ink"
          >
            Taller de radio <span className="text-accent">I</span>
          </NavLink>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Principal"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menú</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              className="border-t border-slate-200/70 bg-white px-4 py-3 md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              aria-label="Principal móvil"
            >
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.end}
                      className={({ isActive }) =>
                        `block w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                          isActive
                            ? "bg-accent text-white shadow-sm"
                            : "text-ink-muted hover:bg-slate-100 hover:text-ink"
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
