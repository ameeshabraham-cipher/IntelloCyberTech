import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { updateMetaTags, SEO_CONFIGS } from '@/lib/seo';
import StructuredData from './StructuredData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  h1?: string;
  focusKeywords?: string[];
}

/**
 * SEO component that manages all meta tags for the current page
 */
export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  type = 'website',
  h1,
  focusKeywords
}: SEOProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    // Get the full path from location and try to find a specific config
    // First try the complete path, then fallback to main section
    const fullPath = location.startsWith('/') ? location.substring(1) : location;
    const pagePath = fullPath || 'home';
    const mainSection = fullPath.split('/')[0] || 'home';
    
    // Try to find specific config for this path, or fall back to main section
    let seoConfig = SEO_CONFIGS[pagePath] || SEO_CONFIGS[mainSection];
    
    // If none found, try a more targeted approach for sub-sections
    if (!seoConfig && fullPath.includes('/')) {
      const sectionKey = fullPath.replace(/\/[^/]+$/, ''); // Remove last part after slash
      seoConfig = SEO_CONFIGS[sectionKey] || SEO_CONFIGS[mainSection];
    }
    
    // If custom props are provided, they override the defaults
    const metaConfig = {
      title: title || seoConfig?.title || 'Intello | Cybersecurity & GRC Solutions',
      description: description || seoConfig?.description || 'Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance.',
      keywords: keywords || seoConfig?.keywords,
      ogImage: ogImage || seoConfig?.ogImage || 'https://intellome.com/images/intello-new-logo.png',
      canonicalUrl: `https://intellome.com${location}`,
      h1: h1 || seoConfig?.h1,
      focusKeywords: focusKeywords || seoConfig?.focusKeywords
    };
    
    // Update meta tags
    updateMetaTags(metaConfig);
    
    // Update Open Graph type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }
    
    // Update main heading if present on the page
    if (metaConfig.h1) {
      const mainHeading = document.querySelector('h1');
      if (mainHeading) {
        mainHeading.textContent = metaConfig.h1;
      }
    }
    
    // Ensure focus keywords are present in content where possible
    if (metaConfig.focusKeywords && metaConfig.focusKeywords.length > 0) {
      const pageContent = document.body.textContent?.toLowerCase() || '';
      
      // Log keyword presence for debugging (remove in production)
      // console.log('SEO Focus Keywords Check:');
      // metaConfig.focusKeywords.forEach(keyword => {
      //   const isPresent = pageContent.includes(keyword.toLowerCase());
      //   console.log(`${keyword}: ${isPresent ? '✓' : '✗'}`);
      // });
    }
    
  }, [location, title, description, keywords, ogImage, type, h1, focusKeywords]);
  
  return (
    <>
      {/* Add basic structured data for website */}
      <StructuredData 
        type="Organization" 
        data={{
          name: "Intello Cyber Technologies",
          url: "https://intellome.com",
          logo: "https://intellome.com/images/intello-new-logo.png",
          sameAs: [
            "https://www.linkedin.com/company/intellocyber"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971 55 355 6787",
            email: "info@intellome.com",
            contactType: "customer service",
            areaServed: "UAE"
          }
        }} 
      />
    </>
  );
}