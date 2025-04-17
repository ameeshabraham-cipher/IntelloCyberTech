import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { 
  Bot, 
  Network, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AISolutionsSection = () => {
  useScrollReveal();
  
  return (
    <section className="py-20 animated-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">AI-Powered Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Harness the Power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">AI</span> for Advanced Compliance
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our AI-driven solutions automate complex compliance processes, reducing manual efforts while increasing accuracy 
              and providing real-time insights for better decision-making.
            </p>
            
            {/* Feature List */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                  <Bot className="text-[hsl(var(--secondary))] h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-2">AI Compliance Automation</h3>
                  <p className="text-muted-foreground">Automate evidence collection, control monitoring, and compliance reporting with our AI-powered platform.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                  <Network className="text-[hsl(var(--secondary))] h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-2">Regulatory Change Management</h3>
                  <p className="text-muted-foreground">Stay ahead of evolving compliance requirements with AI that monitors regulatory changes and automatically updates your compliance programs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))]/10 p-2 rounded-lg mr-4 mt-1">
                  <ShieldCheck className="text-[hsl(var(--secondary))] h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-2">Intelligent Compliance Mapping</h3>
                  <p className="text-muted-foreground">Map controls across multiple frameworks to streamline compliance efforts and eliminate redundancies.</p>
                </div>
              </div>
            </div>
            
            <Link href="/solutions/ai">
              <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover">
                Explore AI Compliance Solutions
              </Button>
            </Link>
          </div>
          
          {/* Visualization */}
          <div className="order-1 lg:order-2 reveal" data-delay="300">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                {/* Interactive AI Visualization */}
                <div className="w-full h-[300px] md:h-[400px] bg-card/30 rounded-lg flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* AI Compliance Visualization SVG */}
                    <rect x="50" y="100" width="500" height="200" rx="20" fill="#0A1024" stroke="#00E5FF" strokeOpacity="0.3" strokeWidth="1"/>
                    
                    {/* Central Brain Node */}
                    <circle cx="300" cy="200" r="60" fill="#0A1024" stroke="#00E5FF" strokeWidth="2"/>
                    <path d="M300 160 L300 240" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
                    <path d="M260 200 L340 200" stroke="#00E5FF" strokeWidth="1" strokeDasharray="5 3"/>
                    
                    {/* AI Core */}
                    <circle cx="300" cy="200" r="25" fill="#00B2A9" fillOpacity="0.3"/>
                    <circle cx="300" cy="200" r="15" fill="#00E5FF" fillOpacity="0.5"/>
                    
                    {/* Connected Nodes */}
                    <circle cx="150" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                    <text x="150" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">GDPR</text>
                    
                    <circle cx="150" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                    <text x="150" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">SOC 2</text>
                    
                    <circle cx="450" cy="150" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                    <text x="450" y="155" textAnchor="middle" fontSize="10" fill="#00E5FF">ISO</text>
                    
                    <circle cx="450" cy="250" r="20" fill="#0A1024" stroke="#00E5FF" strokeWidth="1.5"/>
                    <text x="450" y="255" textAnchor="middle" fontSize="10" fill="#00E5FF">PDPL</text>
                    
                    {/* Connecting Lines */}
                    <path d="M175 150 L255 175" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M175 250 L255 225" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M425 150 L345 175" stroke="#00B2A9" strokeWidth="1.5"/>
                    <path d="M425 250 L345 225" stroke="#00B2A9" strokeWidth="1.5"/>
                    
                    {/* Animated Data Pulses */}
                    <circle cx="215" cy="162.5" r="3" fill="#00E5FF">
                      <animate attributeName="cx" from="175" to="255" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="150" to="175" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="215" cy="237.5" r="3" fill="#00E5FF">
                      <animate attributeName="cx" from="175" to="255" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="250" to="225" dur="4s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="385" cy="162.5" r="3" fill="#00E5FF">
                      <animate attributeName="cx" from="425" to="345" dur="3.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="150" to="175" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="385" cy="237.5" r="3" fill="#00E5FF">
                      <animate attributeName="cx" from="425" to="345" dur="4.5s" repeatCount="indefinite" />
                      <animate attributeName="cy" from="250" to="225" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                
                {/* Floating Information Elements */}
                <div className="absolute -top-5 right-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))] mr-2"></div>
                    <p className="text-xs">Real-time Analysis</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-5 left-10 bg-card border border-[hsl(var(--secondary))]/20 py-2 px-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] mr-2"></div>
                    <p className="text-xs">Automated Controls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
