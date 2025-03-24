import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { processContactForm } from "./contactForm";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      const formData = req.body;
      
      // Process and validate the contact form data
      const result = await processContactForm(formData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Form submitted successfully",
        id: result.id 
      });
    } catch (error) {
      // Handle errors
      console.error("Error processing contact form:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "An unknown error occurred" 
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
