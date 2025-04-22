import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Custom responsive client logos carousel without boxes
export function ClientLogosCarousel() {
  const [clientLogos, setClientLogos] = useState<Array<{ name: string; imagePath: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch('/api/client-logos');
        const data = await response.json();
        setClientLogos(data);
      } catch (error) {
        console.error('Failed to fetch client logos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) {
    return <div className="flex justify-center p-8">Loading client logos...</div>;
  }

  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 md:gap-10 px-2">
        {clientLogos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <img 
              src={logo.imagePath} 
              alt={`${logo.name} logo`} 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogosCarousel;