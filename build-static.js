import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a build script for static deployment
console.log('📦 Starting static build process for Intello Cyber Technologies website...');

// Step 1: Build the static site with Vite using our static-specific config
console.log('🔨 Building with Vite using static site configuration...');
exec('npx vite build --config vite.static.config.ts', (err, stdout, stderr) => {
  if (err) {
    console.error('❌ Build failed:', err);
    return;
  }
  
  console.log('✅ Vite build successful');
  console.log(stdout);
  
  // Step 2: Setup SPA routing support
  console.log('🔄 Setting up SPA routing support...');
  
  try {
    // Create 404.html for GitHub Pages SPA handling
    const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
    fs.writeFileSync('dist/404.html', indexHtml);
    console.log('✅ Created 404.html for SPA routing');
    
    // Create _redirects file for Netlify
    fs.writeFileSync('dist/_redirects', '/* /index.html 200');
    console.log('✅ Created _redirects for Netlify');
    
    // Create vercel.json for Vercel
    const vercelConfig = JSON.stringify({
      "rewrites": [
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    }, null, 2);
    fs.writeFileSync('dist/vercel.json', vercelConfig);
    console.log('✅ Created vercel.json for Vercel');
    
    // Create .nojekyll file for GitHub Pages
    fs.writeFileSync('dist/.nojekyll', '');
    console.log('✅ Created .nojekyll for GitHub Pages');
    
    // Create .htaccess file for Apache servers like GoDaddy
    const htaccessContent = fs.readFileSync('htaccess-template', 'utf8');
    fs.writeFileSync('dist/.htaccess', htaccessContent);
    console.log('✅ Created .htaccess for GoDaddy hosting');
    
    // Step 3: Copy SEO-related files
    console.log('🔍 Setting up SEO files...');
    
    // Copy robots.txt from public folder
    if (fs.existsSync('public/robots.txt')) {
      fs.copyFileSync('public/robots.txt', 'dist/robots.txt');
      console.log('✅ Copied robots.txt file');
    } else {
      // Create robots.txt if it doesn't exist
      const robotsTxt = `User-agent: *
Allow: /

# Important: Replace with your actual domain
Sitemap: https://intellome.com/sitemap.xml

# Block access to admin areas if you have any
Disallow: /admin/
Disallow: /wp-admin/`;
      fs.writeFileSync('dist/robots.txt', robotsTxt);
      console.log('✅ Created robots.txt file');
    }
    
    // Copy sitemap.xml from public folder
    if (fs.existsSync('public/sitemap.xml')) {
      fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml');
      console.log('✅ Copied sitemap.xml file');
    } else {
      // Basic sitemap if one doesn't exist
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://intellome.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://intellome.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://intellome.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://intellome.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
      fs.writeFileSync('dist/sitemap.xml', sitemapXml);
      console.log('✅ Created sitemap.xml file');
    }

    // Step 4: Create a deployment info file
    const deploymentInfo = `# Intello Cyber Technologies Static Website

This is a statically generated website for Intello Cyber Technologies. 

## Form Handling

This website uses Formspree for form handling. Please ensure you've updated the Formspree IDs in:

1. client/src/components/ContactFormWithCalendly.tsx
2. client/src/components/AssessmentRequestForm.tsx

## Deployment Instructions

You can deploy this static website to any of the following platforms:

### Vercel (Recommended)
1. Connect your GitHub repository
2. Import the project
3. Deploy

### Netlify
1. Connect your GitHub repository or upload the dist folder
2. No additional configuration needed - _redirects is already set up

### GitHub Pages
1. Push the dist folder to the gh-pages branch
2. Enable GitHub Pages in repository settings
3. Set the source to the gh-pages branch

### Azure Static Web Apps
1. Follow the steps in AZURE_DEPLOYMENT_GUIDE.md

### GoDaddy Web Hosting
1. Follow the steps in GODADDY_DEPLOYMENT_GUIDE.md
`;
    
    fs.writeFileSync('dist/DEPLOYMENT.md', deploymentInfo);
    console.log('✅ Created deployment info file');
    
    // Copy the GoDaddy deployment guide
    if (fs.existsSync('GODADDY_DEPLOYMENT_GUIDE.md')) {
      fs.copyFileSync('GODADDY_DEPLOYMENT_GUIDE.md', 'dist/GODADDY_DEPLOYMENT_GUIDE.md');
      console.log('✅ Copied GoDaddy deployment guide')
    }
    
    console.log('🎉 Build completed successfully!');
    console.log('');
    console.log('Your static site is ready in the dist/ folder.');
    console.log('');
    console.log('📝 Deployment options:');
    console.log('1. Vercel (Recommended): Upload the dist folder or connect your repository');
    console.log('2. Netlify: Upload the dist folder or connect your repository');
    console.log('3. GitHub Pages: Push the dist folder to the gh-pages branch');
    console.log('4. Azure Static Web Apps: Follow the Azure guide');
    console.log('5. GoDaddy Web Hosting: Follow the GoDaddy guide in GODADDY_DEPLOYMENT_GUIDE.md');
    console.log('');
    console.log('⚠️ Important: Before deploying, make sure to update the Formspree form IDs');
    console.log('   in the ContactFormWithCalendly.tsx and AssessmentRequestForm.tsx files.');
    console.log('');
  } catch (error) {
    console.error('❌ Error during build process:', error);
  }
});