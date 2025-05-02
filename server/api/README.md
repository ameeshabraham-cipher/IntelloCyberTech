# API Endpoints

## Overview

This directory contains the implementation of API endpoints for the Intello Cyber Technologies website. These endpoints handle various backend functionalities including form submissions, email notifications, and appointment management.

## Endpoints

### `forms.ts`

Handles form submissions from the website, including contact forms and assessment requests.

Key functions:
- `submitContactForm` - Processes and stores contact form submissions
- `submitAssessmentRequest` - Handles security assessment requests

### `email.ts`

Manages email notifications for form submissions and other communications.

Key functions:
- `sendEmail` - Sends emails using configured email service
- `sendContactFormNotification` - Notifies administrators of new contact form submissions
- `sendAssessmentRequestNotification` - Notifies administrators of new assessment requests

### `appointments.ts`

Handles appointment booking and management functionality.

Key functions:
- `createAppointment` - Books new appointments
- `getAppointments` - Retrieves appointment information
- `updateAppointmentStatus` - Updates the status of existing appointments

### `admin.ts`

Provides admin-specific functionality for managing site content and user submissions.

Key functions:
- `getFormSubmissions` - Retrieves all form submissions
- `getAssessmentRequests` - Retrieves all assessment requests

## Usage in Development

These API endpoints are active during development when running the server:

```bash
npm run dev
```

## Static Site Deployment

For the static site deployment, these API endpoints are not used. Instead:

- Contact forms use Formspree (ID: mwpokerg)
- Calendly integration handles appointments directly

## Security Considerations

If implementing these endpoints in a dynamic deployment:

1. Add proper authentication and authorization
2. Implement rate limiting to prevent abuse
3. Add CSRF protection for form submissions
4. Sanitize and validate all user inputs