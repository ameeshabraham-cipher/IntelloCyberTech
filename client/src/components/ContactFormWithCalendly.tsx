import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Send } from 'lucide-react';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  service: z.string().optional(),
});

// Type from the schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

// Props definition
interface ContactFormProps {
  defaultService?: string;
  showServiceField?: boolean;
}

export default function ContactForm({
  defaultService,
  showServiceField = false,
}: ContactFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // Submit to our email API endpoint
      const response = await apiRequest('/api/email/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.success) {
        toast({
          title: 'Message Sent',
          description: 'Thank you for your message. We\'ll be in touch soon.',
        });
        
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error(response.message || 'Error sending message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Submission Error',
        description: 'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-[hsl(var(--secondary))]/20">
      {!isSubmitted ? (
        <>
          <h2 className="text-2xl font-montserrat font-bold mb-6 flex items-center">
            <Send className="mr-3 text-[hsl(var(--secondary))] h-5 w-5" /> 
            Send Us a Message
          </h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name <span className="text-[hsl(var(--secondary))]">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Name" 
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
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company" 
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can we help you?" 
                          className="bg-card/50 border border-[hsl(var(--secondary))]/20" 
                          {...field} 
                        />
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
                        <FormLabel>Service of Interest</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-card/50 border border-[hsl(var(--secondary))]/20">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="grc">GRC Services</SelectItem>
                            <SelectItem value="audit">IT Security & Audit</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                            <SelectItem value="ai">AI-Powered Solutions</SelectItem>
                            <SelectItem value="compliance">Compliance</SelectItem>
                            <SelectItem value="other">Other Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message <span className="text-[hsl(var(--secondary))]">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your inquiry in detail" 
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
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-card font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[hsl(var(--secondary))]/20 transition-all duration-300 glow-hover"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="bg-[hsl(var(--primary))]/10 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Send className="h-10 w-10 text-[hsl(var(--secondary))]" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
          </p>
        </div>
      )}
    </div>
  );
}