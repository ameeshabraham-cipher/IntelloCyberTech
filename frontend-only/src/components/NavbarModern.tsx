import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavbarModern() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [solutionDropdownOpen, setSolutionDropdownOpen] = useState(false);

  // Close mobile menu on location change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll events for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setServiceDropdownOpen(false);
        setIndustryDropdownOpen(false);
        setSolutionDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setServiceDropdownOpen(false);
      setIndustryDropdownOpen(false);
      setSolutionDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location === path;
    }
    return location.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm' : 'bg-transparent'}`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Intello</span>
              <span className="text-foreground">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" isActive={isActive('/')} label="Home" />
            <NavLink href="/about" isActive={isActive('/about')} label="About" />

            {/* Services Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setServiceDropdownOpen(!serviceDropdownOpen);
                  setIndustryDropdownOpen(false);
                  setSolutionDropdownOpen(false);
                }}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${serviceDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {serviceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-md shadow-lg border border-border z-50">
                  <div className="p-2 grid gap-1">
                    <DropdownSection title="Governance, Risk & Compliance">
                      <DropdownLink href="/services/iso27001" label="ISO 27001" />
                      <DropdownLink href="/services/soc2" label="SOC 2" />
                      <DropdownLink href="/services/uae-pdpl" label="UAE PDPL" />
                      <DropdownLink href="/services/gdpr" label="GDPR" />
                    </DropdownSection>

                    <DropdownSection title="Security Testing">
                      <DropdownLink href="/services/penetration-testing" label="Penetration Testing" />
                      <DropdownLink href="/services/web-penetration-testing" label="Web Application Testing" />
                      <DropdownLink href="/services/network-pentesting" label="Network Testing" />
                      <DropdownLink href="/services/red-team-exercises" label="Red Team Exercises" />
                    </DropdownSection>

                    <DropdownSection title="IT Services">
                      <DropdownLink href="/services/it-amc" label="IT Managed Services" />
                      <DropdownLink href="/services/microsoft-services" label="Microsoft Services" />
                    </DropdownSection>

                    <div className="mt-2 pt-2 border-t border-border">
                      <DropdownLink
                        href="/services"
                        label="View All Services"
                        className="font-medium text-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${isActive('/solutions') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSolutionDropdownOpen(!solutionDropdownOpen);
                  setServiceDropdownOpen(false);
                  setIndustryDropdownOpen(false);
                }}
              >
                Solutions
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${solutionDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {solutionDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-md shadow-lg border border-border z-50">
                  <div className="p-2 grid gap-1">
                    <DropdownSection title="GRC Solutions">
                      <DropdownLink href="/solutions/grc-automation" label="GRC Automation" />
                      <DropdownLink href="/solutions/ai-compliance" label="AI-Powered Compliance" />
                      <DropdownLink href="/solutions/risk-management" label="Risk Management" />
                    </DropdownSection>

                    <DropdownSection title="Security Solutions">
                      <DropdownLink
                        href="/solutions/vulnerability-management"
                        label="Vulnerability Management"
                      />
                      <DropdownLink href="/solutions/siem" label="SIEM Solutions" />
                      <DropdownLink href="/solutions/edr" label="EDR Solutions" />
                      <DropdownLink href="/solutions/dlp" label="DLP Solutions" />
                    </DropdownSection>

                    <div className="mt-2 pt-2 border-t border-border">
                      <DropdownLink
                        href="/solutions"
                        label="View All Solutions"
                        className="font-medium text-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${isActive('/industries') ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndustryDropdownOpen(!industryDropdownOpen);
                  setServiceDropdownOpen(false);
                  setSolutionDropdownOpen(false);
                }}
              >
                Industries
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${industryDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {industryDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-md shadow-lg border border-border z-50">
                  <div className="p-2 grid gap-1">
                    <DropdownLink href="/industries/bfsi" label="Banking & Finance" />
                    <DropdownLink href="/industries/healthcare" label="Healthcare" />
                    <DropdownLink href="/industries/government" label="Government" />
                    <DropdownLink href="/industries/sme" label="SMEs" />
                    <DropdownLink href="/industries/ecommerce" label="E-commerce" />
                    <DropdownLink href="/industries/technology-companies" label="Technology" />
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/insights" isActive={isActive('/insights')} label="Insights" />
            <NavLink href="/contact" isActive={isActive('/contact')} label="Contact" />
            <NavLink
              href="/assessment"
              isActive={isActive('/assessment')}
              label="Free Assessment"
              className="bg-primary text-white hover:bg-primary/90 ml-2"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-foreground hover:bg-muted inline-flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 z-50 bg-background border-b border-border transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink href="/" label="Home" />
              <MobileNavLink href="/about" label="About" />
              <MobileNavLink href="/services" label="Services" />
              <MobileNavLink href="/solutions" label="Solutions" />
              <MobileNavLink href="/industries/bfsi" label="Industries" />
              <MobileNavLink href="/insights" label="Insights" />
              <MobileNavLink href="/contact" label="Contact" />
              <MobileNavLink
                href="/assessment"
                label="Free Assessment"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
};

function NavLink({ href, label, isActive, className = '' }: NavLinkProps) {
  return (
    <Link href={href}>
      <a
        className={`px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'} ${className}`}
      >
        {label}
      </a>
    </Link>
  );
}

function MobileNavLink({ href, label, className = '' }: NavLinkProps) {
  return (
    <Link href={href}>
      <a
        className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-muted ${className}`}
      >
        {label}
      </a>
    </Link>
  );
}

type DropdownSectionProps = {
  title: string;
  children: React.ReactNode;
};

function DropdownSection({ title, children }: DropdownSectionProps) {
  return (
    <div className="py-1">
      <h3 className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <div className="grid gap-0.5">{children}</div>
    </div>
  );
}

type DropdownLinkProps = {
  href: string;
  label: string;
  className?: string;
};

function DropdownLink({ href, label, className = '' }: DropdownLinkProps) {
  return (
    <Link href={href}>
      <a
        className={`block px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors ${className}`}
      >
        {label}
      </a>
    </Link>
  );
}
