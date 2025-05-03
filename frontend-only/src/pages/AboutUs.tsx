import { Shield, Users, Award, Calendar, Globe, Cpu } from 'lucide-react';
import { Link } from 'wouter';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Intello</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A trusted cybersecurity partner for organizations in the UAE and Middle East since 2003.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Established in 2003, Intello has grown to become a leading provider of cybersecurity and compliance solutions in the UAE and across the Middle East region. With over two decades of experience, we've helped hundreds of organizations secure their digital assets and meet regulatory requirements.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of certified security professionals brings expertise across multiple domains, including Governance, Risk, and Compliance (GRC), Security Testing, and IT Managed Services. We combine technical excellence with deep industry knowledge to deliver solutions that address the unique challenges faced by organizations in the region.
              </p>
              <p className="text-muted-foreground">
                At Intello, we believe that cybersecurity is not just about technology, but about enabling businesses to operate securely in an increasingly digital world. Our mission is to make world-class security accessible to organizations of all sizes, providing the protection they need to thrive in today's connected environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Est. 2003</h3>
                <p className="text-muted-foreground">
                  Over 22 years of experience in the cybersecurity industry
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">40+ Experts</h3>
                <p className="text-muted-foreground">
                  Team of certified security professionals and consultants
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">UAE & GCC</h3>
                <p className="text-muted-foreground">
                  Focused on serving the unique needs of the Middle East region
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">300+ Clients</h3>
                <p className="text-muted-foreground">
                  Trusted by organizations across multiple industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl border border-border">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To make world-class cybersecurity and compliance solutions accessible to organizations of all sizes, empowering them to navigate the digital landscape with confidence and security.
              </p>
              <p className="text-muted-foreground">
                We strive to be a trusted security partner that understands the unique challenges faced by businesses in the UAE and Middle East, providing tailored solutions that protect their most valuable digital assets.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <Cpu className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                To lead the transformation of cybersecurity in the Middle East by pioneering innovative technologies and approaches that address the evolving threat landscape.
              </p>
              <p className="text-muted-foreground">
                We aim to create a more secure digital ecosystem where organizations can embrace technological advancements without compromising on security or compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 cyber-grid-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Contact us today to schedule a consultation with our cybersecurity experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Contact Us
                </button>
              </Link>
              <Link href="/services">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
