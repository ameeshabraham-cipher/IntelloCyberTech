import React, { useRef, useState } from 'react';
import { Shield, Building, Hospital, BadgeDollarSign, BarChart, Truck, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/hooks/use-scroll-reveal';
import { Link } from 'wouter';

interface PainPointProps {
  industry: string;
  icon: React.ReactNode;
  painPoints: string[];
  solutions: string[];
  link: string;
  className?: string;
  delay?: number;
}

const PainPoint = ({ industry, icon, painPoints, solutions, link, className, delay = 0 }: PainPointProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal({ animateOnce: true, threshold: 0.2, delay });

  return (
    <div 
      ref={ref}
      className={cn(
        "relative bg-card border border-[hsl(var(--secondary))]/10 rounded-lg p-6 hover:border-[hsl(var(--secondary))]/40 transition-all duration-500 overflow-hidden group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[hsl(var(--secondary))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-start mb-4">
        <div className="h-12 w-12 bg-[hsl(var(--secondary))]/10 rounded-lg flex items-center justify-center mr-4 text-[hsl(var(--secondary))]">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{industry}</h3>
        </div>
      </div>
      
      <div className="space-y-4 mb-4">
        <div>
          <h4 className="flex items-center text-[hsl(var(--secondary))] text-sm font-medium mb-2">
            <AlertTriangle className="w-4 h-4 mr-2" /> INDUSTRY CHALLENGES
          </h4>
          <ul className="space-y-2 text-sm">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--secondary))] mt-1.5 mr-2"></span>
                <span className="text-white/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="flex items-center text-[hsl(var(--primary))] text-sm font-medium mb-2">
            <CheckCircle2 className="w-4 h-4 mr-2" /> OUR SOLUTIONS
          </h4>
          <ul className="space-y-2 text-sm">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary))] mt-1.5 mr-2"></span>
                <span className="text-white/80">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Link href={link} className="text-[hsl(var(--secondary))] text-sm hover:text-[hsl(var(--primary))] transition-colors font-medium">
        Explore Solutions →
      </Link>
    </div>
  );
};

const IndustryPainPoints = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Industry-Specific Challenges & Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every industry faces unique cybersecurity and compliance challenges. Our tailored solutions address specific pain points in your sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PainPoint 
            industry="Financial Services" 
            icon={<BadgeDollarSign className="h-6 w-6" />}
            painPoints={[
              "Complex regulatory landscape (SAMA, PDPL, PCI DSS)",
              "Frequent targeted cyber attacks on financial data",
              "Balancing innovation with data protection requirements"
            ]}
            solutions={[
              "End-to-end SAMA cybersecurity compliance",
              "Financial-grade penetration testing and security assessments",
              "Multi-framework compliance automation"
            ]}
            link="/industries/bfsi"
            delay={100}
          />
          
          <PainPoint 
            industry="Healthcare" 
            icon={<Hospital className="h-6 w-6" />}
            painPoints={[
              "Patient data privacy and protection challenges",
              "Outdated legacy systems with security vulnerabilities",
              "Increasing threats to connected medical devices"
            ]}
            solutions={[
              "Specialized healthcare data protection frameworks",
              "Medical device security assessments",
              "Patient data privacy compliance programs"
            ]}
            link="/industries/healthcare"
            delay={200}
          />
          
          <PainPoint 
            industry="Government & Public Sector" 
            icon={<Building className="h-6 w-6" />}
            painPoints={[
              "Protection of critical national infrastructure",
              "UAE NESA, IA, and PDPL compliance requirements",
              "High-profile target for advanced persistent threats"
            ]}
            solutions={[
              "UAE IA and NESA compliance implementation",
              "Government-grade security operations setup",
              "Advanced threat detection and monitoring systems"
            ]}
            link="/industries/government"
            delay={300}
          />
          
          <PainPoint 
            industry="E-commerce & Retail" 
            icon={<BarChart className="h-6 w-6" />}
            painPoints={[
              "Customer payment data protection challenges",
              "High transaction volumes requiring security monitoring",
              "Cross-border data transfer compliance issues"
            ]}
            solutions={[
              "PCI DSS compliance implementation",
              "Secure payment gateway assessments",
              "Customer data protection frameworks"
            ]}
            link="/industries/ecommerce"
            delay={400}
          />
          
          <PainPoint 
            industry="SMEs & Enterprises" 
            icon={<Shield className="h-6 w-6" />}
            painPoints={[
              "Limited cybersecurity budget and expertise",
              "Growing attack surface with digital transformation",
              "Keeping pace with evolving compliance requirements"
            ]}
            solutions={[
              "Virtual CISO services for strategic guidance",
              "Cost-effective phishing and awareness training",
              "Scalable security assessments and implementations"
            ]}
            link="/industries/sme"
            delay={500}
          />
          
          <PainPoint 
            industry="Logistics & Transportation" 
            icon={<Truck className="h-6 w-6" />}
            painPoints={[
              "Supply chain security vulnerabilities",
              "Connected fleet and IoT device security challenges",
              "Cross-border data protection requirements"
            ]}
            solutions={[
              "Supply chain security assessments",
              "IoT and operational technology security",
              "Logistics-focused data protection programs"
            ]}
            link="/industries/logistics"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryPainPoints;