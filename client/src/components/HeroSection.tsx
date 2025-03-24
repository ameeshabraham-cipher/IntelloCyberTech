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
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20 cyber-border">
                {/* Advanced SVG Cybersecurity Animation */}
                <div className="w-full h-[300px] md:h-[400px] bg-card/30 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {/* Shield Base Design */}
                  <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Grid */}
                    <g className="cyber-grid">
                      <rect width="600" height="400" fill="url(#grid-pattern)" opacity="0.15" />
                      
                      <defs>
                        <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                    </g>
                  
                    {/* Central Shield */}
                    <g className="shield-animation">
                      <path className="shield-outer" d="M300 80 L380 120 V230 C380 270 300 320 300 320 C300 320 220 270 220 230 V120 L300 80Z" 
                        fill="#0A1024" 
                        stroke="hsl(355 82% 56%)" 
                        strokeWidth="2"
                        strokeDasharray="628"
                        strokeDashoffset="628">
                        <animate attributeName="stroke-dashoffset" from="628" to="0" dur="2s" begin="0.5s" fill="freeze" />
                      </path>
                      
                      {/* Inner Shield */}
                      <path className="shield-inner" d="M300 100 L360 130 V220 C360 250 300 290 300 290 C300 290 240 250 240 220 V130 L300 100Z" 
                        fill="transparent" 
                        stroke="rgba(235, 52, 67, 0.7)" 
                        strokeWidth="1.5">
                        <animate attributeName="opacity" values="0;0.3;0.7;0.3;0;0.3;0.7;0.3;0" dur="8s" repeatCount="indefinite" />
                      </path>
                      
                      {/* Shield Lock */}
                      <circle cx="300" cy="200" r="40" fill="#0A1024" stroke="hsl(355 82% 56%)" strokeWidth="1.5" opacity="0">
                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" fill="freeze" />
                      </circle>
                      
                      {/* Lock Animation */}
                      <path className="lock-icon" d="M285 192 V177 C285 169 293 162 300 162 C307 162 315 169 315 177 V192 M280 190 H320 V222 H280 V190Z" 
                        stroke="hsl(355 82% 56%)" 
                        strokeWidth="2" 
                        fill="transparent"
                        strokeLinecap="round"
                        opacity="0">
                        <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.5s" fill="freeze" />
                        <animateTransform attributeName="transform" type="rotate" from="0 300 200" to="360 300 200" dur="30s" repeatCount="indefinite" additive="sum" />
                      </path>
                    </g>
                    
                    {/* Animated Particles */}
                    <g className="particles">
                      {/* Connection Lines */}
                      <path d="M300 160 L200 100" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="4s" begin="3s" repeatCount="indefinite" />
                      </path>
                      <path d="M300 160 L150 180" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="5s" begin="3.5s" repeatCount="indefinite" />
                      </path>
                      <path d="M300 160 L200 300" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="4.5s" begin="4s" repeatCount="indefinite" />
                      </path>
                      <path d="M300 160 L400 100" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="3.5s" begin="4.5s" repeatCount="indefinite" />
                      </path>
                      <path d="M300 160 L450 180" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="4s" begin="5s" repeatCount="indefinite" />
                      </path>
                      <path d="M300 160 L400 300" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" opacity="0">
                        <animate attributeName="opacity" values="0;0.7;0" dur="5.5s" begin="5.5s" repeatCount="indefinite" />
                      </path>
                      
                      {/* Data Nodes */}
                      <circle cx="200" cy="100" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="4s" begin="3s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="4s" begin="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="150" cy="180" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="5s" begin="3.5s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="5s" begin="3.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="200" cy="300" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="4.5s" begin="4s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="4.5s" begin="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="400" cy="100" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="3.5s" begin="4.5s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="3.5s" begin="4.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="450" cy="180" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="4s" begin="5s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="4s" begin="5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="400" cy="300" r="8" fill="rgba(235, 52, 67, 0.5)" opacity="0">
                        <animate attributeName="opacity" values="0;1;0" dur="5.5s" begin="5.5s" repeatCount="indefinite" />
                        <animate attributeName="r" values="4;8;4" dur="5.5s" begin="5.5s" repeatCount="indefinite" />
                      </circle>
                      
                      {/* Scanning Effect */}
                      <rect x="150" y="50" width="300" height="1" fill="hsl(355 82% 56%)" opacity="0.3">
                        <animate attributeName="y" values="50;350;50" dur="8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="8s" repeatCount="indefinite" />
                      </rect>
                    </g>
                    
                    {/* Radar Circles */}
                    <circle cx="300" cy="200" r="120" fill="transparent" stroke="rgba(235, 52, 67, 0.1)" strokeWidth="1">
                      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="200" r="80" fill="transparent" stroke="rgba(235, 52, 67, 0.15)" strokeWidth="1">
                      <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="300" cy="200" r="160" fill="transparent" stroke="rgba(235, 52, 67, 0.05)" strokeWidth="1">
                      <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>

                {/* Floating Information Boxes */}
                <div className="absolute -bottom-5 right-10 bg-card border border-[hsl(var(--secondary))]/20 py-3 px-6 rounded-lg shadow-lg animate-pulse-slow">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                    <p className="text-sm">Active Threat Protection</p>
                  </div>
                </div>
                
                <div className="absolute top-10 -left-5 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg shadow-lg animate-float-slow">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                    <p className="text-xs">AI-Powered Security</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg shadow-lg animate-float-slow-delay">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
                    <p className="text-xs">Compliance Certified</p>
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
