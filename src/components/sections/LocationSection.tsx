'use client';

import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';
import { WHATSAPP_URL, GOOGLE_MAPS_URL, ENDERECO, HORARIO } from '@/lib/constants';

export default function LocationSection() {
  return (
    <section id="localizacao" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#1a0005] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3a0710]/50 blur-3xl pointer-events-none" />

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
                <p className="text-[#F8F3EF] text-sm leading-relaxed">{ENDERECO}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={18} className="text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[#d4a373] text-xs uppercase tracking-widest mb-1 font-medium">Horários</p>
                <p className="text-[#F8F3EF] text-sm leading-relaxed whitespace-pre-line">
                  {HORARIO.split('|').join('\n')}
                </p>
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
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="w-full lg:w-3/5 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[380px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Placeholder for Google Maps embed — replace src with actual embed URL */}
            <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#31000a] border border-[#d4a373]/20 rounded-2xl flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {/* Grid pattern */}
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4a373" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="w-14 h-14 rounded-full bg-[#d4a373]/20 flex items-center justify-center">
                <MapPin size={28} className="text-[#d4a373]" />
              </div>
              <div className="text-center px-6">
                <p className="font-display text-xl text-[#F8F3EF] mb-1">Zacota</p>
                <p className="text-[#e8ddd4] text-sm">{ENDERECO}</p>
                <p className="text-[#d4a373]/70 text-xs mt-3">
                  Substitua este placeholder pelo embed do Google Maps
                </p>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-sm flex items-center gap-2"
              >
                <Navigation size={14} />
                Ver no mapa
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
