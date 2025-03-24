import { useScrollReveal } from '@/lib/animations';
import { Link } from 'wouter';
import { 
  ShieldAlert, 
  ClipboardCheck, 
  Shield,
  ArrowRight,
  FileText,
  Lock,
  Cloud,
  AlertTriangle,
  Database,
  UserCog,
  FileSearch,
  Bot
} from 'lucide-react';

const PainPointsSection = () => {
  useScrollReveal();
  
  return (
    <section className="py-20 bg-card relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Facing <span className="text-[hsl(var(--secondary))]">Cybersecurity Challenges?</span> We Have Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            In today's digital landscape, businesses face increasingly complex security threats and compliance requirements. 
            We help you navigate these challenges with tailored solutions that address your specific pain points.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Pain Point 1 - Regulatory Compliance */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <ClipboardCheck className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Regulatory Compliance Complexity</h3>
            <p className="text-muted-foreground mb-6">
              Navigate the complex maze of regulations with our comprehensive compliance services for global and regional standards.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/iso27001" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">ISO 27001 Certification</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/soc2" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">SOC 2 Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/gdpr" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">GDPR Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-pdpl" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE PDPL Compliance</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/grc-automation" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore GRC Automation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 2 - Security Vulnerabilities */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="200">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <ShieldAlert className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Security Vulnerabilities & Threats</h3>
            <p className="text-muted-foreground mb-6">
              Identify and remediate security gaps before they can be exploited with our comprehensive assessment and testing services.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/penetration-testing" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Penetration Testing</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileSearch className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/security-assessment" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Security Assessment</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileSearch className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/it-security-audit" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">IT Security Audit</Link>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/cloud-security" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Cloud Security</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/vulnerability-management" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Vulnerability Management</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 3 - Security Expertise Gap */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="400">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <UserCog className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Security Expertise & Resource Gap</h3>
            <p className="text-muted-foreground mb-6">
              Access top-tier cybersecurity talent and expertise without the cost of a full-time security team or executive.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <UserCog className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/vciso" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Virtual CISO Services</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/policy-development" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Policy Development</Link>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/data-privacy" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Privacy Consultation</Link>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/iso42001" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">ISO 42001 AI Management</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/risk-management" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Risk Management Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 4 - Compliance Automation */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="600">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Bot className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Manual Compliance Processes</h3>
            <p className="text-muted-foreground mb-6">
              Eliminate tedious manual compliance work with AI-powered automation that reduces costs, errors, and resource requirements.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Bot className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/ai-compliance" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">AI-Driven Compliance Tools</Link>
              </div>
              <div className="flex items-center gap-2">
                <Database className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/grc-automation" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">GRC Automation Platforms</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/cybersecurity-frameworks" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Cybersecurity Frameworks</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/ai-compliance" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore AI-Powered Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 5 - Industry-Specific Compliance */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="800">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Industry-Specific Compliance</h3>
            <p className="text-muted-foreground mb-6">
              Meet the unique compliance requirements of your industry with tailored solutions for financial services, healthcare, government and more.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-nesa" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE NESA Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-ia" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE IA Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/gdpr" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">GDPR Compliance</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/services/security-assessment" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Industry Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 6 - Integrated Security */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="1000">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Lock className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Fragmented Security Approach</h3>
            <p className="text-muted-foreground mb-6">
              Replace siloed security tools and disjointed processes with our integrated cybersecurity framework and unified risk management approach.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/cybersecurity-frameworks" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Cybersecurity Frameworks</Link>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/risk-management" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Risk Management Solutions</Link>
              </div>
              <div className="flex items-center gap-2">
                <Database className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/grc-automation" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">GRC Automation Platforms</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/contact" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Request Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 reveal" data-delay="1200">
          {/* Stat 1 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">100+</p>
            <p className="text-muted-foreground">Successful Implementations</p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">15+</p>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">24/7</p>
            <p className="text-muted-foreground">Support & Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
