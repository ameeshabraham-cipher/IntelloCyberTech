import { useScrollReveal } from '@/lib/animations';
import { Link } from 'wouter';
import { 
  ShieldAlert, 
  ClipboardCheck, 
  Shield,
  ArrowRight
} from 'lucide-react';

const PainPointsSection = () => {
  useScrollReveal();
  
  return (
    <section className="py-20 bg-card relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Facing <span className="text-[hsl(var(--secondary))]">Cybersecurity Challenges?</span> We Have Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            In today's digital landscape, businesses face increasingly complex security threats and compliance requirements. 
            We help you navigate these challenges with tailored solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pain Point Card 1 */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <ShieldAlert className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Data Breaches & Cyberattacks</h3>
            <p className="text-muted-foreground mb-6">
              Protect your sensitive data from sophisticated threats with our advanced security measures and continuous monitoring.
            </p>
            <div className="flex items-center">
              <Link href="/solutions/protection" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Explore Protection Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point Card 2 */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="200">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <ClipboardCheck className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Compliance Complexity</h3>
            <p className="text-muted-foreground mb-6">
              Navigate the maze of regulations including ISO 27001, SOC 2, GDPR, and UAE PDPL with our expert guidance.
            </p>
            <div className="flex items-center">
              <Link href="/solutions/compliance" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Simplify Compliance</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Pain Point Card 3 */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/30 transition-all duration-300 reveal" data-delay="400">
            <div className="bg-card/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Shield className="text-[hsl(var(--secondary))] h-6 w-6" />
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">Security Expertise Gap</h3>
            <p className="text-muted-foreground mb-6">
              Access top-tier cybersecurity talent with our vCISO services and specialized security consulting.
            </p>
            <div className="flex items-center">
              <Link href="/services/vciso" className="text-[hsl(var(--secondary))] hover:text-white flex items-center transition-colors">
                <span>Bridge the Gap</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 reveal" data-delay="600">
          {/* Stat 1 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">100+</p>
            <p className="text-muted-foreground">Successful Implementations</p>
          </div>
          
          {/* Stat 2 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          
          {/* Stat 3 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">15+</p>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          
          {/* Stat 4 */}
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-montserrat font-bold text-[hsl(var(--secondary))] mb-2">24/7</p>
            <p className="text-muted-foreground">Support & Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
