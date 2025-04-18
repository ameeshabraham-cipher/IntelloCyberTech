import React, { useState } from 'react';
import { ChevronRight, Users, Building2, UserCog, GraduationCap, BarChart3, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

interface AudienceTabProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  painPoints: string[];
  solutions: string[];
  cta: {
    text: string;
    link: string;
  };
}

const audienceData: AudienceTabProps[] = [
  {
    id: 'executives',
    icon: <Users className="h-5 w-5" />,
    title: 'For Business Owners',
    painPoints: [
      'Balancing innovation with security and compliance requirements',
      'Navigating complex regulatory landscapes in the GCC region',
      'Quantifying cybersecurity ROI and reporting to the board',
      'Strategic planning for digital transformation initiatives'
    ],
    solutions: [
      'Executive-focused advisory on cybersecurity and compliance strategy',
      'Business-centric roadmaps that align with organizational objectives',
      'Risk quantification and executive reporting frameworks',
      'Strategic guidance on technology investments with security by design'
    ],
    cta: {
      text: 'Executive Advisory Services',
      link: '/services/executive-advisory'
    }
  },
  {
    id: 'ciso',
    icon: <ShieldAlert className="h-5 w-5" />,
    title: 'For CISOs & Security Teams',
    painPoints: [
      'Addressing evolving threat landscapes with limited resources',
      'Implementing effective security controls across diverse environments',
      'Navigating compliance with multiple regulatory frameworks',
      'Building security awareness throughout the organization'
    ],
    solutions: [
      'Comprehensive security assessments and gap analysis',
      'Implementation of GCC-specific compliance frameworks',
      'Security architecture design and implementation services',
      'Advanced security testing and continuous monitoring solutions'
    ],
    cta: {
      text: 'Security Enhancement Services',
      link: '/services/security-assessment'
    }
  },
  {
    id: 'it',
    icon: <UserCog className="h-5 w-5" />,
    title: 'For IT Leaders & Teams',
    painPoints: [
      'Integrating security into existing IT infrastructure and operations',
      'Supporting cloud migration with appropriate security controls',
      'Managing security across multi-vendor environments',
      'Addressing technical debt while maintaining security posture'
    ],
    solutions: [
      'Security-focused technical consulting for infrastructure teams',
      'Secure cloud architecture design and implementation',
      'Integration of security controls into DevOps processes',
      'Technical security assessments and remediation guidance'
    ],
    cta: {
      text: 'IT Security Services',
      link: '/services/it-security'
    }
  },
  {
    id: 'compliance',
    icon: <GraduationCap className="h-5 w-5" />,
    title: 'For Compliance Officers',
    painPoints: [
      'Staying current with rapidly evolving GCC regulatory requirements',
      'Implementing effective compliance monitoring and reporting',
      'Balancing compliance initiatives with business operations',
      'Preparing for regulatory audits and inspections'
    ],
    solutions: [
      'Expert guidance on GCC compliance frameworks (UAE PDPL, KSA PDPL, SAMA)',
      'Compliance program development and implementation',
      'Regulatory audit preparation and support',
      'Compliance automation tools and techniques'
    ],
    cta: {
      text: 'Compliance Advisory Services',
      link: '/services/data-privacy'
    }
  },
  {
    id: 'government',
    icon: <Building2 className="h-5 w-5" />,
    title: 'For Government Entities',
    painPoints: [
      'Protecting critical infrastructure and sensitive national data',
      'Implementing UAE IA, NESA and other government-specific frameworks',
      'Developing secure digital government services',
      'Building cyber resilience against advanced threats'
    ],
    solutions: [
      'Specialized compliance services for UAE IA, NESA and related frameworks',
      'Critical infrastructure protection assessments and implementation',
      'Secure digital government service design reviews',
      'Advanced threat detection and response capabilities'
    ],
    cta: {
      text: 'Government Security Services',
      link: '/industries/government'
    }
  },
  {
    id: 'sme',
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'For SMEs & Growing Businesses',
    painPoints: [
      'Implementing effective security with limited budget and resources',
      'Navigating compliance requirements as operations expand',
      'Building security maturity alongside business growth',
      'Addressing security as part of digital transformation'
    ],
    solutions: [
      'Cost-effective security and compliance solutions scaled for SMEs',
      'Virtual CISO services to provide expert guidance without full-time costs',
      'Essential security assessments and implementation services',
      'Growth-focused security roadmaps that scale with your business'
    ],
    cta: {
      text: 'SME Security Solutions',
      link: '/industries/sme'
    }
  }
];

const TargetAudienceSection = () => {
  const [activeTab, setActiveTab] = useState('executives');
  
  const activeData = audienceData.find(item => item.id === activeTab) || audienceData[0];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">
            Tailored Cybersecurity & Compliance Solutions
          </h2>
          <p className="text-muted-foreground">
            At Intello., we understand the unique challenges faced by different stakeholders in your organization. Our solutions are designed to address specific pain points and deliver tangible results.
          </p>
        </div>
        
        <div className="bg-card border border-[hsl(var(--secondary))]/10 rounded-xl overflow-hidden shadow-lg">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-[hsl(var(--secondary))]/10">
            {audienceData.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium transition-colors",
                  activeTab === item.id 
                    ? "text-[hsl(var(--secondary))] border-b-2 border-[hsl(var(--secondary))]" 
                    : "text-muted-foreground hover:text-white"
                )}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </button>
            ))}
          </div>
          
          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  {activeData.icon}
                  <span className="ml-2">{activeData.title}</span>
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-[hsl(var(--secondary))] font-medium mb-3">Common Challenges</h4>
                  <ul className="space-y-3">
                    {activeData.painPoints.map((point, index) => (
                      <li key={index} className="flex text-white/80 text-sm">
                        <ChevronRight className="h-5 w-5 text-[hsl(var(--secondary))] mr-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={activeData.cta.link}>
                  <Button className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))]/90 text-white">
                    {activeData.cta.text}
                  </Button>
                </Link>
              </div>
              
              <div>
                <h4 className="text-[hsl(var(--primary))] font-medium mb-3">How Intello. Helps</h4>
                <ul className="space-y-3 mb-6">
                  {activeData.solutions.map((solution, index) => (
                    <li key={index} className="flex text-white/80 text-sm">
                      <ChevronRight className="h-5 w-5 text-[hsl(var(--primary))] mr-2 flex-shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-[hsl(var(--secondary))]/5 border border-[hsl(var(--secondary))]/10 rounded-lg p-4">
                  <p className="text-white/80 text-sm italic">
                    "Intello. provided us with a clear roadmap to address our specific industry challenges. Their team's expertise in both cybersecurity and compliance made them an ideal partner for our organization."
                  </p>
                  <p className="text-[hsl(var(--secondary))] text-xs mt-2">— Security Director, Leading GCC Financial Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;