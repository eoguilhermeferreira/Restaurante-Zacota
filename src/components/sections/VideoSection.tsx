'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const height = useTransform(scrollYProgress, [0, 0.85], ['38vh', '92vh']);
  const borderRadius = useTransform(scrollYProgress, [0, 0.85], ['24px', '8px']);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

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
    <section ref={sectionRef} className="relative" style={{ height: '220vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center bg-[#1a0005] overflow-hidden">
        <div className="absolute inset-0 bg-[#1a0005]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#d4a373]/5 blur-3xl pointer-events-none" />

        <motion.div
          style={{ height, borderRadius, opacity, aspectRatio: '9/16' }}
          className="relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
        >
          <video
            ref={videoRef}
            src="/videos/zacota-hero.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            controls={false}
            disablePictureInPicture
          />
        </motion.div>
      </div>
    </section>
  );
}
