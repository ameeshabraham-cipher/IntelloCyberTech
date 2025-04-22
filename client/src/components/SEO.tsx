import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { updateMetaTags, SEO_CONFIGS } from '@/lib/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

/**
 * SEO component that manages all meta tags for the current page
 */
export default function SEO({
  title,
  description,
  keywords,
  ogImage,
  type = 'website'
}: SEOProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    // Check if we have predefined SEO config for this path
    const pagePath = location.split('/')[1] || 'home';
    const seoConfig = SEO_CONFIGS[pagePath];
    
    // If custom props are provided, they override the defaults
    const metaConfig = {
      title: title || seoConfig?.title || 'Intello. | GRC, Audit & Cybersecurity Solutions',
      description: description || seoConfig?.description || 'Empowering Businesses with Future-Proof Cybersecurity & GRC Solutions.',
      keywords: keywords || seoConfig?.keywords,
      ogImage: ogImage || seoConfig?.ogImage || 'https://intellome.com/images/intello-new-logo.png',
      canonicalUrl: `https://intellome.com${location}`
    };
    
    // Update meta tags
    updateMetaTags(metaConfig);
    
    // Update Open Graph type
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }
  }, [location, title, description, keywords, ogImage, type]);
  
  return null; // This component doesn't render anything
}