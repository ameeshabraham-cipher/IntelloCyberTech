import { Link } from "wouter";
import { Shield, Lock, Code, Server, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden cyber-pattern animated-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Cybersecurity</span> Solutions for the
                <span className="block">UAE Digital Ecosystem</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Comprehensive Governance, Risk, and Compliance solutions tailored for
                organizations in the UAE and Middle East regions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-4">
                    Explore Services
                  </button>
                </Link>
                <Link href="/assessment">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-4">
                    Free Assessment
                  </button>
                </Link>
              </div>
              <div className="mt-8 flex items-center text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                <span>Over 22 years of experience since 2003</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              {/* Placeholder for hero image */}
              <div className="relative w-full max-w-lg aspect-square bg-card/50 rounded-2xl flex items-center justify-center border border-[hsl(var(--secondary))]/20">
                <Shield className="h-24 w-24 text-primary" />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-card/80 rounded-full flex items-center justify-center border border-[hsl(var(--secondary))]/20 animate-pulse-slow">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-card/80 rounded-full flex items-center justify-center border border-[hsl(var(--secondary))]/20 animate-pulse-slow animate-delay-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-card/80 rounded-full flex items-center justify-center border border-[hsl(var(--secondary))]/20 animate-pulse-slow animate-delay-3">
                  <Server className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cybersecurity Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to protect your organization's digital assets, ensure compliance, and mitigate risks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-hover-effect">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">GRC Services</h3>
              <p className="text-muted-foreground mb-4">
                Governance, Risk Management, and Compliance solutions including ISO 27001, SOC 2, GDPR, UAE PDPL, and more.
              </p>
              <Link href="/services/iso27001">
                <button className="text-primary font-medium hover:underline flex items-center">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-hover-effect">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Security Assessment</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive security testing including penetration testing, vulnerability assessment, and security audits.
              </p>
              <Link href="/services/penetration-testing">
                <button className="text-primary font-medium hover:underline flex items-center">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-hover-effect">
              <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">IT Managed Services</h3>
              <p className="text-muted-foreground mb-4">
                End-to-end IT infrastructure management, support, and maintenance services for business continuity.
              </p>
              <Link href="/services/it-amc">
                <button className="text-primary font-medium hover:underline flex items-center">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today for a no-obligation consultation and discover how our cybersecurity solutions can protect your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-4">
                  Contact Us
                </button>
              </Link>
              <Link href="/assessment">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-4">
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
