import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import { useNavbarScroll } from '@/lib/animations';
import { 
  ChevronDown, 
  Menu, 
  Shield, 
  Lock, 
  CheckCircle, 
  Search, 
  FileText, 
  UserCheck,
  Bot,
  BarChart2,
  ShieldCheck,
  Building,
  Hospital,
  Briefcase,
  ShoppingBag,
  Users,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// Theme toggle removed as we're now using dark mode only

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  
  // Apply navbar background change on scroll
  useNavbarScroll();
  
  // Get current theme to apply proper contrast colors
  const isMounted = useRef(false);
  
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const toggleSubmenu = (submenu: string) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu);
  };
  
  return (
    <header id="navbar" className="fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white">
              <div className="flex items-center">
                <img 
                  src="/images/intello-logo.png" 
                  alt="Intello Cyber Technologies" 
                  className="h-12 w-auto"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* Services Dropdown */}
            <div className="group relative">
              <button className="text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[700px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-card border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl p-6 grid grid-cols-3 gap-4">
                <div>
                  <h4 className="text-[hsl(var(--secondary))] mb-3 font-semibold">GRC Services</h4>
                  <ul className="space-y-2">
                    <li><Link href="/services/iso27001" className="hover:text-[hsl(var(--secondary))] transition">ISO 27001 Certification</Link></li>
                    <li><Link href="/services/iso42001" className="hover:text-[hsl(var(--secondary))] transition">ISO 42001 AI Management</Link></li>
                    <li><Link href="/services/soc2" className="hover:text-[hsl(var(--secondary))] transition">SOC 2 Compliance</Link></li>
                    <li><Link href="/services/gdpr" className="hover:text-[hsl(var(--secondary))] transition">GDPR Compliance</Link></li>
                    <li><Link href="/services/uae-pdpl" className="hover:text-[hsl(var(--secondary))] transition">UAE PDPL Compliance</Link></li>
                    <li><Link href="/services/uae-ia" className="hover:text-[hsl(var(--secondary))] transition">UAE IA Compliance</Link></li>
                    <li><Link href="/services/uae-nesa" className="hover:text-[hsl(var(--secondary))] transition">UAE NESA Compliance</Link></li>
                    <li><Link href="/services/pci-dss" className="hover:text-[hsl(var(--secondary))] transition">PCI DSS Compliance</Link></li>
                    <li><Link href="/services/hipaa" className="hover:text-[hsl(var(--secondary))] transition">HIPAA Compliance</Link></li>
                    <li><Link href="/services/internal-audit" className="hover:text-[hsl(var(--secondary))] transition">Internal Audit & Gap Analysis</Link></li>
                    <li><Link href="/services/risk-frameworks" className="hover:text-[hsl(var(--secondary))] transition">Risk Management Frameworks</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[hsl(var(--secondary))] mb-3 font-semibold">IT Security & Audit</h4>
                  <ul className="space-y-2">
                    <li><Link href="/services/it-security-audit" className="hover:text-[hsl(var(--secondary))] transition">IT Security Audit</Link></li>
                    <li><Link href="/services/security-assessment" className="hover:text-[hsl(var(--secondary))] transition">Security Assessment</Link></li>
                    <li><Link href="/services/policy-development" className="hover:text-[hsl(var(--secondary))] transition">Policy Development</Link></li>
                  </ul>
                  <h4 className="text-[hsl(var(--secondary))] mt-5 mb-3 font-semibold">Offensive Security</h4>
                  <ul className="space-y-2">
                    <li><Link href="/services/penetration-testing" className="hover:text-[hsl(var(--secondary))] transition">Penetration Testing</Link></li>
                    <li><Link href="/services/web-pen-testing" className="hover:text-[hsl(var(--secondary))] transition">Web App Penetration Testing</Link></li>
                    <li><Link href="/services/network-pentesting" className="hover:text-[hsl(var(--secondary))] transition">Network Penetration Testing</Link></li>
                    <li><Link href="/services/vapt" className="hover:text-[hsl(var(--secondary))] transition">Vulnerability Assessment & Pen Testing</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[hsl(var(--secondary))] mb-3 font-semibold">Cybersecurity Solutions</h4>
                  <ul className="space-y-2">
                    <li><Link href="/services/cloud-security" className="hover:text-[hsl(var(--secondary))] transition">Cloud Security</Link></li>
                    <li><Link href="/services/vciso" className="hover:text-[hsl(var(--secondary))] transition">vCISO Services</Link></li>
                    <li><Link href="/services/data-privacy" className="hover:text-[hsl(var(--secondary))] transition">Data Privacy Consultation</Link></li>
                    <li><Link href="/solutions/email-security" className="hover:text-[hsl(var(--secondary))] transition">Email Security</Link></li>
                    <li><Link href="/solutions/edr" className="hover:text-[hsl(var(--secondary))] transition">Endpoint Detection & Response</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[400px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-card border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl p-6">
                <div className="grid grid-cols-1 gap-4">
                  <h4 className="text-[hsl(var(--secondary))] mb-1 font-semibold">AI-Powered Solutions</h4>
                  <ul className="space-y-2">
                    <li><Link href="/solutions/ai-compliance" className="hover:text-[hsl(var(--secondary))] transition">AI-Driven Compliance Tools</Link></li>
                    <li><Link href="/solutions/grc-automation" className="hover:text-[hsl(var(--secondary))] transition">GRC Automation Platforms</Link></li>
                    <li><Link href="/solutions/risk-management" className="hover:text-[hsl(var(--secondary))] transition">Risk Management Tools</Link></li>
                    <li><Link href="/solutions/vulnerability-management" className="hover:text-[hsl(var(--secondary))] transition">Vulnerability Management</Link></li>
                    <li><Link href="/solutions/cybersecurity-frameworks" className="hover:text-[hsl(var(--secondary))] transition">Cybersecurity Frameworks</Link></li>
                  </ul>
                  <h4 className="text-[hsl(var(--secondary))] mt-4 mb-1 font-semibold">Security Technology Solutions</h4>
                  <ul className="space-y-2">
                    <li><Link href="/solutions/email-security" className="hover:text-[hsl(var(--secondary))] transition">Email Security Solutions</Link></li>
                    <li><Link href="/solutions/edr" className="hover:text-[hsl(var(--secondary))] transition">Endpoint Detection & Response</Link></li>
                    <li><Link href="/solutions/siem" className="hover:text-[hsl(var(--secondary))] transition">SIEM Solutions</Link></li>
                    <li><Link href="/solutions/dlp" className="hover:text-[hsl(var(--secondary))] transition">Data Loss Prevention</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Industries Dropdown */}
            <div className="group relative">
              <button className="text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center">
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-[300px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-card border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl p-6">
                <ul className="space-y-2">
                  <li><Link href="/industries/bfsi" className="hover:text-[hsl(var(--secondary))] transition">BFSI</Link></li>
                  <li><Link href="/industries/healthcare" className="hover:text-[hsl(var(--secondary))] transition">Healthcare</Link></li>
                  <li><Link href="/industries/government" className="hover:text-[hsl(var(--secondary))] transition">Government</Link></li>
                  <li><Link href="/industries/ecommerce" className="hover:text-[hsl(var(--secondary))] transition">E-Commerce</Link></li>
                  <li><Link href="/industries/sme" className="hover:text-[hsl(var(--secondary))] transition">SMEs & Enterprises</Link></li>
                  <li><Link href="/industries/logistics" className="hover:text-[hsl(var(--secondary))] transition">Logistics</Link></li>
                </ul>
              </div>
            </div>
            
            <Link href="/about" className="text-white hover:text-[hsl(var(--secondary))] transition font-medium">About Us</Link>
            <Link href="/insights" className="text-white hover:text-[hsl(var(--secondary))] transition font-medium">Insights</Link>
            <Link href="/contact" className="text-white hover:text-[hsl(var(--secondary))] transition font-medium">Contact</Link>
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Link href="/assessment">
              <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                Get Assessment
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden bg-card absolute w-full left-0 top-full transition-all duration-300 z-20 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <div className="border-b border-[hsl(var(--secondary))]/20 pb-2">
              <button 
                className="flex justify-between w-full text-white py-2"
                onClick={() => toggleSubmenu('services')}
              >
                Services <ChevronDown className={`h-5 w-5 transition-transform ${openSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 py-2 ${openSubmenu === 'services' ? 'block' : 'hidden'}`}>
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-1 pb-1">GRC Services</p>
                <Link href="/services/iso27001" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">ISO 27001 Certification</Link>
                <Link href="/services/iso42001" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">ISO 42001 AI Management</Link>
                <Link href="/services/soc2" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">SOC 2 Compliance</Link>
                <Link href="/services/gdpr" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">GDPR Compliance</Link>
                <Link href="/services/uae-pdpl" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE PDPL Compliance</Link>
                <Link href="/services/uae-ia" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE IA Compliance</Link>
                <Link href="/services/uae-nesa" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE NESA Compliance</Link>
                <Link href="/services/pci-dss" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">PCI DSS Compliance</Link>
                <Link href="/services/hipaa" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">HIPAA Compliance</Link>
                <Link href="/services/internal-audit" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Internal Audit & Gap Analysis</Link>
                <Link href="/services/risk-frameworks" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Risk Management Frameworks</Link>
                <Link href="/services/policy-development" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Policy Development</Link>
                
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-3 pb-1">IT Security & Audit</p>
                <Link href="/services/it-security-audit" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">IT Security Audit</Link>
                <Link href="/services/security-assessment" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Security Assessment</Link>
                
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-3 pb-1">Offensive Security</p>
                <Link href="/services/penetration-testing" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Penetration Testing</Link>
                <Link href="/services/web-pen-testing" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Web App Penetration Testing</Link>
                <Link href="/services/network-pentesting" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Network Penetration Testing</Link>
                <Link href="/services/vapt" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Vulnerability Assessment & Pen Testing</Link>
                
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-3 pb-1">Cybersecurity Solutions</p>
                <Link href="/services/cloud-security" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Cloud Security</Link>
                <Link href="/services/cloud-security-assessment" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Cloud Security Assessment</Link>
                <Link href="/services/vciso" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">vCISO Services</Link>
                <Link href="/services/data-privacy" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Privacy Consultation</Link>
                <Link href="/solutions/email-security" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Email Security</Link>
                <Link href="/solutions/edr" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Endpoint Detection & Response</Link>
              </div>
            </div>
            
            <div className="border-b border-[hsl(var(--secondary))]/20 pb-2">
              <button 
                className="flex justify-between w-full text-white py-2"
                onClick={() => toggleSubmenu('solutions')}
              >
                Solutions <ChevronDown className={`h-5 w-5 transition-transform ${openSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 py-2 ${openSubmenu === 'solutions' ? 'block' : 'hidden'}`}>
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-1 pb-1">AI-Powered Solutions</p>
                <Link href="/solutions/ai-compliance" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">AI-Driven Compliance Tools</Link>
                <Link href="/solutions/grc-automation" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">GRC Automation Platforms</Link>
                <Link href="/solutions/risk-management" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Risk Management Tools</Link>
                <Link href="/solutions/vulnerability-management" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Vulnerability Management</Link>
                <Link href="/solutions/cybersecurity-frameworks" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Cybersecurity Frameworks</Link>
                
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-3 pb-1">Security Technology Solutions</p>
                <Link href="/solutions/email-security" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Email Security Solutions</Link>
                <Link href="/solutions/edr" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Endpoint Detection & Response</Link>
                <Link href="/solutions/siem" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">SIEM Solutions</Link>
                <Link href="/solutions/dlp" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Data Loss Prevention</Link>
              </div>
            </div>
            
            <div className="border-b border-[hsl(var(--secondary))]/20 pb-2">
              <button 
                className="flex justify-between w-full text-white py-2"
                onClick={() => toggleSubmenu('industries')}
              >
                Industries <ChevronDown className={`h-5 w-5 transition-transform ${openSubmenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`pl-4 space-y-2 py-2 ${openSubmenu === 'industries' ? 'block' : 'hidden'}`}>
                <Link href="/industries/bfsi" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">BFSI</Link>
                <Link href="/industries/healthcare" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Healthcare</Link>
                <Link href="/industries/government" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Government</Link>
                <Link href="/industries/ecommerce" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">E-Commerce</Link>
                <Link href="/industries/sme" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">SMEs & Enterprises</Link>
                <Link href="/industries/logistics" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Logistics</Link>
              </div>
            </div>
            
            <Link href="/about" className="text-white py-2 border-b border-[hsl(var(--secondary))]/20">About Us</Link>
            <Link href="/insights" className="text-white py-2 border-b border-[hsl(var(--secondary))]/20">Insights</Link>
            <Link href="/contact" className="text-white py-2 border-b border-[hsl(var(--secondary))]/20">Contact</Link>
            
            {/* Theme toggle removed */}
            
            <Link href="/assessment" className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-6 rounded-full text-center mt-2">
              Get Assessment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
