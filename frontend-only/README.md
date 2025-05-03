# Intello Frontend

This is a static frontend-only version of the Intello website, optimized for deployment to static hosting platforms. It includes all the key pages and functionality of the original site but doesn't require a backend server.

## Features

- React-based single-page application using TypeScript
- Responsive design using Tailwind CSS
- Static form handling via Formspree
- Appointment scheduling via Calendly integration
- Complete cybersecurity services and solutions showcase

## Getting Started

### Development

To run the development server:

```bash
cd frontend-only
npm install
npm run dev
```

The site will be available at http://localhost:5173/

### Building for Production

To create a production build:

```bash
cd frontend-only
npm run build
```

This will generate a `dist` directory with static files that can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, or any standard web server.

## External Services Integration

- **Form submissions**: Uses Formspree (ID: mwpokerg) for contact and assessment forms
- **Appointment scheduling**: Uses Calendly (URL: https://calendly.com/ameesh-intellome)

## Project Structure

- `src/components/`: Reusable UI components
- `src/pages/`: Page components for different routes
- `src/lib/`: Utility functions and configurations
- `src/hooks/`: Custom React hooks

## Deployment

This frontend-only version can be deployed to any static hosting service:

1. Run `npm run build` to generate the static files
2. Upload the contents of the `dist` directory to your web server or hosting service

No server-side processing is required as all dynamic functionality is handled through external services.
