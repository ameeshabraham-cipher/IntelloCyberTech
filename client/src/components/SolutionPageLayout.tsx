import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitProps {
  title: string;
  description: string;
}

interface SolutionPageProps {
  title: string;
  category: string;
  description: string;
  heroIcon: React.ReactNode;
  problem: string;
  solution: string;
  features: FeatureProps[];
  benefits: BenefitProps[];
  animationSvg?: React.ReactNode;
  relatedSolutions: {
    title: string;
    link: string;
  }[];
}

const SolutionPageLayout = ({
  title,
  category,
  description,
  heroIcon,
  problem,
  solution,
  features,
  benefits,
  animationSvg,
  relatedSolutions
}: SolutionPageProps) => {
  useScrollReveal();

  // Set page title on mount
  useEffect(() => {
    document.title = `${title} | Intello.`;
  }, [title]);

  // Default animation if none provided
  const defaultAnimation = (
    <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="100" width="400" height="200" rx="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
      <circle cx="300" cy="200" r="80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
      <path d="M300 140 L300 260" stroke="#00E5FF" strokeWidth="2"/>
      <path d="M240 200 L360 200" stroke="#00E5FF" strokeWidth="2"/>
      <circle cx="300" cy="200" r="30" fill="#00B2A9" fillOpacity="0.3"/>
      <circle cx="300" cy="200" r="20" fill="#00E5FF" fillOpacity="0.5"/>
      <path d="M200 150 L250 180" stroke="#00B2A9" strokeWidth="1.5"/>
      <path d="M200 250 L250 220" stroke="#00B2A9" strokeWidth="1.5"/>
      <path d="M400 150 L350 180" stroke="#00B2A9" strokeWidth="1.5"/>
      <path d="M400 250 L350 220" stroke="#00B2A9" strokeWidth="1.5"/>
      <circle cx="200" cy="150" r="10" fill="#00E5FF" fillOpacity="0.5"/>
      <circle cx="200" cy="250" r="10" fill="#00E5FF" fillOpacity="0.5"/>
      <circle cx="400" cy="150" r="10" fill="#00E5FF" fillOpacity="0.5"/>
      <circle cx="400" cy="250" r="10" fill="#00E5FF" fillOpacity="0.5"/>
    </svg>
  );

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Problem-Solution Section */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 reveal">
              <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
                <span className="text-[hsl(var(--secondary))] font-medium">The Challenge</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Problem</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {problem}
              </p>
              
              <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
                <span className="text-[hsl(var(--secondary))] font-medium">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Solution</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {solution}
              </p>
              
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                  Request a Demo
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
                      <p className="text-xs">Cutting-Edge Technology</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-5 left-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mr-2"></div>
                      <p className="text-xs">AI-Powered Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Key Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Features</span> & Functionality
            </h2>
            <p className="text-muted-foreground text-lg">
              Our solution provides a comprehensive set of features designed to address your cybersecurity and compliance needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                data-delay={index * 100}
              >
                <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-[hsl(var(--secondary))]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Benefits</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our solution delivers tangible advantages that help your organization achieve better security and compliance outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" 
                data-delay={index * 100}
              >
                <h3 className="text-xl font-montserrat font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Solutions */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Explore More</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our other solutions that complement this service and provide comprehensive protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedSolutions.map((related, index) => (
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

export default SolutionPageLayout;