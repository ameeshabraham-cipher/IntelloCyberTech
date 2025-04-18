import type { Express } from "express";
import { createServer, type Server } from "http";
import * as fs from 'fs';
import * as path from 'path';
import emailRouter from './api/email';

export async function registerRoutes(app: Express): Promise<Server> {
  // Register API routers
  app.use('/api/email', emailRouter);

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
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
