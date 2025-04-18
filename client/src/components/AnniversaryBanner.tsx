import React from 'react';
import { motion } from 'framer-motion';
import { 
  BadgeCheck, Sparkles, Award, Calendar, Clock, 
  Shield, Target, Star
} from 'lucide-react';

const AnniversaryBanner = () => {
  // Calculate years since 2003
  const establishedYear = 2003;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - establishedYear;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background with cyber security pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[hsl(var(--secondary))]/20 to-black"></div>
      
      {/* Animated particles for festivity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(235, 52, 67, ${Math.random() * 0.5 + 0.3})`,
              boxShadow: '0 0 8px rgba(235, 52, 67, 0.8)'
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="rounded-xl bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-lg border border-[hsl(var(--secondary))]/20 shadow-xl overflow-hidden"
        >
          {/* Top decorative badge/ribbon */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--secondary))] text-white text-sm font-bold py-1 px-8 rounded-b-lg shadow-lg">
            <Sparkles className="inline-block h-4 w-4 mr-1 animate-pulse" />
            <span>22 Years of Excellence</span>
          </div>
          
          <div className="p-8 md:p-10">
            {/* Header Section */}
            <motion.div 
              variants={itemVariants}
              className="text-center mb-10"
            >
              <div className="inline-flex justify-center items-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[hsl(var(--secondary))] rounded-full opacity-20 blur-lg animate-pulse"></div>
                  <motion.div 
                    className="relative z-10 bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] p-5 rounded-full text-white"
                    whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
                  >
                    <Award className="h-12 w-12" />
                  </motion.div>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Celebrating Two Decades</span>
              </h2>
              
              <div className="flex justify-center mt-3">
                <div className="relative h-1 w-40 bg-[hsl(var(--secondary))]/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-[hsl(var(--secondary))]"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
                Since 2003, Intello has been at the forefront of cybersecurity innovation, helping organizations 
                navigate evolving digital threats with cutting-edge solutions and unmatched expertise.
              </p>
            </motion.div>
            
            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-[hsl(var(--secondary))]/10 max-w-4xl mx-auto"
            >
              <div className="text-center p-3 bg-black/20 rounded-lg border border-white/5">
                <div className="flex justify-center mb-2">
                  <Calendar className="h-6 w-6 text-[hsl(var(--secondary))]" />
                </div>
                <div className="text-4xl font-bold text-white">2003</div>
                <div className="text-white/60 text-sm">Established</div>
              </div>
              
              <div className="text-center p-3 bg-black/20 rounded-lg border border-white/5">
                <div className="flex justify-center mb-2">
                  <Clock className="h-6 w-6 text-[hsl(var(--secondary))]" />
                </div>
                <div className="text-4xl font-bold text-[hsl(var(--secondary))]">{yearsOfExperience}+</div>
                <div className="text-white/60 text-sm">Years</div>
              </div>
              
              <div className="text-center p-3 bg-black/20 rounded-lg border border-white/5">
                <div className="flex justify-center mb-2">
                  <Shield className="h-6 w-6 text-[hsl(var(--secondary))]" />
                </div>
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-white/60 text-sm">Projects</div>
              </div>
              
              <div className="text-center p-3 bg-black/20 rounded-lg border border-white/5">
                <div className="flex justify-center mb-2">
                  <Target className="h-6 w-6 text-[hsl(var(--secondary))]" />
                </div>
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-white/60 text-sm">Commitment</div>
              </div>
            </motion.div>
            
            {/* Achievements */}
            <motion.div 
              variants={itemVariants} 
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center mb-3">
                <Star className="h-5 w-5 text-[hsl(var(--secondary))] mr-2" />
                <span className="text-white font-semibold">Excellence in Cybersecurity & Compliance</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                <div className="bg-black/30 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/10 text-white/80 text-sm">
                  Industry Leader
                </div>
                <div className="bg-black/30 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/10 text-white/80 text-sm">
                  Award-Winning Solutions
                </div>
                <div className="bg-black/30 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/10 text-white/80 text-sm">
                  Global Impact
                </div>
                <div className="bg-black/30 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/10 text-white/80 text-sm">
                  AI-Powered Innovation
                </div>
                <div className="bg-black/30 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/10 text-white/80 text-sm">
                  Trusted Security Partner
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnniversaryBanner;