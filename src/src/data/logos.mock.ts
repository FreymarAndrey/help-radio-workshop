const base = import.meta.env.BASE_URL

export const universityLogos = [
  { id: 'logo-1', src: `${base}logos/logo-1.jpeg`, alt: 'Logo institucional 1' },
  { id: 'logo-2', src: `${base}logos/logo-2.jpeg`, alt: 'Logo institucional 2' },
  { id: 'logo-3', src: `${base}logos/logo-3.jpeg`, alt: 'Logo institucional 3' },
  { id: 'logo-4', src: `${base}logos/logo-4.jpeg`, alt: 'Logo institucional 4' },
] as const
