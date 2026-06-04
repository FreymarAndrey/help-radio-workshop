import type { IEvidenceMedia } from "../interfaces/evidence-media.interface";

const base = import.meta.env.BASE_URL;

function videoMedia(name: string, alt: string): Omit<IEvidenceMedia, "id"> {
  return {
    src: `${base}images/evidencias/${name}.mp4`,
    poster: `${base}images/evidencias/${name}-poster.png`,
    type: "video",
    alt,
  };
}

const mediaFiles: Omit<IEvidenceMedia, "id">[] = [
  {
    src: `${base}images/evidencias/evidencia-1.jpeg`,
    type: "image",
    alt: "Evidencia 1",
  },
  {
    src: `${base}images/evidencias/evidencia-2.jpeg`,
    type: "image",
    alt: "Evidencia 2",
  },
  {
    src: `${base}images/evidencias/evidencia-3.jpeg`,
    type: "image",
    alt: "Evidencia 3",
  },
  {
    src: `${base}images/evidencias/evidencia-4.jpeg`,
    type: "image",
    alt: "Evidencia 4",
  },
  {
    src: `${base}images/evidencias/evidencia-5.jpeg`,
    type: "image",
    alt: "Evidencia 5",
  },
  videoMedia("evidencia-6", "Evidencia 6"),
  videoMedia("evidencia-7", "Evidencia 7"),
  videoMedia("evidencia-8", "Evidencia 8"),
  videoMedia("evidencia-9", "Evidencia 9"),
  videoMedia("evidencia-10", "Evidencia 10"),
  videoMedia("evidencia-11", "Evidencia 11"),
  videoMedia("evidencia-12", "Evidencia 12"),
  videoMedia("evidencia-13", "Evidencia 13"),
  videoMedia("evidencia-14", "Evidencia 14"),
  videoMedia("evidencia-15", "Evidencia 15"),
];

export const evidenceMediaMock: IEvidenceMedia[] = mediaFiles.map(
  (item, index) => ({
    ...item,
    id: `evidencia-${index + 1}`,
  }),
);
