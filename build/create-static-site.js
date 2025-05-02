/**
 * Create Static Site
 * Simple script to create a static website for Intello Cyber Technologies
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = 'dist';

// Create output directory if it doesn't exist
console.log('📦 Creating static website...');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Create images directory
if (!fs.existsSync(path.join(OUTPUT_DIR, 'images'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'images'), { recursive: true });
}

// Copy all logo images from attached_assets to the images directory
console.log('🖼️ Copying images from attached_assets...');
if (fs.existsSync('attached_assets')) {
  const imageFiles = fs.readdirSync('attached_assets');
  
  imageFiles.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg')) {
      fs.copyFileSync(
        path.join('attached_assets', file),
        path.join(OUTPUT_DIR, 'images', file)
      );
      console.log(`✅ Copied ${file}`);
    }
  });
}

// Create index.html with the minimal static website
console.log('🔨 Creating HTML files...');
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intello Cyber Technologies</title>
  <style>
    :root {
      --primary: #c10020;
      --background: #121212;
      --text: #ffffff;
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', -apple-system, sans-serif;
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
      background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
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
      color: #ccc;
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
        <img src="/images/Intello New Logo - White.png" alt="Intello Cyber Technologies" class="logo">
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
          <h2>Intello Cyber Technologies</h2>
          <p>This is the static website for Intello Cyber Technologies. The full functional website will be available soon.</p>
          <p>The complete static site package includes all necessary assets and configurations for deployment.</p>
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
        <p>&copy; ${new Date().getFullYear()} Intello Cyber Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
</body>
</html>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), indexHtml);
console.log('✅ Created index.html and 404.html');

// Create .htaccess for SPA routing
console.log('🔄 Creating SPA routing configuration...');
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
</IfModule>`;

fs.writeFileSync(path.join(OUTPUT_DIR, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess for Apache servers');

// Create robots.txt
console.log('🔍 Creating SEO files...');
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://intellome.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /wp-admin/`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt);
console.log('✅ Created robots.txt');

// Create sitemap.xml
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

// Create a README.md
console.log('📄 Creating documentation files...');
const readmeContent = `# Intello Cyber Technologies Static Website

## Overview

This is a static website for Intello Cyber Technologies, a leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.

## Deployment

This static website can be deployed to any web hosting service:

1. Upload all files and folders to your web hosting service
2. Ensure that the server is configured for SPA routing (using the .htaccess file for Apache servers)

## Files and Structure

- \`index.html\` - Main HTML file with all styles embedded
- \`images/\` - Directory containing images used throughout the site
- \`.htaccess\` - Apache server configuration for SPA routing
- \`robots.txt\` and \`sitemap.xml\` - SEO files

## Support

For questions about this website, please contact Intello Cyber Technologies.
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
console.log('✅ Created README.md');

// Copy deployment guides
console.log('📋 Copying deployment guides...');
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

// Create a ZIP package
console.log('📦 Creating ZIP package...');
try {
  execSync(`zip -r intello-static-site.zip ${OUTPUT_DIR}`);
  console.log('✅ Created intello-static-site.zip');
} catch (error) {
  console.log('⚠️ Could not create ZIP package. You can manually zip the dist folder.');
}

// All done!
console.log('\n🎉 Static website creation completed successfully!\n');
console.log('Your static website is available in:');
console.log(`- ${OUTPUT_DIR}/ directory`);
console.log('- intello-static-site.zip\n');
console.log('Next steps:');
console.log('1. Download the ZIP package');
console.log('2. Extract and test locally by opening dist/index.html in a browser');
console.log('3. Upload to your web hosting service (see GODADDY_DEPLOYMENT_GUIDE.md)');
