import type { IStory } from '../interfaces/story.interface'

export const storiesMock: IStory[] = [
  {
    id: 'story-1',
    title: 'La biblioteca que susurraba',
    description:
      'Un cuento sobre libros que cobran vida al anochecer y enseñan a los niños el valor de la curiosidad.',
    coverImage: '/images/cuentos/biblioteca.svg',
    audio: '/audios/cuento-biblioteca.mp3',
  },
  {
    id: 'story-2',
    title: 'El reloj de arena azul',
    description:
      'Narración poética sobre el tiempo, la amistad y los pequeños gestos que transforman un día ordinario.',
    coverImage: '/images/cuentos/reloj.svg',
    audio: '/audios/cuento-reloj.mp3',
  },
  {
    id: 'story-3',
    title: 'Camino de luciérnagas',
    description:
      'Historia corta grabada en campo, inspirada en tradiciones orales de la región andina.',
    coverImage: '/images/cuentos/luciernagas.svg',
    audio: '/audios/cuento-luciernagas.mp3',
  },
]
