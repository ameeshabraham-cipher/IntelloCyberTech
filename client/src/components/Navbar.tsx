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
  Truck,
  Layers,
  X,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Define missing Lucide icons since they aren't in the lucide-react package
const Globe = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Network = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="6" cy="18" r="2" />
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <circle cx="18" cy="6" r="2" />
    <line x1="6" y1="8" x2="6" y2="16" />
    <line x1="18" y1="8" x2="18" y2="16" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

const Cloud = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const Mail = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Laptop = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
  </svg>
);

// Interface for menu items
interface MenuItemChild {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

interface CategoryItem {
  category: string;
  icon?: React.ReactNode;
  children: MenuItemChild[];
}

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: (MenuItem | CategoryItem)[];
}

// Menu data structure
const menuItems: MenuItem[] = [
  {
    label: 'Services',
    icon: <Shield className="h-5 w-5" />,
    children: [
      {
        label: 'GRC Services',
        category: 'GRC Services',
        children: [
          { label: 'ISO 27001 Certification', path: '/services/iso27001', icon: <Shield className="h-4 w-4" /> },
          { label: 'ISO 42001 AI Management', path: '/services/iso42001', icon: <Bot className="h-4 w-4" /> },
          { label: 'SOC 2 Compliance', path: '/services/soc2', icon: <CheckCircle className="h-4 w-4" /> },
          { label: 'GDPR Compliance', path: '/services/gdpr', icon: <Lock className="h-4 w-4" /> },
          { label: 'PCI DSS Compliance', path: '/services/pci-dss', icon: <ShieldCheck className="h-4 w-4" /> },
          { label: 'HIPAA Compliance', path: '/services/hipaa', icon: <Hospital className="h-4 w-4" /> },
          { label: 'Internal Audit & Gap Analysis', path: '/services/internal-audit', icon: <FileText className="h-4 w-4" /> },
          { label: 'Risk Management Frameworks', path: '/services/risk-frameworks', icon: <BarChart2 className="h-4 w-4" /> }
        ]
      },
      {
        label: 'GCC Focused Compliance',
        category: 'GCC Focused Compliance',
        children: [
          { label: 'UAE PDPL Compliance', path: '/services/uae-pdpl', icon: <Lock className="h-4 w-4" /> },
          { label: 'UAE IA Compliance', path: '/services/uae-ia', icon: <ShieldCheck className="h-4 w-4" /> },
          { label: 'UAE NESA Compliance', path: '/services/uae-nesa', icon: <Shield className="h-4 w-4" /> },
          { label: 'KSA PDPL Compliance', path: '/services/ksa-pdpl', icon: <Lock className="h-4 w-4" /> },
          { label: 'Bahrain PDPL Compliance', path: '/services/bahrain-pdpl', icon: <Lock className="h-4 w-4" /> },
          { label: 'SAMA Compliance', path: '/services/sama', icon: <Building className="h-4 w-4" /> },
          { label: 'Saudi Aramco Cybersecurity', path: '/services/saudi-aramco', icon: <Shield className="h-4 w-4" /> }
        ]
      },
      {
        label: 'IT Security & Audit',
        category: 'IT Security & Audit',
        children: [
          { label: 'IT Security Audit', path: '/services/it-security-audit', icon: <FileText className="h-4 w-4" /> },
          { label: 'Security Assessment', path: '/services/security-assessment', icon: <CheckCircle className="h-4 w-4" /> },
          { label: 'Policy Development', path: '/services/policy-development', icon: <FileText className="h-4 w-4" /> }
        ]
      },
      {
        label: 'Offensive Security',
        category: 'Offensive Security',
        children: [
          { label: 'Penetration Testing', path: '/services/penetration-testing', icon: <Shield className="h-4 w-4" /> },
          { label: 'Web App Penetration Testing', path: '/services/web-pen-testing', icon: <Globe className="h-4 w-4" /> },
          { label: 'Network Penetration Testing', path: '/services/network-pentesting', icon: <Network className="h-4 w-4" /> },
          { label: 'Vulnerability Assessment & Pen Testing', path: '/services/vapt', icon: <Search className="h-4 w-4" /> }
        ]
      },
      {
        label: 'Cybersecurity Solutions',
        category: 'Cybersecurity Solutions',
        children: [
          { label: 'Cloud Security', path: '/services/cloud-security', icon: <Cloud className="h-4 w-4" /> },
          { label: 'vCISO Services', path: '/services/vciso', icon: <UserCheck className="h-4 w-4" /> },
          { label: 'Data Privacy Consultation', path: '/services/data-privacy', icon: <Lock className="h-4 w-4" /> },
          { label: 'Email Security', path: '/solutions/email-security', icon: <Mail className="h-4 w-4" /> },
          { label: 'Endpoint Detection & Response', path: '/solutions/edr', icon: <Laptop className="h-4 w-4" /> }
        ]
      }
    ]
  },
  {
    label: 'Solutions',
    icon: <Layers className="h-5 w-5" />,
    children: [
      {
        label: 'AI-Powered Solutions',
        category: 'AI-Powered Solutions',
        children: [
          { label: 'AI-Driven Compliance Tools', path: '/solutions/ai-compliance', icon: <Bot className="h-4 w-4" /> },
          { label: 'GRC Automation Platforms', path: '/solutions/grc-automation', icon: <BarChart2 className="h-4 w-4" /> },
          { label: 'Risk Management Tools', path: '/solutions/risk-management', icon: <BarChart2 className="h-4 w-4" /> },
          { label: 'Vulnerability Management', path: '/solutions/vulnerability-management', icon: <Search className="h-4 w-4" /> },
          { label: 'Cybersecurity Frameworks', path: '/solutions/cybersecurity-frameworks', icon: <Layers className="h-4 w-4" /> }
        ]
      },
      {
        label: 'Security Technology Solutions',
        category: 'Security Technology Solutions',
        children: [
          { label: 'Email Security Solutions', path: '/solutions/email-security', icon: <Mail className="h-4 w-4" /> },
          { label: 'Endpoint Detection & Response', path: '/solutions/edr', icon: <Laptop className="h-4 w-4" /> },
          { label: 'SIEM Solutions', path: '/solutions/siem', icon: <Layers className="h-4 w-4" /> },
          { label: 'Data Loss Prevention', path: '/solutions/dlp', icon: <Shield className="h-4 w-4" /> }
        ]
      }
    ]
  },
  {
    label: 'Industries',
    icon: <Building className="h-5 w-5" />,
    children: [
      { label: 'BFSI', path: '/industries/bfsi', icon: <Briefcase className="h-4 w-4" /> },
      { label: 'Healthcare', path: '/industries/healthcare', icon: <Hospital className="h-4 w-4" /> },
      { label: 'Government', path: '/industries/government', icon: <Building className="h-4 w-4" /> },
      { label: 'E-Commerce', path: '/industries/ecommerce', icon: <ShoppingBag className="h-4 w-4" /> },
      { label: 'SMEs & Enterprises', path: '/industries/sme', icon: <Users className="h-4 w-4" /> },
      { label: 'Logistics', path: '/industries/logistics', icon: <Truck className="h-4 w-4" /> }
    ]
  },
  {
    label: 'About Us',
    icon: <Users className="h-5 w-5" />,
    path: '/about'
  },
  {
    label: 'Insights',
    icon: <BookOpen className="h-5 w-5" />,
    path: '/insights'
  },
  {
    label: 'Contact',
    icon: <Mail className="h-5 w-5" />,
    path: '/contact'
  }
];

const Navbar = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
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
    setActiveItem(null);
  }, [location]);
  
  const toggleActiveItem = (item: string) => {
    if (activeItem === item) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };
  
  return (
    <header id="navbar" className="fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-white">
              <div className="flex items-center">
                <img 
                  src="/images/intello-new-logo.png" 
                  alt="Intello." 
                  className="h-12 w-auto"
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - New Modern Design */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-1 bg-background/40 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => item.children && setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.path ? (
                    <Link href={item.path}>
                      <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                        {item.icon && <span className="mr-1">{item.icon}</span>}
                        {item.label}
                      </button>
                    </Link>
                  ) : (
                    <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.label}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                  )}
                  
                  {/* Mega Menu - modernized with tabbed interface */}
                  {item.children && hoveredItem === item.label && (
                    <div className="absolute left-0 top-full mt-2 opacity-100 visible transition-all duration-200 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden">
                      {/* For Services - Tabbed mega menu */}
                      {item.label === 'Services' && (
                        <div className="w-[850px] p-1">
                          <div className="flex">
                            {/* Category Tabs */}
                            <div className="w-[220px] border-r border-[hsl(var(--secondary))]/10 p-2">
                              {item.children.map((category, catIndex) => (
                                <button 
                                  key={catIndex}
                                  onMouseEnter={() => setActiveItem(category.category || '')}
                                  className={`w-full text-left px-4 py-3 rounded-md mb-1 transition-all flex items-center gap-2 ${activeItem === category.category ? 'bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))]' : 'hover:bg-background/40'}`}
                                >
                                  {category.category}
                                </button>
                              ))}
                            </div>
                            
                            {/* Tab Content */}
                            <div className="flex-1 p-3">
                              <AnimatePresence mode="wait">
                                {item.children.map((category, catIndex) => (
                                  (activeItem === category.category || (!activeItem && catIndex === 0)) && (
                                    <motion.div
                                      key={category.category}
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -5 }}
                                      transition={{ duration: 0.2 }}
                                      className="grid grid-cols-3 gap-2"
                                    >
                                      {category.children?.map((subItem, subIndex) => (
                                        <Link 
                                          key={subIndex} 
                                          href={subItem.path || '#'}
                                          className="flex items-center gap-2 p-2 rounded-md hover:bg-[hsl(var(--secondary))]/10 transition-all group"
                                        >
                                          <span className="p-2 rounded-md bg-background/40 text-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary))]/20">
                                            {subItem.icon}
                                          </span>
                                          <div>
                                            <p className="font-medium">{subItem.label}</p>
                                          </div>
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )
                                ))}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* For Solutions - Simpler mega menu */}
                      {item.label === 'Solutions' && (
                        <div className="w-[600px] p-4">
                          <div className="grid grid-cols-2 gap-4">
                            {item.children.map((category, catIndex) => (
                              <div key={catIndex}>
                                <h4 className="text-[hsl(var(--secondary))] font-semibold mb-3 flex items-center">
                                  {category.icon && <span className="mr-2">{category.icon}</span>}
                                  {category.category}
                                </h4>
                                <ul className="space-y-1">
                                  {category.children?.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <Link 
                                        href={subItem.path || '#'}
                                        className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-[hsl(var(--secondary))]/10 transition-all"
                                      >
                                        {subItem.icon}
                                        <span>{subItem.label}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* For Industries - Card grid menu */}
                      {item.label === 'Industries' && (
                        <div className="w-[500px] p-4">
                          <h4 className="text-[hsl(var(--secondary))] font-semibold mb-3">Industries We Serve</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {item.children?.map((industry, indIndex) => (
                              <Link 
                                key={indIndex} 
                                href={industry.path || '#'}
                                className="flex items-center gap-3 p-3 rounded-md border border-[hsl(var(--secondary))]/10 hover:bg-[hsl(var(--secondary))]/10 transition-all group"
                              >
                                <span className="p-2 rounded-full bg-background/80 text-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary))]/20">
                                  {industry.icon}
                                </span>
                                <span className="font-medium">{industry.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center ml-4">
            <Link href="/assessment">
              <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                Get Assessment
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <Link href="/services/pci-dss" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">PCI DSS Compliance</Link>
                <Link href="/services/hipaa" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">HIPAA Compliance</Link>
                <Link href="/services/internal-audit" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Internal Audit & Gap Analysis</Link>
                <Link href="/services/risk-frameworks" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Risk Management Frameworks</Link>
                <Link href="/services/policy-development" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Policy Development</Link>
                
                <p className="text-[hsl(var(--secondary))] text-sm font-semibold pt-4 pb-1">GCC Focused Compliance</p>
                <Link href="/services/uae-pdpl" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE PDPL Compliance</Link>
                <Link href="/services/uae-ia" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE IA Compliance</Link>
                <Link href="/services/uae-nesa" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">UAE NESA Compliance</Link>
                <Link href="/services/ksa-pdpl" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">KSA PDPL Compliance</Link>
                <Link href="/services/bahrain-pdpl" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Bahrain PDPL Compliance</Link>
                <Link href="/services/sama" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">SAMA Compliance</Link>
                <Link href="/services/saudi-aramco" className="block text-muted-foreground hover:text-[hsl(var(--secondary))]">Saudi Aramco Cybersecurity</Link>
                
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
      
      {/* Mobile Navigation Menu - Modernized with animations and better organization */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[4rem] bg-background/95 backdrop-blur-md z-40 overflow-y-auto pb-20"
          >
            <div className="container mx-auto px-4 py-8">
              {/* Search for mobile */}
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search services..."
                  className="w-full rounded-lg bg-card py-3 pl-10 pr-4 border border-white/10 focus:border-[hsl(var(--secondary))] focus:outline-none"
                />
              </div>
              
              {/* Main mobile menu */}
              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-white/10">
                    {item.path ? (
                      <Link href={item.path}>
                        <button className="flex items-center w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all">
                          <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                            {item.icon}
                          </span>
                          {item.label}
                        </button>
                      </Link>
                    ) : (
                      <>
                        <button 
                          className="flex items-center justify-between w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
                          onClick={() => toggleActiveItem(item.label)}
                        >
                          <span className="flex items-center">
                            <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                              {item.icon}
                            </span>
                            {item.label}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform ${activeItem === item.label ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {activeItem === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-12 pb-3 space-y-3">
                                {item.children?.map((category, catIndex) => (
                                  <div key={catIndex} className="mb-3">
                                    <h4 className="text-[hsl(var(--secondary))] font-semibold mb-2 flex items-center">
                                      {category.icon && <span className="mr-2">{category.icon}</span>}
                                      {category.category}
                                    </h4>
                                    <ul className="space-y-1 pl-2">
                                      {category.children?.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link href={subItem.path || '#'}>
                                            <span className="flex items-center py-2 text-muted-foreground hover:text-[hsl(var(--secondary))] transition">
                                              <span className="mr-2">{subItem.icon}</span>
                                              {subItem.label}
                                            </span>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                                
                                {/* If no categories but direct children */}
                                {!item.children[0].category && (
                                  <ul className="space-y-2">
                                    {item.children.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <Link href={subItem.path || '#'}>
                                          <span className="flex items-center py-2 text-muted-foreground hover:text-[hsl(var(--secondary))] transition">
                                            <span className="mr-2">{subItem.icon}</span>
                                            {subItem.label}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* CTA Button (Mobile) */}
              <div className="mt-8">
                <Link href="/assessment">
                  <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300">
                    Get Security Assessment
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
