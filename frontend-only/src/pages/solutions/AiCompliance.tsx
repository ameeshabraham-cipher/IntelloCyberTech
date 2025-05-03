import React from 'react';
import { Link } from 'wouter';
import { Bot, CheckCircle, Database, Shield } from 'lucide-react';

export default function AiCompliancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="text-primary">Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Streamline your compliance processes with advanced artificial intelligence solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Robot className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Solution Overview</h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered compliance solutions automate compliance monitoring, documentation, and reporting, significantly reducing manual effort and increasing accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Compliance</h3>
              <p className="text-muted-foreground">
                Leverage machine learning algorithms to automate compliance tasks, monitoring, and reporting, reducing manual effort by up to 80%.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Intelligent Documentation</h3>
              <p className="text-muted-foreground">
                AI-powered document analysis and generation to streamline policy creation, evidence collection, and compliance documentation.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                Identify potential compliance issues before they become problems using advanced predictive analytics and pattern recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground">
              Our AI compliance solutions incorporate cutting-edge technologies to transform your compliance processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Machine Learning Algorithms</h3>
                <p className="text-muted-foreground">Advanced algorithms that continuously improve based on your compliance activities and data patterns.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Natural Language Processing</h3>
                <p className="text-muted-foreground">Extract meaningful insights from policies, regulations, and compliance documentation.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">Continuous monitoring of compliance status across your organization with instant alerts for potential issues.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Automated Evidence Collection</h3>
                <p className="text-muted-foreground">Automatically gather, categorize, and store compliance evidence, eliminating manual collection processes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Intelligent Reporting</h3>
                <p className="text-muted-foreground">Generate comprehensive compliance reports with actionable insights and recommendations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Integration Capabilities</h3>
                <p className="text-muted-foreground">Seamlessly connects with your existing systems, including GRC platforms, SIEM solutions, and business applications.</p>
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
              Ready to Transform Your Compliance Processes?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to learn how our AI-powered compliance solutions can help streamline your compliance operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Us
                </button>
              </Link>
              <Link href="/assessment">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Free Assessment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
