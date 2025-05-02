# Server Components

## Overview

This directory contains the backend server components for the Intello Cyber Technologies website. For the recommended static site deployment, these server components are not needed, as all functionality is handled client-side or through third-party services like Formspree.

## Components

- `index.ts` - Main server entry point
- `routes.ts` - API route definitions
- `db.ts` - Database connection management
- `storage.ts` - Data storage interface
- `contactForm.ts` - Contact form processing logic
- `vite.ts` - Development server configuration

## API Endpoints

The server provides several API endpoints for form submissions and other functionality:

- `/api/forms/contact` - Submit contact form data
- `/api/forms/assessment` - Submit assessment request form data

## Usage in Development

During development, the server is started automatically with the `npm run dev` command. The server runs on port 5000 and serves both the API endpoints and the frontend application through Vite's development server.

## Deployment Notes

For the recommended static site deployment, the server components are not used. All form submissions are handled through Formspree, which eliminates the need for server-side processing.

If server-side functionality is required, consider deploying to a platform that supports Node.js applications, such as Heroku, Vercel, or Azure App Service.