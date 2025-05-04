import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
  // No longer needed as we use Helmet
  // useEffect(() => {
  //   document.title = 'Intello. | Compliance, GRC, Audit & Cybersecurity Solutions';
  // }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Intello. | Compliance, GRC, Audit & Cybersecurity Solutions</title>
        <meta name="description" content="Leading provider of Cybersecurity, GRC, and IT Managed Services, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions since 2003." />
        <meta name="keywords" content="cybersecurity, GRC, compliance, ISO 27001, SOC 2, GDPR, UAE PDPL, IT managed services, cyber risk, security assessment" />
        <link rel="canonical" href="https://intellome.com/" />
        <meta property="og:title" content="Intello. | Cybersecurity & Compliance Solutions" />
        <meta property="og:description" content="Expert cybersecurity & GRC solutions provider with 22+ years experience. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance." />
        <meta property="og:url" content="https://intellome.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
