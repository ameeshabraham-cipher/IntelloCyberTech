import React from 'react';
import { Link } from 'wouter';
import { Shield, Lock, Database, AlertTriangle, BarChart, Server, Cpu, Layers } from 'lucide-react';

export default function Solutions() {
  // Solution categories
  const solutionCategories = [
    {
      id: 'grc-solutions',
      title: 'GRC Solutions',
      icon: <Shield className="h-6 w-6 text-primary" />,
      description: 'Streamline your governance, risk, and compliance processes with our innovative solutions.',
      solutions: [
        {
          id: 'grc-automation',
          title: 'GRC Automation',
          description: 'Automated tools and platforms to streamline compliance processes, reduce manual effort, and improve oversight.',
          features: ['Centralized dashboard', 'Automated compliance tasks', 'Real-time monitoring', 'Custom reporting'],
          path: '/solutions/grc-automation',
        },
        {
          id: 'ai-compliance',
          title: 'AI-Powered Compliance',
          description: 'Advanced artificial intelligence solutions to automate compliance monitoring, documentation, and reporting.',
          features: ['Machine learning algorithms', 'Pattern recognition', 'Predictive analytics', 'Automated documentation'],
          path: '/solutions/ai-compliance',
        },
        {
          id: 'risk-management',
          title: 'Risk Management',
          description: 'Comprehensive tools for identifying, assessing, and mitigating risks across your organization.',
          features: ['Risk assessment framework', 'Mitigation tracking', 'Risk scoring', 'Executive reporting'],
          path: '/solutions/risk-management',
        },
      ],
    },
    {
      id: 'security-solutions',
      title: 'Security Solutions',
      icon: <Lock className="h-6 w-6 text-primary" />,
      description: 'Protect your organization with our comprehensive security technologies and platforms.',
      solutions: [
        {
          id: 'vulnerability-management',
          title: 'Vulnerability Management',
          description: 'End-to-end vulnerability management platforms to identify, prioritize, and remediate security weaknesses.',
          features: ['Continuous scanning', 'Risk-based prioritization', 'Remediation tracking', 'Integration with DevSecOps'],
          path: '/solutions/vulnerability-management',
        },
        {
          id: 'siem',
          title: 'SIEM Solutions',
          description: 'Security Information and Event Management solutions for real-time monitoring and threat detection.',
          features: ['Log collection and analysis', 'Real-time alerting', 'Threat intelligence integration', 'Compliance reporting'],
          path: '/solutions/siem',
        },
        {
          id: 'edr',
          title: 'EDR Solutions',
          description: 'Endpoint Detection and Response solutions to protect endpoints and respond to threats.',
          features: ['Behavioral monitoring', 'Threat hunting', 'Automated response', 'Forensic analysis'],
          path: '/solutions/edr',
        },
        {
          id: 'dlp',
          title: 'DLP Solutions',
          description: 'Data Loss Prevention solutions to secure sensitive data and prevent unauthorized access or exfiltration.',
          features: ['Content inspection', 'Policy enforcement', 'Endpoint monitoring', 'Data classification'],
          path: '/solutions/dlp',
        },
      ],
    },
    {
      id: 'specialized-solutions',
      title: 'Specialized Solutions',
      icon: <Layers className="h-6 w-6 text-primary" />,
      description: 'Tailored solutions for specific industry needs and security challenges.',
      solutions: [
        {
          id: 'email-security',
          title: 'Email Security',
          description: 'Advanced email protection against phishing, spam, malware, and other email-based threats.',
          features: ['Anti-phishing', 'Malware detection', 'Data encryption', 'Email archiving'],
          path: '/solutions/email-security',
        },
        {
          id: 'cybersecurity-frameworks',
          title: 'Cybersecurity Frameworks',
          description: 'Implementation of industry-standard frameworks tailored to your organization\'s needs.',
          features: ['NIST CSF', 'ISO 27001', 'CIS Controls', 'Custom frameworks'],
          path: '/solutions/cybersecurity-frameworks',
        },
      ],
    },
  ];

  const industrySpecificSolutions = [
    {
      id: 'bfsi',
      title: 'Banking & Finance',
      icon: <BarChart />,
      path: '/industries/bfsi',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: <AlertTriangle />,
      path: '/industries/healthcare',
    },
    {
      id: 'government',
      title: 'Government',
      icon: <Shield />,
      path: '/industries/government',
    },
    {
      id: 'tech',
      title: 'Technology',
      icon: <Cpu />,
      path: '/industries/technology-companies',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      icon: <Database />,
      path: '/industries/ecommerce',
    },
    {
      id: 'sme',
      title: 'SMEs',
      icon: <Server />,
      path: '/industries/sme',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Innovative cybersecurity and compliance technologies to address your organization's most pressing security challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          {solutionCategories.map((category) => (
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
                {category.solutions.map((solution) => (
                  <div key={solution.id} className="bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                      <p className="text-muted-foreground mb-4">{solution.description}</p>
                      
                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-auto border-t border-border p-6">
                      <Link href={solution.path}>
                        <a className="text-primary font-medium flex items-center">
                          Learn More
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-muted-foreground">
              Tailored security and compliance solutions designed for the unique challenges of your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industrySpecificSolutions.map((industry) => (
              <Link key={industry.id} href={industry.path}>
                <a className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {React.cloneElement(industry.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <h3 className="font-semibold">{industry.title}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find the Right Solution for Your Organization
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Schedule a consultation with our experts to discover which solutions best fit your security and compliance needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Us
                </button>
              </Link>
              <a
                href="https://calendly.com/ameesh-intellome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
