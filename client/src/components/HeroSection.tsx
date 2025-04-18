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
              Intello. delivers cutting-edge GRC, Audit, and AI-Powered Compliance Automation 
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
                {/* Advanced SVG Cybersecurity Animation - Improved & More Compact */}
                <div className="w-full h-[300px] md:h-[350px] bg-card/30 rounded-lg flex items-center justify-center overflow-hidden relative">
                  {/* Shield Base Design with Improved Alignment */}
                  <svg className="w-full h-full max-w-[500px] mx-auto" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Grid - More Subtle */}
                    <g className="cyber-grid">
                      <rect width="500" height="300" fill="url(#grid-pattern)" opacity="0.1" />
                      
                      <defs>
                        <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="15" height="15">
                          <path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(235, 52, 67, 0.25)" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                    </g>
                    
                    {/* Data Visualization Elements */}
                    <g transform="translate(250, 150) scale(0.9)">
                      {/* Radar Rings - Better Centered */}
                      <circle cx="0" cy="0" r="100" fill="transparent" stroke="rgba(235, 52, 67, 0.08)" strokeWidth="1">
                        <animate attributeName="opacity" values="0.08;0.2;0.08" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="70" fill="transparent" stroke="rgba(235, 52, 67, 0.12)" strokeWidth="1">
                        <animate attributeName="opacity" values="0.12;0.3;0.12" dur="4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="40" fill="transparent" stroke="rgba(235, 52, 67, 0.15)" strokeWidth="1">
                        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4s" repeatCount="indefinite" />
                      </circle>
                    
                      {/* Central Shield - More Compact & Centered */}
                      <g className="shield-animation">
                        <path className="shield-outer" d="M0 -70 L50 -40 V40 C50 80 0 110 0 110 C0 110 -50 80 -50 40 V-40 L0 -70Z" 
                          fill="#0A1024" 
                          stroke="hsl(355 82% 56%)" 
                          strokeWidth="2"
                          strokeDasharray="430"
                          strokeDashoffset="430">
                          <animate attributeName="stroke-dashoffset" from="430" to="0" dur="2s" begin="0.5s" fill="freeze" />
                        </path>
                        
                        {/* Inner Shield */}
                        <path className="shield-inner" d="M0 -55 L40 -30 V35 C40 65 0 90 0 90 C0 90 -40 65 -40 35 V-30 L0 -55Z" 
                          fill="transparent" 
                          stroke="rgba(235, 52, 67, 0.7)" 
                          strokeWidth="1.5">
                          <animate attributeName="opacity" values="0;0.3;0.7;0.3;0;0.3;0.7;0.3;0" dur="8s" repeatCount="indefinite" />
                        </path>
                        
                        {/* Shield Lock */}
                        <circle cx="0" cy="0" r="25" fill="#0A1024" stroke="hsl(355 82% 56%)" strokeWidth="1.5" opacity="0">
                          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2s" fill="freeze" />
                        </circle>
                        
                        {/* Lock Animation */}
                        <path className="lock-icon" d="M-10 -5 V-15 C-10 -22 -5 -28 0 -28 C5 -28 10 -22 10 -15 V-5 M-15 -5 H15 V15 H-15 V-5Z" 
                          stroke="hsl(355 82% 56%)" 
                          strokeWidth="2" 
                          fill="transparent"
                          strokeLinecap="round"
                          opacity="0">
                          <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.5s" fill="freeze" />
                          <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="30s" repeatCount="indefinite" additive="sum" />
                        </path>
                      </g>
                      
                      {/* Binary Data Stream */}
                      <g opacity="0.6">
                        <text x="-120" y="-40" className="text-xs fill-current text-[hsl(355,82%,56%)]" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="3s" begin="3s" repeatCount="indefinite" />
                          01001010
                        </text>
                        <text x="70" y="60" className="text-xs fill-current text-[hsl(355,82%,56%)]" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="4s" begin="4s" repeatCount="indefinite" />
                          10110101
                        </text>
                        <text x="-110" y="70" className="text-xs fill-current text-[hsl(355,82%,56%)]" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="3.5s" begin="6s" repeatCount="indefinite" />
                          01100111
                        </text>
                      </g>
                        
                      {/* Connection Lines - Better Proportioned */}
                      <g stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1">
                        <path d="M-30 0 L-90 -50" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="3s" begin="3s" repeatCount="indefinite" />
                        </path>
                        <path d="M-20 20 L-80 60" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="4s" begin="4s" repeatCount="indefinite" />
                        </path>
                        <path d="M20 -20 L80 -60" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="3.5s" begin="5s" repeatCount="indefinite" />
                        </path>
                        <path d="M30 10 L90 40" opacity="0">
                          <animate attributeName="opacity" values="0;0.7;0" dur="3s" begin="6s" repeatCount="indefinite" />
                        </path>
                      </g>
                      
                      {/* Data Nodes - More Strategic Placement */}
                      <g fill="rgba(235, 52, 67, 0.6)">
                        <circle cx="-90" cy="-50" r="5" opacity="0">
                          <animate attributeName="opacity" values="0;1;0" dur="3s" begin="3s" repeatCount="indefinite" />
                          <animate attributeName="r" values="3;5;3" dur="3s" begin="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="-80" cy="60" r="5" opacity="0">
                          <animate attributeName="opacity" values="0;1;0" dur="4s" begin="4s" repeatCount="indefinite" />
                          <animate attributeName="r" values="3;5;3" dur="4s" begin="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="-60" r="5" opacity="0">
                          <animate attributeName="opacity" values="0;1;0" dur="3.5s" begin="5s" repeatCount="indefinite" />
                          <animate attributeName="r" values="3;5;3" dur="3.5s" begin="5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="90" cy="40" r="5" opacity="0">
                          <animate attributeName="opacity" values="0;1;0" dur="3s" begin="6s" repeatCount="indefinite" />
                          <animate attributeName="r" values="3;5;3" dur="3s" begin="6s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      
                      {/* Scanning Effect */}
                      <rect x="-120" y="-150" width="240" height="1" fill="hsl(355 82% 56%)" opacity="0.3">
                        <animate attributeName="y" values="-150;150;-150" dur="8s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="8s" repeatCount="indefinite" />
                      </rect>
                    </g>
                    
                    {/* Security Stats Visualization */}
                    <g transform="translate(85, 50)">
                      <text fill="rgba(235, 52, 67, 0.8)" className="text-[8px]">THREATS BLOCKED</text>
                      <rect x="0" y="10" width="60" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" rx="2" />
                      <rect x="0" y="10" width="0" height="10" fill="rgba(235, 52, 67, 0.3)" rx="2">
                        <animate attributeName="width" from="0" to="45" dur="2s" begin="1s" fill="freeze" />
                      </rect>
                      <text x="65" y="18" fill="rgba(235, 52, 67, 0.8)" className="text-[8px]">3,942</text>
                    </g>
                    
                    <g transform="translate(85, 80)">
                      <text fill="rgba(235, 52, 67, 0.8)" className="text-[8px]">COMPLIANCE SCORE</text>
                      <rect x="0" y="10" width="60" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" rx="2" />
                      <rect x="0" y="10" width="0" height="10" fill="rgba(235, 52, 67, 0.3)" rx="2">
                        <animate attributeName="width" from="0" to="54" dur="2s" begin="1.5s" fill="freeze" />
                      </rect>
                      <text x="65" y="18" fill="rgba(235, 52, 67, 0.8)" className="text-[8px]">98%</text>
                    </g>
                    
                    <g transform="translate(335, 50)">
                      <text fill="rgba(235, 52, 67, 0.8)" className="text-[8px]" textAnchor="end" x="60">RISK ASSESSMENT</text>
                      <rect x="0" y="10" width="60" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" rx="2" />
                      <rect x="0" y="10" width="0" height="10" fill="rgba(235, 52, 67, 0.3)" rx="2">
                        <animate attributeName="width" from="0" to="15" dur="2s" begin="2s" fill="freeze" />
                      </rect>
                      <text x="-5" y="18" fill="rgba(235, 52, 67, 0.8)" className="text-[8px]" textAnchor="end">LOW</text>
                    </g>
                    
                    <g transform="translate(335, 80)">
                      <text fill="rgba(235, 52, 67, 0.8)" className="text-[8px]" textAnchor="end" x="60">SECURITY POSTURE</text>
                      <rect x="0" y="10" width="60" height="10" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" rx="2" />
                      <rect x="0" y="10" width="0" height="10" fill="rgba(235, 52, 67, 0.3)" rx="2">
                        <animate attributeName="width" from="0" to="51" dur="2s" begin="2.5s" fill="freeze" />
                      </rect>
                      <text x="-5" y="18" fill="rgba(235, 52, 67, 0.8)" className="text-[8px]" textAnchor="end">STRONG</text>
                    </g>
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
