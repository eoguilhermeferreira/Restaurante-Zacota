import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import AboutSection from '@/components/sections/AboutSection';
import RodizioSection from '@/components/sections/RodizioSection';
import MenuShowcase from '@/components/sections/MenuShowcase';
import GallerySection from '@/components/sections/GallerySection';
import ExperienceCards from '@/components/sections/ExperienceCards';
import HorariosSection from '@/components/sections/HorariosSection';
import LocationSection from '@/components/sections/LocationSection';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <RodizioSection />
      <MenuShowcase />
      <GallerySection />
      <ExperienceCards />
      <HorariosSection />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
