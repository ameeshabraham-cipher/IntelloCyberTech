# Simplified Express Server for Static Frontend

## Overview

This server has been simplified to focus on serving the static frontend application. The original database-backed functionality has been removed since the site now uses external services like Formspree for form handling and Calendly for appointment booking.

## Server Structure

- **index.ts**: The main server file that sets up Express and handles requests
- **routes.ts**: Defines API routes and sets up the HTTP server
- **vite.ts**: Configures the development environment and static file serving
- **db.ts**: A minimal mock database module (no actual database connection)

## API Endpoints

The server maintains a small set of API endpoints:

- `GET /api/health`: Simple health check endpoint
- `GET /api/client-logos`: Dynamic endpoint to fetch client logos from the filesystem
- `POST /api/email/contact`: Mock endpoint for contact form (actual submissions go to Formspree)
- `POST /api/email/assessment-request`: Mock endpoint for assessment requests (actual submissions go to Formspree)

## Development vs Production

- In development, the server uses Vite middleware to serve the frontend
- In production, the server serves static files from the build directory

## External Services Integration

The original backend functionality has been replaced with external services:

- **Form submissions**: Now handled by Formspree (ID: mwpokerg)
- **Appointment booking**: Now handled by Calendly (URL: https://calendly.com/ameesh-intellome)

The database code remains as a non-functional mock to prevent errors in any code that might still reference it.

## Backup Files

Original files that are no longer needed are stored in the `server/backup/` directory for reference.

## Development

During development, the server runs using:

```bash
npm run dev
```

This starts the Express server which handles both the API endpoints and serves the frontend using Vite's development server.