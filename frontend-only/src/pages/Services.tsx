import { Link } from 'wouter';
import { Shield, File, Server, CheckCircle, Search, Lock, Database, Code } from 'lucide-react';

export default function Services() {
  // Service categories
  const serviceCategories = [
    {
      id: 'grc',
      title: 'Governance, Risk & Compliance',
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: 'Comprehensive GRC solutions to help organizations meet regulatory requirements and industry standards.',
      services: [
        {
          id: 'iso27001',
          title: 'ISO 27001 Compliance',
          description: 'Implementation and certification assistance for the international standard for information security management.',
          path: '/services/iso27001',
        },
        {
          id: 'soc2',
          title: 'SOC 2 Compliance',
          description: 'Guidance and support for achieving and maintaining SOC 2 attestation.',
          path: '/services/soc2',
        },
        {
          id: 'uae-pdpl',
          title: 'UAE PDPL Compliance',
          description: 'Assistance with meeting the requirements of the UAE Personal Data Protection Law.',
          path: '/services/uae-pdpl',
        },
        {
          id: 'gdpr',
          title: 'GDPR Compliance',
          description: 'Services to help organizations comply with the European General Data Protection Regulation.',
          path: '/services/gdpr',
        },
        {
          id: 'pci-dss',
          title: 'PCI DSS Compliance',
          description: 'Guidance for merchants and service providers to secure payment card data.',
          path: '/services/pci-dss',
        },
      ],
    },
    {
      id: 'security-testing',
      title: 'Security Testing & Assessment',
      icon: <Search className="h-6 w-6 text-primary" />,
      description: 'Comprehensive security testing services to identify vulnerabilities and weaknesses in your systems.',
      services: [
        {
          id: 'penetration-testing',
          title: 'Penetration Testing',
          description: 'Simulated cyber attacks to identify and exploit vulnerabilities in your systems.',
          path: '/services/penetration-testing',
        },
        {
          id: 'web-penetration-testing',
          title: 'Web Application Testing',
          description: 'In-depth testing of web applications to identify security flaws and vulnerabilities.',
          path: '/services/web-penetration-testing',
        },
        {
          id: 'network-pentesting',
          title: 'Network Security Testing',
          description: 'Assessment of network infrastructure to identify potential security weaknesses.',
          path: '/services/network-pentesting',
        },
        {
          id: 'red-team-exercises',
          title: 'Red Team Exercises',
          description: 'Advanced adversary simulations to test organization-wide security controls and response capabilities.',
          path: '/services/red-team-exercises',
        },
        {
          id: 'vapt',
          title: 'Vulnerability Assessment',
          description: 'Systematic review of security weaknesses in your information systems.',
          path: '/services/vapt',
        },
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      icon: <Lock className="h-6 w-6 text-primary" />,
      description: 'Specialized security solutions to protect your organization from evolving cyber threats.',
      services: [
        {
          id: 'cloud-security',
          title: 'Cloud Security',
          description: 'Security services for cloud environments, including AWS, Azure, and Google Cloud.',
          path: '/services/cloud-security',
        },
        {
          id: 'vciso',
          title: 'Virtual CISO Services',
          description: 'Expert security leadership and guidance on a fractional or project basis.',
          path: '/services/vciso',
        },
        {
          id: 'data-privacy',
          title: 'Data Privacy Services',
          description: 'Solutions to protect sensitive data and ensure privacy compliance.',
          path: '/services/data-privacy',
        },
        {
          id: 'threat-hunting',
          title: 'Threat Hunting',
          description: 'Proactive search for threats that may have bypassed existing security controls.',
          path: '/services/threat-hunting',
        },
        {
          id: 'incident-response-planning',
          title: 'Incident Response Planning',
          description: 'Development and testing of incident response plans and procedures.',
          path: '/services/incident-response-planning',
        },
      ],
    },
    {
      id: 'it-services',
      title: 'IT Managed Services',
      icon: <Server className="h-6 w-6 text-primary" />,
      description: 'Comprehensive IT infrastructure management, support, and maintenance services.',
      services: [
        {
          id: 'it-amc',
          title: 'IT Annual Maintenance',
          description: 'Regular maintenance and support for your IT infrastructure and systems.',
          path: '/services/it-amc',
        },
        {
          id: 'managed-it-project',
          title: 'Managed IT Projects',
          description: 'End-to-end management of IT infrastructure and security projects.',
          path: '/services/managed-it-project',
        },
        {
          id: 'microsoft-services',
          title: 'Microsoft Solutions',
          description: 'Implementation and support for Microsoft technologies and platforms.',
          path: '/services/microsoft-services',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive cybersecurity and IT solutions tailored for organizations in the UAE and Middle East region.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category) => (
            <div key={category.id} className="mb-20 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>
              
              <p className="text-muted-foreground mb-10 max-w-4xl">
                {category.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <Link key={service.id} href={service.path}>
                    <a className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                      <div className="text-primary font-medium flex items-center mt-auto">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Intello</h2>
            <p className="text-muted-foreground">
              We combine technical expertise with deep industry knowledge to deliver solutions that address the unique challenges faced by organizations in the UAE and Middle East region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <File className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Expertise</h3>
              <p className="text-muted-foreground">
                Our team holds advanced certifications in cybersecurity, compliance, and IT management.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
              <p className="text-muted-foreground">
                Specialized expertise in UAE and GCC regulatory requirements and compliance frameworks.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Approach</h3>
              <p className="text-muted-foreground">
                Customized solutions designed to meet the specific needs and challenges of your organization.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                Track record of successfully delivering projects for organizations across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to discuss your cybersecurity and compliance needs. Our experts are ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Us
                </button>
              </Link>
              <Link href="/assessment">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Free Security Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
