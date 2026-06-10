import type { IMember } from "../interfaces/member.interface";

export const membersMock: IMember[] = [
  {
    id: "yareth-1",
    name: "Yareth Yised Castellanos Mora",
    role: "Estudiante",
    description:
      "Estudiante de comunicación social. Le apasiona la narrativa oral y el diseño de experiencias digitales para el aula.",
    bio: "Yareth coordina las líneas narrativas del grupo y facilita los talleres de escritura. Ha liderado la postproducción de audios y la curaduría de imágenes para la exposición virtual. Su interés central es conectar pedagogía y diseño de medios en contextos comunitarios.",
    image: `${import.meta.env.BASE_URL}images/integrantes/miembro-1.jpeg`,
    audio: `${import.meta.env.BASE_URL}audios/presentacion-yareth.mpeg`,
    pdf: `${import.meta.env.BASE_URL}pdfs/perfil-yised-guion.pdf`,
  },
  {
    id: "maria-2",
    name: "María Alejandra Delgado Gelvez",
    role: "Estudiante",
    description: "Comunicadora social en formación.",
    bio: "Comunicadora social en formación. Me caracterizo por ser una persona carismática, responsable y con una autenticidad diferente que le aporta frescura a cada proyecto. Dentro de un equipo, mi valor principal reside en el orden, el criterio y esa puntualidad inquebrantable que me define, asegurando que cada proceso sea coherente y bien estructurado.",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-maria.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/miembro-2.jpeg`,
    pdf: `${import.meta.env.BASE_URL}pdfs/perfil-alejandra-guion.pdf`,
  },
  {
    id: "julieth-3",
    name: "Julieth Catalina García Galindo ",
    role: "Estudiante",
    description:
      "Es una persona creativa y muy enfocada en expresar ideas de forma visual y narrativa.",
    bio: "Como estudiante de Comunicación Social, le interesa no solo entender los temas, sino llevarlos a algo práctico: fotografías, guiones, análisis y proyectos que tengan intención y estilo propio. Le gusta trabajar con detalle, especialmente en todo lo relacionado con la estética y busca que lo que hace tenga sentido, coherencia y un impacto claro. También se nota que valora crecer, aprender constantemente y mejorar tanto en lo académico como en lo personal. En general, es alguien que no se queda en lo superficial: analiza, pregunta, pide opciones y se asegura de que el resultado final realmente sea perfecto.",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-julieth.mp3`,
    image: `${import.meta.env.BASE_URL}images/integrantes/miembro-3.jpeg`,
    pdf: `${import.meta.env.BASE_URL}pdfs/perfil-catalina-guion.pdf`,
  },
  {
    id: "eyleen-4",
    name: "Eyleen Alexandra Jaimes Peña",
    role: "Estudiante",
    description: "Estudiante de comunicación social.",
    bio: "Soy una persona creativa, expresiva y apasionada por la comunicación. Me gusta conectar con las personas a través de mi voz, mis ideas y mi forma de transmitir emociones. Disfruto mucho el mundo de la radio y la presentación, porque siento que es un espacio donde puedo mostrar mi personalidad, mi creatividad y mi manera auténtica de comunicar.",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-eyleen.mpeg`,
    image: `${import.meta.env.BASE_URL}images/integrantes/miembro-4.jpeg`,
    pdf: `${import.meta.env.BASE_URL}pdfs/perfil-eyleen-guion.pdf`,
  },
  {
    id: "melany-5",
    name: "Melany Gisell Perozo Vivas",
    role: "Estudiante",
    description:
      "Diseñadora gráfica, comunicadora social, diseñadora de modas y emprendedora",
    bio: "Soy Melany Perozo, diseñadora gráfica, comunicadora social, diseñadora de modas y emprendedora. Me apasiona la creatividad y los medios de comunicación como herramientas para transformar ideas en proyectos con propósito.He desarrollado experiencia en áreas como la publicidad, la moda, el diseño y la creación de contenido, combinando estrategia e innovación en cada proyecto. También disfruto la enseñanza y la formación de nuevos talentos, especialmente en el ámbito del modelaje y el desarrollo personal. Me caracterizo por ser una persona creativa, comprometida y en constante aprendizaje, siempre en busca de nuevas oportunidades para crecer y generar un impacto positivo a través de mi trabajo.",
    audio: `${import.meta.env.BASE_URL}audios/presentacion-melany.mpeg`,
    image: `${import.meta.env.BASE_URL}images/integrantes/miembro-5.jpeg`,
    pdf: `${import.meta.env.BASE_URL}pdfs/perfil-melany-guion.pdf`,
  },
];
