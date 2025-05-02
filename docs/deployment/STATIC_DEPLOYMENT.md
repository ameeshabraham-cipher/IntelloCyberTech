# Static Deployment Guide for Intello Cyber Technologies Website

This guide provides instructions for deploying the Intello Cyber Technologies website as a static site without requiring any backend server.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A free Formspree account for handling form submissions
- A static hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Steps to Deploy

### 1. Set up Form Submission Endpoints

The website uses Formspree for form handling:

1. Go to [Formspree.io](https://formspree.io) and create an account
2. Create two forms:
   - One for the Contact page
   - One for the Assessment page

3. Update the form endpoints in the website code:
   - Open `client/src/pages/Contact.tsx` and update the `formspreeEndpoint` variable with your Formspree form URL
   - Open `client/src/pages/Assessment.tsx` and update the `formspreeEndpoint` variable with your Formspree form URL

### 2. Build the Static Version

1. Open a terminal in the project root
2. Install all dependencies:
   ```
   npm install
   ```
3. Add a script to package.json (if not already present):
   ```json
   "build:static": "vite build --config vite.static.config.ts"
   ```
4. Build the static version:
   ```
   npm run build:static
   ```
   
   **Note**: If you're unable to modify package.json, you can run the build command directly:
   ```
   npx vite build --config vite.static.config.ts
   ```
   
5. The static files will be generated in the `dist` directory

### 3. Deploy to a Static Hosting Service

#### Option 1: Netlify

1. Create an account at [Netlify](https://www.netlify.com/)
2. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```
   netlify login
   ```
4. Deploy the site:
   ```
   netlify deploy --prod --dir=dist
   ```

#### Option 2: Vercel

1. Create an account at [Vercel](https://vercel.com/)
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Login to Vercel:
   ```
   vercel login
   ```
4. Deploy the site:
   ```
   vercel --prod
   ```

#### Option 3: GitHub Pages

For detailed GitHub Pages deployment instructions, see `GITHUB_PAGES_DEPLOYMENT.md`.

Summary steps:
1. Create a new GitHub repository
2. Push your code to the repository (including the GitHub Action workflow)
3. Enable GitHub Pages in the repository settings (use GitHub Actions source)
4. The site will automatically build and deploy when you push to the main branch

**Note:** We've already configured the necessary files for GitHub Pages deployment:
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- SPA routing fix for GitHub Pages (`public/404.html` and script in `index.html`)
- Base path configuration in `vite.static.config.ts`

### 4. Post-Deployment Configuration

After deploying your static site, make sure to:

1. Set up custom domain (if needed)
2. Configure SSL for secure connections
3. Test all forms to ensure they're working correctly
4. Add any necessary redirects for SEO purposes

## Additional Configurations

### Configure _redirects for SPA Routing

For hosting services like Netlify, we've already created a `_redirects` file in the `public` directory with:

```
/* /index.html 200
```

This ensures that client-side routing works correctly.

### For Vercel

We've included a `vercel.json` file in the project root with:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Updating Your Website

To update your website after deployment:

1. Make your changes to the source code
2. Build the static version again:
   ```
   npx vite build --config vite.static.config.ts
   ```
3. Deploy the new build to your hosting service

## Troubleshooting

- **Forms not working?** Double-check your Formspree endpoints and make sure you've confirmed your email address with Formspree.
- **Routing issues?** Ensure you have the proper redirect rules configured for your hosting provider.
- **Assets not loading?** Check that all asset paths are relative, not absolute.

## Need More Help?

Contact the developer for additional support or custom deployment requirements.