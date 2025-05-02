# Static Build Instructions for Intello Cyber Technologies Website

## Prerequisites

1. Node.js (v16 or later)
2. NPM (v7 or later)
3. Git (to clone the repository)

## Step 1: Clone the Repository

```bash
git clone <repository-url>
cd intello-website
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Build the Static Site

This project includes a specialized build script that handles all the necessary transformations to create a fully static website from the React application:

```bash
node build/build-static.js
```

This script will:

1. Build the React application with Vite's production settings
2. Set up SPA routing support for various hosting platforms
3. Create necessary SEO files
4. Generate deployment documentation

## Step 4: Test the Static Build Locally

You can test the static build using a simple HTTP server:

```bash
npm install -g http-server
http-server dist
```

Then open `http://localhost:8080` in your browser.

## Step 5: Deploy the Static Website

The `dist` folder contains your complete static website. You can deploy it to various platforms:

### GoDaddy Web Hosting (Primary Target)

See `GODADDY_DEPLOYMENT_GUIDE.md` for detailed instructions.

### Other Hosting Options

- **Vercel**: Use the Vercel CLI or connect your GitHub repository
- **Netlify**: Use the Netlify CLI or connect your GitHub repository
- **GitHub Pages**: Push the `dist` folder to the `gh-pages` branch
- **Azure Static Web Apps**: Follow Azure's documentation

## Important Notes

### Form Handling

This website uses Formspree for handling form submissions. Before deploying, make sure to update the Formspree IDs in:

1. `client/src/components/ContactFormWithCalendly.tsx`
2. `client/src/components/AssessmentRequestForm.tsx`

### Environment Variables

The static build process automatically embeds public environment variables. If you need to add or change environment variables, update the `.env` file before building.

### SEO Files

The build process creates default SEO files if they don't exist:

- `robots.txt`
- `sitemap.xml`

Review and update these files in the `dist` folder before deploying to production.

## Troubleshooting

### Build Fails Due to Memory Constraints

If the build fails due to memory constraints (common in environments like Replit), use the lightweight build script instead:

```bash
node build/build-static-light.js
```

This will create a simplified static package. To get the full website, you'll need to build it locally on a machine with more resources.

### SPA Routing Issues

If you encounter routing issues (404 errors when directly accessing routes), make sure your hosting platform is properly configured for single-page applications. The build process creates configuration files for common platforms, but some may require additional setup.