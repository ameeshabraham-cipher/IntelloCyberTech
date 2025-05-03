import { Mail, Phone, MapPin, Globe, Calendar } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Link } from 'wouter';

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to discuss your cybersecurity needs and how we can help protect your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Office 710, Bayview Tower<br />
                      Business Bay, Dubai<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: <a href="mailto:info@intellome.com" className="hover:text-primary">info@intellome.com</a><br />
                      Support: <a href="mailto:support@intellome.com" className="hover:text-primary">support@intellome.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      Phone: <a href="tel:+97155355555" className="hover:text-primary">+971 55 355 6787</a><br />
                      Toll-free: <a href="tel:+8000000" className="hover:text-primary">800-INTELLO (468-3556)</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/company/intellocyber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com/intellocyber"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Schedule a Meeting</h3>
                    <p className="text-muted-foreground mb-3">
                      Book a consultation with one of our cybersecurity experts.
                    </p>
                    <a
                      href="https://calendly.com/ameesh-intellome"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                    >
                      Book a Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border border-border h-96 bg-card/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Google Maps Embed</h3>
                <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                  In the complete implementation, this would display an interactive Google Maps embed showing our office location.
                </p>
                <a
                  href="https://goo.gl/maps/EXAMPLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Comprehensive Security Assessment?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Request our free security assessment to identify vulnerabilities and compliance gaps in your organization.
            </p>
            <Link href="/assessment">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Request Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
