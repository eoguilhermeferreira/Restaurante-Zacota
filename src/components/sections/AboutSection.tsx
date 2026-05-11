'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { UtensilsCrossed, Moon, Home, Pizza } from 'lucide-react';

const features = [
  { icon: UtensilsCrossed, label: 'Restaurante durante o dia' },
  { icon: Moon, label: 'Pizzaria à noite' },
  { icon: Home, label: 'Ambiente familiar e aconchegante' },
  { icon: Pizza, label: 'Rodízio às quartas e domingos' },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#250006] via-[#31000a] to-[#250006] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80"
                alt="Interior do Zacota Restaurante"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0005]/50 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass-card p-4 md:p-5 shadow-xl">
              <p className="font-display text-[#d4a373] text-sm font-semibold">Desde sempre</p>
              <p className="text-[#F8F3EF] text-xs mt-0.5">Com sabor e tradição</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
                Nossa história
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#F8F3EF] leading-tight mb-4">
                Sobre o <span className="text-[#d4a373] italic">Zacota</span>
              </h2>
              <p className="text-[#e8ddd4] leading-relaxed text-base md:text-lg">
                O Zacota é um restaurante e pizzaria pensado para quem busca boa comida,
                ambiente aconchegante e momentos especiais. Durante o dia, servimos pratos
                saborosos com aquele toque de comida caseira e gourmet. À noite, a experiência
                continua com pizzas, lanches, porções, bebidas e um ambiente perfeito para
                reunir família e amigos.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-4 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-9 h-9 rounded-full bg-[#d4a373]/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#d4a373]" />
                  </div>
                  <p className="text-[#F8F3EF] text-xs md:text-sm font-medium leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
