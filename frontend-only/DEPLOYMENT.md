# Deployment Guide for Intello Frontend-Only Version

This guide explains how to deploy the static frontend-only version of the Intello website to various hosting platforms.

## Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

## Building the Static Site

Before deploying, you need to build the static version of the site:

```bash
cd frontend-only
npm install
npm run build
```

This will generate a `dist` directory containing all the static files needed for deployment.

## Deployment Options

### 1. Netlify

Netlify is a great option for hosting static sites with continuous deployment:

1. Create an account on [Netlify](https://www.netlify.com/)
2. Install Netlify CLI: `npm install -g netlify-cli`
3. Authenticate: `netlify login`
4. Deploy: `npm run deploy:netlify`
5. Follow the prompts to complete the deployment

### 2. GitHub Pages

GitHub Pages is free and integrates well with GitHub repositories:

1. Install the gh-pages package: `npm install -g gh-pages`
2. Configure your repository to use GitHub Pages
3. Deploy: `npm run deploy:github`

### 3. Vercel

Vercel provides excellent performance and automatic deployments:

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm install -g vercel`
3. Authenticate: `vercel login`
4. Deploy: `vercel --prod`

### 4. AWS S3 with CloudFront

For enterprise-grade hosting with high performance:

1. Create an S3 bucket configured for static website hosting
2. Set up CloudFront distribution pointing to the S3 bucket
3. Upload the contents of the `dist` directory to your S3 bucket
4. Configure CloudFront to use HTTPS

### 5. Traditional Web Hosting

To deploy to a traditional web hosting service:

1. Build the project as described above
2. Upload the contents of the `dist` directory to your web hosting service using FTP or their control panel
3. Ensure that the server is configured to serve the `index.html` file for all routes

## Handling Routes

Since this is a single-page application, you need to ensure that all routes redirect to the index.html file. Most modern hosting services handle this automatically, but for traditional web hosting, you might need to add a `.htaccess` file or similar configuration.

For Apache servers, include this `.htaccess` file in your `dist` directory:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## External Services Configuration

### Form Handling with Formspree

The contact and assessment forms use Formspree for submission handling. The Formspree ID is embedded in the code (mwpokerg). If you need to change this:

1. Create a new form on [Formspree](https://formspree.io/)
2. Update the form ID in `src/components/ContactForm.tsx` and `src/components/AssessmentRequestForm.tsx`

### Calendly Integration

The appointment scheduling uses Calendly. The URL is hardcoded as `https://calendly.com/ameesh-intellome`. To change this:

1. Update the URL in `src/components/CalendlyFloatingButton.tsx` and `src/components/CalendlyBooking.tsx`

## Post-Deployment Verification

After deploying, verify that:

1. The website loads correctly
2. All routes work (try navigating to some services and solutions pages)
3. Forms submit properly
4. Calendly integration works
5. The site is correctly styled with dark theme
6. All images and assets load properly

## Troubleshooting

If you encounter any issues:

- For routing problems, ensure your hosting service is correctly configured for single-page applications
- For styling issues, check that all CSS files are properly built and included
- For missing assets, verify that all paths in the code use relative URLs
- For form submission errors, check your Formspree account configuration
