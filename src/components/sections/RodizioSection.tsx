'use client';

import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/constants';
import { Calendar, Star, Clock } from 'lucide-react';

const highlights = [
  { icon: Calendar, text: 'Quartas e Domingos' },
  { icon: Star, text: 'Sabores variados' },
  { icon: Clock, text: 'A partir das 19h' },
];

export default function RodizioSection() {
  return (
    <section id="rodizio" className="relative py-20 md:py-28 overflow-hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-[#1a0005]" />

      {/* Decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#d4a373]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#3a0710]/80 blur-2xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Pizza icon decorative */}
          <div className="w-20 h-20 rounded-full border-2 border-[#d4a373]/40 flex items-center justify-center mb-2">
            <span className="text-4xl">🍕</span>
          </div>

          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase font-medium">
            Evento especial
          </p>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F8F3EF] leading-tight">
            Rodízio de Pizza
            <br />
            <span className="text-[#d4a373] italic">às Quartas e Domingos</span>
          </h2>

          <p className="text-[#e8ddd4] text-base md:text-lg max-w-2xl leading-relaxed">
            Uma experiência especial para aproveitar sabores variados, ambiente aconchegante
            e momentos deliciosos no Zacota. Venha com a família ou amigos e mergulhe
            em um universo de pizzas artesanais.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            {highlights.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 glass-card px-5 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Icon size={16} className="text-[#d4a373]" />
                <span className="text-[#F8F3EF] text-sm font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-[#d4a373]/40 my-2" />

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Reservar pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
