import { motion } from 'framer-motion'

interface GalleryProps {
  images: string[]
  altPrefix: string
}

export function Gallery({ images, altPrefix }: GalleryProps) {
  if (images.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <motion.figure
          key={`${image}-${index}`}
          className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
        >
          <img
            src={image}
            alt={`${altPrefix} ${index + 1}`}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </motion.figure>
      ))}
    </div>
  )
}
