'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: 'Ambiente Aconchegante',
    description:
      'Um espaço pensado para que você se sinta em casa. Iluminação suave, decoração acolhedora e muito conforto para relaxar.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80',
    tag: 'Atmosfera',
  },
  {
    title: 'Comida Feita com Carinho',
    description:
      'Cada prato preparado com ingredientes frescos e selecionados. Receitas que carregam sabor, história e muito amor.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80',
    tag: 'Gastronomia',
  },
  {
    title: 'Pizzas e Porções à Noite',
    description:
      'À noite, o Zacota se transforma. Pizzas artesanais saindo do forno, porções generosas e muita animação.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80',
    tag: 'Noite',
  },
  {
    title: 'Momentos em Família',
    description:
      'O lugar ideal para reunir quem você ama. Mesas grandes, ambiente familiar e pratos para compartilhar.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80',
    tag: 'Família',
  },
  {
    title: 'Bebidas e Encontros',
    description:
      'Drinks artesanais, sucos naturais e cervejas especiais. O brinde perfeito para celebrar bons momentos.',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop&q=80',
    tag: 'Bebidas',
  },
];

function StackCard({ card, index, total }: { card: typeof cards[0]; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.9, 1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0.6]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -30]);

  return (
    <div ref={cardRef} className="min-h-[70vh] flex items-center justify-center py-6 px-4">
      <motion.div
        className="w-full max-w-2xl glass-card overflow-hidden"
        style={{ scale, opacity, y }}
      >
        {/* Image */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0005]/80 via-[#1a0005]/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#d4a373]/20 border border-[#d4a373]/40 text-[#d4a373] text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
              {card.tag}
            </span>
          </div>
          {/* Card number */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#F8F3EF]/30 flex items-center justify-center">
            <span className="text-[#F8F3EF]/60 text-xs">{index + 1}/{total}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h3 className="font-display text-2xl md:text-3xl text-[#F8F3EF] mb-3 font-semibold">
            {card.title}
          </h3>
          <p className="text-[#e8ddd4] text-base leading-relaxed">{card.description}</p>
          <div className="w-10 h-0.5 bg-[#d4a373]/60 mt-5" />
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <section id="experiencia" className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#250006] via-[#31000a] to-[#250006] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Por que o Zacota
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F8F3EF] leading-tight">
            Uma experiência <span className="text-[#d4a373] italic">única</span>
          </h2>
        </motion.div>

        {/* Stack cards */}
        <div>
          {cards.map((card, i) => (
            <StackCard key={i} card={card} index={i} total={cards.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
