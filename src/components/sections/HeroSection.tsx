'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CARDAPIO_URL, WHATSAPP_PEDIDO } from '@/lib/constants';

export default function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100dvh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/zacota-fachada-nova.png"
          alt="Zacota Restaurante e Pizzaria"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1a0005]/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold text-[#F8F3EF] drop-shadow-2xl leading-none">
            Zacota
          </h1>
          <p className="font-display text-xl md:text-2xl text-[#d4a373] tracking-widest uppercase drop-shadow-lg mt-2">
            Restaurante e Pizzaria
          </p>
        </motion.div>

        <motion.p
          className="font-display italic text-[#e8ddd4] text-lg md:text-xl max-w-xs md:max-w-md leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Viva essa experiência de sabor, aconchego e tradição.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <a
            href={CARDAPIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm md:text-base"
          >
            Ver Cardápio
          </a>
          <a
            href={WHATSAPP_PEDIDO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-sm md:text-base"
          >
            Fazer Pedido
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-[#d4a373] text-xs tracking-widest uppercase drop-shadow-lg">
          Deslize para descobrir
        </p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8l5 5 5-5" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
}
