'use client';

import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';
import { WHATSAPP_LOCALIZACAO, GOOGLE_MAPS_URL, GOOGLE_MAPS_EMBED, INSTAGRAM_URL, ENDERECO, HORARIO } from '@/lib/constants';

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a0005] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3a0710]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Como nos encontrar
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F8F3EF] leading-tight">
            Venha conhecer o <span className="text-[#d4a373] italic">Zacota</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Info card */}
          <motion.div
            className="w-full lg:w-2/5 glass-card p-6 md:p-8 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[#d4a373] text-xs uppercase tracking-widest mb-1 font-medium">Endereço</p>
                <p className="text-[#F8F3EF] text-sm leading-relaxed whitespace-pre-line">{ENDERECO}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[#d4a373] text-xs uppercase tracking-widest mb-1 font-medium">Horários</p>
                <p className="text-[#F8F3EF] text-sm leading-relaxed">
                  {HORARIO.split('|').map((h, i) => (
                    <span key={i} className="block">{h.trim()}</span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#d4a373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div>
                <p className="text-[#d4a373] text-xs uppercase tracking-widest mb-1 font-medium">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F8F3EF] text-sm hover:text-[#d4a373] transition-colors"
                >
                  @zacotarestaurante
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-auto pt-2">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold flex items-center justify-center gap-2 text-sm"
              >
                <Navigation size={16} />
                Abrir no Google Maps
              </a>
              <a
                href={WHATSAPP_LOCALIZACAO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Google Maps embed */}
          <motion.div
            className="w-full lg:w-3/5 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] border border-[#d4a373]/20 shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <iframe
              src={GOOGLE_MAPS_EMBED}
              className="w-full h-full min-h-[300px] md:min-h-[400px] border-0 rounded-2xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Zacota Restaurante e Pizzaria"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
