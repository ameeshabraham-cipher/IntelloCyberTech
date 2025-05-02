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
    category: 'IT Managed Services',
    items: [
      { label: 'Cloud/On-Prem Infrastructure Design', path: '/services/cloud-onprem-infrastructure', icon: <Cloud className="h-4 w-4" /> },
      { label: 'IT Annual Maintenance Contract', path: '/services/it-amc', icon: <Laptop className="h-4 w-4" /> },
      { label: 'Managed IT Project Management', path: '/services/managed-it-project', icon: <BarChart2 className="h-4 w-4" /> },
      { label: 'Microsoft Services', path: '/services/microsoft-services', icon: <Globe className="h-4 w-4" /> },
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
      { label: 'vCISO Services', path: '/services/vciso', icon: <UserCheck className="h-4 w-4" /> },
      { label: 'Privacy Compliance', path: '/services/privacy-compliance', icon: <Lock className="h-4 w-4" /> },
      { label: 'Threat Hunting', path: '/services/threat-hunting', icon: <Search className="h-4 w-4" /> },
      { label: 'Incident Response Planning', path: '/services/incident-response-planning', icon: <Shield className="h-4 w-4" /> },
      { label: 'Data Privacy Consultation', path: '/services/data-privacy', icon: <Lock className="h-4 w-4" /> },
      { label: 'Email Security', path: '/services/email-security', icon: <Mail className="h-4 w-4" /> },
    ]
  }
];

// Mega menu data for solutions
const solutionsMenuData = [
  {
    category: 'AI-Powered Solutions',
    items: [
      { label: 'AI-Driven Compliance Tools', path: '/services/ai-compliance', icon: <Bot className="h-4 w-4" /> },
      { label: 'GRC Automation Platforms', path: '/services/grc-automation', icon: <BarChart2 className="h-4 w-4" /> },
      { label: 'Risk Management Tools', path: '/services/risk-management', icon: <BarChart2 className="h-4 w-4" /> },
      { label: 'Vulnerability Management', path: '/services/vulnerability-management', icon: <Search className="h-4 w-4" /> },
      { label: 'Cybersecurity Frameworks', path: '/services/cybersecurity-frameworks', icon: <Layers className="h-4 w-4" /> },
    ]
  },
  {
    category: 'Security Technology Solutions',
    items: [
      { label: 'Email Security Solutions', path: '/services/email-security', icon: <Mail className="h-4 w-4" /> },
      { label: 'Endpoint Detection & Response', path: '/services/edr', icon: <Laptop className="h-4 w-4" /> },
      { label: 'SIEM Solutions', path: '/services/siem', icon: <Layers className="h-4 w-4" /> },
      { label: 'Data Loss Prevention', path: '/services/dlp', icon: <Shield className="h-4 w-4" /> },
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
  { label: 'Company Profile', path: '/company-profile', icon: <Briefcase className="h-5 w-5" /> },
  { label: 'Insights', path: '/insights', icon: <BookOpen className="h-5 w-5" /> },
  { label: 'Contact', path: '/contact', icon: <Mail className="h-5 w-5" /> },
];

export default function NavbarModern() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState('GRC Services');
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{label: string; path: string; icon: React.ReactNode; category?: string}>>([]);
  const hoverTimeoutRef = useRef<number | null>(null);
  
  // Apply navbar background change on scroll
  useNavbarScroll();
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMobileSubmenu(null);
    setClickedCategory(null);
    // Reset the hover state for desktop menu
    setHoveredCategory('GRC Services');
  }, [location]);
  
  // Handle hover with a delay to prevent accidental switching
  const handleCategoryHover = (category: string) => {
    if (clickedCategory) return; // Don't change if a category is clicked/locked
    
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    
    // Set a new timeout for 200ms
    hoverTimeoutRef.current = window.setTimeout(() => {
      setHoveredCategory(category);
    }, 200);
  };
  
  // Handle click to "lock" a category
  const handleCategoryClick = (category: string) => {
    setClickedCategory(clickedCategory === category ? null : category);
    setHoveredCategory(category);
  };
  
  // Add event listener to close the locked category when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (clickedCategory && !(event.target as Element).closest('.service-menu-dropdown')) {
        setClickedCategory(null);
      }
    }
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [clickedCategory]);
  
  const toggleMobileSubmenu = (menu: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
  };

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    const searchTerms = query.toLowerCase().trim();
    
    // Search through all service categories and items
    const serviceResults = servicesMenuData.flatMap(category => 
      category.items
        .filter(item => 
          item.label.toLowerCase().includes(searchTerms) ||
          category.category.toLowerCase().includes(searchTerms)
        )
        .map(item => ({ ...item, category: category.category }))
    );
    
    // Search through solutions
    const solutionResults = solutionsMenuData.flatMap(category => 
      category.items
        .filter(item => 
          item.label.toLowerCase().includes(searchTerms) ||
          category.category.toLowerCase().includes(searchTerms)
        )
        .map(item => ({ ...item, category: category.category }))
    );
    
    // Search through industries
    const industryResults = industriesData
      .filter(item => item.label.toLowerCase().includes(searchTerms))
      .map(item => ({ ...item, category: 'Industries' }));
    
    // Combine all results and limit to top 10
    const allResults = [...serviceResults, ...solutionResults, ...industryResults].slice(0, 10);
    setSearchResults(allResults);
  };
  
  return (
    <header id="navbar" className="fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
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
                
                <div 
                  className={`service-menu-dropdown absolute left-0 top-full mt-2 ${clickedCategory ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'} transition-all duration-200 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden w-[850px]`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex p-1">
                    {/* Usage hint - only show initially */}
                    {!clickedCategory && (
                      <div className="absolute right-3 top-3 bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-xs px-3 py-1.5 rounded-full animate-pulse">
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                          </svg>
                          Click a category to lock it
                        </span>
                      </div>
                    )}
                    {/* Category Tabs */}
                    <div className="w-[220px] border-r border-[hsl(var(--secondary))]/10 p-2">
                      {servicesMenuData.map((category, idx) => (
                        <button 
                          key={idx}
                          onMouseEnter={() => handleCategoryHover(category.category)}
                          onClick={() => handleCategoryClick(category.category)}
                          className={`w-full text-left px-4 py-3 rounded-md mb-1 transition-all flex items-center gap-2 
                            ${hoveredCategory === category.category 
                              ? 'bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))]' 
                              : 'hover:bg-background/40'}
                            ${clickedCategory === category.category 
                              ? 'ring-2 ring-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/15' 
                              : ''}`
                          }
                        >
                          {category.category}
                          {clickedCategory === category.category && (
                            <span className="ml-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 11 12 14 22 4"></polyline>
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                              </svg>
                            </span>
                          )}
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
          
{/* Removed Assessment Button */}
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2.5 rounded-md hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]/50" 
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
            className="lg:hidden fixed inset-0 top-[calc(5rem+_0.5rem)] bg-background/95 backdrop-blur-md z-40 overflow-y-auto pb-20"
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
              {/* Search for mobile */}
              <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Search services..."
                  aria-label="Search services"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full rounded-lg bg-card py-3 pl-10 pr-4 border border-white/10 focus:border-[hsl(var(--secondary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))]/20"
                />
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl overflow-hidden z-50">
                    <div className="p-2">
                      <h3 className="text-sm font-medium text-[hsl(var(--secondary))] p-2 border-b border-[hsl(var(--secondary))]/10">Search Results</h3>
                      <ul className="max-h-[50vh] overflow-y-auto">
                        {searchResults.map((result, idx) => (
                          <li key={idx}>
                            <Link 
                              href={result.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setSearchQuery('');
                                setSearchResults([]);
                              }}
                              className="flex items-center gap-2 p-3 hover:bg-[hsl(var(--secondary))]/10 transition-all"
                            >
                              <span className="p-1.5 rounded-md bg-background/60 text-[hsl(var(--secondary))]/80">
                                {result.icon}
                              </span>
                              <div className="flex-1">
                                <p className="font-medium">{result.label}</p>
                                {result.category && <p className="text-xs text-muted-foreground">{result.category}</p>}
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {searchQuery && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur-md border border-[hsl(var(--secondary))]/20 rounded-lg shadow-xl p-4 text-center">
                    <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
              
              {/* Main mobile menu */}
              <nav className="space-y-1">
                {/* Services */}
                <div className="border-b border-white/10">
                  <button 
                    className="flex items-center justify-between w-full p-4 sm:p-5 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
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
                    className="flex items-center justify-between w-full p-4 sm:p-5 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
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
                    className="flex items-center justify-between w-full p-4 sm:p-5 text-lg font-medium hover:bg-white/5 rounded-md transition-all"
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
                        <div className="pl-12 pb-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {industriesData.map((industry, idx) => (
                            <Link 
                              key={idx} 
                              href={industry.path}
                              className="flex items-center p-3 sm:p-4 rounded-md hover:bg-white/5 transition-all text-base sm:text-lg"
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
                      <button className="flex items-center w-full p-4 sm:p-5 text-lg font-medium hover:bg-white/5 rounded-md transition-all">
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
              <div className="mt-8 px-2">
                <Link href="/assessment">
                  <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-medium py-4 rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 text-base sm:text-lg">
                    Get Free Security Assessment
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