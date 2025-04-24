import React from 'react';

interface StructuredDataProps {
  type: string;
  data: any;
}

/**
 * Component for adding structured data JSON-LD to pages
 * Helps with SEO by providing explicit structured data to search engines
 * 
 * @param type - The schema.org type to use (Organization, Service, etc.)
 * @param data - The data object to include in the schema
 */
const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;