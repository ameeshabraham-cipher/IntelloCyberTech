// SEO helper functions for dynamically updating meta tags

interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * Updates the document meta tags for SEO optimization
 * 
 * @param config - Configuration object containing meta tag values
 */
export function updateMetaTags(config: MetaTagsConfig): void {
  // Update page title
  document.title = config.title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update meta keywords if provided
  if (config.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords);
    }
  }
  
  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (ogTitle) ogTitle.setAttribute('content', config.title);
  if (ogDescription) ogDescription.setAttribute('content', config.description);
  if (ogUrl && config.canonicalUrl) ogUrl.setAttribute('content', config.canonicalUrl);
  if (ogImage && config.ogImage) ogImage.setAttribute('content', config.ogImage);
  
  // Update Twitter meta tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  
  if (twitterTitle) twitterTitle.setAttribute('content', config.title);
  if (twitterDescription) twitterDescription.setAttribute('content', config.description);
  if (twitterImage && config.ogImage) twitterImage.setAttribute('content', config.ogImage);
  
  // Update canonical URL if provided
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink && config.canonicalUrl) {
    canonicalLink.setAttribute('href', config.canonicalUrl);
  }
}

// Predefined SEO configurations for common pages
export const SEO_CONFIGS: { [key: string]: MetaTagsConfig } = {
  home: {
    title: 'Intello. | GRC, Audit & Cybersecurity Solutions',
    description: 'Empowering Businesses with Future-Proof Cybersecurity & GRC Solutions. Expert consultancy in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation.',
    keywords: 'Cybersecurity, GRC, Information Security, ISO 27001, SOC 2, GDPR, UAE PDPL, Compliance Automation',
    canonicalUrl: 'https://intellome.com/',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  about: {
    title: 'About Intello | Cybersecurity & GRC Experts',
    description: 'With over 23 years of experience, Intello has been delivering cutting-edge cybersecurity and compliance solutions since 2003. Learn about our mission and expertise.',
    keywords: 'About Intello, Cybersecurity Experts, GRC Consultants, ISO 27001 Consultants, SOC 2 Consultants',
    canonicalUrl: 'https://intellome.com/about',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  services: {
    title: 'Cybersecurity & GRC Services | Intello',
    description: 'Comprehensive cybersecurity and compliance services including GRC consulting, security assessments, managed security, and compliance automation solutions.',
    keywords: 'Cybersecurity Services, GRC Services, Security Assessment, Managed Security, Compliance Automation',
    canonicalUrl: 'https://intellome.com/services',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  solutions: {
    title: 'Cybersecurity & Compliance Solutions | Intello',
    description: 'Tailored cybersecurity and compliance solutions for businesses of all sizes. Virtual CISO, compliance automation, and managed security services.',
    keywords: 'Cybersecurity Solutions, Compliance Solutions, Virtual CISO, Compliance Automation',
    canonicalUrl: 'https://intellome.com/solutions',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  contact: {
    title: 'Contact Intello | Cybersecurity & GRC Experts',
    description: 'Get in touch with Intello\'s cybersecurity and compliance experts. Schedule a free consultation or request more information about our services.',
    keywords: 'Contact Intello, Cybersecurity Consultation, GRC Consultation, Security Assessment',
    canonicalUrl: 'https://intellome.com/contact',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  assessment: {
    title: 'Security Assessment | Intello',
    description: 'Comprehensive security assessment services to identify vulnerabilities and compliance gaps in your organization\'s security posture.',
    keywords: 'Security Assessment, Vulnerability Assessment, Penetration Testing, Security Gap Analysis',
    canonicalUrl: 'https://intellome.com/assessment',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  },
  
  insights: {
    title: 'Cybersecurity & Compliance Insights | Intello',
    description: 'Expert articles, guides, and resources on cybersecurity, compliance, and information security best practices.',
    keywords: 'Cybersecurity Insights, Compliance Articles, Information Security Resources, GRC Blog',
    canonicalUrl: 'https://intellome.com/insights',
    ogImage: 'https://intellome.com/images/intello-new-logo.png'
  }
};