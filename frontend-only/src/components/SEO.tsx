import { useLocation } from 'wouter';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: string;
  };
};

export default function SEO({
  title,
  description,
  canonical,
  openGraph,
}: SEOProps) {
  const [location] = useLocation();
  
  // Default values
  const defaults = {
    title: 'Intello - Cybersecurity & IT Solutions',
    description: 'Leading provider of Cybersecurity, GRC, and IT Managed Services in the UAE. ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.',
    canonical: `https://intellome.com${location}`,
    openGraph: {
      title: 'Intello - Cybersecurity & IT Solutions',
      description: 'Leading provider of Cybersecurity, GRC, and IT Managed Services in the UAE. ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.',
      url: `https://intellome.com${location}`,
      image: 'https://intellome.com/images/intello-og-image.jpg',
      type: 'website',
    },
  };

  // Page-specific SEO based on route
  const getPageSEO = () => {
    // Homepage
    if (location === '/') {
      return {
        title: 'Intello - Cybersecurity & IT Solutions',
        description: 'Leading provider of Cybersecurity, GRC, and IT Managed Services in the UAE. ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.',
      };
    }
    
    // About Us
    if (location === '/about') {
      return {
        title: 'About Us | Intello',
        description: 'Intello has been a trusted cybersecurity partner for organizations in the UAE and Middle East since 2003. Learn about our mission, vision, and experienced team.',
      };
    }
    
    // Services
    if (location === '/services') {
      return {
        title: 'Cybersecurity Services | Intello',
        description: 'Comprehensive cybersecurity services including ISO 27001, SOC 2, GDPR, UAE PDPL compliance, penetration testing, and IT managed services.',
      };
    }
    
    // Solutions
    if (location === '/solutions') {
      return {
        title: 'Cybersecurity Solutions | Intello',
        description: 'AI-powered GRC automation, risk management, vulnerability management, SIEM, EDR, and comprehensive security solutions for organizations in the UAE.',
      };
    }
    
    // Contact
    if (location === '/contact') {
      return {
        title: 'Contact Us | Intello',
        description: 'Connect with Intello for cybersecurity solutions tailored to your organization. Schedule a consultation with our security experts.',
      };
    }
    
    // Assessment
    if (location === '/assessment') {
      return {
        title: 'Free Security Assessment | Intello',
        description: 'Get a free security assessment for your organization. Identify vulnerabilities and compliance gaps with our expert evaluation.',
      };
    }
    
    // Insights
    if (location === '/insights') {
      return {
        title: 'Cybersecurity Insights | Intello',
        description: 'Latest updates, insights, and expert opinions on cybersecurity trends, compliance requirements, and best practices for the UAE region.',
      };
    }
    
    // Default for other pages
    return {};
  };

  const pageSEO = getPageSEO();
  
  // Merge with defaults and props
  const seo = {
    title: title || pageSEO.title || defaults.title,
    description: description || pageSEO.description || defaults.description,
    canonical: canonical || defaults.canonical,
    openGraph: {
      title: openGraph?.title || pageSEO.title || defaults.openGraph.title,
      description: openGraph?.description || pageSEO.description || defaults.openGraph.description,
      url: openGraph?.url || defaults.openGraph.url,
      image: openGraph?.image || defaults.openGraph.image,
      type: openGraph?.type || defaults.openGraph.type,
    },
  };

  // Update document title
  if (typeof document !== 'undefined') {
    document.title = seo.title;
  }

  return (
    <>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.openGraph.title} />
      <meta property="og:description" content={seo.openGraph.description} />
      <meta property="og:url" content={seo.openGraph.url} />
      <meta property="og:image" content={seo.openGraph.image} />
      <meta property="og:type" content={seo.openGraph.type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.openGraph.title} />
      <meta name="twitter:description" content={seo.openGraph.description} />
      <meta name="twitter:image" content={seo.openGraph.image} />
    </>
  );
}
