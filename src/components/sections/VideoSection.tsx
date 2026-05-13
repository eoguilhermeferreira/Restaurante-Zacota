'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 0.6], ['92%', '100%']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ['16px', '0px']);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.97, 1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = () => {
      video.play().catch(() => {
        document.addEventListener('touchstart', () => video.play(), { once: true });
      });
    };
    if (video.readyState >= 2) attempt();
    else video.addEventListener('canplay', attempt, { once: true });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#1a0005] overflow-hidden py-16 md:py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#d4a373]/5 blur-3xl pointer-events-none" />

      <motion.div
        style={{ width, borderRadius, scale }}
        className="mx-auto overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
      >
        <video
          ref={videoRef}
          src="/videos/zacota-hero.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full aspect-video object-cover"
          controls={false}
          disablePictureInPicture
        />
      </motion.div>
    </section>
  );
}
