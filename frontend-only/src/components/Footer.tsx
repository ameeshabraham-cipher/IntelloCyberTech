import { Link } from 'wouter';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/60 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-primary">Intello</span>
              <span className="text-foreground">.</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Leading provider of Cybersecurity, GRC, and IT Managed Services since 2003, specializing in
              solutions for organizations in the UAE and Middle East.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/intellocyber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/intellocyber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/iso27001">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    ISO 27001 Compliance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/penetration-testing">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Penetration Testing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/uae-pdpl">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    UAE PDPL Compliance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/gdpr">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    GDPR Compliance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services/it-amc">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    IT Managed Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    View All Services
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/solutions">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Solutions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Insights
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/assessment">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Free Assessment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Office 710, Bayview Tower, Business Bay, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a
                  href="tel:+97155555555"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +971 55 355 6787
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a
                  href="mailto:info@intellome.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@intellome.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Intello Cyber Technologies. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy-policy">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms-of-service">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
