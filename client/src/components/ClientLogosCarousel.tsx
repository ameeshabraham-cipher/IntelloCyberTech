import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, CheckCircle, Award, Star } from 'lucide-react';

// Modern client logos showcase with creative layout
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

  // Animation variants for logos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Group logos into rows for better organization
  const rows = [];
  const logosPerRow = Math.min(5, Math.ceil(clientLogos.length / 2));
  
  for (let i = 0; i < clientLogos.length; i += logosPerRow) {
    rows.push(clientLogos.slice(i, i + logosPerRow));
  }

  return (
    <div className="relative">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="absolute top-5 left-[10%] text-primary rotate-12">
          <Shield size={60} />
        </div>
        <div className="absolute bottom-10 right-[15%] text-primary -rotate-12">
          <Zap size={50} />
        </div>
        <div className="absolute top-1/2 left-[5%] text-primary">
          <CheckCircle size={40} />
        </div>
        <div className="absolute top-1/3 right-[8%] text-primary">
          <Award size={45} />
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-primary">
          <Star size={35} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`
              flex items-center justify-center gap-4 md:gap-8 lg:gap-12 py-4 md:py-6
              ${rowIndex % 2 === 0 ? '' : '-translate-x-4 sm:-translate-x-8 md:-translate-x-12'}
            `}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {row.map((logo, logoIndex) => (
              <motion.div
                key={logoIndex}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border border-white/20">
                    <img 
                      src={logo.imagePath} 
                      alt={`${logo.name} logo`} 
                      className="h-14 sm:h-16 md:h-18 w-auto object-contain" 
                    />
                  </div>
                </div>
                <motion.p 
                  className="text-xs md:text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{ delay: 0.2 }}
                >
                  {logo.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ClientLogosCarousel;