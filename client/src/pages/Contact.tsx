import { useEffect } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactFormWithCalendly from '@/components/ContactFormWithCalendly';

const Contact = () => {
  useScrollReveal();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'Contact Us | Intello.';
  }, []);

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
              <ContactFormWithCalendly 
                calendlyUrl="https://calendly.com/ameesh-intellome" 
                showServiceField={true}
              />
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
