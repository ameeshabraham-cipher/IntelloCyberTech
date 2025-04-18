import { Link } from 'wouter';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-[hsl(var(--secondary))]/10">
      <div className="container mx-auto px-4">
        {/* Intello Verticals Section */}
        <div className="mb-16 pb-16 border-b border-[hsl(var(--secondary))]/10">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Core Verticals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-background to-background/50 border border-[hsl(var(--secondary))]/20 rounded-xl p-6 hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/5 transition-all group">
              <div className="mb-4 w-14 h-14 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--secondary))]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary))]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Governance & Compliance</h3>
              <p className="text-muted-foreground">Implementing frameworks like ISO 27001, SOC 2, and regional compliance standards to strengthen your security posture.</p>
            </div>
            
            <div className="bg-gradient-to-br from-background to-background/50 border border-[hsl(var(--secondary))]/20 rounded-xl p-6 hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/5 transition-all group">
              <div className="mb-4 w-14 h-14 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--secondary))]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary))]">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 8h10" />
                  <path d="M7 12h10" />
                  <path d="M7 16h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">IT Security & Audit</h3>
              <p className="text-muted-foreground">Comprehensive assessment and validation of your security controls with detailed reports and remediation guidance.</p>
            </div>
            
            <div className="bg-gradient-to-br from-background to-background/50 border border-[hsl(var(--secondary))]/20 rounded-xl p-6 hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/5 transition-all group">
              <div className="mb-4 w-14 h-14 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--secondary))]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary))]">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Solutions</h3>
              <p className="text-muted-foreground">Proactive protection with advanced penetration testing, threat hunting, and incident response planning.</p>
            </div>
            
            <div className="bg-gradient-to-br from-background to-background/50 border border-[hsl(var(--secondary))]/20 rounded-xl p-6 hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/5 transition-all group">
              <div className="mb-4 w-14 h-14 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--secondary))]/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[hsl(var(--primary))]">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-muted-foreground">Leveraging artificial intelligence for advanced compliance automation, risk assessment, and security monitoring.</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="mb-6">
              <Link href="/" className="text-white font-montserrat font-bold text-2xl">
                <img src="/images/intello-new-logo.png" alt="Intello Logo" className="h-10" />
              </Link>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering businesses with future-proof cybersecurity and GRC solutions, ensuring compliance and protection against evolving threats.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/iso-27001" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">ISO 27001 Compliance</Link></li>
              <li><Link href="/services/soc-2" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">SOC 2 Compliance</Link></li>
              <li><Link href="/services/gdpr" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">GDPR Compliance</Link></li>
              <li><Link href="/services/uae-pdpl" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">UAE PDPL Compliance</Link></li>
              <li><Link href="/services/security-audit" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">IT Security Audit</Link></li>
              <li><Link href="/services/vciso" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">vCISO Services</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/ai-compliance" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">AI-Driven Compliance</Link></li>
              <li><Link href="/solutions/grc-automation" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">GRC Automation</Link></li>
              <li><Link href="/solutions/risk-management" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">Risk Management</Link></li>
              <li><Link href="/solutions/vulnerability-management" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">Vulnerability Management</Link></li>
              <li><Link href="/solutions/data-protection" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">Data Protection</Link></li>
              <li><Link href="/solutions/security-awareness" className="text-muted-foreground hover:text-[hsl(var(--secondary))] transition-colors">Security Awareness</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-[hsl(var(--secondary))] h-5 w-5 mt-1 mr-3" />
                <span className="text-muted-foreground">Office 26, First Gulf Business Center, Madina Mall, Muhaisnah 4, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[hsl(var(--secondary))] h-5 w-5 mr-3" />
                <span className="text-muted-foreground">+971 55 355 6787</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[hsl(var(--secondary))] h-5 w-5 mr-3" />
                <span className="text-muted-foreground">info@intellome.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--secondary))]/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Intello Protect Technologies L.L.C. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-[hsl(var(--secondary))] text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-[hsl(var(--secondary))] text-sm transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-muted-foreground hover:text-[hsl(var(--secondary))] text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
