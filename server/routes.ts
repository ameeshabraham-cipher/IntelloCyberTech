import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { processContactForm, getAllFormSubmissions, getFormSubmissionById } from "./contactForm";
import * as fs from 'fs';
import * as path from 'path';

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
  
  // Get all form submissions (for admin purposes)
  app.get('/api/admin/form-submissions', (req, res) => {
    try {
      const submissions = getAllFormSubmissions();
      res.status(200).json({ 
        success: true, 
        submissions 
      });
    } catch (error) {
      console.error("Error retrieving form submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve form submissions" 
      });
    }
  });
  
  // Get a specific form submission by ID
  app.get('/api/admin/form-submissions/:id', (req, res) => {
    try {
      const id = req.params.id;
      const submission = getFormSubmissionById(id);
      
      if (!submission) {
        return res.status(404).json({ 
          success: false, 
          message: "Form submission not found" 
        });
      }
      
      res.status(200).json({ 
        success: true, 
        submission 
      });
    } catch (error) {
      console.error("Error retrieving form submission:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve form submission" 
      });
    }
  });
  
  // Get all client logo images from the client-images directory
  app.get('/api/client-logos', (req, res) => {
    try {
      // In Node.js environment with ES modules, __dirname is not directly available
      const rootDir = process.cwd();
      const clientImagesDir = path.join(rootDir, 'client/public/images/client-images');
      
      // Check if directory exists
      if (!fs.existsSync(clientImagesDir)) {
        return res.status(200).json([]);
      }
      
      // Read all files in the directory
      const files = fs.readdirSync(clientImagesDir);
      
      // Filter to only include image files
      const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      });
      
      // Create client logo objects
      const clientLogos = imageFiles.map((file, index) => {
        // Generate a name from the filename (remove extension, replace hyphens with spaces)
        const name = path.basename(file, path.extname(file))
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, letter => letter.toUpperCase());
        
        // Create the logo object
        return {
          name: name,
          imagePath: `/images/client-images/${file}`
        };
      });
      
      res.status(200).json(clientLogos);
    } catch (error) {
      console.error("Error retrieving client logos:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve client logos" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
