/**
 * Build Static Site for Intello Cyber Technologies
 * 
 * This script generates a simpler static site matching the previous structure
 * with assets, blog, and images folders as shown in the screenshot.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Output directory - this will be the root of the static site
const OUTPUT_DIR = 'dist';

console.log('\n🔨 Building static site for Intello Cyber Technologies...\n');

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Create subdirectories based on the screenshot structure
console.log('📂 Creating folder structure...');
const dirs = ['assets', 'blog', 'images'];
dirs.forEach(dir => {
  if (!fs.existsSync(path.join(OUTPUT_DIR, dir))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, dir), { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Copy assets from client/public and attached_assets to the appropriate directories
console.log('\n🖼️ Copying images and assets...');

// Copy any images from attached_assets to images directory
if (fs.existsSync('attached_assets')) {
  const files = fs.readdirSync('attached_assets');
  files.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|svg|ico|gif)$/i)) {
      fs.copyFileSync(
        path.join('attached_assets', file),
        path.join(OUTPUT_DIR, 'images', file)
      );
      console.log(`✅ Copied ${file} to images/`);
    }
  });
}

// Copy logo and other assets to assets directory
if (fs.existsSync('client/public')) {
  const files = fs.readdirSync('client/public');
  files.forEach(file => {
    if (file.match(/\.(png|jpg|jpeg|svg|ico|gif|pdf|doc|docx)$/i)) {
      fs.copyFileSync(
        path.join('client/public', file),
        path.join(OUTPUT_DIR, 'assets', file)
      );
      console.log(`✅ Copied ${file} to assets/`);
    }
  });
}

// Generate CSS file
console.log('\n🎨 Creating CSS files...');
let cssContent = '';
if (fs.existsSync('client/src/index.css')) {
  cssContent = fs.readFileSync('client/src/index.css', 'utf8');
} else {
  // Create basic CSS if index.css doesn't exist
  cssContent = `:root {
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
}`;
}

// Add this CSS to assets directory
fs.writeFileSync(path.join(OUTPUT_DIR, 'assets', 'styles.css'), cssContent);
console.log('✅ Created assets/styles.css');

// Create a simple JavaScript file
console.log('\n🔧 Creating JavaScript files...');
const jsContent = `// Intello Cyber Technologies static website
document.addEventListener('DOMContentLoaded', () => {
  console.log('Intello Cyber Technologies static website loaded');
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
});
`;

// Add this JS to assets directory
fs.writeFileSync(path.join(OUTPUT_DIR, 'assets', 'main.js'), jsContent);
console.log('✅ Created assets/main.js');

// Create HTML files
console.log('\n📄 Creating HTML files...');

// Helper function to create HTML files with consistent structure
const createHtmlFile = (fileName, title, content) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Intello Cyber Technologies</title>
  <meta name="description" content="Intello Cyber Technologies - Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.">
  <link rel="stylesheet" href="/assets/styles.css">
  <link rel="icon" type="image/png" href="/assets/favicon.ico">
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="logo">
        <img src="/assets/Intello New Logo - White.png" alt="Intello Logo" height="40">
      </a>
      <nav>
        <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <span></span><span></span><span></span>
        </button>
        <ul id="mobile-menu" class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/solutions.html">Solutions</a></li>
          <li><a href="/insights.html">Insights</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    ${content}
  </main>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Intello</h3>
          <p>Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE. Established in 2003, with over 22 years of industry experience.</p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@intellome.com</p>
          <p>Phone: +971 55 355 6787</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; ${new Date().getFullYear()} Intello Cyber Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/assets/main.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), html);
  console.log(`✅ Created ${fileName}`);
};

// Create index.html (Home page)
createHtmlFile('index.html', 'Home', `
<section class="hero">
  <div class="container">
    <h1>Cybersecurity & Compliance Solutions</h1>
    <p>Comprehensive security services tailored for UAE businesses since 2003.</p>
    <a href="/contact.html" class="cta-button">Get Started</a>
  </div>
</section>

<section class="services">
  <div class="container">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div class="service-card">
        <h3>GRC Services</h3>
        <p>Governance, Risk, and Compliance services tailored for UAE regulatory frameworks.</p>
      </div>
      <div class="service-card">
        <h3>Cybersecurity</h3>
        <p>Comprehensive protection against evolving cyber threats.</p>
      </div>
      <div class="service-card">
        <h3>IT Managed Services</h3>
        <p>End-to-end IT management for businesses of all sizes.</p>
      </div>
    </div>
  </div>
</section>
`);

// Create about.html
createHtmlFile('about.html', 'About Us', `
<section class="page-header">
  <div class="container">
    <h1>About Us</h1>
  </div>
</section>

<section>
  <div class="container">
    <h2>Our Story</h2>
    <p>Intello Cyber Technologies was founded in 2003 with a clear mission: to help organizations protect their digital assets and navigate complex regulatory landscapes.</p>
    <p>Over the past two decades, we have grown to become a trusted leader in cybersecurity and compliance solutions in the UAE and beyond.</p>
  </div>
</section>
`);

// Create services.html
createHtmlFile('services.html', 'Our Services', `
<section class="page-header">
  <div class="container">
    <h1>Our Services</h1>
  </div>
</section>

<section>
  <div class="container">
    <h2>Comprehensive Cybersecurity Services</h2>
    <p>We offer a wide range of services to protect your business and ensure compliance.</p>
    <ul>
      <li>ISO 27001 Compliance</li>
      <li>SOC 2 Compliance</li>
      <li>UAE PDPL Compliance</li>
      <li>Penetration Testing</li>
      <li>Security Assessments</li>
      <li>Managed Security Services</li>
    </ul>
  </div>
</section>
`);

// Create solutions.html
createHtmlFile('solutions.html', 'Our Solutions', `
<section class="page-header">
  <div class="container">
    <h1>Our Solutions</h1>
  </div>
</section>

<section>
  <div class="container">
    <h2>Tailored Security Solutions</h2>
    <p>We provide customized solutions for various industries and compliance needs.</p>
  </div>
</section>
`);

// Create insights.html
createHtmlFile('insights.html', 'Insights', `
<section class="page-header">
  <div class="container">
    <h1>Insights</h1>
  </div>
</section>

<section>
  <div class="container">
    <h2>Industry Insights</h2>
    <p>Stay updated with the latest trends and developments in cybersecurity and compliance.</p>
    <div class="blog-posts">
      <div class="blog-card">
        <h3>Understanding the UAE PDPL</h3>
        <p>A comprehensive guide to the UAE Personal Data Protection Law and its implications for businesses.</p>
        <a href="/blog/understanding-uae-pdpl.html">Read More</a>
      </div>
    </div>
  </div>
</section>
`);

// Create contact.html
createHtmlFile('contact.html', 'Contact Us', `
<section class="page-header">
  <div class="container">
    <h1>Contact Us</h1>
  </div>
</section>

<section>
  <div class="container">
    <h2>Get in Touch</h2>
    <p>Have questions or need assistance? Contact our team today.</p>
    <form id="contact-form" action="https://formspree.io/f/mwpokerg" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</section>
`);

// Create 404.html
createHtmlFile('404.html', 'Page Not Found', `
<section class="error-page">
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/" class="cta-button">Return to Home</a>
  </div>
</section>
`);

// Create blog post example
if (!fs.existsSync(path.join(OUTPUT_DIR, 'blog'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'blog'), { recursive: true });
}

// Create a sample blog post
const blogPostHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Understanding the UAE PDPL - Intello Cyber Technologies</title>
  <meta name="description" content="A comprehensive guide to the UAE Personal Data Protection Law and its implications for businesses.">
  <link rel="stylesheet" href="/assets/styles.css">
  <link rel="icon" type="image/png" href="/assets/favicon.ico">
</head>
<body>
  <header>
    <div class="container">
      <a href="/" class="logo">
        <img src="/assets/Intello New Logo - White.png" alt="Intello Logo" height="40">
      </a>
      <nav>
        <button id="mobile-menu-toggle" class="mobile-menu-toggle">
          <span></span><span></span><span></span>
        </button>
        <ul id="mobile-menu" class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="/solutions.html">Solutions</a></li>
          <li><a href="/insights.html">Insights</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <article class="blog-post">
      <div class="container">
        <h1>Understanding the UAE Personal Data Protection Law (PDPL)</h1>
        <div class="post-meta">
          <span class="date">April 22, 2025</span>
          <span class="author">By Intello Cyber Team</span>
        </div>
        
        <div class="post-content">
          <p>The UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) represents a significant milestone in the UAE's digital transformation journey. This article provides a comprehensive guide to understanding the PDPL and its implications for businesses operating in the UAE.</p>
          
          <h2>Key Provisions of the UAE PDPL</h2>
          <p>The PDPL introduces several important concepts and requirements:</p>
          <ul>
            <li>Data subject rights</li>
            <li>Lawful basis for processing</li>
            <li>Data protection impact assessments</li>
            <li>Cross-border data transfer restrictions</li>
            <li>Data breach notification requirements</li>
          </ul>
          
          <h2>Compliance Challenges and Solutions</h2>
          <p>Businesses operating in the UAE face several challenges in achieving compliance with the PDPL:</p>
          
          <p>Stay tuned for more insights on cybersecurity and compliance.</p>
        </div>
        
        <div class="post-navigation">
          <a href="/insights.html" class="back-link">← Back to Insights</a>
        </div>
      </div>
    </article>
  </main>

  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Intello</h3>
          <p>Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE. Established in 2003, with over 22 years of industry experience.</p>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>Email: info@intellome.com</p>
          <p>Phone: +971 55 355 6787</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; ${new Date().getFullYear()} Intello Cyber Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="/assets/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'blog', 'understanding-uae-pdpl.html'), blogPostHtml);
console.log('✅ Created blog/understanding-uae-pdpl.html');

// Create configuration files for hosting platforms
console.log('\n⚙️ Creating configuration files...');

// .htaccess for Apache
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
console.log('✅ Created .htaccess for Apache');

// _redirects for Netlify
const redirectsContent = `/* /index.html 200`;
fs.writeFileSync(path.join(OUTPUT_DIR, '_redirects'), redirectsContent);
console.log('✅ Created _redirects for Netlify');

// vercel.json for Vercel
const vercelJson = `{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}`;
fs.writeFileSync(path.join(OUTPUT_DIR, 'vercel.json'), vercelJson);
console.log('✅ Created vercel.json for Vercel');

// Create deployment guide
console.log('\n📄 Creating deployment guides...');

// DEPLOYMENT.md
const deploymentMd = `# Deployment Guide for Intello Cyber Technologies Static Website

## Overview
This document provides instructions for deploying the static website to various hosting platforms.

## Deployment Options

### Option 1: Traditional Hosting (cPanel, GoDaddy, etc.)
1. Upload all files from the 'dist' directory to your web hosting service via FTP
2. Ensure the .htaccess file is included for proper routing
3. Update the domain name in robots.txt and any absolute URLs

### Option 2: Netlify
1. Sign up or log in to Netlify
2. Drag and drop the 'dist' directory to the Netlify dashboard
3. Configure your custom domain in Netlify settings

### Option 3: Vercel
1. Install Vercel CLI: \`npm install -g vercel\`
2. Navigate to the 'dist' directory: \`cd dist\`
3. Deploy: \`vercel\`
4. Follow the prompts to connect to your Vercel account

### Option 4: GitHub Pages
1. Create a GitHub repository
2. Push the contents of the 'dist' directory to the repository
3. Enable GitHub Pages in the repository settings
4. Choose the branch to deploy from

## Post-Deployment

1. Verify that all pages load correctly
2. Test contact form functionality
3. Check for any broken links or images
4. Validate mobile responsiveness

## Troubleshooting

- If pages show 404 errors, ensure the routing configuration (.htaccess, _redirects, vercel.json) is properly uploaded
- If styles are missing, check that the CSS file path is correct
- For form submission issues, verify that the Formspree endpoint is correctly configured
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'DEPLOYMENT.md'), deploymentMd);
console.log('✅ Created DEPLOYMENT.md');

// GODADDY_DEPLOYMENT_GUIDE.md
const godaddyMd = `# GoDaddy Deployment Guide for Intello Cyber Technologies

## Prerequisites
- GoDaddy hosting account with cPanel access
- FTP client (such as FileZilla)
- Static website files (from the 'dist' directory)

## Deployment Steps

### 1. Access cPanel
1. Log in to your GoDaddy account
2. Go to "Web Hosting" and select your hosting plan
3. Click "Manage" to access cPanel

### 2. File Upload via cPanel File Manager
1. In cPanel, find and click on "File Manager"
2. Navigate to the public_html directory (or desired subdirectory)
3. Click "Upload" and select all files from your local 'dist' directory
4. Ensure that .htaccess is included in the upload

### 3. Alternative: Upload via FTP
1. Open your FTP client (e.g., FileZilla)
2. Connect to your hosting using the FTP credentials from GoDaddy
   - Host: usually ftp.yourdomain.com
   - Username and password: from GoDaddy hosting credentials
   - Port: 21
3. Navigate to public_html on the remote server
4. Upload all files from your local 'dist' directory

### 4. Verify Directory Structure
Ensure your uploaded files maintain the correct structure:
- HTML files at the root
- assets/ directory containing CSS, JS, and images
- blog/ directory containing blog posts
- .htaccess file at the root

### 5. Test the Website
1. Visit your domain in a web browser
2. Test navigation to all pages
3. Check that forms are working
4. Verify that images and styles are loading correctly

### 6. Troubleshooting
- If pages return 404 errors, check that the .htaccess file was properly uploaded
- If images are not displaying, verify the correct paths in your HTML
- For form issues, ensure the Formspree ID is correctly configured

## Additional Configuration

### Setting Up SSL/HTTPS
1. In GoDaddy cPanel, find "SSL/TLS Status"
2. Follow the prompts to install an SSL certificate
3. Once installed, ensure your site redirects to HTTPS

### Email Configuration
If you need to set up custom email addresses for your domain:
1. In cPanel, locate "Email Accounts"
2. Click "Create" to set up new email accounts
3. Configure email clients using the settings provided
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'GODADDY_DEPLOYMENT_GUIDE.md'), godaddyMd);
console.log('✅ Created GODADDY_DEPLOYMENT_GUIDE.md');

// Create robots.txt and sitemap.xml
console.log('\n🔍 Creating SEO files...');

// robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml`;
fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt);
console.log('✅ Created robots.txt');

// sitemap.xml
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/about.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/services.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/solutions.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/insights.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/contact.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/blog/understanding-uae-pdpl.html</loc>
    <lastmod>${today}</lastmod>
    <priority>0.6</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapXml);
console.log('✅ Created sitemap.xml');

// Try to create a ZIP file of the static site
console.log('\n📦 Creating ZIP package...');
try {
  execSync(`zip -r intello-static-site.zip ${OUTPUT_DIR}`);
  console.log('✅ Created intello-static-site.zip');
} catch (error) {
  console.log('⚠️ Could not create ZIP package automatically. You can manually zip the dist folder.');
}

// All done!
console.log('\n🎉 Static website creation completed successfully!\n');
console.log('Your static website is available in:');
console.log(`- ${OUTPUT_DIR}/ directory`);
console.log('- intello-static-site.zip (if ZIP creation was successful)\n');
console.log('Next steps:');
console.log('1. Review the generated static files');
console.log('2. Follow the deployment guides to publish your website');
console.log('3. Update domain information in robots.txt and sitemap.xml\n');
