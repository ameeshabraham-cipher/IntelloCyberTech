// Contact form handler for Intello Cyber Technologies

// Define the contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service?: string; // Used in the CTA form
}

// Result of form processing
export interface ContactFormResult {
  id: string;
  timestamp: Date;
  data: ContactFormData;
}

// In-memory storage for form submissions
const formSubmissions: ContactFormResult[] = [];

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Process and validate contact form data
export async function processContactForm(formData: ContactFormData): Promise<ContactFormResult> {
  // Validate required fields
  if (!formData.name || formData.name.trim() === '') {
    throw new Error('Name is required');
  }
  
  if (!formData.email || formData.email.trim() === '') {
    throw new Error('Email is required');
  }
  
  if (!isValidEmail(formData.email)) {
    throw new Error('Please provide a valid email address');
  }
  
  if (!formData.message || formData.message.trim() === '') {
    throw new Error('Message is required');
  }
  
  // Generate a unique ID for the submission
  const id = `form_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
  
  // Create a contact form result object
  const result: ContactFormResult = {
    id,
    timestamp: new Date(),
    data: {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone?.trim(),
      company: formData.company?.trim(),
      subject: formData.subject?.trim() || 'General Inquiry',
      message: formData.message.trim(),
      service: formData.service?.trim()
    }
  };
  
  // Store the submission
  formSubmissions.push(result);
  
  // Log the submission (for development/monitoring purposes)
  console.log(`New contact form submission received: ${id}`);
  
  // In a real-world scenario, you might want to:
  // 1. Send an email notification to the admin
  // 2. Store the data in a database
  // 3. Integrate with a CRM system
  
  return result;
}

// Get all form submissions (for admin purposes)
export function getAllFormSubmissions(): ContactFormResult[] {
  return formSubmissions;
}

// Get a specific form submission by ID
export function getFormSubmissionById(id: string): ContactFormResult | undefined {
  return formSubmissions.find(submission => submission.id === id);
}
