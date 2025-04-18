import React, { useRef } from 'react';
import { Shield, Target, Bug, Lock, ArrowUpRight, Search, Key, ActivitySquare } from 'lucide-react';
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
      <div className="h-12 w-12 bg-[hsl(var(--secondary))]/10 rounded-md flex items-center justify-center mb-5 text-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary))]/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[hsl(var(--secondary))] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">
        {description}
      </p>
      <Link href={link}>
        <a className="inline-flex items-center text-[hsl(var(--secondary))] text-sm font-medium group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </Link>
    </div>
  );
};

const ThreatMitigationServices = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Mitigate Security Threats</h2>
          <p className="text-muted-foreground max-w-2xl">
            Protect your organization from evolving cybersecurity threats with our comprehensive security services and advisory capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Shield className="h-6 w-6" />}
            title="Strategic Security Leadership"
            description="Strengthen your security posture with our Virtual CISO service, providing executive-level security guidance and strategy without the full-time executive cost."
            link="/services/vciso"
            delay={100}
          />
          
          <ServiceCard 
            icon={<Target className="h-6 w-6" />}
            title="Security Awareness Programs"
            description="Build security-conscious culture through customized phishing simulations and comprehensive security awareness training for your workforce."
            link="/services/security-awareness"
            delay={200}
          />
          
          <ServiceCard 
            icon={<Bug className="h-6 w-6" />}
            title="Security Assessment Services"
            description="Identify and address vulnerabilities through our comprehensive Vulnerability Assessment and Penetration Testing (VAPT) services."
            link="/services/vapt"
            delay={300}
          />
          
          <ServiceCard 
            icon={<Lock className="h-6 w-6" />}
            title="Information Security Consultancy"
            description="Navigate complex cybersecurity, information security, and data protection challenges with our expert consultancy services."
            link="/services/security-consultancy"
            delay={400}
          />
          
          <ServiceCard 
            icon={<Search className="h-6 w-6" />}
            title="Digital Risk Monitoring"
            description="Proactively monitor your digital footprint with Dark Web Monitoring to detect exposed credentials and sensitive information before they're exploited."
            link="/solutions/dark-web-monitoring"
            delay={500}
          />
          
          <ServiceCard 
            icon={<Key className="h-6 w-6" />}
            title="Advanced Access Management"
            description="Secure critical systems with Privileged Access Management (PAM) solutions that control, monitor, and audit privileged account usage."
            link="/solutions/pam"
            delay={600}
          />
          
          <ServiceCard 
            icon={<ActivitySquare className="h-6 w-6" />}
            title="Continuous Threat Monitoring"
            description="Stay protected with Continuous Threat Exposure Management (CTEM) that provides ongoing visibility into emerging threats and vulnerabilities."
            link="/solutions/ctem"
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreatMitigationServices;