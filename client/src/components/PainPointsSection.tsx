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
  Bot,
  Search as SearchIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  Phone
} from 'lucide-react';

const PainPointsSection = () => {
  useScrollReveal();
  
  return (
    <section className="py-20 bg-card relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Facing <span className="text-[hsl(var(--secondary))]">Compliance Challenges?</span> We Have Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            In today's regulatory landscape, businesses face increasingly complex compliance requirements and security demands. 
            We help you navigate this regulatory maze with tailored solutions that address your specific compliance and security pain points.
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
          
          {/* Pain Point 2 - Compliance Gaps & Security Controls */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="200">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <ShieldAlert className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Compliance Gaps & Controls Assessment</h3>
            <p className="text-muted-foreground mb-6">
              Identify and remediate compliance gaps and control weaknesses before they impact your certification readiness or regulatory standing.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <FileSearch className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/compliance-gap-analysis" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Compliance Gap Analysis</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileSearch className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/controls-assessment" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Controls Assessment</Link>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/risk-assessment" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Risk Assessment</Link>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/cloud-compliance" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Cloud Compliance</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/compliance-management" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Compliance Management</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 3 - Compliance & Security Expertise Gap */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="400">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <UserCog className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Compliance & Governance Expertise Gap</h3>
            <p className="text-muted-foreground mb-6">
              Access top-tier compliance and governance expertise without the cost of a full-time compliance officer or dedicated GRC team.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <UserCog className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/virtual-compliance-officer" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Virtual Compliance Officer</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/policy-development" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Policy & Process Development</Link>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/data-privacy" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Privacy Framework</Link>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/iso42001" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">ISO 42001 AI Governance</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/grc-consulting" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore GRC Consulting Services</span>
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
          
          {/* Pain Point 5 - GCC Focused Compliance */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="800">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">GCC Focused Compliance</h3>
            <p className="text-muted-foreground mb-6">
              Specialized compliance solutions for Gulf Cooperation Council (GCC) regulatory requirements, helping businesses navigate regional standards.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-pdpl" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE PDPL Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-ia" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE IA Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/uae-nesa" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE NESA Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/ksa-pdpl" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">KSA PDPL Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/bahrain-pdpl" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Bahrain PDPL Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/sama" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">SAMA Compliance</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/saudi-aramco" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Saudi Aramco Cybersecurity</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/gcc-compliance" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore GCC Compliance Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point 6 - Integrated GRC */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="1000">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Lock className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Fragmented Compliance & Governance</h3>
            <p className="text-muted-foreground mb-6">
              Replace siloed compliance tools and disjointed governance processes with our integrated GRC framework and unified risk management approach.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/integrated-grc" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Integrated GRC Framework</Link>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/solutions/compliance-management" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Compliance Management</Link>
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
        
        {/* Additional Cybersecurity Pain Points Row */}
        <div className="text-center mt-20 mb-10 reveal" data-delay="1000">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Cybersecurity</span> Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Beyond compliance, our advanced cybersecurity testing and protection solutions safeguard your organization against evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 reveal" data-delay="1100">
          {/* Security Testing Pain Point */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <SearchIcon className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Security Testing & Assessment</h3>
            <p className="text-muted-foreground mb-6">
              Identify vulnerabilities before attackers do with our comprehensive security testing services that provide actionable remediation plans.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/penetration-testing" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Penetration Testing</Link>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/vapt" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">VAPT (Vulnerability Assessment)</Link>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/red-team-exercises" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Red Team Exercises</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/services/penetration-testing" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Security Testing</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Data Protection Pain Point */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Database className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Data Loss Prevention</h3>
            <p className="text-muted-foreground mb-6">
              Prevent unauthorized data exfiltration and secure sensitive information with comprehensive DLP solutions that provide visibility and control.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Database className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/dlp" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Loss Prevention (DLP)</Link>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/data-classification" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Classification</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/data-encryption" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Encryption Solutions</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/data-protection" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Data Protection</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Endpoint & Email Security Pain Point */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Email & Web Security</h3>
            <p className="text-muted-foreground mb-6">
              Protect against phishing, malware, and web-based threats with advanced email security and web filtering solutions.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/email-security" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Email Security</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/web-filtering" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Web URL Filtering</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/phishing-protection" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Anti-Phishing Solutions</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/email-web-security" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Email & Web Security</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Mobile & Endpoint Security Pain Point */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 xl:col-span-3">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <SmartphoneIcon className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Mobile & Endpoint Security</h3>
            <p className="text-muted-foreground mb-6">
              Secure your mobile workforce and endpoints with comprehensive device management and protection solutions.
            </p>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2">
                <SmartphoneIcon className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/mdm" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Mobile Device Management (MDM)</Link>
              </div>
              <div className="flex items-center gap-2">
                <LaptopIcon className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/endpoint-protection" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Endpoint Protection</Link>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/byod-policy" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">BYOD Policy Development</Link>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-[hsl(var(--secondary))] h-4 w-4" />
                <Link href="/services/mobile-threat-defense" className="text-sm text-muted-foreground hover:text-[hsl(var(--secondary))]">Mobile Threat Defense</Link>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/solutions/mobile-security" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Mobile & Endpoint Security</span>
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
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">22+</p>
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
