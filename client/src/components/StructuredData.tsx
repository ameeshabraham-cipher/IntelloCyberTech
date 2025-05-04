import React from 'react';

interface StructuredDataProps {
  type: string;
  data: Record<string, any>;
}

/**
 * StructuredData component for adding JSON-LD schemas to the page head
 * This improves SEO by helping search engines understand your content
 */
const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  // Create the full schema object with @context and data
  const schemaData = {
    '@context': 'https://schema.org',
    ...data
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(schemaData) 
      }}
    />
  );
};

export default StructuredData;
