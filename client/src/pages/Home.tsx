import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import AISolutionsSection from '@/components/AISolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CallToAction from '@/components/CallToAction';
import { HelpBubbleDemo } from '@/components/HelpBubbleDemo';

const Home = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = 'Intello Cyber Technologies | GRC, Audit & Cybersecurity Solutions';
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <ServicesShowcase />
      <AISolutionsSection />
      <HelpBubbleDemo />
      <CaseStudiesSection />
      <CallToAction />
    </div>
  );
};

export default Home;
