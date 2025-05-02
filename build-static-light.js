import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a lighter build script for static deployment
console.log('📦 Starting lightweight static build process for Intello Cyber Technologies website...');

// Make sure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Step 1: Create static files manually since vite build is too resource-intensive
console.log('🔨 Creating essential static files...');

function createStaticFiles() {
  // Create basic index.html
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
        <img src="https://intellome.com/images/intello-new-logo.png" alt="Intello Cyber Technologies" class="logo">
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
          <p>This is a lightweight static site placeholder. The full website must be built locally due to Replit resource constraints.</p>
          <p>The Company Profile page and search functionality have been successfully removed as requested.</p>
          <p>Please follow the instructions in STATIC_BUILD_INSTRUCTIONS.md to build the full static website.</p>
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

  fs.writeFileSync('dist/index.html', indexHtml);
  console.log('✅ Created index.html');

  // Create 404.html (identical to index.html for SPA routing)
  fs.writeFileSync('dist/404.html', indexHtml);
  console.log('✅ Created 404.html for SPA routing');
  
  // Create .htaccess file for Apache servers like GoDaddy
  const htaccessContent = fs.existsSync('htaccess-template') 
    ? fs.readFileSync('htaccess-template', 'utf8')
    : `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>`;
  
  fs.writeFileSync('dist/.htaccess', htaccessContent);
  console.log('✅ Created .htaccess for GoDaddy hosting');
  
  // Create robots.txt
  const robotsTxt = `User-agent: *
Allow: /

# Important: Replace with your actual domain
Sitemap: https://intellome.com/sitemap.xml

# Block access to admin areas if you have any
Disallow: /admin/
Disallow: /wp-admin/`;
  
  fs.writeFileSync('dist/robots.txt', robotsTxt);
  console.log('✅ Created robots.txt file');
  
  // Create sitemap.xml
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

  // Copy the README and guides into the dist folder
  if (fs.existsSync('STATIC_BUILD_INSTRUCTIONS.md')) {
    fs.copyFileSync('STATIC_BUILD_INSTRUCTIONS.md', 'dist/STATIC_BUILD_INSTRUCTIONS.md');
    console.log('✅ Copied STATIC_BUILD_INSTRUCTIONS.md');
  }
  
  if (fs.existsSync('GODADDY_DEPLOYMENT_GUIDE.md')) {
    fs.copyFileSync('GODADDY_DEPLOYMENT_GUIDE.md', 'dist/GODADDY_DEPLOYMENT_GUIDE.md');
    console.log('✅ Copied GODADDY_DEPLOYMENT_GUIDE.md');
  }
  
  if (fs.existsSync('UPDATE_GODADDY_SITE.md')) {
    fs.copyFileSync('UPDATE_GODADDY_SITE.md', 'dist/UPDATE_GODADDY_SITE.md');
    console.log('✅ Copied UPDATE_GODADDY_SITE.md');
  }

  // Create a deployment info file
  const deploymentInfo = `# Intello Cyber Technologies Static Website

## Important Note

This is a simplified static website placeholder created in Replit. Due to resource constraints, the full static website must be built locally.

## What Has Been Changed

1. Removed the Company Profile page from navigation
2. Removed the search functionality from the website

## How to Build the Full Website

Follow the instructions in STATIC_BUILD_INSTRUCTIONS.md to build the complete static website on your local machine.

## Deployment to GoDaddy

Follow the instructions in GODADDY_DEPLOYMENT_GUIDE.md to deploy the static website to GoDaddy hosting.

## Form Handling

This website uses Formspree for form handling. Please ensure you've updated the Formspree IDs in:

1. client/src/components/ContactFormWithCalendly.tsx
2. client/src/components/AssessmentRequestForm.tsx
`;
  
  fs.writeFileSync('dist/README.md', deploymentInfo);
  console.log('✅ Created README.md');

  console.log('🎉 Static website package created successfully!');
  console.log('');
  console.log('Your static site package is ready in the dist/ folder.');
  console.log('');
  console.log('⚠️ Important: This is a simplified package. To build the full website:');
  console.log('1. Download the entire project');
  console.log('2. Build it locally following STATIC_BUILD_INSTRUCTIONS.md');
  console.log('3. Deploy the locally built website to GoDaddy');
}

try {
  createStaticFiles();
} catch (error) {
  console.error('❌ Error during build process:', error);
}