import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
}

/**
 * SEO-optimized image component that ensures all images have proper alt text and loading attributes
 * This helps with both accessibility and SEO
 */
const SEOImage: React.FC<SEOImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async'
}) => {
  // Ensure we have valid alt text (important for SEO)
  const safeAlt = alt || 'Image';
  
  // Generate unique ID for the image based on source filename
  const imgId = src.split('/').pop()?.split('.')[0] || 'img';
  
  return (
    <img
      src={src}
      alt={safeAlt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      id={`img-${imgId}`}
    />
  );
};

export default SEOImage;
