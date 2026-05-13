'use client';

import { motion } from 'framer-motion';
import { Sun, Moon, AlertCircle } from 'lucide-react';

const restauranteHorarios = [
  { dia: 'Domingo', horario: '11h às 15h' },
  { dia: 'Segunda-feira', horario: '11h às 15h' },
  { dia: 'Terça-feira', horario: '11h às 15h' },
  { dia: 'Quarta-feira', horario: '11h às 15h' },
  { dia: 'Quinta-feira', horario: '11h às 15h' },
  { dia: 'Sexta-feira', horario: '11h às 15h' },
  { dia: 'Sábado', horario: '11h às 15h' },
];

const pizzariaHorarios = [
  { dia: 'Domingo', horario: '19h às 23h', aberto: true },
  { dia: 'Segunda-feira', horario: '19h às 23h', aberto: true },
  { dia: 'Terça-feira', horario: 'Fechado', aberto: false },
  { dia: 'Quarta-feira', horario: '19h às 23h', aberto: true },
  { dia: 'Quinta-feira', horario: '19h às 23h', aberto: true },
  { dia: 'Sexta-feira', horario: '19h às 23h', aberto: true },
  { dia: 'Sábado', horario: '19h às 23h', aberto: true },
];

export default function HorariosSection() {
  return (
    <section id="horarios" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#250006] to-[#1a0005] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3a0710]/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#d4a373] text-sm tracking-[0.3em] uppercase mb-3 font-medium">
            Quando nos visitar
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-[#F8F3EF] leading-tight">
            Horários de <span className="text-[#d4a373] italic">Funcionamento</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurante */}
          <motion.div
            className="glass-card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center">
                <Sun size={18} className="text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[#F8F3EF] font-display text-lg font-semibold">Restaurante</p>
                <p className="text-[#d4a373] text-xs tracking-widest uppercase">Almoço</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {restauranteHorarios.map((item) => (
                <div
                  key={item.dia}
                  className="flex items-center justify-between py-2.5 border-b border-[#d4a373]/10 last:border-0"
                >
                  <span className="text-[#e8ddd4] text-sm">{item.dia}</span>
                  <span className="text-[#d4a373] text-sm font-medium">{item.horario}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pizzaria */}
          <motion.div
            className="glass-card p-6 md:p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#d4a373]/15 flex items-center justify-center">
                <Moon size={18} className="text-[#d4a373]" />
              </div>
              <div>
                <p className="text-[#F8F3EF] font-display text-lg font-semibold">Pizzaria</p>
                <p className="text-[#d4a373] text-xs tracking-widest uppercase">Jantar</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              {pizzariaHorarios.map((item) => (
                <div
                  key={item.dia}
                  className="flex items-center justify-between py-2.5 border-b border-[#d4a373]/10 last:border-0"
                >
                  <span className={`text-sm ${item.aberto ? 'text-[#e8ddd4]' : 'text-[#e8ddd4]/40'}`}>
                    {item.dia}
                  </span>
                  <span className={`text-sm font-medium ${item.aberto ? 'text-[#d4a373]' : 'text-red-400/70'}`}>
                    {item.horario}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-2 bg-red-950/40 border border-red-500/20 rounded-xl px-4 py-3">
              <AlertCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-red-300/80 text-xs leading-relaxed">
                <strong className="text-red-300">Terça-feira à noite:</strong> Pizzaria fechada.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
