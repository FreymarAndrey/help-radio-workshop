import type { IWork } from "../interfaces/work.interface";

export const worksMock: IWork[] = [
  {
    id: "trabajo-1",
    title: "Spot radial: mundial 2014",
    summary:
      "Investigación-acción con testimonios orales y archivo fotográfico de una comunidad universitaria.",
    description:
      "Spot radial para la Copa Mundial de Fútbol 2014. El proyecto investiga la cultura del fútbol en Brasil y cómo se refleja en el país. Se realizaron entrevistas con personas de diferentes edades y contextos sociales para obtener información sobre su relación con el fútbol. Se utilizó la metodología de la investigación-acción para obtener información sobre la cultura del fútbol en Brasil. ",
    images: [`${import.meta.env.BASE_URL}images/trabajos/spot-radial.jpeg`],
    audio: `${import.meta.env.BASE_URL}audios/spot-mundial-2014.mpeg`,
    category: "Spot radial",
    date: "2014",
    pdf: `${import.meta.env.BASE_URL}pdfs/spot-radial.pdf`,
  },
  {
    id: "trabajo-2",
    title: "Radionovela",
    summary: "Radio novela para la feria académica universitaria.",
    description: "TEMA: Radionovela - LUCECITA: Lo que el corazón no olvida”",
    images: [`${import.meta.env.BASE_URL}images/trabajos/radionovela.jpeg`],
    audio: `${import.meta.env.BASE_URL}audios/radionovela.mp3`,
    category: "Radionovela",
    date: "2026",
    pdf: `${import.meta.env.BASE_URL}pdfs/radionovela.pdf`,
  },
  {
    id: "trabajo-3",
    title: "Cuento infantil",
    summary: "La bisabuela de Helena",
    description:
      "Este proyecto radial está basado en la adaptación del cuento infantil “La bisabuela de Helena”, desarrollado a través de la narración, interpretación de personajes y ambientación sonora con el objetivo de transmitir emociones y fortalecer el lenguaje radiofónico. Uno de los aspectos más importantes del trabajo fue la creación manual de los efectos de sonido, realizados por los integrantes utilizando objetos cotidianos, demostrando creatividad, trabajo en equipo y la importancia del sonido dentro de la producción radial.",
    images: [`${import.meta.env.BASE_URL}images/trabajos/cuento-infantil.jpeg`],
    category: "Cuentos",
    date: "2026",
    pdf: `${import.meta.env.BASE_URL}pdfs/cuento-infantil.pdf`,
    audio: `${import.meta.env.BASE_URL}audios/cuento-infantil.mpeg`,
  },
];
