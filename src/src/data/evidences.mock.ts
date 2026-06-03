import type { IEvidence } from "../interfaces/evidence.interface";

const base = import.meta.env.BASE_URL;

export const evidencesMock: IEvidence[] = [
  {
    id: "ev-1",
    title: "Sesión de grabación — Radionovela",
    description: "Documentación del proceso de grabación en estudio.",
    images: [`${base}images/evidencias/grabacion-1.svg`],
    category: "Grabación",
    date: "2026",
  },
  {
    id: "ev-2",
    title: "Postproducción de audio",
    description: "Edición y mezcla de voces para el spot radial.",
    images: [
      `${base}images/evidencias/postproduccion-1.svg`,
      `${base}images/evidencias/postproduccion-2.svg`,
    ],
    category: "Postproducción",
    date: "2026",
  },
  {
    id: "ev-3",
    title: "Exposición virtual del taller",
    description: "Capturas del montaje de la presentación multimedia.",
    images: [`${base}images/evidencias/exposicion-1.svg`],
    category: "Exposición",
    date: "2026",
  },
  {
    id: "ev-4",
    title: "Pruebas de micrófono",
    description: "Ensayo previo a la grabación final del cuento narrado.",
    images: [`${base}images/evidencias/grabacion-2.svg`],
    category: "Grabación",
    date: "2026",
  },
];

export const evidenceCategories = [
  "Todos",
  "Grabación",
  "Postproducción",
  "Exposición",
] as const;
