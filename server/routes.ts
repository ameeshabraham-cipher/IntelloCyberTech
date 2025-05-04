import { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import * as fs from 'fs';
import * as path from 'path';
import { setupVite, serveStatic } from './vite';

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint - keep this simple endpoint for monitoring
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
  });
  
  // Get all client logo images from the client-images directory
  // This is still useful for displaying client logos dynamically
  app.get('/api/client-logos', (req, res) => {
    try {
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
      const clientLogos = imageFiles.map((file) => {
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

  // Simple mock API for contact forms to prevent frontend errors
  // These endpoints don't store data anymore since we're using Formspree
  app.post('/api/email/contact', (req, res) => {
    res.status(200).json({ 
      success: true, 
      message: "Contact form submitted. Using Formspree for actual submissions." 
    });
  });

  app.post('/api/email/assessment-request', (req, res) => {
    res.status(200).json({ 
      success: true, 
      message: "Assessment request submitted. Using Formspree for actual submissions." 
    });
  });

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
