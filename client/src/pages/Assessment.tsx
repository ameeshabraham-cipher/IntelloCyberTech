import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/lib/animations';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const AssessmentPage = () => {
  useScrollReveal();
  const { toast } = useToast();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    primaryConcern: 'compliance',
    specificRequirements: '',
    message: '',
    service: 'assessment',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      primaryConcern: value
    });
  };
  
  const nextStep = () => {
    // Simple validation for Step 1
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.company) {
        toast({
          title: "Missing information",
          description: "Please fill in all the required fields.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    if (!formData.name || !formData.email || !formData.company) {
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
          title: "Assessment Request Submitted",
          description: "We'll contact you shortly to schedule your free assessment."
        });
        
        // Reset form and go to thank you step
        setStep(4);
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background"></div>
        
        {/* Cyber grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(235, 52, 67, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(235, 52, 67, 0.03) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        
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
      <section className="py-8 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 rounded-xl overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-background/50 p-6 border-b border-[hsl(var(--secondary))]/10">
              <div className="flex items-center justify-between max-w-md mx-auto">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-[hsl(var(--secondary))]' : 'text-muted-foreground'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-1 ${step >= 1 ? 'bg-[hsl(var(--secondary))] text-white' : 'bg-muted text-muted-foreground'}`}>
                    1
                  </div>
                  <span className="text-xs">Basic Info</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-[hsl(var(--secondary))]' : 'bg-muted'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-[hsl(var(--secondary))]' : 'text-muted-foreground'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-1 ${step >= 2 ? 'bg-[hsl(var(--secondary))] text-white' : 'bg-muted text-muted-foreground'}`}>
                    2
                  </div>
                  <span className="text-xs">Requirements</span>
                </div>
                <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-[hsl(var(--secondary))]' : 'bg-muted'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-[hsl(var(--secondary))]' : 'text-muted-foreground'}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-1 ${step >= 3 ? 'bg-[hsl(var(--secondary))] text-white' : 'bg-muted text-muted-foreground'}`}>
                    3
                  </div>
                  <span className="text-xs">Details</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6 reveal">
                    <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm text-muted-foreground block mb-2">
                          Full Name <span className="text-[hsl(var(--secondary))]">*</span>
                        </Label>
                        <Input 
                          type="text" 
                          id="name" 
                          className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
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
                          Company Name <span className="text-[hsl(var(--secondary))]">*</span>
                        </Label>
                        <Input 
                          type="text" 
                          id="company" 
                          className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                          placeholder="Acme Inc."
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <Button
                        type="button"
                        className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center"
                        onClick={nextStep}
                      >
                        <span>Next Step</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Company & Needs */}
                {step === 2 && (
                  <div className="space-y-6 reveal">
                    <h2 className="text-2xl font-bold mb-6">Company & Security Needs</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="industry" className="text-sm text-muted-foreground block mb-2">
                          Industry
                        </Label>
                        <Select value={formData.industry} onValueChange={(value) => handleSelectChange('industry', value)}>
                          <SelectTrigger className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finance">Banking & Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce & Retail</SelectItem>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="companySize" className="text-sm text-muted-foreground block mb-2">
                          Company Size
                        </Label>
                        <Select value={formData.companySize} onValueChange={(value) => handleSelectChange('companySize', value)}>
                          <SelectTrigger className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors">
                            <SelectValue placeholder="Select your company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="501-1000">501-1000 employees</SelectItem>
                            <SelectItem value="1000+">1000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label className="text-sm text-muted-foreground block mb-4">
                          Primary Security or Compliance Concern
                        </Label>
                        <RadioGroup value={formData.primaryConcern} onValueChange={handleRadioChange} className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="compliance" id="compliance" />
                            <Label htmlFor="compliance" className="cursor-pointer">Regulatory Compliance</Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="dataprotection" id="dataprotection" />
                            <Label htmlFor="dataprotection" className="cursor-pointer">Data Protection & Privacy</Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="threatprevention" id="threatprevention" />
                            <Label htmlFor="threatprevention" className="cursor-pointer">Threat Prevention</Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="cloudsecurity" id="cloudsecurity" />
                            <Label htmlFor="cloudsecurity" className="cursor-pointer">Cloud Security</Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="cursor-pointer">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-transparent border border-[hsl(var(--secondary))]/30 text-white font-medium py-3 px-6 rounded-full hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center"
                        onClick={nextStep}
                      >
                        <span>Next Step</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Additional Information */}
                {step === 3 && (
                  <div className="space-y-6 reveal">
                    <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="specificRequirements" className="text-sm text-muted-foreground block mb-2">
                          Specific Requirements or Regulations
                        </Label>
                        <Select value={formData.specificRequirements} onValueChange={(value) => handleSelectChange('specificRequirements', value)}>
                          <SelectTrigger className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors">
                            <SelectValue placeholder="Select specific compliance needs (if any)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="iso27001">ISO 27001</SelectItem>
                            <SelectItem value="soc2">SOC 2</SelectItem>
                            <SelectItem value="gdpr">GDPR</SelectItem>
                            <SelectItem value="hipaa">HIPAA</SelectItem>
                            <SelectItem value="pcidss">PCI DSS</SelectItem>
                            <SelectItem value="cmmc">CMMC</SelectItem>
                            <SelectItem value="none">None Specific</SelectItem>
                            <SelectItem value="multiple">Multiple Requirements</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm text-muted-foreground block mb-2">
                          Tell us more about your security challenges or requirements
                        </Label>
                        <Textarea 
                          id="message" 
                          rows={5} 
                          className="w-full bg-card/50 border border-[hsl(var(--secondary))]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[hsl(var(--secondary))] transition-colors" 
                          placeholder="Please describe your current security challenges, requirements, or any specific questions you have."
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-transparent border border-[hsl(var(--secondary))]/30 text-white font-medium py-3 px-6 rounded-full hover:bg-[hsl(var(--secondary))]/10 transition-all duration-300"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center"
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Thank You */}
                {step === 4 && (
                  <div className="text-center py-8 reveal">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Your security assessment request has been received. One of our security experts will contact you within 24 hours to schedule your free assessment.
                    </p>
                    <div className="pt-4">
                      <Button
                        type="button"
                        className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center mx-auto"
                        onClick={() => window.location.href = '/'}
                      >
                        <span>Return to Homepage</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Testimonials or Trust Indicators */}
          {step !== 4 && (
            <div className="max-w-3xl mx-auto mt-16 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <Shield className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expert Analysts</h3>
                  <p className="text-sm text-muted-foreground">Certified security professionals with years of industry experience</p>
                </div>
                <div className="p-6">
                  <CheckCircle className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Custom Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Tailored advice specific to your business and industry requirements</p>
                </div>
                <div className="p-6">
                  <Lock className="h-10 w-10 text-[hsl(var(--secondary))] mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Confidential Analysis</h3>
                  <p className="text-sm text-muted-foreground">All information is kept strictly confidential with secure handling</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AssessmentPage;