import { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { setupVite, serveStatic } from './vite';

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint - keep this simple endpoint for monitoring only
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'healthy' });
  });
  
  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
