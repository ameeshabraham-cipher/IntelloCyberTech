import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Service' | 'FAQPage' | 'Article';
  data: any;
}

/**
 * Component that adds JSON-LD structured data to the page for better SEO
 * @param type The schema.org type
 * @param data The structured data object
 */
export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    
    // Format the JSON-LD data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
    
    // Set the script content
    script.textContent = JSON.stringify(jsonLd);
    
    // Add a unique ID to prevent duplicates
    const id = `structured-data-${type.toLowerCase()}`;
    script.id = id;
    
    // Remove any existing scripts with the same ID
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add the script to the document head
    document.head.appendChild(script);
    
    // Clean up when component unmounts
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);
  
  return null; // Component doesn't render anything visible
}