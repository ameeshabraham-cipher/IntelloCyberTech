import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { 
  CheckCircle, 
  Lock, 
  Shield, 
  Search, 
  FileText, 
  UserCheck, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define service data structure
type ServiceTag = {
  name: string;
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: ServiceTag[];
  link: string;
  delay?: number;
};

const ServicesShowcase = () => {
  useScrollReveal();
  
  // Service data
  const services: Service[] = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "ISO 27001 Compliance",
      description: "Achieve and maintain ISO 27001 certification with our comprehensive implementation and audit preparation services.",
      tags: [
        { name: "Gap Analysis" },
        { name: "Documentation" },
        { name: "Audit Support" }
      ],
      link: "/services/iso-27001"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "SOC 2 Compliance",
      description: "Build trust with your customers through SOC 2 compliance that demonstrates your commitment to security and privacy.",
      tags: [
        { name: "Type I & II" },
        { name: "Readiness Assessment" },
        { name: "Controls Implementation" }
      ],
      link: "/services/soc-2",
      delay: 200
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "UAE PDPL Compliance",
      description: "Navigate the requirements of the UAE Personal Data Protection Law with our specialized regional expertise.",
      tags: [
        { name: "Data Mapping" },
        { name: "Risk Assessment" },
        { name: "Compliance Program" }
      ],
      link: "/services/uae-pdpl",
      delay: 400
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "IT Security Audit",
      description: "Identify vulnerabilities and security gaps with our comprehensive security assessments and penetration testing.",
      tags: [
        { name: "Pen Testing" },
        { name: "Vulnerability Assessment" },
        { name: "Risk Analysis" }
      ],
      link: "/services/security-audit"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Policy Development",
      description: "Create robust security policies and procedures tailored to your organization's specific requirements and risks.",
      tags: [
        { name: "Custom Policies" },
        { name: "Procedures" },
        { name: "Implementation" }
      ],
      link: "/services/policy-development",
      delay: 200
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "vCISO Services",
      description: "Get expert security leadership without the full-time cost with our Virtual Chief Information Security Officer services.",
      tags: [
        { name: "Strategy Development" },
        { name: "Program Management" },
        { name: "Board Reporting" }
      ],
      link: "/services/vciso",
      delay: 400
    }
  ];
  
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-block bg-card/50 px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
            <span className="text-[hsl(var(--secondary))] font-medium">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Security & Compliance</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From regulatory compliance to advanced threat protection, our tailored services secure your 
            business against evolving cyber threats.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-gradient-to-b from-card/80 to-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal group"
              data-delay={service.delay}
            >
              <div className="icon-container bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--secondary))] group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-xs px-3 py-1 rounded-full"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <Link href={service.link} className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Link href="/services">
            <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
