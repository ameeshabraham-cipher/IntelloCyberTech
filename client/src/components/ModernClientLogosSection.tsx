import React from 'react';
import { motion } from 'framer-motion';
import ClientLogosCarousel from './ClientLogosCarousel';

export default function ModernClientLogosSection() {
  return (
    <div className="mt-20 relative">
      <div className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
        
        {/* Geometric decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-12 left-[10%] w-20 h-20 rounded-full border border-primary transform rotate-45"></div>
          <div className="absolute bottom-20 right-[15%] w-16 h-16 rounded-full border-2 border-primary transform -rotate-12"></div>
          <div className="absolute top-1/3 right-[20%] w-24 h-8 bg-primary/10 rounded-full transform rotate-45 blur-sm"></div>
          <div className="absolute bottom-1/3 left-[15%] w-32 h-8 bg-primary/5 rounded-full transform -rotate-12 blur-sm"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="relative">
            {/* Title with decorative elements */}
            <div className="relative flex justify-center">
              <div className="relative inline-block">
                <h3 className="text-center text-gray-800 text-2xl sm:text-3xl font-bold mb-1 relative z-10">
                  Trusted by Leading Organizations
                </h3>
                <div className="absolute -bottom-2 left-0 right-0 h-2 bg-primary/10 rounded-full transform skew-x-12"></div>
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-gray-600 text-sm mb-16 mt-3 max-w-md mx-auto"
            >
              Delivering exceptional cybersecurity services to industry leaders worldwide
            </motion.p>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative">
            <ClientLogosCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}