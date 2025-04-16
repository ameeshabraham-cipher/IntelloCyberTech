import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ArrowRight, Lock, Shield, Zap, Server, Database, Cloud, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const SolutionsPage = () => {
  useScrollReveal();
  
  const solutionCategories = [
    {
      title: "GRC Solutions",
      description: "Governance, Risk, and Compliance solutions to meet regulatory requirements",
      solutions: [
        {
          icon: <Shield className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Compliance Automation",
          description: "AI-powered tools that streamline and automate compliance processes",
          link: "/solutions/grc-automation"
        },
        {
          icon: <Lock className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Risk Management Platform",
          description: "Comprehensive risk identification, assessment and management solution",
          link: "/solutions/risk-management"
        },
        {
          icon: <Database className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Cybersecurity Frameworks",
          description: "Implementation of industry-standard security frameworks and controls",
          link: "/solutions/cybersecurity-frameworks"
        }
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced technology to protect your digital assets and infrastructure",
      solutions: [
        {
          icon: <Cloud className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Cloud Security",
          description: "Protect your cloud infrastructure and applications from threats",
          link: "/services/cloud-security"
        },
        {
          icon: <Activity className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "SIEM Solutions",
          description: "Security Information and Event Management for real-time monitoring",
          link: "/solutions/siem"
        },
        {
          icon: <Server className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Endpoint Protection",
          description: "Advanced endpoint detection and response capabilities",
          link: "/solutions/edr"
        }
      ]
    },
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI technology to enhance your security posture",
      solutions: [
        {
          icon: <Zap className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "AI-Driven Compliance",
          description: "Harness the power of AI to automate and enhance compliance efforts",
          link: "/solutions/ai-compliance"
        },
        {
          icon: <Shield className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Vulnerability Management",
          description: "Proactive identification and remediation of security vulnerabilities",
          link: "/solutions/vulnerability-management"
        },
        {
          icon: <Lock className="h-10 w-10 text-[hsl(var(--primary))]" />,
          title: "Data Loss Prevention",
          description: "AI-enhanced data protection to prevent data leakage and theft",
          link: "/solutions/dlp"
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        
        {/* Cyber grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(235, 52, 67, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(235, 52, 67, 0.03) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Glow effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Comprehensive Security Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Solutions</span> for Modern Security Challenges
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Explore our portfolio of cutting-edge cybersecurity and compliance solutions designed to protect your organization from evolving threats and meet regulatory requirements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Solutions Categories */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          {solutionCategories.map((category, index) => (
            <div key={index} className="mb-24 reveal" data-delay={index * 100}>
              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-3">{category.title}</h2>
                <p className="text-muted-foreground max-w-2xl">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.solutions.map((solution, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="bg-card/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 rounded-xl p-6 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 group reveal"
                    data-delay={(index * 100) + (sIndex * 75)}
                  >
                    <div className="mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[hsl(var(--secondary))] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-5">
                      {solution.description}
                    </p>
                    <Link href={solution.link} className="inline-flex items-center text-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary))]/80 transition-colors">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction 
        title="Ready to Strengthen Your Security Posture?"
        description="Get a personalized assessment of your security needs and discover how our solutions can help protect your organization."
        buttonText="Request Free Assessment"
        buttonLink="/contact?service=assessment"
      />
    </div>
  );
};

export default SolutionsPage;