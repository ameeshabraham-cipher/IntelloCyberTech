import React from 'react';
import { Helmet } from 'react-helmet';

interface SocialMetaProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterSite?: string;
  twitterCreator?: string;
  ogLocale?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
}

/**
 * SocialMeta component for adding comprehensive Open Graph and Twitter card metadata
 * to improve social media sharing appearance and SEO
 */
export default function SocialMeta({
  title,
  description,
  url = 'https://intellome.com', 
  image = 'https://intellome.com/og-image.jpg', // Default OG image
  type = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@IntelloCyber',
  twitterCreator = '@IntelloCyber',
  ogLocale = 'en_US',
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags
}: SocialMetaProps) {
  // Ensure URL has the full domain
  const fullUrl = url.startsWith('http') ? url : `https://intellome.com${url.startsWith('/') ? url : `/${url}`}`;
  
  return (
    <Helmet>
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Intello Cyber Technologies" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Only add article metadata if type is article */}
      {type === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {type === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {type === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {type === 'article' && articleTags && articleTags.length > 0 && (
        <>
          {articleTags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
    </Helmet>
  );
}