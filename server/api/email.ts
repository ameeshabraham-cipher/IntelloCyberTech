import { Router } from 'express';
import { z } from 'zod';

// Define validation schemas
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  service: z.string().optional(),
  subject: z.string().optional()
});

const assessmentRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  industry: z.string().optional(),
  service: z.string().optional().default("assessment"),
  message: z.string().optional()
});

// Type definitions from our schemas
type ContactFormData = z.infer<typeof contactFormSchema>;
type AssessmentRequestData = z.infer<typeof assessmentRequestSchema>;

// Simple in-memory storage for form submissions (no database needed)
// This will reset on server restart, but emails will still be sent
const contactFormSubmissions: ContactFormData[] = [];
const assessmentRequests: AssessmentRequestData[] = [];

// Function to send email (will replace with actual email sending)
async function sendEmail(to: string, subject: string, body: string): Promise<boolean> {
  // In a production environment, we would integrate with SendGrid or another email service
  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
  
  // For demo purposes, we'll just log and return success
  // In production, this would use SMTP or an email API
  return true;
}

// Create the router
const router = Router();

// Contact form submission endpoint
router.post('/contact', async (req, res) => {
  try {
    // Validate the request body
    const formData = contactFormSchema.parse(req.body);
    
    // Store the submission (for demo purposes)
    contactFormSubmissions.push(formData);
    
    // Format email body
    const emailBody = `
      New contact form submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      ${formData.phone ? `Phone: ${formData.phone}` : ''}
      ${formData.company ? `Company: ${formData.company}` : ''}
      ${formData.service ? `Service Interest: ${formData.service}` : ''}
      ${formData.subject ? `Subject: ${formData.subject}` : ''}
      
      Message:
      ${formData.message}
    `;
    
    // Send email notification
    const emailSubject = formData.subject || "New Contact Form Submission";
    await sendEmail("info@intellome.com", emailSubject, emailBody);
    
    // Return success
    return res.status(200).json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: "An error occurred processing your request" 
    });
  }
});

// Assessment request endpoint
router.post('/assessment-request', async (req, res) => {
  try {
    // Validate the request body
    const requestData = assessmentRequestSchema.parse(req.body);
    
    // Store the submission (for demo purposes)
    assessmentRequests.push(requestData);
    
    // Format email body
    const emailBody = `
      New security assessment request:
      
      Name: ${requestData.name}
      Email: ${requestData.email}
      ${requestData.phone ? `Phone: ${requestData.phone}` : ''}
      Company: ${requestData.company}
      ${requestData.industry ? `Industry: ${requestData.industry}` : ''}
      ${requestData.message ? `Additional Information:\n${requestData.message}` : ''}
    `;
    
    // Send email notification
    await sendEmail("info@intellome.com", "New Security Assessment Request", emailBody);
    
    // Return success
    return res.status(200).json({ 
      success: true, 
      message: "Assessment request submitted successfully" 
    });
  } catch (error) {
    console.error('Assessment request submission error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Validation error", 
        errors: error.errors 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: "An error occurred processing your request" 
    });
  }
});

export default router;