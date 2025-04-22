import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Ultra-modern, stunning client logos showcase
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

  // Create a circular arrangement for desktop view
  const generateCircularPosition = (index: number, total: number) => {
    // For small screens, we'll use a grid layout instead
    if (typeof window !== 'undefined' && window.innerWidth < 768) return {};
    
    const radius = 250; // Adjust as needed
    const angle = (index / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    return {
      left: `calc(50% + ${x}px)`,
      top: `calc(50% + ${y}px)`,
    };
  };

  return (
    <div className="relative w-full">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-[600px] h-[600px] rounded-full 
                     bg-gradient-to-r from-primary/5 to-blue-500/5 
                     blur-3xl opacity-30"
        ></div>
      </div>

      {/* Mobile view - Grid layout */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-6 place-items-center">
          {clientLogos.map((logo, index) => (
            <LogoItem key={index} logo={logo} index={index} />
          ))}
        </div>
      </div>

      {/* Desktop view - Circular layout */}
      <div className="hidden md:block relative h-[600px]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[200px] h-[200px] rounded-full border-2 border-dashed border-gray-200
                        animate-[spin_20s_linear_infinite]">
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[400px] h-[400px] rounded-full border border-gray-100">
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[500px] h-[500px] rounded-full border border-gray-50">
        </div>
        
        {clientLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={generateCircularPosition(index, clientLogos.length)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1
            }}
          >
            <LogoItem logo={logo} index={index} />
          </motion.div>
        ))}
        
        {/* Center element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-[100px] h-[100px] bg-gradient-to-br from-primary/30 to-primary/10
                    rounded-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="font-bold text-sm text-center text-gray-700">
            <span className="block">Global</span>
            <span className="block">Trust</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface LogoItemProps {
  logo: { name: string; imagePath: string };
  index: number;
}

const LogoItem = ({ logo, index }: LogoItemProps) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: 5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/10 to-purple-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg rounded-xl overflow-hidden
                     p-4 flex items-center justify-center
                     transform transition-all duration-500
                     group-hover:shadow-xl">
        <div className="relative z-10 p-2">
          <img 
            src={logo.imagePath} 
            alt={`${logo.name} logo`} 
            className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-all duration-300 
                     filter grayscale group-hover:grayscale-0" 
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-90"></div>
      </div>
      
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1
                  bg-white shadow-md rounded-full
                  opacity-0 group-hover:opacity-100 group-hover:-bottom-5"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-xs font-medium text-gray-700">{logo.name}</span>
      </motion.div>
    </motion.div>
  );
};

export default ClientLogosCarousel;