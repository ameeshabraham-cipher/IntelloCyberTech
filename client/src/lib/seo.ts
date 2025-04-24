// SEO helper functions for dynamically updating meta tags

interface MetaTagsConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  h1?: string;
  focusKeywords?: string[];
  schema?: any;
}

/**
 * Updates the document meta tags for SEO optimization
 * 
 * @param config - Configuration object containing meta tag values
 */
export function updateMetaTags(config: MetaTagsConfig): void {
  // Ensure title length is optimal (50-60 chars)
  const title = config.title.length > 60 
    ? config.title.substring(0, 57) + '...' 
    : config.title;
  
  // Ensure description length is optimal (120-155 chars)
  const description = config.description.length > 155 
    ? config.description.substring(0, 152) + '...' 
    : config.description;
  
  // Update page title
  document.title = title;
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
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
  
  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', description);
  if (ogUrl && config.canonicalUrl) ogUrl.setAttribute('content', config.canonicalUrl);
  if (ogImage && config.ogImage) ogImage.setAttribute('content', config.ogImage);
  
  // Update Twitter meta tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  
  if (twitterTitle) twitterTitle.setAttribute('content', title);
  if (twitterDescription) twitterDescription.setAttribute('content', description);
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
    title: 'Intello | Cybersecurity & GRC Solutions',
    description: 'Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance with AI-powered automation.',
    keywords: 'Cybersecurity Dubai, GRC Solutions UAE, ISO 27001 Consultancy, SOC 2 Compliance, UAE PDPL, Information Security UAE',
    canonicalUrl: 'https://intellome.com/',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Cybersecurity & GRC Solutions',
    focusKeywords: ['cybersecurity dubai', 'grc solutions', 'iso 27001', 'soc 2', 'cybersecurity consultancy']
  },
  
  about: {
    title: 'About Intello | Leading Cybersecurity Consultancy in UAE',
    description: 'Trusted cybersecurity & GRC consultancy with 23+ years of experience helping UAE businesses secure their digital assets & achieve compliance.',
    keywords: 'Cybersecurity Consultancy UAE, GRC Experts Dubai, ISO 27001 Consultants UAE, SOC 2 Compliance Dubai',
    canonicalUrl: 'https://intellome.com/about',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'About Intello - Cybersecurity & GRC Experts',
    focusKeywords: ['cybersecurity consultancy uae', 'grc experts dubai', 'information security consultants']
  },
  
  services: {
    title: 'Cybersecurity & GRC Services | UAE Compliance Experts',
    description: 'Comprehensive cybersecurity services in UAE: GRC, security assessments, ISO 27001, SOC 2 consultancy, and compliance automation.',
    keywords: 'Cybersecurity Services UAE, GRC Services Dubai, Security Assessment UAE, ISO 27001 Implementation, SOC 2 Compliance',
    canonicalUrl: 'https://intellome.com/services',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Cybersecurity & GRC Services in UAE',
    focusKeywords: ['cybersecurity services uae', 'grc services dubai', 'iso 27001 implementation', 'soc 2 compliance']
  },
  
  solutions: {
    title: 'Cybersecurity Solutions UAE | ISO 27001 & SOC 2 Experts',
    description: 'Tailored cybersecurity solutions for UAE businesses. Virtual CISO, compliance automation & managed security services from Intello.',
    keywords: 'Cybersecurity Solutions UAE, Virtual CISO Dubai, Compliance Automation, SOC 2 Services, UAE PDPL Compliance',
    canonicalUrl: 'https://intellome.com/solutions',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Cybersecurity & Compliance Solutions',
    focusKeywords: ['cybersecurity solutions uae', 'virtual ciso dubai', 'compliance automation']
  },
  
  contact: {
    title: 'Contact Intello | UAE Cybersecurity & GRC Experts',
    description: 'Get in touch with Dubai\'s leading cybersecurity experts. Schedule a free consultation for ISO 27001, SOC 2, UAE PDPL or security assessments.',
    keywords: 'Cybersecurity Consultation UAE, GRC Consultation Dubai, Security Assessment UAE, ISO 27001 Consultation',
    canonicalUrl: 'https://intellome.com/contact',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Contact UAE\'s Leading Cybersecurity Experts',
    focusKeywords: ['cybersecurity consultation uae', 'grc consultation dubai', 'security assessment uae']
  },
  
  assessment: {
    title: 'Security Assessment UAE | Vulnerability Testing Dubai',
    description: 'Comprehensive security assessments for UAE businesses. Identify vulnerabilities, meet compliance requirements & strengthen security posture.',
    keywords: 'Security Assessment UAE, Vulnerability Testing Dubai, Penetration Testing UAE, Security Gap Analysis, Cybersecurity Audit',
    canonicalUrl: 'https://intellome.com/assessment',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Security Assessment & Vulnerability Testing',
    focusKeywords: ['security assessment uae', 'vulnerability testing dubai', 'penetration testing uae']
  },
  
  insights: {
    title: 'Cybersecurity & Compliance Insights | UAE Security News',
    description: 'Expert cybersecurity insights for UAE businesses. Latest on ISO 27001, SOC 2, UAE PDPL compliance & security best practices.',
    keywords: 'Cybersecurity Insights UAE, Compliance Articles, Information Security Blog, ISO 27001 Resources, UAE PDPL Guide',
    canonicalUrl: 'https://intellome.com/insights',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Cybersecurity & Compliance Insights for UAE',
    focusKeywords: ['cybersecurity insights uae', 'compliance articles', 'iso 27001 resources', 'uae pdpl guide']
  },
  
  // Service pages with specialized SEO
  'services/iso27001': {
    title: 'ISO 27001 Consultancy UAE | Information Security Experts',
    description: 'Expert ISO 27001 implementation & certification services in UAE. Get compliant with international information security standards.',
    keywords: 'ISO 27001 Consultancy UAE, ISO 27001 Certification Dubai, Information Security Management, ISO 27001 Implementation UAE',
    canonicalUrl: 'https://intellome.com/services/iso27001',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'ISO 27001 Consultancy & Implementation Services',
    focusKeywords: ['iso 27001 consultancy uae', 'iso 27001 certification dubai', 'information security management']
  },
  
  'services/soc2': {
    title: 'SOC 2 Compliance Dubai | UAE Trust Services Experts',
    description: 'Complete SOC 2 compliance services in UAE. Gap assessment, remediation & certification support from experienced auditors.',
    keywords: 'SOC 2 Compliance Dubai, SOC 2 Certification UAE, AICPA Trust Services, SOC 2 Audit Support, SOC 2 Gap Assessment',
    canonicalUrl: 'https://intellome.com/services/soc2',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'SOC 2 Compliance & Certification Services',
    focusKeywords: ['soc 2 compliance dubai', 'soc 2 certification uae', 'trust services criteria']
  },
  
  'services/gdpr': {
    title: 'GDPR Compliance UAE | EU Data Protection Experts',
    description: 'GDPR compliance services for UAE businesses handling EU resident data. Assessment, implementation & ongoing compliance support.',
    keywords: 'GDPR Compliance UAE, EU Data Protection Services, GDPR Assessment Dubai, Data Privacy Compliance, Data Protection Officer',
    canonicalUrl: 'https://intellome.com/services/gdpr',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'GDPR Compliance Services for UAE Businesses',
    focusKeywords: ['gdpr compliance uae', 'eu data protection services', 'data privacy compliance']
  },
  
  'services/uae-pdpl': {
    title: 'UAE PDPL Compliance | UAE Data Protection Law Experts',
    description: 'Expert UAE PDPL compliance services. Prepare for UAE\'s Personal Data Protection Law with our gap assessment & implementation support.',
    keywords: 'UAE PDPL Compliance, UAE Data Protection Law, Personal Data Protection Services, UAE PDPL Implementation, Data Protection UAE',
    canonicalUrl: 'https://intellome.com/services/uae-pdpl',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'UAE PDPL Compliance Services',
    focusKeywords: ['uae pdpl compliance', 'uae data protection law', 'personal data protection services']
  },
  
  'services/cloud-security': {
    title: 'Cloud Security Services UAE | Multi-Cloud Protection',
    description: 'Expert cloud security services for UAE businesses. Secure AWS, Azure & Google Cloud with our cloud security assessment & controls.',
    keywords: 'Cloud Security Services UAE, Multi-Cloud Protection, AWS Security Dubai, Azure Security UAE, Cloud Security Assessment',
    canonicalUrl: 'https://intellome.com/services/cloud-security',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Cloud Security Services & Multi-Cloud Protection',
    focusKeywords: ['cloud security services uae', 'multi-cloud protection', 'aws security dubai', 'azure security uae']
  },
  
  'services/vciso': {
    title: 'Virtual CISO Services UAE | Fractional CISO Dubai',
    description: 'Professional Virtual CISO services in UAE. Get expert security leadership without the cost of a full-time CISO.',
    keywords: 'Virtual CISO UAE, Fractional CISO Dubai, vCISO Services, Outsourced Security Officer, Security Leadership UAE',
    canonicalUrl: 'https://intellome.com/services/vciso',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Virtual CISO Services for UAE Businesses',
    focusKeywords: ['virtual ciso uae', 'fractional ciso dubai', 'vciso services', 'outsourced security officer']
  },
  
  'services/penetration-testing': {
    title: 'Penetration Testing UAE | Ethical Hacking Services Dubai',
    description: 'Professional penetration testing services in UAE. Web, network, API & mobile app security testing by certified ethical hackers.',
    keywords: 'Penetration Testing UAE, Ethical Hacking Dubai, Web Application Security Testing, Network Penetration Testing, API Security Testing',
    canonicalUrl: 'https://intellome.com/services/penetration-testing',
    ogImage: 'https://intellome.com/images/intello-new-logo.png',
    h1: 'Penetration Testing & Ethical Hacking Services',
    focusKeywords: ['penetration testing uae', 'ethical hacking dubai', 'web application security testing', 'network penetration testing']
  }
};