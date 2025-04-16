import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ArrowRight, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';
import { InfoTechTooltip, SecurityTechTooltip } from '@/components/ui/tech-tooltips';

interface ChallengeProps {
  title: string;
  description: string;
  severity?: 'low' | 'medium' | 'high';
}

interface SolutionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CaseStudyHighlightProps {
  clientType: string;
  challenge: string;
  solution: string;
  results: string[];
}

interface ComplianceRequirementProps {
  name: string;
  description: string;
  importance: string;
}

interface IndustryPageProps {
  title: string;
  subtitle: string;
  description: string;
  challenges: ChallengeProps[];
  overview: string;
  solutions: SolutionProps[];
  caseStudy: CaseStudyHighlightProps;
  complianceRequirements: ComplianceRequirementProps[];
  animationSvg?: React.ReactNode;
  statistics: {
    title: string;
    value: string;
    context: string;
  }[];
  relatedServices: {
    title: string;
    link: string;
  }[];
}

const IndustryPageLayout = ({
  title,
  subtitle,
  description,
  challenges,
  overview,
  solutions,
  caseStudy,
  complianceRequirements,
  animationSvg,
  statistics,
  relatedServices
}: IndustryPageProps) => {
  useScrollReveal();

  // Set page title on mount
  useEffect(() => {
    document.title = `${title} Industry Solutions | Intello Cyber Technologies`;
  }, [title]);

  // Default animation if none provided
  const defaultAnimation = (
    <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="100" width="400" height="200" rx="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
      <circle cx="300" cy="200" r="80" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
      <path d="M300 140 L300 260" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
      <path d="M240 200 L360 200" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2"/>
      <circle cx="300" cy="200" r="30" fill="#0A1024" fillOpacity="0.3" stroke="rgba(235, 52, 67, 0.4)"/>
      <circle cx="300" cy="200" r="20" fill="rgba(235, 52, 67, 0.5)"/>
      
      {/* Connection lines */}
      <line x1="200" y1="150" x2="250" y2="180" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
      <line x1="200" y1="250" x2="250" y2="220" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
      <line x1="400" y1="150" x2="350" y2="180" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
      <line x1="400" y1="250" x2="350" y2="220" stroke="rgba(235, 52, 67, 0.6)" strokeWidth="1.5"/>
      
      {/* Nodes */}
      <circle cx="200" cy="150" r="10" fill="rgba(235, 52, 67, 0.5)"/>
      <circle cx="200" cy="250" r="10" fill="rgba(235, 52, 67, 0.5)"/>
      <circle cx="400" cy="150" r="10" fill="rgba(235, 52, 67, 0.5)"/>
      <circle cx="400" cy="250" r="10" fill="rgba(235, 52, 67, 0.5)"/>
    </svg>
  );
  
  // Helper function to determine challenge severity color
  const getSeverityColor = (severity?: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'low':
        return 'border-green-500/50 text-green-500';
      case 'medium':
        return 'border-yellow-500/50 text-yellow-500';
      case 'high':
        return 'border-red-500/50 text-red-500';
      default:
        return 'border-[hsl(var(--secondary))]/20 text-[hsl(var(--secondary))]';
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Industry Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">{subtitle}</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Industry Stats Section */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                data-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.title}</div>
                  <p className="text-muted-foreground text-sm">{stat.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 reveal">
              <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
                <span className="text-[hsl(var(--secondary))] font-medium">Industry Overview</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Understanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">The Landscape</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {overview}
              </p>
              
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                  Get Industry-Specific Consultation
                </Button>
              </Link>
            </div>
            
            {/* Visualization */}
            <div className="order-1 lg:order-2 reveal" data-delay="300">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
                
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                  {/* Interactive Visualization */}
                  <div className="w-full h-[300px] md:h-[400px] bg-card/30 rounded-lg flex items-center justify-center">
                    {animationSvg || defaultAnimation}
                  </div>
                  
                  {/* Floating Information Elements */}
                  <div className="absolute -top-5 right-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mr-2"></div>
                      <p className="text-xs">Industry Expertise</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-5 left-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mr-2"></div>
                      <p className="text-xs">Specialized Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Challenges Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Industry Challenges</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Security Challenges</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Understanding the unique security and compliance challenges faced by the {title} industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div 
                key={index} 
                className={`bg-card p-6 rounded-xl border ${getSeverityColor(challenge.severity)} hover:border-opacity-60 transition-all duration-300 reveal`}
                data-delay={index * 100}
              >
                <div className="flex items-start mb-4">
                  <AlertTriangle className="h-6 w-6 shrink-0 mr-3" />
                  <h3 className="text-xl font-montserrat font-semibold">{challenge.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {challenge.description}
                </p>
                {challenge.severity && (
                  <div className="mt-4 text-sm">
                    <SecurityTechTooltip
                      securityText={`This is considered a ${challenge.severity} risk severity challenge in the ${title} industry.`}
                      alertLevel={challenge.severity}
                      securityTitle="Risk Severity"
                    >
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${challenge.severity === 'low' ? 'bg-green-500/10' : challenge.severity === 'medium' ? 'bg-yellow-500/10' : 'bg-red-500/10'}`}>
                        {challenge.severity} severity
                      </span>
                    </SecurityTechTooltip>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Our Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Tailored <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Solutions</span> for {title}
            </h2>
            <p className="text-muted-foreground text-lg">
              Our specialized services designed specifically for the unique requirements of the {title} industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                data-delay={index * 100}
              >
                <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-[hsl(var(--secondary))]">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Study</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See how we helped a {caseStudy.clientType} overcome their security and compliance challenges.
            </p>
          </div>
          
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20 max-w-4xl mx-auto reveal">
            <div className="mb-6">
              <h3 className="text-2xl font-montserrat font-semibold mb-2">Client</h3>
              <p className="text-muted-foreground">
                {caseStudy.clientType}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-montserrat font-semibold mb-2">Challenge</h3>
              <p className="text-muted-foreground">
                {caseStudy.challenge}
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-montserrat font-semibold mb-2">Solution</h3>
              <p className="text-muted-foreground">
                {caseStudy.solution}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-montserrat font-semibold mb-4">Results</h3>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-[hsl(var(--secondary))] h-6 w-6 shrink-0 mr-3 mt-0.5" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Compliance Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Regulatory Landscape</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Compliance Requirements</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Understanding the regulatory frameworks that impact {title} organizations.
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {complianceRequirements.map((req, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                data-delay={index * 100}
              >
                <div className="flex items-start">
                  <Shield className="text-[hsl(var(--secondary))] h-6 w-6 shrink-0 mr-3 mt-1" />
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-montserrat font-semibold">{req.name}</h3>
                      <InfoTechTooltip infoText={req.importance} infoTitle="Why It Matters">
                        <span className="bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] px-2 py-0.5 rounded text-xs">
                          Critical Framework
                        </span>
                      </InfoTechTooltip>
                    </div>
                    <p className="text-muted-foreground">
                      {req.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Explore More</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our specialized services that complement our {title} industry solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((related, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                data-delay={index * 100}
              >
                <h3 className="text-xl font-montserrat font-semibold mb-4">{related.title}</h3>
                <Link href={related.link} className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default IndustryPageLayout;