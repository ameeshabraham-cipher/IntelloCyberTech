# API Directory (Simplified)

## Overview

This directory previously contained the API endpoint implementations for the Intello Cyber Technologies website. As part of the simplification to a static site approach, these endpoints have been moved to the backup directory.

## Current State

The original API endpoints have been simplified and are now defined directly in `server/routes.ts`:

- `GET /api/health`: Simple health check endpoint
- `GET /api/client-logos`: Dynamic endpoint to fetch client logos from the filesystem
- `POST /api/email/contact`: Mock endpoint for contact form (actual submissions go to Formspree)
- `POST /api/email/assessment-request`: Mock endpoint for assessment requests (actual submissions go to Formspree)

## External Services

The functionality previously handled by these API endpoints is now managed by external services:

- **Form submissions**: Now handled by Formspree (ID: mwpokerg)
- **Appointment booking**: Now handled by Calendly (URL: https://calendly.com/ameesh-intellome)

## Backup

The original API implementation files have been moved to `server/backup/` for reference:

- `forms.ts`: Form submission handling 
- `email.ts`: Email notifications
- `appointments.ts`: Appointment booking and management
- `admin.ts`: Admin functionality for site management

## Development

During development, the minimal endpoints defined in `server/routes.ts` are available when running the server:  

```bash
npm run dev
```
