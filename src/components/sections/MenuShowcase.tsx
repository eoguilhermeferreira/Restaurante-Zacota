'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { CARDAPIO_URL } from '@/lib/constants';

const categories = [
  {
    title: 'Pratos',
    description: 'Sabores caseiros e gourmet feitos com ingredientes frescos e muito carinho.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Pizzas',
    description: 'Pizzas artesanais com massa crocante e recheios generosos para toda a família.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Porções',
    description: 'Porções generosas ideais para compartilhar em boas companhias.',
    image: 'https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Bebidas',
    description: 'Drinks, sucos naturais, cervejas artesanais e refrigerantes gelados.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&auto=format&fit=crop&q=80',
  },
];

export default function MenuShowcase() {
  return (
    <section id="cardapio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#31000a] to-[#250006] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Nossos sabores
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F8F3EF] leading-tight mb-4">
            Conheça o <span className="text-[#d4a373] italic">Cardápio</span>
          </h2>
          <p className="text-[#e8ddd4] text-base max-w-xl mx-auto">
            Conheça alguns dos sabores que fazem parte da experiência Zacota.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0005]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display text-xl text-[#F8F3EF] font-semibold">{cat.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-3">
                <p className="text-[#e8ddd4] text-sm leading-relaxed">{cat.description}</p>
                <a
                  href={CARDAPIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#d4a373] text-sm font-medium hover:gap-3 transition-all"
                >
                  Ver no Cardápio
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block"
          >
            Ver Cardápio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
