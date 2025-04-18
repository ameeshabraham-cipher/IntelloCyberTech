import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Sparkles, Award, Calendar, Clock } from 'lucide-react';

const AnniversaryBanner = () => {
  // Calculate years since 2003
  const establishedYear = 2003;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - establishedYear;
  
  return (
    <section className="py-6 bg-gradient-to-r from-black to-[hsl(var(--secondary))]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between rounded-xl bg-gradient-to-r from-black/30 to-transparent backdrop-blur-sm border border-white/10 shadow-lg p-5 md:p-8"
        >
          {/* Left side - Anniversary */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="relative mr-6 hidden md:block">
              <div className="absolute inset-0 bg-[hsl(var(--secondary))] rounded-full opacity-20 blur-md"></div>
              <div className="relative z-10 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] p-4 rounded-full text-white">
                <Sparkles className="h-10 w-10" />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mr-3">Celebrating Our 22nd Anniversary</h2>
                <Award className="h-6 w-6 text-[hsl(var(--secondary))] hidden md:block" />
              </div>
              <p className="text-white/80 mt-1">Two decades of cybersecurity excellence & innovation</p>
            </div>
          </div>
          
          {/* Right side - Years of Experience */}
          <div className="flex gap-6">
            <div className="flex items-center bg-black/20 px-4 py-2 rounded-lg border border-white/10">
              <Calendar className="h-5 w-5 mr-2 text-[hsl(var(--secondary))]" />
              <span className="text-white font-medium">Est. 2003</span>
            </div>
            <div className="flex items-center bg-black/20 px-4 py-2 rounded-lg border border-white/10">
              <Clock className="h-5 w-5 mr-2 text-[hsl(var(--secondary))]" />
              <span className="text-white font-medium">{yearsOfExperience}+ Years Experience</span>
            </div>
            <div className="flex items-center bg-black/20 px-4 py-2 rounded-lg border border-white/10 hidden md:flex">
              <BadgeCheck className="h-5 w-5 mr-2 text-[hsl(var(--secondary))]" />
              <span className="text-white font-medium">Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnniversaryBanner;