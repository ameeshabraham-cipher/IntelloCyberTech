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
            © {new Date().getFullYear()} Intello Protect Technology. All rights reserved.
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
