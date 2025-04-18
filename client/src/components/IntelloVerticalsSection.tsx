import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Settings, Cloud, Lock, CheckCircle2, Zap, Users, Server } from 'lucide-react';
import { Link } from 'wouter';

const IntelloVerticalsSection = () => {
  // The 4 major verticals of Intello 
  const verticals = [
    {
      title: "STRATEGIC CONSULTING",
      description: "At the core of every secure enterprise is a sound strategy. Our consulting practice helps C-level leaders and boards navigate technology risk, optimize cyber investments, and align security with enterprise-wide goals.",
      icon: <Settings className="h-8 w-8 text-white" />,
      additionalIcons: [<Users className="h-5 w-5 text-white opacity-80" />, <Lock className="h-5 w-5 text-white opacity-80" />],
      bgColor: "bg-gradient-to-br from-black to-gray-800",
      textColor: "text-white",
      accentColor: "from-cyan-500/30"
    },
    {
      title: "IT GOVERNANCE, RISK & COMPLIANCE (IT GRC)",
      description: "Our GRC services enable organizations to take a structured, strategic approach to managing technology risks and meeting regulatory requirements all while staying aligned with business objectives.",
      icon: <Shield className="h-8 w-8 text-white" />,
      additionalIcons: [<CheckCircle2 className="h-5 w-5 text-white opacity-80" />],
      bgColor: "bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))/80]",
      textColor: "text-white",
      accentColor: "from-blue-500/30"
    },
    {
      title: "CYBERSECURITY SOLUTIONS",
      description: "We help enterprises build layered, adaptive security frameworks to protect against evolving cyber threats and secure their most critical assets across cloud, endpoint, and hybrid environments.",
      icon: <Layers className="h-8 w-8 text-white" />,
      additionalIcons: [<Lock className="h-5 w-5 text-white opacity-80" />, <Zap className="h-5 w-5 text-white opacity-80" />],
      bgColor: "bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))/80]",
      textColor: "text-white",
      accentColor: "from-yellow-500/30"
    },
    {
      title: "MANAGED IT SERVICES",
      description: "The managed IT services are designed to ensure stability, performance, and availability, giving your organization the technological backbone it needs to grow securely and efficiently. Including cloud and infrastructure consulting services.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      additionalIcons: [<Server className="h-5 w-5 text-white opacity-80" />],
      bgColor: "bg-gradient-to-br from-black to-gray-800",
      textColor: "text-white",
      accentColor: "from-purple-500/30"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-card to-background border-t border-b border-border relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[hsl(var(--secondary))] blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-[hsl(var(--primary))] blur-3xl"></div>
        <div className="absolute right-1/4 bottom-10 w-48 h-48 rounded-full bg-[hsl(var(--secondary))] blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-sm font-medium mb-4"
          >
            Our Core Capabilities
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4 relative inline-block"
          >
            <span className="relative z-10">Pillars of Cyber Excellence</span>
            <span className="absolute left-0 bottom-0 w-full h-3 bg-[hsl(var(--secondary))]/20 rounded -z-10 transform -rotate-1"></span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto text-base"
          >
            Our four strategic domains of expertise that form the foundation of Intello's holistic cybersecurity approach
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              className={`${vertical.bgColor} ${vertical.textColor} rounded-xl overflow-hidden shadow-lg h-full relative`}
            >
              {/* Top accent gradient */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${vertical.accentColor} to-transparent`}></div>
              
              {/* Content container */}
              <div className="p-6 flex flex-col h-full">
                {/* Glowing icon container */}
                <div className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full w-fit mb-5 relative">
                  {vertical.icon}
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-sm -z-10"></div>
                </div>
                
                {/* Title with custom underline */}
                <h3 className="font-bold text-lg mb-4 pb-2 border-b border-white/10">{vertical.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-current/90 mb-5 flex-grow">
                  {vertical.description}
                </p>
                
                {/* Additional small icons */}
                <div className="flex space-x-2 mt-auto">
                  {vertical.additionalIcons?.map((icon, i) => (
                    <div key={i} className="bg-white/5 p-1.5 rounded-md">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelloVerticalsSection;