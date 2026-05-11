'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { CARDAPIO_URL, WHATSAPP_URL } from '@/lib/constants';

export default function HeroMediaScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ctaButtons = (
    <div className="flex flex-wrap gap-3 justify-center">
      <a
        href={CARDAPIO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold text-sm md:text-base"
      >
        Ver Cardápio
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-gold text-sm md:text-base"
      >
        Fazer Pedido
      </a>
    </div>
  );

  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc="/videos/zacota-hero.mov"
      bgImageSrc="/images/zacota-logo-bg.svg"
      title="Zacota"
      subtitle="Restaurante e Pizzaria"
      tagline="Viva essa experiência de sabor, aconchego e tradição."
      scrollToExpand="Deslize para descobrir"
      ctaButtons={ctaButtons}
    >
      <div />
    </ScrollExpandMedia>
  );
}
