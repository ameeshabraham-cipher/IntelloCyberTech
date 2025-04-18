import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { 
  CheckCircle, 
  Lock, 
  Shield, 
  Search, 
  FileText, 
  UserCheck,
  Database,
  Server,
  LucideBriefcase,
  BarChart2,
  ArrowRight
} from 'lucide-react';
import CallToAction from '@/components/CallToAction';

type ServiceCategory = {
  name: string;
  description: string;
  services: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    features: string[];
  }[];
};

const Services = () => {
  useScrollReveal();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'Our Services | Intello.';
  }, []);

  // Service categories data
  const serviceCategories: ServiceCategory[] = [
    {
      name: "Compliance Services",
      description: "Comprehensive solutions to help organizations meet regulatory requirements and industry standards.",
      services: [
        {
          icon: <CheckCircle className="h-6 w-6" />,
          title: "ISO 27001 Compliance",
          description: "Achieve and maintain ISO 27001 certification with our end-to-end implementation and audit preparation services.",
          link: "/services/iso-27001",
          features: [
            "Gap analysis and readiness assessment",
            "ISMS documentation development",
            "Implementation support and guidance",
            "Internal audit preparation",
            "Certification support"
          ]
        },
        {
          icon: <Lock className="h-6 w-6" />,
          title: "SOC 2 Compliance",
          description: "Build trust with your customers through SOC 2 compliance that demonstrates your commitment to security and privacy.",
          link: "/services/soc-2",
          features: [
            "SOC 2 readiness assessment",
            "Control implementation",
            "Gap remediation",
            "Type I and Type II audit preparation",
            "Ongoing compliance management"
          ]
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "GDPR Compliance",
          description: "Navigate the complex requirements of the General Data Protection Regulation with our specialized expertise.",
          link: "/services/gdpr",
          features: [
            "Data mapping and inventory",
            "GDPR gap assessment",
            "Policy and procedure development",
            "DPO services",
            "Staff training and awareness"
          ]
        },
        {
          icon: <Shield className="h-6 w-6" />,
          title: "UAE PDPL Compliance",
          description: "Meet the requirements of the UAE Personal Data Protection Law with our regional compliance expertise.",
          link: "/services/uae-pdpl",
          features: [
            "UAE PDPL assessment",
            "Compliance implementation",
            "Data protection framework",
            "Cross-border data transfer mechanisms",
            "Ongoing compliance monitoring"
          ]
        }
      ]
    },
    {
      name: "Security Services",
      description: "Advanced protection solutions to safeguard your organization's critical assets from evolving threats.",
      services: [
        {
          icon: <Search className="h-6 w-6" />,
          title: "IT Security Audit",
          description: "Identify vulnerabilities and security gaps with our comprehensive security assessments and penetration testing.",
          link: "/services/security-audit",
          features: [
            "Infrastructure security assessment",
            "Application penetration testing",
            "Cloud security review",
            "Vulnerability management",
            "Security architecture review"
          ]
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Policy Development",
          description: "Create robust security policies and procedures tailored to your organization's specific requirements and risks.",
          link: "/services/policy-development",
          features: [
            "Security policy framework",
            "Procedure development",
            "Standards and guidelines",
            "Policy implementation support",
            "Regular policy reviews"
          ]
        },
        {
          icon: <UserCheck className="h-6 w-6" />,
          title: "vCISO Services",
          description: "Get expert security leadership without the full-time cost with our Virtual Chief Information Security Officer services.",
          link: "/services/vciso",
          features: [
            "Security strategy development",
            "Security program management",
            "Risk assessment and management",
            "Board and executive reporting",
            "Incident response planning"
          ]
        },
        {
          icon: <Server className="h-6 w-6" />,
          title: "Data Privacy Consultation",
          description: "Protect sensitive information and ensure privacy compliance with our specialized data protection services.",
          link: "/services/data-privacy",
          features: [
            "Privacy impact assessments",
            "Data protection strategy",
            "Privacy by design implementation",
            "Data breach response planning",
            "Privacy training and awareness"
          ]
        }
      ]
    },
    {
      name: "AI-Powered Solutions",
      description: "Cutting-edge AI solutions that transform security and compliance management for enhanced efficiency.",
      services: [
        {
          icon: <LucideBriefcase className="h-6 w-6" />,
          title: "AI Compliance Automation",
          description: "Streamline compliance processes with our AI-powered automation platform for evidence collection and control monitoring.",
          link: "/services/ai-compliance",
          features: [
            "Automated evidence collection",
            "Control monitoring and testing",
            "Compliance dashboard and reporting",
            "Regulatory updates tracking",
            "Integration with existing systems"
          ]
        },
        {
          icon: <BarChart2 className="h-6 w-6" />,
          title: "Risk Management Tools",
          description: "Identify, assess, and mitigate risks with our advanced AI-driven risk management solutions.",
          link: "/services/risk-management",
          features: [
            "Risk identification and assessment",
            "Predictive risk analytics",
            "Real-time risk monitoring",
            "Automated risk reporting",
            "Integration with GRC platforms"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Cybersecurity</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Compliance</span> Solutions
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              From regulatory compliance to advanced threat protection, our tailored services secure your 
              business against evolving cyber threats while ensuring regulatory compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 reveal">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                {category.name}
              </h2>
              <p className="text-muted-foreground text-lg">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex} 
                  className="bg-gradient-to-b from-card/80 to-card p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" 
                  data-delay={serviceIndex * 100}
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-card/50 w-12 h-12 rounded-full flex items-center justify-center text-[hsl(var(--primary))] mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link} className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors mt-4">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default Services;
