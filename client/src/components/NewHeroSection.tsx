import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ChevronRight, ArrowRight, Shield, Lock, Zap, Server, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HelpBubble } from '@/components/ui/help-bubble';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useClientLogos } from '@/hooks/use-client-logos';

// Client Logos Carousel Component
const ClientLogosCarousel = () => {
  // Use our custom hook to fetch client logos from the client-images directory
  const logos = useClientLogos();
  
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="py-4">
        {logos.map((logo, index) => (
          <CarouselItem key={index} className="basis-1/4 pl-4">
            <div className="relative h-32 rounded-lg border border-gray-200 bg-white flex flex-col items-center justify-center p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-md group">
              {logo.imagePath ? (
                <img 
                  src={logo.imagePath} 
                  alt={`${logo.name} logo`} 
                  className="h-16 object-contain mb-2 filter grayscale group-hover:filter-none transition-all duration-300"
                />
              ) : (
                <div className="text-gray-600 font-semibold text-xl text-center mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                  {logo.name}
                </div>
              )}
              <div className="text-gray-500 text-xs text-center">Trusted Partner</div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center mt-6 gap-3">
        <CarouselPrevious 
          variant="outline" 
          size="sm" 
          className="static bg-white text-gray-600 hover:bg-gray-100 border-gray-200 transition-colors duration-300" 
        />
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                current === i ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <CarouselNext 
          variant="outline" 
          size="sm" 
          className="static bg-white text-gray-600 hover:bg-gray-100 border-gray-200 transition-colors duration-300" 
        />
      </div>
    </Carousel>
  );
};

const NewHeroSection = () => {
  useScrollReveal();
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
      
      {/* Cyber grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(235, 52, 67, 0.03) 1px, transparent 1px), 
                          linear-gradient(90deg, rgba(235, 52, 67, 0.03) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Red glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="reveal">
            {/* Removed Intello Logo text */}
            <div className="mb-6">
              <div className="flex flex-col mb-8 mt-4">
              </div>
            </div>
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Compliance & Cybersecurity Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Compliance Solutions</span> for Modern Enterprises
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Intello. combines regulatory expertise with AI-powered analytics to deliver 
              comprehensive compliance and security solutions for today's complex regulatory landscape.
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
          
          {/* Right Column - Interactive Animation */}
          <div className="reveal" data-delay="300">
            <div className="relative rounded-2xl border border-[hsl(var(--secondary))]/20 overflow-hidden backdrop-blur-sm p-3 bg-card/30 shadow-lg">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
              
              {/* 3D Cybersecurity Digital Twin Animation */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-md">
                <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 3D Logo Effect */}
                  <g className="digital-twin-animation">
                    {/* Intello Dynamic Logo */}
                    <g transform="translate(300, 200)">
                      {/* Orbit Rings */}
                      <circle cx="0" cy="0" r="140" stroke="rgba(235, 52, 67, 0.2)" strokeWidth="1" fill="none" 
                        strokeDasharray="8,4" opacity="0.8">
                        <animateTransform 
                          attributeName="transform" 
                          type="rotate" 
                          from="0 0 0" 
                          to="360 0 0" 
                          dur="60s" 
                          repeatCount="indefinite"
                        />
                      </circle>
                      
                      <circle cx="0" cy="0" r="100" stroke="rgba(235, 52, 67, 0.3)" strokeWidth="1" fill="none">
                        <animateTransform 
                          attributeName="transform" 
                          type="rotate" 
                          from="0 0 0" 
                          to="-360 0 0" 
                          dur="40s" 
                          repeatCount="indefinite"
                        />
                      </circle>
                      
                      {/* Data Nodes */}
                      <g>
                        {/* Node 1 - Security */}
                        <g transform="translate(85, 20)">
                          <circle r="20" fill="#0A1024" stroke="rgba(235, 52, 67, 0.7)" strokeWidth="1.5" />
                          <foreignObject x="-12" y="-12" width="24" height="24">
                            <Shield className="h-6 w-6 text-[hsl(var(--primary))]" />
                          </foreignObject>
                          <circle r="20" fill="transparent" stroke="rgba(235, 52, 67, 0.2)" strokeWidth="8" strokeDasharray="40" strokeDashoffset="0">
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="0" 
                              to="80" 
                              dur="8s" 
                              repeatCount="indefinite" 
                            />
                          </circle>
                        </g>
                        
                        {/* Node 2 - Compliance */}
                        <g transform="translate(-65, 60)">
                          <circle r="18" fill="#0A1024" stroke="rgba(235, 52, 67, 0.7)" strokeWidth="1.5" />
                          <foreignObject x="-10" y="-10" width="20" height="20">
                            <Server className="h-5 w-5 text-blue-400" />
                          </foreignObject>
                          <circle r="18" fill="transparent" stroke="rgba(30, 144, 255, 0.2)" strokeWidth="6" strokeDasharray="30" strokeDashoffset="0">
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="0" 
                              to="60" 
                              dur="6s" 
                              repeatCount="indefinite" 
                            />
                          </circle>
                        </g>
                        
                        {/* Node 3 - AI */}
                        <g transform="translate(40, -70)">
                          <circle r="15" fill="#0A1024" stroke="rgba(235, 52, 67, 0.7)" strokeWidth="1.5" />
                          <foreignObject x="-9" y="-9" width="18" height="18">
                            <Zap className="h-4.5 w-4.5 text-purple-400" />
                          </foreignObject>
                          <circle r="15" fill="transparent" stroke="rgba(128, 90, 213, 0.2)" strokeWidth="5" strokeDasharray="25" strokeDashoffset="0">
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="0" 
                              to="50" 
                              dur="5s" 
                              repeatCount="indefinite" 
                            />
                          </circle>
                        </g>
                        
                        {/* Node 4 - Encryption */}
                        <g transform="translate(-50, -50)">
                          <circle r="16" fill="#0A1024" stroke="rgba(235, 52, 67, 0.7)" strokeWidth="1.5" />
                          <foreignObject x="-9" y="-9" width="18" height="18">
                            <Lock className="h-4.5 w-4.5 text-green-400" />
                          </foreignObject>
                          <circle r="16" fill="transparent" stroke="rgba(72, 187, 120, 0.2)" strokeWidth="5" strokeDasharray="28" strokeDashoffset="0">
                            <animate 
                              attributeName="stroke-dashoffset" 
                              from="0" 
                              to="56" 
                              dur="7s" 
                              repeatCount="indefinite" 
                            />
                          </circle>
                        </g>
                      </g>
                      
                      {/* Connection Lines */}
                      <g stroke="rgba(235, 52, 67, 0.4)" strokeWidth="1" strokeDasharray="5,3">
                        <line x1="0" y1="0" x2="85" y2="20" opacity="0.7">
                          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
                        </line>
                        <line x1="0" y1="0" x2="-65" y2="60" opacity="0.7">
                          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
                        </line>
                        <line x1="0" y1="0" x2="40" y2="-70" opacity="0.7">
                          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="6s" repeatCount="indefinite" />
                        </line>
                        <line x1="0" y1="0" x2="-50" y2="-50" opacity="0.7">
                          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="7s" repeatCount="indefinite" />
                        </line>
                        <line x1="85" y1="20" x2="40" y2="-70" opacity="0.4">
                          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="8s" repeatCount="indefinite" />
                        </line>
                        <line x1="-65" y1="60" x2="-50" y2="-50" opacity="0.4">
                          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="7s" repeatCount="indefinite" />
                        </line>
                      </g>
                      
                      {/* Center Intello Core */}
                      <g className="core-pulse">
                        <circle r="35" fill="#0A1024" stroke="rgba(235, 52, 67, 0.8)" strokeWidth="2" />
                        <circle r="35" fill="transparent" stroke="rgba(235, 52, 67, 0.2)" strokeWidth="15" opacity="0.3">
                          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="r" values="35;40;35" dur="2s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Intello Red Dot Logo */}
                        <circle 
                          cx="0" 
                          cy="0" 
                          r="15" 
                          fill="#eb3443">
                          <animateTransform 
                            attributeName="transform" 
                            type="scale" 
                            values="1;1.1;1" 
                            dur="3s" 
                            repeatCount="indefinite" 
                          />
                        </circle>
                      </g>
                      
                      {/* Data Particles */}
                      <g className="data-particles">
                        {[...Array(24)].map((_, i) => (
                          <circle key={i} r="1" fill="rgba(235, 52, 67, 0.8)">
                            <animate 
                              attributeName="cx" 
                              values={`0;${Math.cos(i * 15 * Math.PI/180) * 150}`} 
                              dur={`${3 + i % 5}s`} 
                              repeatCount="indefinite" 
                              begin={`${i * 0.2}s`}
                            />
                            <animate 
                              attributeName="cy" 
                              values={`0;${Math.sin(i * 15 * Math.PI/180) * 150}`} 
                              dur={`${3 + i % 5}s`} 
                              repeatCount="indefinite" 
                              begin={`${i * 0.2}s`}
                            />
                            <animate 
                              attributeName="opacity" 
                              values="1;0" 
                              dur={`${3 + i % 5}s`} 
                              repeatCount="indefinite" 
                              begin={`${i * 0.2}s`}
                            />
                          </circle>
                        ))}
                      </g>
                      
                      {/* Scanning effect */}
                      <line x1="-150" y1="0" x2="150" y2="0" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1">
                        <animateTransform 
                          attributeName="transform" 
                          type="translate" 
                          from="0 -150" 
                          to="0 150" 
                          dur="4s" 
                          repeatCount="indefinite" 
                        />
                        <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" />
                      </line>
                    </g>
                  </g>
                  
                  {/* Security Analytics Dashboards */}
                  <g transform="translate(110, 50)">
                    <rect width="150" height="28" rx="6" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" />
                    <text x="10" y="18" fill="rgba(235, 52, 67, 0.9)" fontSize="12">Security Score</text>
                    <rect x="110" y="9" width="30" height="10" rx="5" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" />
                    <rect x="110" y="9" width="0" height="10" rx="5" fill="rgba(235, 52, 67, 0.7)">
                      <animate attributeName="width" from="0" to="27" dur="1.5s" begin="0.5s" fill="freeze" />
                    </rect>
                    <text x="145" y="18" fill="white" fontSize="10" textAnchor="end">94%</text>
                  </g>
                  
                  <g transform="translate(340, 50)">
                    <rect width="150" height="28" rx="6" fill="#0A1024" stroke="rgba(235, 52, 67, 0.5)" strokeWidth="1" />
                    <text x="10" y="18" fill="rgba(235, 52, 67, 0.9)" fontSize="12">Threats Mitigated</text>
                    <text x="140" y="18" fill="white" fontSize="10" textAnchor="end">2,547</text>
                  </g>
                  
                  {/* Binary Code Background */}
                  <g opacity="0.2">
                    <text x="40" y="360" fill="rgba(235, 52, 67, 0.8)" fontSize="8">01001001 01001110 01010100 01000101 01001100 01001100 01001111</text>
                    <text x="40" y="375" fill="rgba(235, 52, 67, 0.8)" fontSize="8">01000011 01011001 01000010 01000101 01010010 01010100 01000101 01000011 01001000</text>
                    <text x="340" y="360" fill="rgba(235, 52, 67, 0.8)" fontSize="8">10110101 00101010 11010111 00101101</text>
                    <text x="340" y="375" fill="rgba(235, 52, 67, 0.8)" fontSize="8">01100111 10011010 10000110 11100101</text>
                  </g>
                </svg>
                
                {/* Floating Information Cards */}
                <div className="absolute bottom-5 right-5">
                  <div className="bg-card/70 backdrop-blur-lg border border-[hsl(var(--secondary))]/20 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium">System Protected</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-5 left-5">
                  <div className="bg-card/70 backdrop-blur-lg border border-[hsl(var(--secondary))]/20 rounded-lg p-3 shadow-lg max-w-[150px]">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                      <span className="text-xs font-medium">Compliance Status</span>
                    </div>
                    <div className="h-2 bg-[hsl(var(--primary))]/20 rounded-full mt-1">
                      <div className="h-2 bg-[hsl(var(--primary))] rounded-full w-[95%] transition-all duration-1000 ease-in-out" 
                        style={{ width: '95%', transitionDelay: '1s' }}>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Help bubbles */}
                <div className="absolute top-16 right-5">
                  <HelpBubble
                    type="security"
                    title="Intello Shield"
                    content="Our proprietary cybersecurity platform combines AI and expert analysis to protect your digital assets."
                  />
                </div>
                
                <div className="absolute bottom-20 left-5">
                  <HelpBubble
                    type="compliance"
                    title="Compliance Framework"
                    content="Automated compliance monitoring across multiple regulatory standards including ISO 27001, GDPR, and UAE NESA."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Logos Carousel with Clean White Background */}
        <div className="mt-20 reveal" data-delay="600">
          <div className="relative bg-white py-10 rounded-lg overflow-hidden">
            <h3 className="text-center text-gray-700 text-xl font-bold mb-1">Trusted by Leading Organizations</h3>
            <p className="text-center text-gray-500 text-sm mb-8">Excellence in Service & Delivery</p>
            
            <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
              <ClientLogosCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;