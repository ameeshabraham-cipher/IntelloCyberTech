import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const Contact = () => {
  useScrollReveal();
  const { toast } = useToast();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'Contact Us | Intello.';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all the required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // For static site deployment, you would use an external form service like Formspree
      // Replace this URL with your actual Formspree form ID when you set it up
      const formspreeEndpoint = 'https://formspree.io/f/your-form-id';
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you shortly."
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // For static deployment without backend, provide alternative contact method
      toast({
        title: "Form Submission Error",
        description: "Please email us directly at info@intellome.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Intello.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Reach out to our cybersecurity experts for personalized guidance on securing your business and ensuring compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal">
              <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                <h2 className="text-2xl font-montserrat font-bold mb-6 flex items-center">
                  <Send className="mr-3 text-[hsl(var(--secondary))] h-5 w-5" /> 
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                        Full Name <span className="text-[hsl(var(--secondary))]">*</span>
                      </Label>
                      <Input 
                        type="text" 
                        id="name" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm text-muted-foreground block mb-2">
                        Email Address <span className="text-[hsl(var(--secondary))]">*</span>
                      </Label>
                      <Input 
                        type="email" 
                        id="email" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm text-muted-foreground block mb-2">
                        Phone Number
                      </Label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm text-muted-foreground block mb-2">
                        Company Name
                      </Label>
                      <Input 
                        type="text" 
                        id="company" 
                        className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="subject" className="text-sm text-muted-foreground block mb-2">
                      Subject
                    </Label>
                    <Input 
                      type="text" 
                      id="subject" 
                      className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="text-sm text-muted-foreground block mb-2">
                      Message <span className="text-[hsl(var(--secondary))]">*</span>
                    </Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                      placeholder="Please describe your inquiry in detail"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="reveal" data-delay="300">
              <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20 mb-8">
                <h2 className="text-2xl font-montserrat font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-card/50 w-12 h-12 rounded-full flex items-center justify-center text-[hsl(var(--secondary))] mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold mb-2">Office Location</h3>
                      <p className="text-muted-foreground">
                        Office 26, First Gulf Business Center,<br />
                        Madina Mall, Muhaisnah 4, Dubai, UAE
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-card/50 w-12 h-12 rounded-full flex items-center justify-center text-[hsl(var(--secondary))] mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold mb-2">Phone Numbers</h3>
                      <p className="text-muted-foreground">
                        Main: +971 55 355 6787
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-card/50 w-12 h-12 rounded-full flex items-center justify-center text-[hsl(var(--secondary))] mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold mb-2">Email Addresses</h3>
                      <p className="text-muted-foreground">
                        General Inquiries: info@intellome.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-card/50 w-12 h-12 rounded-full flex items-center justify-center text-[hsl(var(--secondary))] mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Integration */}
              <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                <h2 className="text-2xl font-montserrat font-bold mb-6">Find Us</h2>
                <div className="rounded-lg overflow-hidden h-[300px] relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.7045338040174!2d55.389926576248286!3d25.289204427765935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d605dc885b3%3A0x9f0d8ea2e8e03012!2sMadina%20Mall!5e0!3m2!1sen!2sae!4v1713170511364!5m2!1sen!2sae" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Intello. Office Location - Madina Mall, Muhaisnah 4, Dubai"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 reveal">
              <h3 className="text-xl font-montserrat font-semibold mb-4">How long does ISO 27001 implementation typically take?</h3>
              <p className="text-muted-foreground">
                The timeframe for ISO 27001 implementation varies based on organization size and complexity. For small to medium businesses, it typically takes 4-6 months. Enterprise implementations may take 6-12 months. Our accelerated program can help you achieve certification in as little as 3-4 months.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" data-delay="100">
              <h3 className="text-xl font-montserrat font-semibold mb-4">What services do you offer for UAE PDPL compliance?</h3>
              <p className="text-muted-foreground">
                Our UAE PDPL compliance services include gap analysis, data mapping, policy development, implementation support, staff training, and ongoing compliance monitoring. We provide tailored solutions to help organizations meet the requirements of the UAE Personal Data Protection Law.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" data-delay="200">
              <h3 className="text-xl font-montserrat font-semibold mb-4">How can AI improve our compliance management?</h3>
              <p className="text-muted-foreground">
                Our AI-powered compliance solutions automate evidence collection, control monitoring, and regulatory updates tracking. This reduces manual effort by up to 70%, improves accuracy, provides real-time insights, and helps identify potential compliance issues before they become problems.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" data-delay="300">
              <h3 className="text-xl font-montserrat font-semibold mb-4">What industries do you specialize in?</h3>
              <p className="text-muted-foreground">
                We specialize in providing cybersecurity and compliance solutions for BFSI (Banking, Financial Services, and Insurance), Healthcare, Government, E-Commerce, SMEs & Enterprises, and Logistics. We have deep understanding of industry-specific regulations and security challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
