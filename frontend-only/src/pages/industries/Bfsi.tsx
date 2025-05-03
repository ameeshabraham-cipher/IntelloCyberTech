import React from 'react';
import { Link } from 'wouter';
import { BarChart, Shield, Lock, CheckCircle, FileText } from 'lucide-react';

export default function BfsiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Banking & Finance <span className="text-primary">Security Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized cybersecurity and compliance solutions for the banking, financial services, and insurance sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <BarChart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">BFSI Industry Challenges</h2>
            <p className="text-lg text-muted-foreground">
              The banking and financial services industry faces unique security challenges, from protecting sensitive customer data to complying with stringent regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Security Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Advanced persistent threats targeting financial data</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Sophisticated phishing attacks against customers and employees</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Digital transformation security implications</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Third-party vendor risk management</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <Lock className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">Protecting multiple digital banking channels</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Compliance Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">UAE CBUAE and SCA regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">PCI DSS for payment card processing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">GDPR and local privacy regulations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">SAMA frameworks for financial institutions</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 p-1 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">SWIFT security standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our BFSI Solutions</h2>
            <p className="text-muted-foreground">
              Comprehensive security and compliance solutions tailored specifically for banking and financial institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Compliance</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Comprehensive compliance solutions for financial regulations, including CBUAE, SCA, PCI DSS, and privacy regulations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Regulatory gap assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Compliance implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Ongoing compliance management</span>
                </li>
              </ul>
              <Link href="/services/pci-dss" className="text-primary font-medium flex items-center mt-auto">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Banking Security Testing</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Specialized security testing for banking applications, infrastructure, and digital channels to identify vulnerabilities.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Banking application penetration testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">ATM and payment system security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Mobile banking security assessment</span>
                </li>
              </ul>
              <Link href="/services/penetration-testing" className="text-primary font-medium flex items-center mt-auto">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Fraud Prevention</h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                Advanced security solutions to detect and prevent financial fraud across digital banking channels.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Fraud detection systems implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Transaction monitoring solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span className="text-sm">Anti-money laundering security controls</span>
                </li>
              </ul>
              <Link href="/services/cloud-security" className="text-primary font-medium flex items-center mt-auto">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Learn how we've helped banking and financial institutions strengthen their security posture and achieve compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">UAE Regional Bank</h3>
              <p className="text-muted-foreground mb-4">
                Implemented comprehensive PCI DSS compliance program and security controls for a major UAE regional bank, reducing risk exposure by 78%.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">PCI DSS Compliance</span>
                </div>
                <Link href="/contact" className="text-primary text-sm font-medium">
                  Request Case Study
                </Link>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3">Investment Firm</h3>
              <p className="text-muted-foreground mb-4">
                Conducted advanced penetration testing for a leading investment firm, identifying critical vulnerabilities in their trading platform before they could be exploited.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Security Testing</span>
                </div>
                <Link href="/contact" className="text-primary text-sm font-medium">
                  Request Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Financial Institution
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to learn how our specialized security and compliance solutions can help protect your banking or financial institution.
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
