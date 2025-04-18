import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Settings, Cloud } from 'lucide-react';
import { Link } from 'wouter';

const IntelloVerticalsSection = () => {
  // The 4 major verticals of Intello 
  const verticals = [
    {
      title: "STRATEGIC CONSULTING",
      description: "At the core of every secure enterprise is a sound strategy. Our consulting practice helps C-level leaders and boards navigate technology risk, optimize cyber investments, and align security with enterprise-wide goals.",
      icon: <Settings className="h-8 w-8 text-white" />,
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      title: "IT GOVERNANCE, RISK & COMPLIANCE (IT GRC)",
      description: "Our GRC services enable organizations to take a structured, strategic approach to managing technology risks and meeting regulatory requirements all while staying aligned with business objectives.",
      icon: <Shield className="h-8 w-8 text-white" />,
      bgColor: "bg-[hsl(var(--secondary))]",
      textColor: "text-white"
    },
    {
      title: "CYBERSECURITY SOLUTIONS",
      description: "We help enterprises build layered, adaptive security frameworks to protect against evolving cyber threats and secure their most critical assets across cloud, endpoint, and hybrid environments.",
      icon: <Layers className="h-8 w-8 text-white" />,
      bgColor: "bg-[hsl(var(--secondary))]",
      textColor: "text-white"
    },
    {
      title: "MANAGED IT SERVICES",
      description: "The managed IT services are designed to ensure stability, performance, and availability, giving your organization the technological backbone it needs to grow securely and efficiently. Including cloud and infrastructure consulting services.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      bgColor: "bg-black",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-12 bg-card border-t border-b border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Main Verticals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intello specializes in these core service areas to deliver comprehensive technology solutions
          </p>
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
              viewport={{ once: true }}
              className={`${vertical.bgColor} ${vertical.textColor} rounded-lg overflow-hidden shadow-lg h-full`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full w-fit mb-4">
                  {vertical.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{vertical.title}</h3>
                <p className="text-sm text-current/80 mb-4 flex-grow">
                  {vertical.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelloVerticalsSection;