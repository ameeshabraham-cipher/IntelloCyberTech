import React, { useRef } from 'react';
import { Rocket, TrendingUp, Cpu, Lightbulb, ArrowUpRight, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import useScrollReveal from '@/hooks/use-scroll-reveal';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, link, delay = 0 }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollReveal({ animateOnce: true, threshold: 0.2, delay });

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-card border border-[hsl(var(--secondary))]/10 rounded-lg p-6 transition-all duration-300 group hover:border-[hsl(var(--secondary))]/40",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-12 w-12 bg-[hsl(var(--primary))]/10 rounded-md flex items-center justify-center mb-5 text-[hsl(var(--primary))] group-hover:bg-[hsl(var(--primary))]/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">
        {description}
      </p>
      <Link href={link} className="inline-flex items-center text-[hsl(var(--secondary))] text-sm font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const BusinessGrowthServices = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Accelerate Business Growth</h2>
          <p className="text-muted-foreground max-w-2xl">
            Leverage our strategic technology services to drive innovation, optimize operations, and achieve sustainable business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Rocket className="h-6 w-6" />}
            title="Strategic Technology Leadership"
            description="Access expert technology leadership with our Virtual CTO service, providing strategic guidance and technology roadmapping without the cost of a full-time executive."
            link="/services/virtual-cto"
            delay={100}
          />
          
          <ServiceCard 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Digital Maturity Assessment"
            description="Evaluate your organization's digital capabilities, identify improvement opportunities, and develop a strategic roadmap for digital transformation success."
            link="/services/digital-maturity-assessment"
            delay={200}
          />
          
          <ServiceCard 
            icon={<Cpu className="h-6 w-6" />}
            title="Technology Consultancy"
            description="Benefit from our expert guidance on technology selection, implementation strategies, and integration approaches to optimize your technology investments."
            link="/services/technology-consultancy"
            delay={300}
          />
          
          <ServiceCard 
            icon={<Lightbulb className="h-6 w-6" />}
            title="Digital Transformation Strategy"
            description="Develop a comprehensive digital transformation strategy that aligns with your business objectives and provides a clear roadmap for implementation."
            link="/services/digital-transformation"
            delay={400}
          />
          
          <ServiceCard 
            icon={<Brain className="h-6 w-6" />}
            title="AI Readiness Assessment"
            description="Evaluate your organization's preparedness for AI adoption and receive a tailored roadmap for responsible and effective AI implementation."
            link="/services/ai-readiness"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowthServices;