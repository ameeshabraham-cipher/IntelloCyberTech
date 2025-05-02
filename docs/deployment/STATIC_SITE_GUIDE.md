# Intello Cyber Technologies: Static Site Deployment Guide

This guide walks you through converting the Intello website to a fully static site using Formspree for form handling. This allows for simple deployment to platforms like Vercel, Netlify, GitHub Pages, or Azure Static Web Apps.

## Prerequisites

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create two forms in your Formspree dashboard:
   - One for the contact form
   - One for the assessment request form
3. Get the form IDs for both forms (they look like `xgejpkwy`)

## Form Components with Formspree Integration

Both forms are already configured with your Formspree form ID:

### Contact Form

The contact form in `client/src/components/ContactFormWithCalendly.tsx` is configured with your Formspree ID:

```javascript
const FORMSPREE_FORM_ID = 'mwpokerg';
```

### Assessment Request Form

The assessment request form in `client/src/components/AssessmentRequestForm.tsx` is also configured:

```javascript
const FORMSPREE_ASSESSMENT_FORM_ID = 'mwpokerg';
```

### Formspree Configuration

If you need to modify your form configuration or set up email notifications, log in to the Formspree dashboard at [formspree.io](https://formspree.io) and manage your form settings there.

## Step 2: Generate the Static Build

Run the following command in the terminal:

```bash
node build-static.js
```

This script will:
1. Build the static site with Vite using our specialized static configuration (`vite.static.config.ts`)
2. Create necessary configuration files for different hosting platforms (Vercel, Netlify, GitHub Pages)
3. Generate a `dist` folder with your static website optimized for deployment
4. Add SPA routing support to ensure your React app works correctly when deployed statically

## Step 3: Deploy the Static Site

You can deploy the generated `dist` folder to any of these platforms:

### Vercel (Recommended)

1. Sign up/login at [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload the `dist` folder
3. No additional configuration needed - `vercel.json` is already created

### Netlify

1. Sign up/login at [netlify.com](https://netlify.com)
2. Import your GitHub repository or drag-and-drop the `dist` folder
3. No additional configuration needed - `_redirects` file is already created

### GitHub Pages

1. Push the `dist` folder contents to the `gh-pages` branch
2. Enable GitHub Pages in repository settings
3. Set the source to the `gh-pages` branch
4. Your site will be live at `https://username.github.io/repository`

### Azure Static Web Apps

Follow the detailed steps in the `AZURE_DEPLOYMENT_GUIDE.md` file.

## Important Notes

1. The static site handles SPA routing through various platform-specific configurations
2. All form submissions go through Formspree directly
3. Calendly integration continues to work normally
4. No backend server or database is required
5. The site is fully functional without any backend API calls

## Troubleshooting

If forms aren't working:
1. Verify your Formspree form IDs are correct
2. Check that the forms are active in your Formspree dashboard
3. Ensure you have proper CORS settings in Formspree (domain whitelist)

For deployment issues, check the platform-specific documentation for the hosting service you're using.