import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderColor?: string;
}

/**
 * LazyImage component with placeholder for improved page loading performance
 * This component only loads images when they enter the viewport
 * and shows a colored placeholder until then
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#0f172a'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Create intersection observer to detect when image is in viewport
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without intersection observer support
      setIsInView(true);
      return;
    }
    
    const element = document.getElementById(`lazy-img-${alt.replace(/\s+/g, '-').toLowerCase()}`);
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: '100px' } // Start loading when image is 100px from viewport
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [alt]);
  
  return (
    <div 
      id={`lazy-img-${alt.replace(/\s+/g, '-').toLowerCase()}`}
      className={`relative ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        backgroundColor: !isLoaded ? placeholderColor : 'transparent',
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
};

export default LazyImage;
