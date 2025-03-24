import { useState } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { ArrowRight, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { apiRequest } from '@/lib/queryClient';

const CallToAction = () => {
  useScrollReveal();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'ISO 27001 Compliance'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.company || !formData.service) {
      toast({
        title: "Missing information",
        description: "Please fill in all the required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "We'll get back to you shortly."
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: 'ISO 27001 Compliance'
        });
      }
    } catch (error) {
      toast({
        title: "Error Submitting Form",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-20 animated-gradient relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-card/80 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-[hsl(var(--secondary))]/20 reveal">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* CTA Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Ready to Secure Your Business Against <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Cyber Threats?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a free security assessment and discover how our tailored solutions can protect your business and ensure compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/assessment">
                  <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center">
                    <span>Get Free Assessment</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline"
                    className="bg-transparent border border-[hsl(var(--secondary))]/30 text-white font-medium py-3 px-8 rounded-full hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300 flex items-center"
                  >
                    <span>Contact Us</span>
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Form */}
            <div>
              <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-[hsl(var(--secondary))]/10">
                <h3 className="text-xl font-montserrat font-semibold mb-6 text-center">Request a Consultation</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm text-muted-foreground block mb-2">Full Name</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm text-muted-foreground block mb-2">Email Address</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="text-sm text-muted-foreground block mb-2">Company</Label>
                      <Input 
                        type="text" 
                        id="company" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="service" className="text-sm text-muted-foreground block mb-2">Service of Interest</Label>
                      <select
                        id="service"
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors"
                        value={formData.service}
                        onChange={handleInputChange}
                      >
                        <option>ISO 27001 Compliance</option>
                        <option>SOC 2 Compliance</option>
                        <option>GDPR Compliance</option>
                        <option>UAE PDPL Compliance</option>
                        <option>IT Security Audit</option>
                        <option>vCISO Services</option>
                        <option>Other Services</option>
                      </select>
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover mt-2"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
