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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 px-2 place-items-center">
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
              className="h-16 sm:h-20 md:h-24 w-auto min-w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300" 
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogosCarousel;