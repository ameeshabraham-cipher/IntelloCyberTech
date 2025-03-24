import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  useScrollReveal();

  return (
    <section className="pt-32 pb-20 relative overflow-hidden cyber-grid-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute w-full h-full" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Cybersecurity & Compliance Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight mb-6">
              Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Future-Proof</span> Security Solutions
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Intello Cyber Technologies delivers cutting-edge GRC, Audit, and AI-Powered Compliance Automation 
              services tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/assessment">
                <Button
                  className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center"
                >
                  <span>Get a Free Assessment</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  variant="outline"
                  className="bg-transparent border border-[hsl(var(--secondary))]/30 text-white font-medium py-3 px-8 rounded-full hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300 flex items-center"
                >
                  <span>Our Solutions</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Graphic/Animation */}
          <div className="reveal" data-delay="300">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
              
              {/* Main Animation Container */}
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                {/* Lottie animation would be embedded here */}
                <div className="w-full h-[300px] md:h-[400px] bg-card/30 rounded-lg flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified SVG for cybersecurity visualization */}
                    <rect x="100" y="100" width="400" height="200" rx="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
                    <circle cx="300" cy="200" r="80" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
                    <path d="M300 140 L300 260" stroke="#00E5FF" strokeWidth="2"/>
                    <path d="M240 200 L360 200" stroke="#00E5FF" strokeWidth="2"/>
                    <circle cx="300" cy="200" r="30" fill="#00B2A9" fillOpacity="0.3"/>
                    <circle cx="300" cy="200" r="20" fill="#00E5FF" fillOpacity="0.5"/>
                    <path d="M200 150 L250 180" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M200 250 L250 220" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M400 150 L350 180" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M400 250 L350 220" stroke="#00B2A9" strokeWidth="1.5"/>
                    <circle cx="200" cy="150" r="10" fill="#00E5FF" fillOpacity="0.5"/>
                    <circle cx="200" cy="250" r="10" fill="#00E5FF" fillOpacity="0.5"/>
                    <circle cx="400" cy="150" r="10" fill="#00E5FF" fillOpacity="0.5"/>
                    <circle cx="400" cy="250" r="10" fill="#00E5FF" fillOpacity="0.5"/>
                  </svg>
                </div>

                {/* Floating Information Box */}
                <div className="absolute -bottom-5 right-10 bg-card border border-[hsl(var(--secondary))]/20 py-3 px-6 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                    <p className="text-sm">Active Threat Protection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Logos */}
        <div className="mt-20 reveal" data-delay="600">
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-6">Trusted by Leading Organizations</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">BANK UAE</div>
            </div>
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">TECH CORP</div>
            </div>
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">HEALTH SYSTEMS</div>
            </div>
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">GOV SERVICES</div>
            </div>
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">RETAIL GROUP</div>
            </div>
            <div className="h-8">
              <div className="text-muted-foreground font-semibold">LOGISTICS INC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
