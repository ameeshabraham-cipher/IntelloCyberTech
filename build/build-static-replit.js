/**
 * Replit-Optimized Static Build Script
 * 
 * This script creates a complete static website package without requiring
 * the full Vite build process, which may exceed Replit resource limits.
 * 
 * Usage: node build/build-static-replit.js
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Configuration
const OUTPUT_DIR = 'dist';
const DOMAIN = 'intellome.com';
const DATE = new Date().toISOString().split('T')[0];

// Make sure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

console.log('📦 Starting Replit-optimized static build process...');

// Function to copy directory recursively
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all files and directories in the source directory
  const entries = fs.readdirSync(source, { withFileTypes: true });

  // Process each entry
  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyDirectory(sourcePath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, destPath);
    }
  }
}

// Create placeholder index.html
function createPlaceholderHTML() {
  console.log('🔨 Creating placeholder HTML files...');
  
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intello Cyber Technologies</title>
  <meta name="description" content="Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.">
  <style>
    :root {
      --primary: #c10020;
      --secondary: #f0f0f0;
      --background: #121212;
      --text: #ffffff;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
    }
    
    header {
      background-color: rgba(18, 18, 18, 0.95);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }
    
    .logo {
      height: 40px;
    }
    
    .nav-links {
      display: flex;
      gap: 30px;
    }
    
    .nav-link {
      color: var(--text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav-link:hover {
      color: var(--primary);
    }
    
    main {
      padding-top: 120px;
    }
    
    .hero {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/cybersecurity-bg.jpg');
      background-size: cover;
      background-position: center;
      padding: 100px 0;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      color: var(--text);
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 700px;
      margin: 0 auto 40px;
      color: var(--secondary);
    }
    
    .btn {
      display: inline-block;
      background-color: var(--primary);
      color: white;
      padding: 12px 30px;
      border-radius: 4px;
      font-weight: 500;
      text-decoration: none;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #a5001b;
    }
    
    section {
      padding: 80px 0;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 60px;
    }
    
    .section-title h2 {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    
    footer {
      background-color: #0a0a0a;
      padding: 60px 0 20px;
    }
    
    .footer-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    
    .footer-column {
      flex: 1;
      min-width: 250px;
      margin-bottom: 30px;
    }
    
    .footer-column h3 {
      color: var(--text);
      margin-bottom: 20px;
      font-size: 1.2rem;
    }
    
    .footer-links {
      list-style: none;
      padding: 0;
    }
    
    .footer-links li {
      margin-bottom: 10px;
    }
    
    .footer-links a {
      color: #aaa;
      text-decoration: none;
      transition: color 0.3s;
    }
    
    .footer-links a:hover {
      color: var(--primary);
    }
    
    .footer-bottom {
      text-align: center;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #333;
      color: #777;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <img src="/images/intello-logo-white.png" alt="Intello Cyber Technologies" class="logo">
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About Us</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/solutions" class="nav-link">Solutions</a>
          <a href="/insights" class="nav-link">Insights</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Cybersecurity & Compliance Solutions</h1>
        <p>Comprehensive security services tailored for UAE businesses since 2003. Specializing in ISO 27001, SOC 2, UAE PDPL, and advanced cybersecurity solutions.</p>
        <a href="/contact" class="btn">Get Started</a>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-title">
          <h2>Intello Static Website Package</h2>
          <p>This is a static site placeholder for Intello Cyber Technologies.</p>
          <p>The full website should be built locally using the instructions in STATIC_BUILD_INSTRUCTIONS.md.</p>
          <p>The Company Profile page and search functionality have been removed as requested.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h3>About Intello</h3>
          <p>Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.</p>
        </div>
        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/insights">Insights</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@intellome.com</p>
          <p>Phone: +971 55 355 6787</p>
          <p>Address: Dubai, UAE</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Intello Cyber Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
  fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), indexHtml); // Same content for SPA routing
  console.log('✅ Created index.html and 404.html');
}

// Create SPA routing configuration files
function createRoutingFiles() {
  console.log('🔄 Setting up SPA routing support...');
  
  // Create .htaccess for Apache servers (like GoDaddy)
  const htaccessContent = fs.existsSync('htaccess-template')
    ? fs.readFileSync('htaccess-template', 'utf8')
    : `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /index.html [L]\n</IfModule>`;
  
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
}

// Create or copy SEO files
function setupSEOFiles() {
  console.log('🔍 Setting up SEO files...');
  
  // robots.txt
  if (fs.existsSync('public/robots.txt')) {
    fs.copyFileSync('public/robots.txt', path.join(OUTPUT_DIR, 'robots.txt'));
    console.log('✅ Copied robots.txt from public directory');
  } else {
    const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://${DOMAIN}/sitemap.xml\n\n# Block access to admin areas if you have any\nDisallow: /admin/\nDisallow: /wp-admin/`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt);
    console.log('✅ Created robots.txt');
  }
  
  // sitemap.xml
  if (fs.existsSync('public/sitemap.xml')) {
    fs.copyFileSync('public/sitemap.xml', path.join(OUTPUT_DIR, 'sitemap.xml'));
    console.log('✅ Copied sitemap.xml from public directory');
  } else {
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://${DOMAIN}/</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://${DOMAIN}/about</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://${DOMAIN}/services</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://${DOMAIN}/contact</loc>\n    <lastmod>${DATE}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapXml);
    console.log('✅ Created sitemap.xml');
  }
}

// Create assets directory and copy logo
function setupAssets() {
  console.log('🖼️ Setting up basic assets...');
  
  // Create images directory
  const imagesDir = path.join(OUTPUT_DIR, 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Check if we have the logo in attached_assets and copy it
  const possibleLogos = [
    'attached_assets/Intello New Logo - White.png',
    'attached_assets/intello Tech Landscape-White@4x.png'
  ];
  
  let logoCopied = false;
  for (const logoPath of possibleLogos) {
    if (fs.existsSync(logoPath)) {
      fs.copyFileSync(logoPath, path.join(imagesDir, 'intello-logo-white.png'));
      console.log(`✅ Copied logo from ${logoPath}`);
      logoCopied = true;
      break;
    }
  }
  
  if (!logoCopied) {
    console.log('⚠️ Could not find logo files to copy');
  }
  
  // Copy any additional assets from public directory if it exists
  if (fs.existsSync('public')) {
    try {
      copyDirectory('public', OUTPUT_DIR);
      console.log('✅ Copied all files from public directory');
    } catch (error) {
      console.error('⚠️ Error copying from public directory:', error.message);
    }
  }
}

// Copy documentation files
function copyDocumentation() {
  console.log('📄 Copying documentation files...');
  
  const docFiles = [
    { path: 'STATIC_BUILD_INSTRUCTIONS.md', required: true },
    { path: 'GODADDY_DEPLOYMENT_GUIDE.md', required: false },
    { path: 'UPDATE_GODADDY_SITE.md', required: false }
  ];
  
  for (const doc of docFiles) {
    if (fs.existsSync(doc.path)) {
      fs.copyFileSync(doc.path, path.join(OUTPUT_DIR, path.basename(doc.path)));
      console.log(`✅ Copied ${doc.path}`);
    } else if (doc.required) {
      console.log(`⚠️ Required documentation file ${doc.path} not found`);
    }
  }
  
  // Create a README.md if it doesn't exist
  const readmePath = path.join(OUTPUT_DIR, 'README.md');
  if (!fs.existsSync(readmePath)) {
    const readmeContent = `# Intello Cyber Technologies Static Website

## Overview

This is a static website for Intello Cyber Technologies, a leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.

## Deployment

This static website package can be deployed to:

- GoDaddy Web Hosting (see GODADDY_DEPLOYMENT_GUIDE.md)
- Vercel
- Netlify
- GitHub Pages
- Any static web host

## Form Handling

This website uses Formspree for form handling. Ensure the Formspree IDs are properly configured before deploying.

## SPA Routing

This is a Single Page Application (SPA) and includes necessary configuration files for various hosting platforms:

- .htaccess for Apache servers (like GoDaddy)
- _redirects for Netlify
- vercel.json for Vercel
- .nojekyll for GitHub Pages

## Building the Complete Website

This package contains the essential files. For the complete website with all assets and features:

1. Follow instructions in STATIC_BUILD_INSTRUCTIONS.md
2. Build the website locally
3. Deploy the complete build
`;
    
    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ Created README.md');
  }
}

// Create ZIP package
function createZipPackage() {
  console.log('📦 Creating ZIP package...');
  
  try {
    const zipCommand = `cd ${OUTPUT_DIR} && zip -r ../intello-website-static.zip * .* -x "*.DS_Store" -x "*__MACOSX*"  -x "*.git*"  -x "*node_modules*" 2>/dev/null || zip -r ../intello-website-static.zip * .*`;
    execSync(zipCommand, { stdio: 'inherit' });
    console.log('✅ Created intello-website-static.zip package');
  } catch (error) {
    console.error('⚠️ Error creating ZIP package:', error.message);
    console.log('You can manually zip the contents of the dist directory if needed.');
  }
}

// Main execution
try {
  createPlaceholderHTML();
  createRoutingFiles();
  setupSEOFiles();
  setupAssets();
  copyDocumentation();
  createZipPackage();
  
  console.log('\n🎉 Static website creation completed successfully!\n');
  console.log('Your static website files are available in:');
  console.log(`- ${OUTPUT_DIR}/ directory (for individual files)`);
  console.log('- intello-website-static.zip (complete package)\n');
  console.log('Next steps:');
  console.log('1. Download the ZIP package');
  console.log('2. Upload to your web hosting (see GODADDY_DEPLOYMENT_GUIDE.md)');
  console.log('3. For a complete build with all features, follow STATIC_BUILD_INSTRUCTIONS.md');
} catch (error) {
  console.error('❌ Error during build process:', error);
}