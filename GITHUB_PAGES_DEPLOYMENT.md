# GitHub Pages Deployment Guide

This guide provides step-by-step instructions to deploy the Intello Cyber Technologies website on GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Repository pushed to GitHub

## Deployment Steps

### 1. Configure Repository for GitHub Pages

1. Create a GitHub repository (if not already done)
2. Push your code to the repository
3. Go to the repository settings on GitHub
4. Scroll down to the "GitHub Pages" section
5. Under "Source", select "GitHub Actions"

### 2. Automated Deployment Setup (Already Configured)

This project includes an automated GitHub Actions workflow file:
- Located at: `.github/workflows/deploy.yml`
- The workflow:
  - Builds the static site using Vite
  - Deploys to the `gh-pages` branch
  - Automatically runs when you push to main/master branch

### 3. SPA Routing Configuration (Already Set Up)

For proper client-side routing with GitHub Pages, we've included:
1. A `404.html` file that redirects to index.html
2. JavaScript code in `index.html` to handle client-side routing
3. Proper base path in `vite.static.config.ts`

### 4. Manual Deployment Process

If you prefer manual deployment:

1. Build the site locally:
   ```
   npx vite build --config vite.static.config.ts
   ```

2. Deploy the `dist` directory content to the `gh-pages` branch:
   ```
   git checkout -b gh-pages
   git rm -rf .
   cp -r dist/* .
   git add .
   git commit -m "Manual deployment"
   git push -f origin gh-pages
   ```

### 5. Form Submission Configuration

Before deploying:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create form endpoints for:
   - Contact form
   - Assessment form
3. Replace the placeholder values in:
   - `client/src/pages/Contact.tsx` (around line 56)
   - `client/src/pages/Assessment.tsx` (around line 102)

## Troubleshooting

### 404 Errors on Page Refresh or Direct URL Access

If you're experiencing 404 errors when:
- Refreshing a page
- Accessing a URL directly (e.g., yoursite.github.io/services)

Check that:
1. The `404.html` file exists in your `public` directory
2. The SPA routing script is properly included in `index.html`
3. Your repository name matches the `base` property in `vite.static.config.ts`

### Build Configuration

This project uses a special Vite configuration for GitHub Pages deployment:

1. **Root Directory Configuration**:
   - The build process uses the `client` directory as the root
   - Public assets are properly included from the `public` directory
   - Output is directed to the `dist` directory at the project root

2. **Path Resolution**:
   - All paths are automatically resolved relative to the configured root
   - No manual path adjustments are needed in HTML files
   - The `base` path in the config is set to match your repository name

3. **Troubleshooting Build Issues**:
   - If the GitHub Action build fails, check the Actions tab for error details
   - Verify that the repository has proper permissions for GitHub Actions
   - Common errors and solutions:
     - **Base path issues**: Ensure the `base` option in `vite.static.config.ts` matches your repository name
     - **Missing assets**: Check that all referenced assets exist in the public directory
   - Try a manual build to identify issues:
     ```bash
     # Test build locally
     npx vite build --config vite.static.config.ts
     ```

### Custom Domain

To use a custom domain:
1. Go to repository Settings > Pages
2. Enter your domain in the "Custom domain" field
3. Create appropriate DNS records with your domain provider
4. Ensure HTTPS is enforced (checkbox below the domain field)

## Updating Your Website

To update your deployed website:

1. Make changes to your source code
2. Commit and push to your main/master branch
3. GitHub Actions will automatically rebuild and deploy your site
4. Wait a few minutes for the changes to propagate