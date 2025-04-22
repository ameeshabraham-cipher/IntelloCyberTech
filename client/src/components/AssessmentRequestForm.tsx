import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle, ShieldCheck, AlertTriangle } from 'lucide-react';

// Form validation schema
const assessmentRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().optional(),
  message: z.string().optional(),
  assessment_type: z.string().optional(),
});

// Type from the schema
type AssessmentRequestValues = z.infer<typeof assessmentRequestSchema>;

// Props definition
interface AssessmentRequestFormProps {
  className?: string;
  defaultAssessmentType?: string;
}

export default function AssessmentRequestForm({ 
  className = "",
  defaultAssessmentType = ""
}: AssessmentRequestFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Initialize form
  const form = useForm<AssessmentRequestValues>({
    resolver: zodResolver(assessmentRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
      assessment_type: defaultAssessmentType || '',
    },
  });

  // Replace with your actual Formspree form ID for the assessment form
  const FORMSPREE_ASSESSMENT_FORM_ID = 'xdorpkwy'; // Replace with your actual ID
  
  async function onSubmit(data: AssessmentRequestValues) {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // Add service identifier and format
      const requestData = {
        ...data,
        service: 'security-assessment',
        _subject: `Security Assessment Request from ${data.company}`,
        assessment_type: data.assessment_type || 'Not specified',
        request_date: new Date().toISOString()
      };
      
      // Submit to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ASSESSMENT_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      
      const responseData = await response.json();
      
      if (response.ok) {
        toast({
          title: 'Assessment Request Submitted',
          description: 'Thank you for your interest. Our security team will review your request and contact you shortly.',
        });
        
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error(responseData.error || 'Error submitting assessment request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('There was a problem submitting your request. Please try again or contact us directly.');
      toast({
        title: 'Submission Error',
        description: 'There was a problem submitting your request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`bg-card/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 rounded-xl overflow-hidden p-8 ${className}`}>
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Request Security Assessment</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name <span className="text-[hsl(var(--secondary))]">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Full Name" 
                          className="bg-card/50 border border-[hsl(var(--secondary))]/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address <span className="text-[hsl(var(--secondary))]">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your@email.com" 
                          type="email" 
                          className="bg-card/50 border border-[hsl(var(--secondary))]/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 234 567 8900" 
                          type="tel" 
                          className="bg-card/50 border border-[hsl(var(--secondary))]/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name <span className="text-[hsl(var(--secondary))]">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company Name" 
                          className="bg-card/50 border border-[hsl(var(--secondary))]/20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-card/50 border border-[hsl(var(--secondary))]/20">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="finance">Banking & Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="ecommerce">E-Commerce & Retail</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="assessment_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assessment Type</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-card/50 border border-[hsl(var(--secondary))]/20">
                            <SelectValue placeholder="Select assessment type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="vulnerability">Vulnerability Assessment</SelectItem>
                          <SelectItem value="penetration">Penetration Testing</SelectItem>
                          <SelectItem value="cloud">Cloud Security Assessment</SelectItem>
                          <SelectItem value="compliance">Compliance Gap Assessment</SelectItem>
                          <SelectItem value="social">Social Engineering Assessment</SelectItem>
                          <SelectItem value="risk">Risk Assessment</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure Security Review</SelectItem>
                          <SelectItem value="application">Application Security Testing</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your security needs</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your current security challenges or requirements" 
                        className="bg-card/50 border border-[hsl(var(--secondary))]/20 min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-6 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center"
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Submit Assessment Request"}
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]  to-[hsl(var(--secondary))] opacity-10 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[hsl(var(--primary))]  to-[hsl(var(--secondary))] opacity-5 animate-pulse animation-delay-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShieldCheck className="h-12 w-12 text-[hsl(var(--secondary))]" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">Security Assessment Request Received</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Thank you for your interest in Intello's security assessment services. Our cybersecurity team will review your requirements and get back to you shortly.
          </p>
          
          <div className="grid gap-4 max-w-md mx-auto">
            <div className="border border-[hsl(var(--secondary))]/10 rounded-lg p-4 bg-background/50 backdrop-blur-sm">
              <h3 className="font-medium text-foreground flex items-center mb-2">
                <CheckCircle className="mr-2 h-4 w-4 text-[hsl(var(--secondary))]" />
                Next Steps
              </h3>
              <p className="text-sm text-muted-foreground">
                A security specialist will contact you within 1-2 business days to discuss your requirements and customize an assessment approach for your organization.
              </p>
            </div>
            
            <div className="flex justify-center mt-2">
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mr-2 border-[hsl(var(--secondary))]/20 hover:bg-[hsl(var(--secondary))]/5">
                Submit Another Request
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}