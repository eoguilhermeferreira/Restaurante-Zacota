'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  tagline?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  ctaButtons?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  subtitle,
  tagline,
  scrollToExpand,
  textBlend,
  children,
  ctaButtons,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [pageScrollY, setPageScrollY] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attempt = () => {
      video.play().catch(() => {
        document.addEventListener('touchstart', () => video.play(), { once: true });
      });
    };
    if (video.readyState >= 2) {
      attempt();
    } else {
      video.addEventListener('canplay', attempt, { once: true });
    }
  }, []);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => setTouchStartY(0);

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
      else setPageScrollY(window.scrollY);
    };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll as EventListener);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 280 + scrollProgress * (isMobile ? 700 : 1300);
  const mediaHeight = 380 + scrollProgress * (isMobile ? 220 : 420);
  const textTranslateX = scrollProgress * (isMobile ? 120 : 150);

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {/* Background */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress * 1.5 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background Zacota"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#1a0005]/70" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10 px-4">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              {/* Media */}
              <div
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 8px 60px rgba(0,0,0,0.5)',
                  transition: 'none',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      ref={videoRef}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      controls={false}
                      disablePictureInPicture
                    >
                      <source src={mediaSrc} type="video/mp4" />
                      <source src={mediaSrc} type="video/quicktime" />
                    </video>
                    <motion.div
                      className="absolute inset-0 bg-[#1a0005]/40"
                      animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image src={mediaSrc} alt={title || 'Zacota'} fill className="object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-[#1a0005]/50"
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Title text */}
              <div
                className={`flex items-center justify-center text-center gap-2 w-full relative z-20 flex-col pointer-events-none ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.div
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  className="transition-none"
                >
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-[#F8F3EF] drop-shadow-2xl leading-none">
                    {title}
                  </h1>
                </motion.div>
                <motion.div
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                  className="transition-none"
                >
                  <p className="font-display text-lg md:text-2xl text-[#d4a373] tracking-widest uppercase drop-shadow-lg">
                    {subtitle}
                  </p>
                </motion.div>
              </div>

              {/* Tagline + CTAs at bottom */}
              <motion.div
                className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-4 z-20 px-4"
                animate={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}
                transition={{ duration: 0.1 }}
              >
                {tagline && (
                  <p className="text-[#e8ddd4] text-center text-sm md:text-base max-w-xs md:max-w-md">
                    {tagline}
                  </p>
                )}
                {ctaButtons}
              </motion.div>

              {/* Deslize para descobrir — visível durante toda a expansão, some só no final */}
              {scrollToExpand && !mediaFullyExpanded && (
                <motion.div
                  className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-1 z-20 pointer-events-none"
                  animate={{
                    opacity: Math.max(0, 1 - scrollProgress * 1.2),
                    y: [0, 6, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-[#d4a373] text-xs tracking-widest uppercase drop-shadow-lg">{scrollToExpand}</p>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8l5 5 5-5" stroke="#d4a373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Content after expansion */}
            <motion.section
              className="flex flex-col w-full px-4 py-10 md:px-8 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
