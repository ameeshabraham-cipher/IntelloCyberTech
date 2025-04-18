import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendlyPopup } from './CalendlyBooking';
import { apiRequest } from '@/lib/queryClient';

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
import { ArrowRight, Send } from 'lucide-react';

// Form validation schema
const assessmentRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().optional(),
  message: z.string().optional(),
});

// Type from the schema
type AssessmentRequestValues = z.infer<typeof assessmentRequestSchema>;

// Props definition
interface AssessmentRequestFormProps {
  calendlyUrl: string;
}

export default function AssessmentRequestForm({ calendlyUrl }: AssessmentRequestFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

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
    },
  });

  async function onSubmit(data: AssessmentRequestValues) {
    setIsSubmitting(true);
    
    try {
      // Add service identifier
      const requestData = {
        ...data,
        service: 'assessment',
      };
      
      // Submit to our email API endpoint
      const response = await apiRequest('/api/email/assessment-request', {
        method: 'POST',
        body: JSON.stringify(requestData),
      });

      if (response.success) {
        toast({
          title: 'Assessment Request Submitted',
          description: 'Would you like to schedule a call with our security experts?',
        });
        
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error(response.message || 'Error submitting assessment request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
    <div className="bg-card/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/10 rounded-xl overflow-hidden p-8">
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
          <div className="bg-[hsl(var(--primary))]/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Send className="h-10 w-10 text-[hsl(var(--secondary))]" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Request Received!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Thank you for your interest in our security assessment. Our team will review your request and contact you shortly.
          </p>
          <div className="space-y-4">
            <p className="font-semibold">Would you like to schedule a call with one of our security experts?</p>
            <Button
              onClick={() => setShowCalendly(true)}
              className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-6 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 flex items-center"
            >
              Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      {/* Calendly integration */}
      <CalendlyPopup
        url={calendlyUrl}
        buttonText="Schedule a Call"
        buttonClassName="hidden" // We're controlling visibility separately
        prefill={{
          name: form.getValues("name"),
          email: form.getValues("email"),
        }}
      />
    </div>
  );
}