type StructuredDataProps = {
  type: 'Organization' | 'WebSite' | 'FAQPage' | 'BreadcrumbList' | 'Article' | 'Service';
  data: any;
};

export default function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
