import React from 'react';
import { Link } from 'wouter';
import { Shield, CheckCircle, Clock, FileCheck } from 'lucide-react';

export default function Iso27001Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ISO 27001 <span className="text-primary">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive support for implementing and certifying to the international standard for information security management.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">ISO 27001 Overview</h2>
            <p className="text-lg text-muted-foreground">
              ISO/IEC 27001 is the international standard for information security management systems (ISMS), providing a systematic approach to managing sensitive company information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Protect Critical Assets</h3>
              <p className="text-muted-foreground">
                Implement robust security controls to protect your sensitive information and critical business assets from threats.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Demonstrate Compliance</h3>
              <p className="text-muted-foreground">
                Prove to clients, partners, and regulators that you have implemented internationally recognized security best practices.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Streamline Operations</h3>
              <p className="text-muted-foreground">
                Improve operational efficiency by implementing structured information security processes and controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our ISO 27001 Services</h2>
            <p className="text-muted-foreground">
              We provide end-to-end ISO 27001 implementation and certification support tailored to your organization's needs.
            </p>
          </div>
          
          <div className="space-y-12 mt-12">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary/5 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Gap Assessment</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We evaluate your current security posture against ISO 27001 requirements to identify gaps and opportunities for improvement.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Comprehensive evaluation of existing security controls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Identification of gaps against ISO 27001 requirements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Detailed report with prioritized recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary/5 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Implementation</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We guide you through the full implementation of your Information Security Management System (ISMS) aligned with ISO 27001.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Development of security policies and procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Implementation of security controls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Staff training and awareness programs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Risk assessment and treatment planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary/5 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-3">
                      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Certification Support</h3>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We prepare your organization for the certification audit and provide support throughout the certification process.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Pre-certification internal audits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Management review preparation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Certification audit coordination</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Nonconformity remediation support</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
              Ready to Achieve ISO 27001 Certification?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to learn how we can help you implement a robust information security management system and achieve ISO 27001 certification.
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
