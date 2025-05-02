# Server

## Overview

This directory contains the server-side code for the Intello Cyber Technologies website. While the production deployment uses a static site approach, this server code is used during development and could be utilized for dynamic features if needed in the future.

## Structure

- `index.ts` - Main server entry point
- `routes.ts` - API route definitions
- `contactForm.ts` - Contact form processing logic
- `db.ts` - Database connection and setup
- `storage.ts` - Data storage interface and implementation
- `vite.ts` - Vite development server integration
- `api/` - API endpoint implementations

## API Endpoints

The server provides several API endpoints:

- `/api/contact` - Process contact form submissions
- `/api/assessment` - Handle security assessment requests
- `/api/appointments` - Manage appointment bookings

## Development

During development, the server runs alongside the Vite development server to provide API endpoints for the frontend.

```bash
npm run dev
```

## Static Deployment

For production deployment, the website is built as a static site without the need for a running server. The contact form functionality is provided by Formspree, eliminating the need for server-side processing.

## Future Extensions

If dynamic server functionality is needed in the future:

1. Update the database schema in `shared/schema.ts`
2. Add necessary routes in `routes.ts`
3. Implement API handlers in the `api/` directory
4. Set up proper database configuration in `db.ts`

## Environment Variables

The server relies on environment variables for configuration. See `docs/ENVIRONMENT_VARIABLES.md` for details.