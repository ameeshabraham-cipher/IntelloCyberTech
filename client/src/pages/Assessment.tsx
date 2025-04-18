import { useEffect } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { Shield, CheckCircle, Lock } from 'lucide-react';
import AssessmentRequestForm from '@/components/AssessmentRequestForm';

const AssessmentPage = () => {
  useScrollReveal();
  
  // Set page title on mount
  useEffect(() => {
    document.title = 'Security Assessment | Intello.';
  }, []);
  
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden cyber-grid-overlay">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        
        {/* Glow effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 reveal">
            <div className="inline-block bg-card/50 backdrop-blur px-4 py-2 rounded-full border border-[hsl(var(--secondary))]/20 mb-6">
              <span className="text-[hsl(var(--secondary))] font-medium">No-Obligation Security Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">Free</span> Cybersecurity Assessment
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Our experts will analyze your current security posture and provide personalized recommendations to strengthen your defenses against evolving threats.
            </p>
          </div>
        </div>
      </section>
      
      {/* Assessment Form */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <AssessmentRequestForm calendlyUrl="https://calendly.com/ameesh-intellome" />
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mt-8 reveal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <Shield className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Expert Analysts</h3>
                <p className="text-sm text-muted-foreground">Certified security professionals with years of industry experience</p>
              </div>
              <div className="p-6">
                <CheckCircle className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Comprehensive</h3>
                <p className="text-sm text-muted-foreground">Thorough assessment covering all aspects of your security infrastructure</p>
              </div>
              <div className="p-6">
                <Lock className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Actionable Reports</h3>
                <p className="text-sm text-muted-foreground">Clear, prioritized recommendations you can implement immediately</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentPage;