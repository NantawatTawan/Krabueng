import HeroSlider from '@/components/home/HeroSlider';
import FounderSection from '@/components/home/FounderSection';
import ServicesSection from '@/components/home/ServicesSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PopularPatterns from '@/components/home/PopularPatterns';
import ClientLogos from '@/components/home/ClientLogos';
import CTABand from '@/components/home/CTABand';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSlider />
      <FounderSection />
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <PopularPatterns />
      <ClientLogos />
      <CTABand />
    </main>
  );
}
