import React from 'react';
import StructuredData from './StructuredData';
import { useLocation } from 'wouter';
import {
  organizationSchema,
  websiteSchema,
  createServiceSchema,
  createBreadcrumbSchema,
  createFAQSchema
} from '../lib/schemas';

/**
 * Schema Manager Component
 * Automatically adds appropriate JSON-LD schemas based on current route
 * This improves search engine understanding of your content structure
 */
const SchemaManager: React.FC = () => {
  const [location] = useLocation();
  const path = location.startsWith('/') ? location.substring(1) : location;
  const segments = path.split('/');
  
  // Default schemas that should be on every page
  const schemas: Array<{ type: string; data: any }> = [
    { type: 'Organization', data: organizationSchema },
  ];
  
  // Add homepage specific schema
  if (path === '' || path === 'home') {
    schemas.push({ type: 'WebSite', data: websiteSchema });
  }
  
  // Add service page schemas
  if (path.startsWith('services')) {
    // Add specific service schemas based on the service type
    if (segments.length > 1) {
      const serviceType = segments[1];
      let serviceName = '';
      let serviceDescription = '';
      let serviceUrl = `https://intellome.com/${path}`;
      
      // Map service paths to names and descriptions
      switch (serviceType) {
        case 'iso27001':
          serviceName = 'ISO 27001 Consultancy';
          serviceDescription = 'Expert ISO 27001 implementation & certification services in UAE';
          break;
        case 'soc2':
          serviceName = 'SOC 2 Compliance';
          serviceDescription = 'Complete SOC 2 compliance services in UAE';
          break;
        case 'gdpr':
          serviceName = 'GDPR Compliance';
          serviceDescription = 'GDPR compliance services for UAE businesses';
          break;
        case 'uae-pdpl':
          serviceName = 'UAE PDPL Compliance';
          serviceDescription = 'Expert UAE PDPL compliance services';
          break;
        case 'cloud-security':
          serviceName = 'Cloud Security';
          serviceDescription = 'Comprehensive cloud security services';
          break;
        // Add more services as needed
        default:
          serviceName = 'Cybersecurity Services';
          serviceDescription = 'Professional cybersecurity and GRC services';
      }
      
      schemas.push({
        type: 'Service',
        data: createServiceSchema(serviceName, serviceDescription, serviceUrl)
      });
    }
    
    // Add breadcrumbs for services
    schemas.push({
      type: 'BreadcrumbList',
      data: createBreadcrumbSchema([
        { name: 'Home', url: 'https://intellome.com/' },
        { name: 'Services', url: 'https://intellome.com/services' },
        ...segments.slice(1).map((segment, index) => {
          const segmentName = segment.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          return {
            name: segmentName,
            url: `https://intellome.com/services/${segments.slice(1, index + 2).join('/')}`
          };
        })
      ])
    });
  }
  
  // Add solutions schemas
  if (path.startsWith('solutions')) {
    // Add breadcrumbs for solutions
    schemas.push({
      type: 'BreadcrumbList',
      data: createBreadcrumbSchema([
        { name: 'Home', url: 'https://intellome.com/' },
        { name: 'Solutions', url: 'https://intellome.com/solutions' },
        ...segments.slice(1).map((segment, index) => {
          const segmentName = segment.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          return {
            name: segmentName,
            url: `https://intellome.com/solutions/${segments.slice(1, index + 2).join('/')}`
          };
        })
      ])
    });
  }
  
  // Add FAQ schema to pages that likely have FAQs
  if (['about-us', 'services', 'solutions'].includes(segments[0])) {
    // This is a placeholder - in a real implementation, you would
    // pull actual FAQs from your content or a CMS
    const placeholderFaqs = [
      {
        question: 'What cybersecurity services does Intello offer?',
        answer: 'Intello provides a comprehensive range of cybersecurity services including ISO 27001, SOC 2, GDPR, and UAE PDPL compliance, security assessments, and managed security services.'
      },
      {
        question: 'How long has Intello been in business?',
        answer: 'Intello Cyber Technologies has been providing cybersecurity and GRC solutions since 2003, with over 22 years of experience in the industry.'
      }
    ];
    
    schemas.push({
      type: 'FAQPage',
      data: createFAQSchema(placeholderFaqs)
    });
  }
  
  return (
    <>
      {schemas.map((schema, index) => (
        <StructuredData 
          key={`schema-${index}`}
          type={schema.type} 
          data={schema.data} 
        />
      ))}
    </>
  );
};

export default SchemaManager;
