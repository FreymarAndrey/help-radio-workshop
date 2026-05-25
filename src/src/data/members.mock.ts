import type { IMember } from "../interfaces/member.interface";

export const membersMock: IMember[] = [
  {
    id: "yareth-1",
    name: "Yareth Yised Castellanos Mora",
    role: "Estudiante",
    description:
      "Estudiante de comunicación social. Le apasiona la narrativa oral y el diseño de experiencias digitales para el aula.",
    bio: "Yareth coordina las líneas narrativas del grupo y facilita los talleres de escritura. Ha liderado la postproducción de audios y la curaduría de imágenes para la exposición virtual. Su interés central es conectar pedagogía y diseño de medios en contextos comunitarios.",
    image: `${import.meta.env.BASE_URL}images/integrantes/yareth.svg`,
    audio: `${import.meta.env.BASE_URL}audios/presentacion-maria.mp3`,
  },
  {
    id: "maria-2",
    name: "María Alejandra Delgado Gelvez",
    role: "Estudiante",
    description: "Comunicadora social en formación.",
    bio: "Comunicadora social en formación. Me caracterizo por ser una persona carismática, responsable y con una autenticidad diferente que le aporta frescura a cada proyecto. Dentro de un equipo, mi valor principal reside en el orden, el criterio y esa puntualidad inquebrantable que me define, asegurando que cada proceso sea coherente y bien estructurado.",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-maria.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/maria.svg`,
  },
  {
    id: "miembro-3",
    name: "Carlos Ruiz",
    role: "Estudiante",
    description: "Estudiante de comunicación social.",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-carlos.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/carlos.svg`,
  },
  {
    id: "miembro-4",
    name: "Ana Torres",
    role: "Estudiante",
    description: "Estudiante de comunicación social.",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-ana.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/ana.svg`,
  },
  {
    id: "miembro-5",
    name: "John Pérez",
    role: "Estudiante",
    description: "Estudiante de comunicación social.",
    bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-john.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/john.svg`,
  },
];
