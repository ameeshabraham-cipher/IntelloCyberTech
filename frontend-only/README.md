# Intello Frontend

This is a static frontend-only version of the Intello website, optimized for deployment to static hosting platforms. It includes all the key pages and functionality of the original site but doesn't require a backend server.

## Features

- React-based single-page application using TypeScript
- Responsive design using Tailwind CSS
- Static form handling via Formspree
- Appointment scheduling via Calendly integration
- Complete cybersecurity services and solutions showcase
- Comprehensive pages for all services, solutions, and industry verticals

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
  - `ui/`: Shadcn UI components
  - Other components like NavbarModern, Footer, etc.
- `src/pages/`: Page components for different routes
  - `services/`: Pages for individual service offerings
  - `solutions/`: Pages for cybersecurity solutions
  - `industries/`: Pages for industry-specific solutions
  - `components/`: Demo and utility pages
- `src/lib/`: Utility functions and configurations
- `src/hooks/`: Custom React hooks
- `scripts/`: Build and utility scripts
  - `generate-pages.cjs`: Script to generate placeholder pages

## Special Scripts

- `npm run generate-pages`: Generates placeholder pages for all services, solutions, and industries
- `npm run deploy`: Prepares the site for deployment
- `npm run deploy:netlify`: Deploys the site to Netlify (requires Netlify CLI)
- `npm run deploy:github`: Deploys the site to GitHub Pages (requires gh-pages)

## Deployment

This frontend-only version can be deployed to any static hosting service:

1. Run `npm run build` to generate the static files
2. Upload the contents of the `dist` directory to your web server or hosting service

No server-side processing is required as all dynamic functionality is handled through external services.

For detailed deployment instructions, see the `DEPLOYMENT.md` file in this directory.
