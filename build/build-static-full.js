/**
 * Full Static Build Script
 * 
 * This script builds the complete React application into static files
 * and copies necessary configuration for proper SPA routing.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = 'dist';

console.log('📦 Starting full static build process for Intello Cyber Technologies website...');

// Step 1: Build the React application using Vite
console.log('🔨 Building React application with Vite...');
try {
  execSync('npx vite build --config vite.static.config.ts', { stdio: 'inherit' });
  console.log('✅ Vite build completed successfully');
} catch (error) {
  console.error('❌ Vite build failed:', error.message);
  process.exit(1);
}

// Step 2: Set up SPA routing files
console.log('🔄 Setting up SPA routing configuration...');

// Create .htaccess for Apache servers
const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Disable directory browsing
Options -Indexes

# Enable CORS
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>

# Set caching
<IfModule mod_expires.c>
  ExpiresActive On
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  # CSS, JavaScript
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`;

fs.writeFileSync(path.join(OUTPUT_DIR, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess for Apache servers');

// Create _redirects for Netlify
fs.writeFileSync(path.join(OUTPUT_DIR, '_redirects'), '/* /index.html 200');
console.log('✅ Created _redirects for Netlify');

// Create vercel.json for Vercel
const vercelConfig = JSON.stringify({
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}, null, 2);

fs.writeFileSync(path.join(OUTPUT_DIR, 'vercel.json'), vercelConfig);
console.log('✅ Created vercel.json for Vercel');

// Create .nojekyll for GitHub Pages
fs.writeFileSync(path.join(OUTPUT_DIR, '.nojekyll'), '');
console.log('✅ Created .nojekyll for GitHub Pages');

// Step 3: Create/copy SEO files
console.log('🔍 Setting up SEO files...');

// Create robots.txt if it doesn't exist
if (!fs.existsSync(path.join(OUTPUT_DIR, 'robots.txt'))) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://intellome.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /wp-admin/`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ Created robots.txt');
}

// Create sitemap.xml if it doesn't exist
if (!fs.existsSync(path.join(OUTPUT_DIR, 'sitemap.xml'))) {
  const today = new Date().toISOString().split('T')[0];
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://intellome.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://intellome.com/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://intellome.com/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://intellome.com/solutions</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://intellome.com/insights</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://intellome.com/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapXml);
  console.log('✅ Created sitemap.xml');
}

// Step 4: Copy documentation files
console.log('📋 Copying documentation files...');

// Create a README.md if it doesn't exist in the output directory
if (!fs.existsSync(path.join(OUTPUT_DIR, 'README.md'))) {
  const readmeContent = `# Intello Cyber Technologies Static Website

## Overview

This is a static website for Intello Cyber Technologies, a leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.

## Deployment

This static website can be deployed to any web hosting service:

1. Upload all files to your web hosting service
2. Ensure that the server is configured for SPA routing (using the .htaccess file for Apache servers)

## Features

- Modern, professional cybersecurity design
- Single Page Application (SPA) architecture
- Responsive design for all device sizes
- Form handling with Formspree
- SEO optimization

## Contact

For questions about this website, please contact Intello Cyber Technologies.
`;
  
  fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
  console.log('✅ Created README.md');
}

// Copy deployment guides
const docFiles = [
  'STATIC_BUILD_INSTRUCTIONS.md',
  'GODADDY_DEPLOYMENT_GUIDE.md',
  'UPDATE_GODADDY_SITE.md'
];

docFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(OUTPUT_DIR, file));
    console.log(`✅ Copied ${file}`);
  }
});

// Step 5: Create ZIP package
console.log('📦 Creating ZIP package...');
try {
  execSync(`zip -r intello-website-full.zip ${OUTPUT_DIR}`, { stdio: 'inherit' });
  console.log('✅ Created intello-website-full.zip');
} catch (error) {
  console.log('⚠️ Could not create ZIP package. You can manually zip the dist folder.');
}

// All done!
console.log('\n🎉 Full static website build completed successfully!\n');
console.log('Your static website is available in:');
console.log(`- ${OUTPUT_DIR}/ directory`);
console.log('- intello-website-full.zip\n');
console.log('Next steps:');
console.log('1. Download the ZIP package');
console.log('2. Upload to your web hosting service (see GODADDY_DEPLOYMENT_GUIDE.md)');
