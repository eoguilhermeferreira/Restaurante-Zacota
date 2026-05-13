'use client';

import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, ShoppingBag } from 'lucide-react';
import { CARDAPIO_URL, WHATSAPP_PEDIDO, WHATSAPP_CONTATO } from '@/lib/constants';

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#250006] to-[#1a0005]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#d4a373]/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Decorative element */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-px bg-[#d4a373]/40" />
            <div className="w-2 h-2 rounded-full bg-[#d4a373]/60" />
            <div className="w-12 h-px bg-[#d4a373]/40" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[#F8F3EF] leading-tight">
            Seu próximo momento especial
            <br />
            <span className="gold-shimmer">começa no Zacota.</span>
          </h2>

          <p className="text-[#e8ddd4] text-base md:text-lg max-w-xl leading-relaxed">
            Escolha seu prato, reúna quem você gosta e venha viver uma experiência de sabor.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <motion.a
              href={WHATSAPP_PEDIDO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <ShoppingBag size={18} />
              Fazer Pedido
            </motion.a>
            <motion.a
              href={WHATSAPP_CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </motion.a>
            <motion.a
              href={CARDAPIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen size={18} />
              Ver Cardápio
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
