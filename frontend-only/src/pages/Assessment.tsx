import { Shield, CheckCircle, AlertTriangle, Lock } from 'lucide-react';
import AssessmentRequestForm from '@/components/AssessmentRequestForm';
import { Link } from 'wouter';

export default function Assessment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 cyber-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free Security <span className="text-primary">Assessment</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Identify vulnerabilities and compliance gaps in your organization with our comprehensive security assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Features */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What's Included in Your Free Assessment</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Posture Evaluation</h3>
                    <p className="text-muted-foreground">
                      A comprehensive review of your current security controls, policies, and procedures to identify potential weaknesses and areas for improvement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Vulnerability Identification</h3>
                    <p className="text-muted-foreground">
                      External scanning to identify potential vulnerabilities in your public-facing infrastructure and applications that could be exploited by attackers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compliance Gap Analysis</h3>
                    <p className="text-muted-foreground">
                      Review of your organization's compliance status with relevant standards and regulations, including ISO 27001, GDPR, UAE PDPL, and industry-specific requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mr-4">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Recommendations</h3>
                    <p className="text-muted-foreground">
                      Detailed, actionable recommendations tailored to your organization's specific needs, size, and industry to address identified security gaps and improve your overall security posture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-card rounded-xl border border-border">
                <h3 className="text-lg font-semibold mb-3">Why Choose Our Assessment?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Performed by certified security professionals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Non-invasive methodology that won't disrupt your operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Tailored to your industry and compliance requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Includes executive summary and detailed technical findings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <AssessmentRequestForm />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Assessment Process</h2>
            <p className="text-muted-foreground">
              A simple, streamlined process designed to give you valuable insights without disrupting your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-3">Request</h3>
              <p className="text-muted-foreground">
                Submit your assessment request through our secure online form.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-3">Planning</h3>
              <p className="text-muted-foreground">
                Our team will contact you to understand your requirements and prepare the assessment scope.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-3">Assessment</h3>
              <p className="text-muted-foreground">
                Our security experts conduct the agreed-upon assessment and identify vulnerabilities and compliance gaps.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3 mt-3">Report & Debrief</h3>
              <p className="text-muted-foreground">
                Receive a detailed report and a consultation to discuss findings and recommendations.
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
              Need More Comprehensive Security Testing?
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Explore our advanced security testing services, including penetration testing, red team exercises, and more.
            </p>
            <Link href="/services/penetration-testing">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Explore Security Testing Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
