import { useEffect } from 'react';
import NewHeroSection from '@/components/NewHeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import ServicesShowcase from '@/components/ServicesShowcase';
import AISolutionsSection from '@/components/AISolutionsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CallToAction from '@/components/CallToAction';
import { HelpBubbleDemo } from '@/components/HelpBubbleDemo';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import IndustryPainPoints from '@/components/IndustryPainPoints';
import BusinessGrowthServices from '@/components/BusinessGrowthServices';
import ThreatMitigationServices from '@/components/ThreatMitigationServices';
import IntelloVerticalsSection from '@/components/IntelloVerticalsSection';
import AnniversaryBanner from '@/components/AnniversaryBanner';

const Home = () => {
  // Set page title on mount
  useEffect(() => {
    document.title = 'Intello. | Compliance, GRC, Audit & Cybersecurity Solutions';
  }, []);

  return (
    <div className="min-h-screen">
      <NewHeroSection />
      <AnniversaryBanner />
      <IntelloVerticalsSection />
      <TargetAudienceSection />
      <BusinessGrowthServices />
      <ThreatMitigationServices />
      <IndustryPainPoints />
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
