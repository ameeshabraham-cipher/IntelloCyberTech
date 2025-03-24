import { useEffect } from 'react';
import { Link } from 'wouter';
import { useScrollReveal } from '@/lib/animations';
import { 
  Shield, 
  Award, 
  Target, 
  ChevronRight, 
  Users, 
  TrendingUp, 
  BadgeCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const AboutUs = () => {
  useScrollReveal();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'About Us | Intello Cyber Technologies';
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Thompson",
      position: "Chief Executive Officer",
      bio: "With over 20 years in cybersecurity leadership, Sarah has helped numerous enterprises implement robust security frameworks.",
      certifications: ["CISSP", "CISM"]
    },
    {
      name: "Ahmed Al-Farsi",
      position: "Chief Technology Officer",
      bio: "Ahmed specializes in AI-driven security solutions and has led the development of our innovative compliance automation platform.",
      certifications: ["CISSP", "CEH", "AI Specialist"]
    },
    {
      name: "James Wilson",
      position: "Lead Security Consultant",
      bio: "James brings extensive experience in security auditing and penetration testing from his work with global financial institutions.",
      certifications: ["OSCP", "CISA"]
    },
    {
      name: "Priya Sharma",
      position: "Compliance Director",
      bio: "Priya is an expert in international regulatory frameworks including ISO 27001, SOC 2, GDPR, and regional compliance requirements.",
      certifications: ["ISO 27001 LA", "GDPR Practitioner"]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 cyber-grid-overlay relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
              Pioneers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Cybersecurity</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Compliance</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Intello Cyber Technologies was founded with a mission to empower businesses with future-proof security solutions that protect against evolving threats while ensuring compliance with global standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-[hsl(var(--secondary))]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-xl"></div>
                
                <div className="relative bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10">
                      <Shield className="text-[hsl(var(--secondary))] h-10 w-10 mb-4" />
                      <h3 className="text-xl font-montserrat font-semibold mb-2">Security First</h3>
                      <p className="text-muted-foreground text-sm">We prioritize robust security measures in everything we do.</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10">
                      <Award className="text-[hsl(var(--secondary))] h-10 w-10 mb-4" />
                      <h3 className="text-xl font-montserrat font-semibold mb-2">Excellence</h3>
                      <p className="text-muted-foreground text-sm">We strive for the highest standards in our solutions and services.</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10">
                      <Target className="text-[hsl(var(--secondary))] h-10 w-10 mb-4" />
                      <h3 className="text-xl font-montserrat font-semibold mb-2">Precision</h3>
                      <p className="text-muted-foreground text-sm">We deliver tailored solutions that address specific security needs.</p>
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10">
                      <Users className="text-[hsl(var(--secondary))] h-10 w-10 mb-4" />
                      <h3 className="text-xl font-montserrat font-semibold mb-2">Partnership</h3>
                      <p className="text-muted-foreground text-sm">We build lasting relationships with our clients based on trust.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="reveal" data-delay="200">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Mission</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Vision</span>
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-montserrat font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To empower organizations with innovative cybersecurity and compliance solutions that protect critical assets, ensure regulatory compliance, and enable business growth in the digital age.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-montserrat font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To be the leading provider of AI-powered security and compliance solutions, recognized globally for our expertise, innovation, and commitment to excellence in cybersecurity.
                </p>
              </div>
              
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover flex items-center">
                  <span>Meet Our Team</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Our Experts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Leadership</span> Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Our team brings together decades of experience in cybersecurity, compliance, and technology to deliver exceptional solutions for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl border border-[hsl(var(--secondary))]/10 reveal"
                data-delay={index * 100}
              >
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-[hsl(var(--secondary))]">
                    {member.name.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold mb-2 text-center">{member.name}</h3>
                <p className="text-[hsl(var(--secondary))] text-sm mb-4 text-center">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert, i) => (
                    <span key={i} className="bg-[hsl(var(--secondary))]/10 text-[hsl(var(--secondary))] text-xs px-2 py-1 rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-20 animated-gradient relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(var(--secondary))]/5 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-[hsl(var(--primary))]/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-4">
              <span className="text-[hsl(var(--secondary))] font-medium">Our Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
              Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Recognition</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our journey has been marked by continuous growth, innovation, and industry recognition for our outstanding contributions to cybersecurity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 reveal">
              <TrendingUp className="text-[hsl(var(--secondary))] h-10 w-10 mb-6" />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Growth & Expansion</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Established presence in 5 countries across MENA region</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Expanded team to over 50 security professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>400% revenue growth in the last 3 years</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" data-delay="200">
              <BadgeCheck className="text-[hsl(var(--secondary))] h-10 w-10 mb-6" />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Awards & Recognition</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Cybersecurity Innovator of the Year 2023</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Top 10 GRC Solutions Provider in MENA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Excellence in AI Security Solutions Award</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/10 reveal" data-delay="400">
              <Shield className="text-[hsl(var(--secondary))] h-10 w-10 mb-6" />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Certifications & Partnerships</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>ISO 27001 Certified Organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Microsoft Gold Security Partner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                  <span>Strategic Partnership with Global AI Leaders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction />
    </div>
  );
};

export default AboutUs;
