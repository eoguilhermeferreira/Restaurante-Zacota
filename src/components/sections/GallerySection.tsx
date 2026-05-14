'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80', alt: 'Experiência Zacota', tall: true  },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80', alt: 'Sabores especiais',  tall: false },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80', alt: 'Momentos únicos',   tall: false },
  { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&auto=format&fit=crop&q=80', alt: 'Mesa do Zacota',    tall: true  },
  { src: 'https://images.unsplash.com/photo-1551183053-bf91798d047e?w=600&auto=format&fit=crop&q=80', alt: 'Ambiente especial',  tall: false },
];

export default function GallerySection() {
  // Split into two columns for masonry effect
  const col1 = images.filter((_, i) => i % 2 === 0);
  const col2 = images.filter((_, i) => i % 2 !== 0);

  return (
    <section id="galeria" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a0005] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Momentos especiais
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F8F3EF] leading-tight">
            Experiência <span className="text-[#d4a373] italic">Zacota</span>
          </h2>
        </motion.div>

        {/* Masonry grid — 2 cols on mobile, 4 on desktop */}
        <div className="flex gap-2 md:gap-3">
          {[col1, col2].map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2 md:gap-3 flex-1">
              {col.map((img, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-xl group cursor-pointer"
                  style={{ aspectRatio: img.tall ? '3/4' : '4/3' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (colIdx * 4 + i) * 0.05 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1a0005]/0 group-hover:bg-[#1a0005]/30 transition-colors duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-[#F8F3EF] text-xs font-medium">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
