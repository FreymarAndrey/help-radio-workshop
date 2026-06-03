import type { IWork } from "../interfaces/work.interface";

export const worksMock: IWork[] = [
  {
    id: "trabajo-1",
    title: "Spot radial: mundial 2014",
    summary:
      "Investigación-acción con testimonios orales y archivo fotográfico de una comunidad universitaria.",
    description:
      "Spot radial para la Copa Mundial de Fútbol 2014. El proyecto investiga la cultura del fútbol en Brasil y cómo se refleja en el país. Se realizaron entrevistas con personas de diferentes edades y contextos sociales para obtener información sobre su relación con el fútbol. Se utilizó la metodología de la investigación-acción para obtener información sobre la cultura del fútbol en Brasil. ",
    images: [
      `${import.meta.env.BASE_URL}images/trabajos/spot-radial-1.svg`,
      `${import.meta.env.BASE_URL}images/trabajos/spot-radial-2.svg`,
    ],
    audio: `${import.meta.env.BASE_URL}audios/spot-mundial-2014.mp3`,
    category: "Spot radial",
    date: "2014",
    pdf: `${import.meta.env.BASE_URL}pdfs/spot-radial.pdf`,
  },
  {
    id: "trabajo-2",
    title: "Radionovela",
    summary: "Radio novela para la feria académica universitaria.",
    description: "TEMA: Radionovela - LUCECITA: Lo que el corazón no olvida”",
    images: [`${import.meta.env.BASE_URL}images/trabajos/radionovela.svg`],
    audio: `${import.meta.env.BASE_URL}audios/radionovela.mp3`,
    category: "Radionovela",
    date: "2026",
    pdf: `${import.meta.env.BASE_URL}pdfs/radionovela.pdf`,
  },
  {
    id: "trabajo-3",
    title: "Exposición virtual: voces del aula",
    summary:
      "Sitio experimental con galería, audio y microanimaciones para feria académica universitaria.",
    description:
      "La exposición virtual integra piezas de cada integrante del grupo: audios, imágenes y textos breves. El PDF adjunto funciona como catálogo impreso de la muestra, con créditos, referencias bibliográficas y capturas de la interfaz final desplegada en la feria.",
    images: [
      `${import.meta.env.BASE_URL}images/trabajos/voces-1.svg`,
      `${import.meta.env.BASE_URL}images/trabajos/voces-2.svg`,
      `${import.meta.env.BASE_URL}images/trabajos/voces-3.svg`,
    ],
    category: "Exposición",
    date: "2026",
    pdf: `${import.meta.env.BASE_URL}pdfs/voces-del-aula.pdf`,
  },
];
