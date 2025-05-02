import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Target,
  ChevronRight,
  Users,
  Clock,
  TrendingUp,
  BadgeCheck,
  CheckCircle,
  BrainCircuit,
  Boxes,
  Building,
  Layers,
  Settings,
  Cloud,
  Lock,
  Bot
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClientLogosCarousel } from '@/components/ClientLogosCarousel';
import { Badge } from '@/components/ui/badge';

const CompanyProfile = () => {
  useScrollReveal();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'Company Profile | Intello Cyber Technologies';
  }, []);

  // Experience Counter
  const yearsOfExperience = new Date().getFullYear() - 2003;

  // Core Services Categories
  const serviceCategories = [
    {
      title: "STRATEGIC CONSULTING",
      description: "At the core of every secure enterprise is a sound strategy. Our consulting practice helps C-level leaders and boards navigate technology risk, optimize cyber investments, and align security with enterprise-wide goals.",
      icon: <Settings className="h-8 w-8 text-white" />,
      services: [
        "Digital Transformation",
        "Security Strategy",
        "C-Suite Advisory",
        "Board Presentations"
      ],
      bgColor: "bg-gradient-to-br from-black to-gray-800",
      textColor: "text-white",
      accentColor: "from-cyan-500/30"
    },
    {
      title: "IT GOVERNANCE, RISK & COMPLIANCE (IT GRC)",
      description: "Our GRC services enable organizations to take a structured, strategic approach to managing technology risks and meeting regulatory requirements all while staying aligned with business objectives.",
      icon: <Shield className="h-8 w-8 text-white" />,
      services: [
        "ISO 27001",
        "SOC 2",
        "GDPR & Data Privacy",
        "UAE PDPL & Regional Compliance",
        "Policy Development",
        "Internal Audit"
      ],
      bgColor: "bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))/80]",
      textColor: "text-white",
      accentColor: "from-blue-500/30"
    },
    {
      title: "CYBERSECURITY SOLUTIONS",
      description: "We help enterprises build layered, adaptive security frameworks to protect against evolving cyber threats and secure their most critical assets across cloud, endpoint, and hybrid environments.",
      icon: <Layers className="h-8 w-8 text-white" />,
      services: [
        "Cloud Security",
        "Advanced Penetration Testing",
        "Virtual CISO",
        "Threat Hunting",
        "Incident Response Planning",
        "Red Team Exercises"
      ],
      bgColor: "bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--secondary))/80]",
      textColor: "text-white",
      accentColor: "from-yellow-500/30"
    },
    {
      title: "MANAGED IT SERVICES",
      description: "The managed IT services are designed to ensure stability, performance, and availability, giving your organization the technological backbone it needs to grow securely and efficiently. Including cloud and infrastructure consulting services.",
      icon: <Cloud className="h-8 w-8 text-white" />,
      services: [
        "IT AMC",
        "Managed IT Projects",
        "Microsoft Services",
        "Cloud & On-Prem Infrastructure"
      ],
      bgColor: "bg-gradient-to-br from-black to-gray-800",
      textColor: "text-white",
      accentColor: "from-purple-500/30"
    }
  ];

  // Key Pain Points We Solve
  const painPoints = [
    {
      title: "Regulatory Compliance Complexity",
      description: "Navigate the complex maze of regulations with our comprehensive compliance services for global and regional standards.",
      icon: <CheckCircle className="h-6 w-6 text-white" />
    },
    {
      title: "Compliance Gaps & Controls Assessment",
      description: "Identify and remediate compliance gaps and control weaknesses before they impact your certification readiness or regulatory standing.",
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: "Compliance & Governance Expertise Gap",
      description: "Access top-tier compliance and governance expertise without the cost of a full-time compliance officer or dedicated GRC team.",
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: "Manual Compliance Processes",
      description: "Eliminate tedious manual compliance work with AI-powered automation that reduces costs, errors, and resource requirements.",
      icon: <Bot className="h-6 w-6 text-white" />
    },
    {
      title: "GCC Focused Compliance",
      description: "Specialized compliance solutions for Gulf Cooperation Council (GCC) regulatory requirements, helping businesses navigate regional standards.",
      icon: <Building className="h-6 w-6 text-white" />
    },
    {
      title: "Fragmented Compliance & Governance",
      description: "Replace siloed compliance tools and disjointed governance processes with our integrated GRC framework and unified risk management approach.",
      icon: <Boxes className="h-6 w-6 text-white" />
    }
  ];

  // Industry Verticals
  const industries = [
    "Banking & Financial Services",
    "Healthcare",
    "Government",
    "E-commerce",
    "Small & Medium Enterprises",
    "Logistics",
    "Money Exchanges",
    "Insurance Companies",
    "Architectural Firms",
    "Technology Companies"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
                <span className="text-[hsl(var(--secondary))] font-medium">Company Profile</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Intello</span> Cyber Technologies
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                A premier provider of Cybersecurity, GRC, Audit, and AI-powered Compliance Automation solutions, established in 2003 with a mission to secure digital assets and ensure regulatory compliance for businesses across the UAE and beyond.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm p-3 rounded-lg">
                  <Clock className="text-[hsl(var(--secondary))] h-6 w-6" />
                  <div>
                    <span className="block text-2xl font-bold">{yearsOfExperience}+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm p-3 rounded-lg">
                  <Building className="text-[hsl(var(--secondary))] h-6 w-6" />
                  <div>
                    <span className="block text-2xl font-bold">5+</span>
                    <span className="text-sm text-muted-foreground">Countries</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 bg-card/30 backdrop-blur-sm p-3 rounded-lg">
                  <Users className="text-[hsl(var(--secondary))] h-6 w-6" />
                  <div>
                    <span className="block text-2xl font-bold">50+</span>
                    <span className="text-sm text-muted-foreground">Security Experts</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center">
                    <span>Contact Us</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link href="/services">
                  <Button variant="outline" className="font-medium py-3 px-8 rounded-full border-[hsl(var(--secondary))]/30 hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300 flex items-center">
                    <span>Explore Services</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="reveal" data-delay="200">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
                
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img 
                      src="/images/intello-cyber-command-center.jpg" 
                      alt="Intello Cyber Command Center" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/placeholder-cyber.jpg';
                      }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="font-montserrat font-semibold mb-1">World-Class Security</h3>
                      <p className="text-muted-foreground text-sm">Advanced threat protection with AI-enabled solutions</p>
                    </div>
                    
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="font-montserrat font-semibold mb-1">Compliance Expertise</h3>
                      <p className="text-muted-foreground text-sm">Deep knowledge of global and regional regulations</p>
                    </div>
                    
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="font-montserrat font-semibold mb-1">UAE Focus</h3>
                      <p className="text-muted-foreground text-sm">Specialized in UAE and GCC compliance requirements</p>
                    </div>
                    
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h3 className="font-montserrat font-semibold mb-1">Audit Excellence</h3>
                      <p className="text-muted-foreground text-sm">Thorough assessment and continuous improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Core Services Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-t border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[hsl(var(--secondary))] blur-3xl"></div>
          <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-[hsl(var(--primary))] blur-3xl"></div>
          <div className="absolute right-1/4 bottom-10 w-48 h-48 rounded-full bg-[hsl(var(--secondary))] blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-sm font-medium mb-4"
            >
              Our Core Services
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold mb-4 relative inline-block"
            >
              <span className="relative z-10">Pillars of Cyber Excellence</span>
              <span className="absolute left-0 bottom-0 w-full h-3 bg-[hsl(var(--secondary))]/20 rounded -z-10 transform -rotate-1"></span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto text-base"
            >
              Our four strategic domains of expertise that form the foundation of Intello's holistic cybersecurity approach
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true }}
                className={`${category.bgColor} ${category.textColor} rounded-xl overflow-hidden shadow-lg h-full relative`}
              >
                {/* Top accent gradient */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${category.accentColor} to-transparent`}></div>
                
                {/* Content container */}
                <div className="p-6 flex flex-col h-full">
                  {/* Glowing icon container */}
                  <div className="bg-[rgba(255,255,255,0.1)] p-3 rounded-full w-fit mb-5 relative">
                    {category.icon}
                    <div className="absolute inset-0 rounded-full bg-white/10 blur-sm -z-10"></div>
                  </div>
                  
                  {/* Title with custom underline */}
                  <h3 className="font-bold text-lg mb-4 pb-2 border-b border-white/10">{category.title}</h3>
                  
                  {/* Description */}
                  <p className="text-sm text-current/90 mb-5">
                    {category.description}
                  </p>
                  
                  {/* Services list */}
                  <ul className="space-y-2 mt-auto mb-4">
                    {category.services.map((service, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Vision Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1 reveal">
              <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
                <span className="text-[hsl(var(--secondary))] font-medium">Our AI Vision</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Shaping the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">AI-Powered</span> Security
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                At Intello, we believe AI is the next frontier in cybersecurity and compliance. Our AI-driven approach transforms 
                traditional security and compliance into proactive, intelligent systems that adapt to emerging threats while reducing manual effort.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                    <BrainCircuit className="text-[hsl(var(--secondary))] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">AI Compliance Automation</h3>
                    <p className="text-muted-foreground">Automating evidence collection, control monitoring, and compliance reporting with our AI-powered platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                    <Shield className="text-[hsl(var(--secondary))] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">AI-Enhanced Threat Detection</h3>
                    <p className="text-muted-foreground">Using machine learning algorithms to identify unusual patterns and potential security breaches before they cause damage.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                    <Target className="text-[hsl(var(--secondary))] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-2">Predictive Risk Management</h3>
                    <p className="text-muted-foreground">Leveraging AI to forecast potential vulnerabilities and recommend proactive measures to strengthen your security posture.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/solutions/ai-compliance">
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                  Explore AI Solutions
                </Button>
              </Link>
            </div>
            
            {/* Visualization */}
            <div className="order-1 lg:order-2 reveal" data-delay="300">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
                
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                  {/* Interactive AI Visualization */}
                  <div className="w-full h-[300px] md:h-[400px] bg-card/30 rounded-lg flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* AI Compliance Visualization SVG */}
                      <rect x="50" y="100" width="500" height="200" rx="20" fill="#0A1024" stroke="#00E5FF" strokeOpacity="0.3" strokeWidth="1"/>
                      
                      {/* Central Brain Node */}
                      <circle cx="300" cy="200" r="60" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
                      <path d="M300 160 L300 240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
                      <path d="M260 200 L340 200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
                      
                      {/* AI Core */}
                      <circle cx="300" cy="200" r="25" fill="#00B2A9" fillOpacity="0.3"/>
                      <circle cx="300" cy="200" r="15" fill="#00E5FF" fillOpacity="0.5"/>
                      
                      {/* Connected Nodes */}
                      <circle cx="150" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                      <text x="150" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">GDPR</text>
                      
                      <circle cx="150" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                      <text x="150" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">SOC 2</text>
                      
                      <circle cx="450" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                      <text x="450" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">ISO</text>
                      
                      <circle cx="450" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                      <text x="450" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
                      
                      {/* Connecting Lines */}
                      <path d="M175 150 L255 175" stroke="#00B2A9" strokeWidth="1.5"/>
                      <path d="M175 250 L255 225" stroke="#00B2A9" strokeWidth="1.5"/>
                      <path d="M425 150 L345 175" stroke="#00B2A9" strokeWidth="1.5"/>
                      <path d="M425 250 L345 225" stroke="#00B2A9" strokeWidth="1.5"/>
                      
                      {/* Animated Data Pulses */}
                      <circle cx="215" cy="162.5" r="3" fill="#00E5FF">
                        <animate attributeName="cx" from="175" to="255" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="150" to="175" dur="3s" repeatCount="indefinite" />
                      </circle>
                      
                      <circle cx="215" cy="237.5" r="3" fill="#00E5FF">
                        <animate attributeName="cx" from="175" to="255" dur="4s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="250" to="225" dur="4s" repeatCount="indefinite" />
                      </circle>
                      
                      <circle cx="385" cy="162.5" r="3" fill="#00E5FF">
                        <animate attributeName="cx" from="425" to="345" dur="3.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="150" to="175" dur="3.5s" repeatCount="indefinite" />
                      </circle>
                      
                      <circle cx="385" cy="237.5" r="3" fill="#00E5FF">
                        <animate attributeName="cx" from="425" to="345" dur="4.5s" repeatCount="indefinite" />
                        <animate attributeName="cy" from="250" to="225" dur="4.5s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>
                  
                  {/* Floating Information Elements */}
                  <div className="absolute -top-5 right-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mr-2"></div>
                      <p className="text-xs">Real-time Analysis</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-5 left-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mr-2"></div>
                      <p className="text-xs">Automated Controls</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pain Points Section */}
      <section className="py-20 bg-card relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Key Business Challenges</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Major <span className="text-[hsl(var(--secondary))]">Pain Points</span> We Solve
            </h2>
            <p className="text-muted-foreground text-lg">
              Addressing the most critical cybersecurity and compliance challenges faced by modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal h-full"
                data-delay={index * 100}
              >
                <div className="bg-[hsl(var(--secondary))] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-4">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Our Clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Industry Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We're proud to serve a diverse portfolio of clients across multiple industries and sectors
            </p>
          </div>
          
          <div className="reveal" data-delay="200">
            <ClientLogosCarousel />
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 reveal" data-delay="400">
            {industries.map((industry, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="justify-center py-2 bg-card/30 border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-background to-card/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[hsl(var(--secondary))]/10 rounded-full blur-3xl"></div>
          <div className="absolute left-0 top-0 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Start Your Security Journey</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-6">
              Ready to transform your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">security posture</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Connect with our team of experts to discuss your unique challenges and discover how Intello can help you achieve your security and compliance goals.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-6 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center text-lg">
                  <span>Contact Us Today</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/assessment">
                <Button variant="outline" className="font-medium py-6 px-8 rounded-full border-[hsl(var(--secondary))]/30 hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300 flex items-center text-lg">
                  <span>Request an Assessment</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfile;
