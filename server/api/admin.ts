import { Router } from 'express';
import { db } from '../db';
import { contactForms, assessmentRequests } from '@shared/schema';
import { desc, eq } from 'drizzle-orm';

const router = Router();

// Get all contact form submissions
router.get('/form-submissions', async (req, res) => {
  try {
    // Fetch contact form submissions from the database
    const contactFormSubmissions = await db.select().from(contactForms).orderBy(desc(contactForms.createdAt));
    
    // Map database results to expected format
    const submissions = contactFormSubmissions.map(form => ({
      id: form.id.toString(),
      timestamp: form.createdAt.toISOString(),
      data: {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        subject: form.subject || undefined,
        message: form.message,
        service: form.service || undefined
      }
    }));
    
    return res.status(200).json({
      success: true,
      submissions
    });
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching form submissions',
      error: String(error)
    });
  }
});

// Get all assessment request submissions
router.get('/assessment-requests', async (req, res) => {
  try {
    // Fetch assessment request submissions from the database
    const assessmentRequestsData = await db.select().from(assessmentRequests).orderBy(desc(assessmentRequests.createdAt));
    
    // Map database results to expected format
    const submissions = assessmentRequestsData.map(request => ({
      id: request.id.toString(),
      timestamp: request.createdAt.toISOString(),
      data: {
        name: request.name,
        email: request.email,
        phone: request.phone || undefined,
        company: request.company,
        industry: request.industry || undefined,
        message: request.message || undefined,
        service: request.service || 'assessment'
      }
    }));
    
    return res.status(200).json({
      success: true,
      submissions
    });
  } catch (error) {
    console.error('Error fetching assessment requests:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching assessment requests',
      error: String(error)
    });
  }
});

// Get a specific form submission by ID
router.get('/form-submissions/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid submission ID'
      });
    }
    
    const [form] = await db.select().from(contactForms).where(eq(contactForms.id, id));
    
    if (!form) {
      return res.status(404).json({
        success: false,
        message: 'Form submission not found'
      });
    }
    
    const submission = {
      id: form.id.toString(),
      timestamp: form.createdAt.toISOString(),
      data: {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        company: form.company || undefined,
        subject: form.subject || undefined,
        message: form.message,
        service: form.service || undefined
      }
    };
    
    return res.status(200).json({
      success: true,
      submission
    });
  } catch (error) {
    console.error('Error fetching form submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching form submission',
      error: String(error)
    });
  }
});

// Get a specific assessment request by ID
router.get('/assessment-requests/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request ID'
      });
    }
    
    const [request] = await db.select().from(assessmentRequests).where(eq(assessmentRequests.id, id));
    
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Assessment request not found'
      });
    }
    
    const submission = {
      id: request.id.toString(),
      timestamp: request.createdAt.toISOString(),
      data: {
        name: request.name,
        email: request.email,
        phone: request.phone || undefined,
        company: request.company,
        industry: request.industry || undefined,
        message: request.message || undefined,
        service: request.service || 'assessment'
      }
    };
    
    return res.status(200).json({
      success: true,
      submission
    });
  } catch (error) {
    console.error('Error fetching assessment request:', error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching assessment request',
      error: String(error)
    });
  }
});

export default router;