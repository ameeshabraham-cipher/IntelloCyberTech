import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalendlyPopup } from './CalendlyBooking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

// Create schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  service: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormWithCalendlyProps {
  calendlyUrl: string;
  defaultService?: string;
  showServiceField?: boolean;
}

export default function ContactFormWithCalendly({
  calendlyUrl,
  defaultService,
  showServiceField = false
}: ContactFormWithCalendlyProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: defaultService || '',
    },
  });
  
  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest('/api/forms/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        toast({
          title: "Form submitted successfully",
          description: "We've received your message and will get back to you soon.",
          variant: "default",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Form submission failed",
        description: error instanceof Error ? error.message : "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  
  return (
    <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-[hsl(var(--secondary))]/20 shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
        <p className="text-muted-foreground">
          Fill out the form below or schedule a consultation.
        </p>
      </div>
      
      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" type="email" {...field} />
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
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
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
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {showServiceField && (
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Service you're interested in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us what you're looking for" 
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
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
        
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="bg-card/50 p-6 rounded-lg border border-[hsl(var(--secondary))]/20 shadow-sm mb-8">
            <h4 className="text-xl font-semibold mb-4">Schedule a Consultation</h4>
            <p className="text-muted-foreground mb-6">
              Would you prefer to discuss your requirements directly with our consultants? Book a convenient time slot for a personalized consultation.
            </p>
            <CalendlyPopup 
              url={calendlyUrl}
              buttonText="Schedule a Meeting"
              buttonClassName="w-full"
            />
          </div>
          
          <div className="bg-card/50 p-6 rounded-lg border border-[hsl(var(--secondary))]/20 shadow-sm">
            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-[hsl(var(--secondary))]">Address</p>
                <p className="text-muted-foreground">Office 26, First Gulf Business Center, Madina Mall, Muhaisnah 4, Dubai, UAE</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--secondary))]">Phone</p>
                <p className="text-muted-foreground">+971 55 355 6787</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[hsl(var(--secondary))]">Email</p>
                <p className="text-muted-foreground">info@intellome.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}