import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { CalendlyPopup } from './CalendlyBooking';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

// Create schema for form validation
const assessmentRequestSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters' }),
  contactName: z.string().min(2, { message: 'Contact name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  industry: z.string().min(1, { message: 'Please select an industry' }),
  companySize: z.string().min(1, { message: 'Please select company size' }),
  assessmentType: z.string().min(1, { message: 'Please select assessment type' }),
  additionalInfo: z.string().optional(),
});

type AssessmentRequestValues = z.infer<typeof assessmentRequestSchema>;

interface AssessmentRequestFormProps {
  calendlyUrl: string;
}

export default function AssessmentRequestForm({ calendlyUrl }: AssessmentRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();
  
  // Industry options
  const industries = [
    { value: 'banking', label: 'Banking & Finance' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'government', label: 'Government' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'energy', label: 'Energy & Utilities' },
    { value: 'technology', label: 'Technology & IT' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'telecom', label: 'Telecommunications' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'education', label: 'Education' },
    { value: 'transport', label: 'Transportation & Logistics' },
    { value: 'other', label: 'Other' },
  ];
  
  // Company size options
  const companySizes = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '501-1000', label: '501-1000 employees' },
    { value: '1000+', label: 'More than 1000 employees' },
  ];
  
  // Assessment type options
  const assessmentTypes = [
    { value: 'security', label: 'Security Assessment' },
    { value: 'compliance', label: 'Compliance Gap Analysis' },
    { value: 'penetration', label: 'Penetration Testing' },
    { value: 'risk', label: 'Risk Assessment' },
    { value: 'governance', label: 'Governance Assessment' },
    { value: 'vendor', label: 'Vendor Security Assessment' },
    { value: 'cloud', label: 'Cloud Security Assessment' },
    { value: 'application', label: 'Application Security Assessment' },
    { value: 'other', label: 'Other' },
  ];
  
  // Initialize form
  const form = useForm<AssessmentRequestValues>({
    resolver: zodResolver(assessmentRequestSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      industry: '',
      companySize: '',
      assessmentType: '',
      additionalInfo: '',
    },
  });
  
  async function onSubmit(data: AssessmentRequestValues) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest(
        'POST',
        '/api/forms/assessment',
        data
      );
      
      setSubmitSuccess(true);
      form.reset();
      toast({
        title: "Assessment request submitted",
        description: "We'll review your request and contact you shortly to discuss the next steps.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Request submission failed",
        description: error instanceof Error ? error.message : "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/20 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Security & Compliance Assessment Request</h2>
        <p className="text-muted-foreground">
          Complete the form below to request an assessment or schedule a consultation to discuss your needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
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
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.value} value={industry.value}>
                              {industry.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companySize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Size</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {companySizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="assessmentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assessment Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select assessment type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {assessmentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide any additional details about your assessment needs" 
                        className="min-h-32"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Assessment'}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="bg-card/50 p-6 rounded-lg border border-[hsl(var(--secondary))]/20 shadow-sm mb-8">
            <h4 className="text-xl font-semibold mb-4">Schedule a Consultation</h4>
            <p className="text-muted-foreground mb-6">
              Would you prefer to discuss your assessment needs directly with our experts? Book a convenient time slot for a personalized consultation.
            </p>
            <CalendlyPopup 
              url={calendlyUrl}
              buttonText="Schedule a Meeting"
              buttonClassName="w-full"
            />
          </div>
          
          <div className="bg-card/50 p-6 rounded-lg border border-[hsl(var(--secondary))]/20 shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Why Request an Assessment?</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                <span>Identify security vulnerabilities & compliance gaps</span>
              </li>
              <li className="flex items-start">
                <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                <span>Get customized recommendations & remediation plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                <span>Meet regulatory requirements & industry standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-[hsl(var(--secondary))] mr-2">•</span>
                <span>Strengthen your overall security posture</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}