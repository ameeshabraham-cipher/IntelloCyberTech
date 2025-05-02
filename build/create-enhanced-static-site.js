/**
 * Create Enhanced Static Site
 * Comprehensive script to create a full-featured static website for Intello Cyber Technologies
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = 'dist';

// Create output directory if it doesn't exist
console.log('📦 Creating enhanced static website...');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Create images directory
if (!fs.existsSync(path.join(OUTPUT_DIR, 'images'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'images'), { recursive: true });
}

// Copy all images from attached_assets to the images directory
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

// Create additional asset directories
const additionalDirs = ['css', 'js', 'images/services', 'images/solutions', 'images/team', 'images/blog', 'blog'];

additionalDirs.forEach(dir => {
  if (!fs.existsSync(path.join(OUTPUT_DIR, dir))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, dir), { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Create CSS file
console.log('📝 Creating CSS files...');
const cssContent = `:root {
  --primary: #c10020;
  --background: #121212;
  --text: #ffffff;
  --card-bg: #1e1e1e;
  --accent: #2563eb;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.service-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.service-card-content {
  padding: 25px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: var(--text);
}

.service-card p {
  color: #aaa;
  margin-bottom: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
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
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'css', 'styles.css'), cssContent);
console.log('✅ Created styles.css');

// Create JavaScript file
console.log('📝 Creating JavaScript files...');
const jsContent = `// Simple JavaScript functionality for the static site
document.addEventListener('DOMContentLoaded', () => {
  // Handle mobile navigation menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  };
  
  // Initial check and add scroll event listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

// SPA-like navigation (without page refresh)
function navigateTo(url) {
  history.pushState(null, null, url);
  handleLocation();
}

// Handle back/forward navigation
window.addEventListener('popstate', handleLocation);

// Simple router function
function handleLocation() {
  const path = window.location.pathname;
  // This is just a placeholder - in a real SPA this would load different content
  console.log('Navigation to: ' + path);
}`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'js', 'main.js'), jsContent);
console.log('✅ Created main.js');

// Create enhanced index.html with better structure and more content
console.log('🔨 Creating enhanced HTML files...');
const enhancedIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Intello Cyber Technologies - Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.">
  <title>Intello Cyber Technologies - Cybersecurity & Compliance Solutions</title>
  <link rel="stylesheet" href="/css/styles.css">
  <!-- Add favicon -->
  <link rel="icon" type="image/png" href="/images/intello-logo.png">
  <!-- Add font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <!-- Add Open Graph tags for social sharing -->
  <meta property="og:title" content="Intello Cyber Technologies - Cybersecurity & Compliance Solutions">
  <meta property="og:description" content="Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.">
  <meta property="og:image" content="/images/intello-logo.png">
  <meta property="og:url" content="https://intellome.com">
  <meta property="og:type" content="website">
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/">
          <img src="/images/Intello New Logo - White.png" alt="Intello Cyber Technologies" class="logo">
        </a>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About Us</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/solutions" class="nav-link">Solutions</a>
          <a href="/insights" class="nav-link">Insights</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
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

    <section id="services">
      <div class="container">
        <div class="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive cybersecurity and compliance solutions tailored to your business needs</p>
        </div>
        
        <div class="services-grid">
          <!-- Service 1 -->
          <div class="service-card animate-on-scroll">
            <div class="service-card-content">
              <img src="/images/iso-27001.svg" alt="ISO 27001" class="service-icon">
              <h3>ISO 27001 Compliance</h3>
              <p>Implement and maintain ISO 27001 certification with our expert guidance and support.</p>
              <a href="/services/iso-27001" class="btn">Learn More</a>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="service-card animate-on-scroll">
            <div class="service-card-content">
              <img src="/images/soc2.svg" alt="SOC 2" class="service-icon">
              <h3>SOC 2 Compliance</h3>
              <p>Achieve and maintain SOC 2 compliance with our comprehensive assessment and implementation services.</p>
              <a href="/services/soc2" class="btn">Learn More</a>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="service-card animate-on-scroll">
            <div class="service-card-content">
              <img src="/images/uae-pdpl.svg" alt="UAE PDPL" class="service-icon">
              <h3>UAE PDPL Compliance</h3>
              <p>Navigate the complexities of the UAE Personal Data Protection Law with our specialized guidance.</p>
              <a href="/services/uae-pdpl" class="btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <div class="section-title">
          <h2>About Intello</h2>
          <p>Over 22 years of excellence in cybersecurity and compliance solutions</p>
        </div>
        
        <div class="about-content">
          <p>Intello Cyber Technologies has been a trusted leader in providing comprehensive cybersecurity and compliance solutions since 2003. With our deep expertise and commitment to excellence, we have helped numerous organizations across various industries protect their digital assets and achieve regulatory compliance.</p>
          
          <p>Our team of certified professionals understands the unique challenges faced by businesses in the UAE and globally. We combine technical expertise with a thorough understanding of regulatory frameworks to deliver solutions that not only ensure compliance but also enhance overall security posture.</p>
          
          <a href="/about" class="btn">Read More About Us</a>
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

  <script src="/js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), enhancedIndexHtml);
fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), enhancedIndexHtml);
console.log('✅ Created enhanced index.html and 404.html');

// Create about.html
const aboutHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn about Intello Cyber Technologies - a leading cybersecurity and compliance solutions provider with over 22 years of experience in the UAE.">
  <title>About Us - Intello Cyber Technologies</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" type="image/png" href="/images/intello-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/">
          <img src="/images/Intello New Logo - White.png" alt="Intello Cyber Technologies" class="logo">
        </a>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About Us</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/solutions" class="nav-link">Solutions</a>
          <a href="/insights" class="nav-link">Insights</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>About Intello Cyber Technologies</h1>
        <p>Established in 2003, we've been securing digital assets and ensuring regulatory compliance for over two decades.</p>
      </div>
    </section>

    <section id="about-content">
      <div class="container">
        <div class="section-title">
          <h2>Our Story</h2>
        </div>
        
        <div class="about-content">
          <p>Intello Cyber Technologies was founded in 2003 with a clear mission: to help organizations protect their digital assets and navigate complex regulatory landscapes. Over the past two decades, we have grown to become a trusted leader in cybersecurity and compliance solutions in the UAE and beyond.</p>
          
          <p>Our journey has been marked by a commitment to excellence, innovation, and staying ahead of evolving cyber threats and regulatory requirements. We've helped hundreds of organizations across various industries achieve and maintain compliance with international standards while strengthening their security posture.</p>
          
          <p>Today, Intello stands as a premier provider of comprehensive cybersecurity and compliance solutions, offering a wide range of services from ISO 27001 and SOC 2 compliance to AI-powered compliance automation and specialized cybersecurity consulting.</p>
        </div>
      </div>
    </section>

    <section id="team">
      <div class="container">
        <div class="section-title">
          <h2>Our Leadership Team</h2>
        </div>
        
        <div class="team-grid">
          <!-- Leadership profiles would go here in a full implementation -->
          <p>Our leadership team brings together decades of experience in cybersecurity, compliance, and technology management. With backgrounds ranging from information security and risk management to regulatory compliance and IT governance, our leaders drive our mission to provide exceptional security and compliance solutions.</p>
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

  <script src="/js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'about.html'), aboutHtml);
console.log('✅ Created about.html');

// Create additional HTML pages for key sections
const pages = [
  { name: 'services', title: 'Our Services' },
  { name: 'solutions', title: 'Our Solutions' },
  { name: 'insights', title: 'Industry Insights' },
  { name: 'contact', title: 'Contact Us' }
];

pages.forEach(page => {
  const pageHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${page.title} - Intello Cyber Technologies offers comprehensive cybersecurity and compliance solutions for businesses in the UAE.">
  <title>${page.title} - Intello Cyber Technologies</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" type="image/png" href="/images/intello-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/">
          <img src="/images/Intello New Logo - White.png" alt="Intello Cyber Technologies" class="logo">
        </a>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About Us</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/solutions" class="nav-link">Solutions</a>
          <a href="/insights" class="nav-link">Insights</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-button" class="mobile-menu-button" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>${page.title}</h1>
        <p>Comprehensive cybersecurity and compliance solutions tailored for UAE businesses</p>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="section-title">
          <h2>${page.title}</h2>
          <p>This page is part of the static website for Intello Cyber Technologies.</p>
          <p>A complete implementation would include detailed content for the ${page.name.toLowerCase()} section.</p>
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

  <script src="/js/main.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, `${page.name}.html`), pageHtml);
  console.log(`✅ Created ${page.name}.html`);
});

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
</IfModule>

# Add proper MIME types
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
  AddType image/svg+xml .svg
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css application/javascript image/svg+xml
</IfModule>

# Set caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`;

fs.writeFileSync(path.join(OUTPUT_DIR, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess for Apache servers');

// Create _redirects for Netlify
const redirectsContent = `/* /index.html 200`;
fs.writeFileSync(path.join(OUTPUT_DIR, '_redirects'), redirectsContent);
console.log('✅ Created _redirects for Netlify');

// Create vercel.json for Vercel
const vercelJson = `{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}`;
fs.writeFileSync(path.join(OUTPUT_DIR, 'vercel.json'), vercelJson);
console.log('✅ Created vercel.json for Vercel');

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

// Add .nojekyll for GitHub Pages
fs.writeFileSync(path.join(OUTPUT_DIR, '.nojekyll'), '');
console.log('✅ Created .nojekyll for GitHub Pages');

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

- \`index.html\` - Main HTML file 
- \`css/styles.css\` - Main stylesheet
- \`js/main.js\` - JavaScript functionality
- \`images/\` - Directory containing images used throughout the site
- \`.htaccess\` - Apache server configuration for SPA routing
- \`_redirects\` - Netlify configuration
- \`vercel.json\` - Vercel configuration
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
console.log('\n🎉 Enhanced static website creation completed successfully!\n');
console.log('Your enhanced static website is available in:');
console.log(`- ${OUTPUT_DIR}/ directory`);
console.log('- intello-static-site.zip\n');
console.log('Next steps:');
console.log('1. Download the ZIP package');
console.log('2. Extract and test locally by opening dist/index.html in a browser');
console.log('3. Upload to your web hosting service (see GODADDY_DEPLOYMENT_GUIDE.md)');
