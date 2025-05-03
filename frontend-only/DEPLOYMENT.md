# Deployment Guide for Intello Frontend-Only Version

## Overview

This document provides instructions for deploying the frontend-only version of the Intello website to various hosting platforms. This version is completely static and doesn't require any backend server, making it easy to deploy to any static hosting service.

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Git (optional, for version control)

## Building the Project

Before deploying, you need to create a production build of the application:

```bash
cd frontend-only
npm install
npm run build
```

This will generate a `dist` directory containing all the static files needed for deployment.

## Deployment Options

### Option 1: Netlify

1. Sign up for a [Netlify](https://www.netlify.com/) account if you don't have one
2. Install the Netlify CLI: `npm install -g netlify-cli`
3. Authenticate with Netlify: `netlify login`
4. Deploy using the CLI: `npm run deploy:netlify`
5. Follow the prompts to complete the deployment

### Option 2: Vercel

1. Sign up for a [Vercel](https://vercel.com/) account if you don't have one
2. Install the Vercel CLI: `npm install -g vercel`
3. Authenticate with Vercel: `vercel login`
4. Deploy by running: `vercel --prod`

### Option 3: GitHub Pages

1. If you're using GitHub for version control, you can deploy to GitHub Pages
2. First, install the gh-pages package: `npm install --save-dev gh-pages`
3. Add the homepage field to your package.json: 
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```
4. Deploy using the command: `npm run deploy:github`

### Option 4: Any Web Server

1. Upload the contents of the `dist` directory to any web server that can serve static files
2. Ensure that your server is configured to handle client-side routing by redirecting all requests to index.html

## Environment Considerations

### Form Submissions

This frontend-only version uses Formspree for handling form submissions. The Formspree form ID is hardcoded in the contact and assessment form components. If you need to use a different Formspree form or another form service, you'll need to update these components:

- `src/components/ContactForm.tsx`
- `src/components/AssessmentRequestForm.tsx`

### Calendly Integration

The appointment scheduling uses Calendly integration. The Calendly URL is hardcoded in:

- `src/components/CalendlyFloatingButton.tsx`
- `src/components/CalendlyBooking.tsx`

If you need to use a different Calendly account, update the URLs in these components.

## Post-Deployment Verification

After deploying the website, verify that:

1. All pages load correctly
2. Forms submit properly to Formspree
3. Calendly integration works for appointment scheduling
4. Navigation and routing work as expected
5. The site is responsive on different devices

## Troubleshooting

### Routing Issues

If you encounter routing issues (e.g., 404 errors when navigating directly to a page), you may need to configure your hosting provider to redirect all requests to index.html to enable client-side routing.

### Form Submission Problems

If forms aren't submitting properly, check that:

1. The Formspree form ID is correct
2. Your form has all the required fields
3. Network requests aren't being blocked by CORS or other issues

## Maintenance

To update the site after making changes:

1. Make your changes to the code
2. Run the build command: `npm run build`
3. Deploy again using your preferred method
