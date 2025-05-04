/**
 * Structured Data Schemas for Important Pages
 * 
 * These JSON-LD schemas help search engines understand your content better
 * and can result in rich snippets in search results
 */

// Organization schema with complete details
export const organizationSchema = {
  "@type": "Organization",
  "name": "Intello Cyber Technologies",
  "url": "https://intellome.com/",
  "logo": "https://intellome.com/images/intello-new-logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/intellome/",
    "https://twitter.com/intellome",
    "https://www.facebook.com/intellome"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sheikh Zayed Road",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "UAE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+971-4-000-0000",
    "contactType": "customer service"
  },
  "description": "Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance with AI-powered automation."
};

// LocalBusiness schema for local SEO boost
export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "name": "Intello Cyber Technologies",
  "image": "https://intellome.com/images/intello-new-logo.png",
  "@id": "https://intellome.com",
  "url": "https://intellome.com",
  "telephone": "+971-4-000-0000",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sheikh Zayed Road",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "UAE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2048, 
    "longitude": 55.2708
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/intellome/",
    "https://twitter.com/intellome",
    "https://www.facebook.com/intellome"
  ]
};

// Service schema for service pages
export const createServiceSchema = (name: string, description: string, url: string) => ({
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Intello Cyber Technologies"
  },
  "url": url,
  "serviceType": "Cybersecurity"
});

// FAQPage schema for pages with FAQs
export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// BreadcrumbList schema for navigation paths
export const createBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// WebSite schema for homepage
export const websiteSchema = {
  "@type": "WebSite",
  "name": "Intello Cyber Technologies",
  "url": "https://intellome.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://intellome.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Article schema for blog/insight posts
export const createArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) => ({
  "@type": "Article",
  "headline": headline,
  "description": description,
  "image": image,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Person",
    "name": authorName
  },
  "publisher": {
    "@type": "Organization",
    "name": "Intello Cyber Technologies",
    "logo": {
      "@type": "ImageObject",
      "url": "https://intellome.com/images/intello-new-logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://intellome.com/insights/"
  }
});
