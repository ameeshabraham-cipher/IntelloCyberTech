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
  ExternalLink,
  Target,
  Network as NetworkIcon,
  Mail as MailIcon,
  Globe as GlobeIcon,
  Laptop as LaptopIcon,
  Cloud as CloudIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Create any missing icons from lucide-react
const Globe = GlobeIcon || ((props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
));

const Network = NetworkIcon || ((props: any) => (
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
));

const Cloud = CloudIcon || ((props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
));

const Mail = MailIcon || ((props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
));

const Laptop = LaptopIcon || ((props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
  </svg>
));

// Mega menu data for services
const servicesMenuData = [
  {
    category: 'GRC Services',
    items: [
      { label: 'ISO 27001 Certification', path: '/services/iso27001', icon: <Shield className="h-4 w-4" /> },
      { label: 'ISO 42001 AI Management', path: '/services/iso42001', icon: <Bot className="h-4 w-4" /> },
      { label: 'SOC 2 Compliance', path: '/services/soc2', icon: <CheckCircle className="h-4 w-4" /> },
      { label: 'GDPR Compliance', path: '/services/gdpr', icon: <Lock className="h-4 w-4" /> },
      { label: 'PCI DSS Compliance', path: '/services/pci-dss', icon: <ShieldCheck className="h-4 w-4" /> },
      { label: 'HIPAA Compliance', path: '/services/hipaa', icon: <Hospital className="h-4 w-4" /> },
      { label: 'Internal Audit & Gap Analysis', path: '/services/internal-audit', icon: <FileText className="h-4 w-4" /> },
      { label: 'Risk Management Frameworks', path: '/services/risk-frameworks', icon: <BarChart2 className="h-4 w-4" /> },
    ]
  },
  {
    category: 'GCC Focused Compliance',
    items: [
      { label: 'UAE PDPL Compliance', path: '/services/uae-pdpl', icon: <Lock className="h-4 w-4" /> },
      { label: 'UAE IA Compliance', path: '/services/uae-ia', icon: <ShieldCheck className="h-4 w-4" /> },
      { label: 'UAE NESA Compliance', path: '/services/uae-nesa', icon: <Shield className="h-4 w-4" /> },
      { label: 'KSA PDPL Compliance', path: '/services/ksa-pdpl', icon: <Lock className="h-4 w-4" /> },
      { label: 'Bahrain PDPL Compliance', path: '/services/bahrain-pdpl', icon: <Lock className="h-4 w-4" /> },
      { label: 'SAMA Compliance', path: '/services/sama', icon: <Building className="h-4 w-4" /> },
      { label: 'Saudi Aramco Cybersecurity', path: '/services/saudi-aramco', icon: <Shield className="h-4 w-4" /> },
    ]
  },
  {
    category: 'IT Security & Audit',
    items: [
      { label: 'IT Security Audit', path: '/services/it-security-audit', icon: <FileText className="h-4 w-4" /> },
      { label: 'Security Assessment', path: '/services/security-assessment', icon: <CheckCircle className="h-4 w-4" /> },
      { label: 'Policy Development', path: '/services/policy-development', icon: <FileText className="h-4 w-4" /> },
    ]
  },
  {
    category: 'Offensive Security',
    items: [
      { label: 'Penetration Testing', path: '/services/penetration-testing', icon: <Shield className="h-4 w-4" /> },
      { label: 'Advanced Penetration Testing', path: '/services/advanced-penetration-testing', icon: <Shield className="h-4 w-4" /> },
      { label: 'Red Team Exercises', path: '/services/red-team-exercises', icon: <Target className="h-4 w-4" /> },
      { label: 'Web App Penetration Testing', path: '/services/web-pen-testing', icon: <Globe className="h-4 w-4" /> },
      { label: 'Network Penetration Testing', path: '/services/network-pentesting', icon: <Network className="h-4 w-4" /> },
      { label: 'Vulnerability Assessment & Pen Testing', path: '/services/vapt', icon: <Search className="h-4 w-4" /> },
    ]
  },
  {
    category: 'Cybersecurity Solutions',
    items: [
      { label: 'Cloud Security', path: '/services/cloud-security', icon: <Cloud className="h-4 w-4" /> },
      { label: 'Cloud/On-Prem Infrastructure', path: '/services/cloud-on-prem-infrastructure', icon: <Cloud className="h-4 w-4" /> },
      { label: 'vCISO Services', path: '/services/vciso', icon: <UserCheck className="h-4 w-4" /> },
      { label: 'Privacy Compliance', path: '/services/privacy-compliance', icon: <Lock className="h-4 w-4" /> },
      { label: 'Threat Hunting', path: '/services/threat-hunting', icon: <Search className="h-4 w-4" /> },
      { label: 'Incident Response Planning', path: '/services/incident-response-planning', icon: <Shield className="h-4 w-4" /> },
      { label: 'Data Privacy Consultation', path: '/services/data-privacy', icon: <Lock className="h-4 w-4" /> },
      { label: 'Email Security', path: '/solutions/email-security', icon: <Mail className="h-4 w-4" /> },
    ]
  }
];

// Mega menu data for solutions
const solutionsMenuData = [
  {
    category: 'AI-Powered Solutions',
    items: [
      { label: 'AI-Driven Compliance Tools', path: '/solutions/ai-compliance', icon: <Bot className="h-4 w-4" /> },
      { label: 'GRC Automation Platforms', path: '/solutions/grc-automation', icon: <BarChart2 className="h-4 w-4" /> },
      { label: 'Risk Management Tools', path: '/solutions/risk-management', icon: <BarChart2 className="h-4 w-4" /> },
      { label: 'Vulnerability Management', path: '/solutions/vulnerability-management', icon: <Search className="h-4 w-4" /> },
      { label: 'Cybersecurity Frameworks', path: '/solutions/cybersecurity-frameworks', icon: <Layers className="h-4 w-4" /> },
    ]
  },
  {
    category: 'Security Technology Solutions',
    items: [
      { label: 'Email Security Solutions', path: '/solutions/email-security', icon: <Mail className="h-4 w-4" /> },
      { label: 'Endpoint Detection & Response', path: '/solutions/edr', icon: <Laptop className="h-4 w-4" /> },
      { label: 'SIEM Solutions', path: '/solutions/siem', icon: <Layers className="h-4 w-4" /> },
      { label: 'Data Loss Prevention', path: '/solutions/dlp', icon: <Shield className="h-4 w-4" /> },
    ]
  }
];

// Industries data
const industriesData = [
  { label: 'BFSI', path: '/industries/bfsi', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Money Exchanges', path: '/industries/money-exchanges', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Insurance Companies', path: '/industries/insurance-companies', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Healthcare', path: '/industries/healthcare', icon: <Hospital className="h-4 w-4" /> },
  { label: 'Government', path: '/industries/government', icon: <Building className="h-4 w-4" /> },
  { label: 'E-Commerce', path: '/industries/ecommerce', icon: <ShoppingBag className="h-4 w-4" /> },
  { label: 'Technology Companies', path: '/industries/technology-companies', icon: <Laptop className="h-4 w-4" /> },
  { label: 'Architectural Firms', path: '/industries/architectural-firms', icon: <Building className="h-4 w-4" /> },
  { label: 'SMEs & Enterprises', path: '/industries/sme', icon: <Users className="h-4 w-4" /> },
  { label: 'Logistics', path: '/industries/logistics', icon: <Truck className="h-4 w-4" /> },
];

// Nav items
const navItems = [
  { label: 'About Us', path: '/about', icon: <Users className="h-5 w-5" /> },
  { label: 'Insights', path: '/insights', icon: <BookOpen className="h-5 w-5" /> },
  { label: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5" /> },
];

export default function NavbarModern() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('GRC Services');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  
  // Apply navbar background change on scroll
  useNavbarScroll();
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    // Reset the hover state for desktop menu
    setHoveredCategory('GRC Services');
  }, [location]);
  
  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
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
          
          {/* Desktop Navigation - Modern Design */}
          <nav className="hidden lg:flex items-center">
            <div className="flex space-x-1 bg-background/40 backdrop-blur-sm rounded-full p-1 border border-white/10">
              {/* Services Mega Menu */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                  <Shield className="h-5 w-5 mr-1" />
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden w-[850px]">
                  <div className="flex p-1">
                    {/* Category Tabs */}
                    <div className="w-[220px] border-r border-[hsl(var(--secondary))]/10 p-2">
                      {servicesMenuData.map((category, idx) => (
                        <button 
                          key={idx}
                          onMouseEnter={() => setHoveredCategory(category.category)}
                          className={`w-full text-left px-4 py-3 rounded-md mb-1 transition-all flex items-center gap-2 
                            ${hoveredCategory === category.category 
                              ? 'bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))]' 
                              : 'hover:bg-background/40'}`
                          }
                        >
                          {category.category}
                        </button>
                      ))}
                    </div>
                    
                    {/* Tab Content */}
                    <div className="flex-1 p-3">
                      <AnimatePresence mode="wait">
                        {servicesMenuData.map((category, idx) => (
                          hoveredCategory === category.category && (
                            <motion.div
                              key={category.category}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.2 }}
                              className="grid grid-cols-3 gap-2"
                            >
                              {category.items.map((item, subIdx) => (
                                <Link 
                                  key={subIdx} 
                                  href={item.path}
                                  className="flex items-center gap-2 p-2 rounded-md hover:bg-[hsl(var(--secondary))]/10 transition-all group"
                                >
                                  <span className="p-2 rounded-md bg-background/40 text-[hsl(var(--secondary))] group-hover:bg-[hsl(var(--secondary))]/20">
                                    {item.icon}
                                  </span>
                                  <div>
                                    <p className="font-medium">{item.label}</p>
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
              </div>
              
              {/* Solutions Mega Menu */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                  <Layers className="h-5 w-5 mr-1" />
                  Solutions
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden w-[600px]">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {solutionsMenuData.map((category, idx) => (
                        <div key={idx}>
                          <h4 className="text-[hsl(var(--secondary))] font-semibold mb-3 flex items-center">
                            {category.category}
                          </h4>
                          <ul className="space-y-1">
                            {category.items.map((item, subIdx) => (
                              <li key={subIdx}>
                                <Link 
                                  href={item.path}
                                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-[hsl(var(--secondary))]/10 transition-all"
                                >
                                  {item.icon}
                                  <span>{item.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Industries Menu */}
              <div className="relative group">
                <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                  <Building className="h-5 w-5 mr-1" />
                  Industries
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden w-[500px]">
                  <div className="p-4">
                    <h4 className="text-[hsl(var(--secondary))] font-semibold mb-3">Industries We Serve</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industriesData.map((industry, idx) => (
                        <Link 
                          key={idx} 
                          href={industry.path}
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
                </div>
              </div>
              
              {/* Regular Links */}
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.path}>
                  <button className="px-4 py-2 rounded-full text-white hover:text-[hsl(var(--secondary))] transition font-medium flex items-center gap-1 hover:bg-white/5">
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </button>
                </Link>
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
      
      {/* Mobile Navigation Menu - Modern animated version */}
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
                {/* Services */}
                <div className="border-b border-white/10">
                  <button 
                    className="flex items-center justify-between w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
                    onClick={() => toggleMobileSubmenu('services')}
                  >
                    <span className="flex items-center">
                      <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                        <Shield className="h-5 w-5" />
                      </span>
                      Services
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${openMobileSubmenu === 'services' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openMobileSubmenu === 'services' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-3 space-y-3">
                          {servicesMenuData.map((category, catIdx) => (
                            <div key={catIdx} className="mb-3">
                              <h4 className="text-[hsl(var(--secondary))] font-semibold mb-2 flex items-center">
                                {category.category}
                              </h4>
                              <ul className="space-y-1 pl-2">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link href={item.path}>
                                      <span className="flex items-center py-2 text-muted-foreground hover:text-[hsl(var(--secondary))] transition">
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Solutions */}
                <div className="border-b border-white/10">
                  <button 
                    className="flex items-center justify-between w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
                    onClick={() => toggleMobileSubmenu('solutions')}
                  >
                    <span className="flex items-center">
                      <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                        <Layers className="h-5 w-5" />
                      </span>
                      Solutions
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${openMobileSubmenu === 'solutions' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openMobileSubmenu === 'solutions' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-3 space-y-3">
                          {solutionsMenuData.map((category, catIdx) => (
                            <div key={catIdx} className="mb-3">
                              <h4 className="text-[hsl(var(--secondary))] font-semibold mb-2 flex items-center">
                                {category.category}
                              </h4>
                              <ul className="space-y-1 pl-2">
                                {category.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link href={item.path}>
                                      <span className="flex items-center py-2 text-muted-foreground hover:text-[hsl(var(--secondary))] transition">
                                        <span className="mr-2">{item.icon}</span>
                                        {item.label}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Industries */}
                <div className="border-b border-white/10">
                  <button 
                    className="flex items-center justify-between w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
                    onClick={() => toggleMobileSubmenu('industries')}
                  >
                    <span className="flex items-center">
                      <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                        <Building className="h-5 w-5" />
                      </span>
                      Industries
                    </span>
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${openMobileSubmenu === 'industries' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openMobileSubmenu === 'industries' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pb-3 grid grid-cols-2 gap-2">
                          {industriesData.map((industry, idx) => (
                            <Link 
                              key={idx} 
                              href={industry.path}
                              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-all"
                            >
                              <span className="mr-2 text-[hsl(var(--secondary))]">{industry.icon}</span>
                              <span>{industry.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Regular nav items */}
                {navItems.map((item, idx) => (
                  <div key={idx} className="border-b border-white/10">
                    <Link href={item.path}>
                      <button className="flex items-center w-full p-4 text-lg font-medium hover:bg-white/5 rounded-md transition-all">
                        <span className="bg-[hsl(var(--secondary))]/10 p-2 rounded-md mr-3 text-[hsl(var(--secondary))]">
                          {item.icon}
                        </span>
                        {item.label}
                      </button>
                    </Link>
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
}