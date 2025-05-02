/**
 * Self-contained Static Website Build Script
 * 
 * This script creates a complete static website by:
 * 1. Generating a self-contained HTML file with all styles and JS inlined
 * 2. Adding necessary support files for SPA routing and deployment
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const OUTPUT_DIR = 'dist';

// Ensure the output directory exists
console.log('📦 Starting self-contained static website build...');
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
  const files = fs.readdirSync('attached_assets');
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg')) {
      const sourcePath = path.join('attached_assets', file);
      const destPath = path.join(OUTPUT_DIR, 'images', file);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`  - Copied ${file}`);
    }
  }
}

// Define the complete self-contained HTML
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance with AI-powered automation.">
  
  <!-- SEO Meta Tags -->
  <meta name="keywords" content="Cybersecurity Dubai, GRC Solutions, ISO 27001 Consultancy, SOC 2 Compliance, UAE PDPL, Information Security UAE, Cybersecurity Services, Compliance Automation, IT Audit Services, Managed Security">
  <meta name="author" content="Intello Cyber Technologies">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph / Social Media Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://intellome.com/">
  <meta property="og:title" content="Intello | Cybersecurity & GRC Solutions">
  <meta property="og:description" content="Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance.">
  <meta property="og:image" content="https://intellome.com/images/intello-new-logo.png">
  
  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Intello | Cybersecurity & GRC Solutions">
  <meta name="twitter:description" content="Expert cybersecurity & GRC solutions since 2003. Specializing in ISO 27001, SOC 2, GDPR & UAE PDPL compliance.">
  <meta name="twitter:image" content="https://intellome.com/images/intello-new-logo.png">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://intellome.com/">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="/images/intello-new-logo.png" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  
  <title>Intello | Cybersecurity & GRC Solutions</title>
  
  <style>
    :root {
      --primary: #c10020;
      --background: #121212;
      --light-bg: #1a1a1a;
      --card-bg: #1e1e1e;
      --text: #ffffff;
      --text-secondary: #aaaaaa;
      --border: #333333;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--background);
      color: var(--text);
      line-height: 1.6;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    a {
      color: var(--text);
      text-decoration: none;
      transition: all 0.3s ease;
    }
    
    a:hover {
      color: var(--primary);
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    /* Header & Navigation */
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(18, 18, 18, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 1000;
    }
    
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.25rem 0;
    }
    
    .logo {
      height: 40px;
    }
    
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .nav-link {
      font-weight: 500;
    }
    
    .nav-link.active {
      color: var(--primary);
    }
    
    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--text);
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    /* Hero Section */
    .hero {
      padding: 10rem 0 6rem;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/cybersecurity-bg.jpg');
      background-size: cover;
      background-position: center;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
    }
    
    .hero p {
      font-size: 1.25rem;
      max-width: 700px;
      margin: 0 auto 2.5rem;
      color: var(--text-secondary);
    }
    
    /* Section Styling */
    section {
      padding: 5rem 0;
    }
    
    section.alternate {
      background-color: var(--light-bg);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .section-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .section-header p {
      font-size: 1.1rem;
      max-width: 700px;
      margin: 0 auto;
      color: var(--text-secondary);
    }
    
    /* Cards */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .card {
      background-color: var(--card-bg);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card-image {
      height: 200px;
      background-size: cover;
      background-position: center;
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .card p {
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
    }
    
    /* Buttons */
    .btn {
      display: inline-block;
      background-color: var(--primary);
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .btn:hover {
      background-color: #a5001b;
      color: #fff;
    }
    
    .btn-outline {
      background-color: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
    }
    
    .btn-outline:hover {
      background-color: var(--primary);
      color: #fff;
    }
    
    /* Features */
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
    }
    
    .feature {
      text-align: center;
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(193, 0, 32, 0.1);
      border-radius: 50%;
    }
    
    .feature-icon img {
      width: 40px;
      height: 40px;
    }
    
    .feature h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .feature p {
      color: var(--text-secondary);
    }
    
    /* Contact Form */
    .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 0.75rem;
      background-color: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 4px;
      color: var(--text);
      font-family: inherit;
    }
    
    .form-group textarea {
      min-height: 150px;
      resize: vertical;
    }
    
    /* Footer */
    footer {
      background-color: var(--light-bg);
      padding: 4rem 0 2rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
    }
    
    .footer-column h3 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
    
    .footer-links {
      list-style: none;
    }
    
    .footer-links li {
      margin-bottom: 0.75rem;
    }
    
    .footer-links a {
      color: var(--text-secondary);
    }
    
    .footer-links a:hover {
      color: var(--primary);
    }
    
    .footer-bottom {
      text-align: center;
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
      color: var(--text-secondary);
    }
    
    /* Responsive Styles */
    @media (max-width: 992px) {
      .hero h1 {
        font-size: 3rem;
      }
    }
    
    @media (max-width: 768px) {
      .mobile-menu-toggle {
        display: block;
      }
      
      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        flex-direction: column;
        background-color: var(--background);
        padding: 1.5rem;
        gap: 1rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        opacity: 0;
        visibility: hidden;
      }
      
      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .hero {
        padding: 8rem 0 4rem;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1.1rem;
      }
      
      .section-header h2 {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 576px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
  
  <!-- GitHub Pages SPA routing fix -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    (function(l) {
      if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
        );
      }
    }(window.location))
  </script>
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/">
          <img src="/images/intello-logo-white.png" alt="Intello Cyber Technologies" class="logo">
        </a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle">☰</button>
        <div class="nav-links" id="nav-links">
          <a href="/" class="nav-link" data-nav="home">Home</a>
          <a href="/about" class="nav-link" data-nav="about">About Us</a>
          <a href="/services" class="nav-link" data-nav="services">Services</a>
          <a href="/solutions" class="nav-link" data-nav="solutions">Solutions</a>
          <a href="/insights" class="nav-link" data-nav="insights">Insights</a>
          <a href="/contact" class="nav-link" data-nav="contact">Contact</a>
        </div>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <!-- Content will be loaded here -->
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

  <script>
    // Routes and Content
    const routes = {
      '/': {
        title: 'Intello | Cybersecurity & GRC Solutions',
        content: `
          <section class="hero">
            <div class="container">
              <h1>Cybersecurity & Compliance Solutions</h1>
              <p>Comprehensive security services tailored for UAE businesses since 2003. Specializing in ISO 27001, SOC 2, UAE PDPL, and advanced cybersecurity solutions.</p>
              <a href="/contact" class="btn">Get Started</a>
            </div>
          </section>
          
          <section>
            <div class="container">
              <div class="section-header">
                <h2>Our Services</h2>
                <p>We provide comprehensive cybersecurity and compliance solutions to help organizations protect their digital assets and meet regulatory requirements.</p>
              </div>
              
              <div class="card-grid">
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/iso-27001.svg');"></div>
                  <div class="card-content">
                    <h3>ISO 27001 Compliance</h3>
                    <p>Streamline your ISO 27001 compliance with our expert-led implementation and certification support.</p>
                    <a href="/services" class="btn">Learn More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/cybersecurity.svg');"></div>
                  <div class="card-content">
                    <h3>Cybersecurity Services</h3>
                    <p>Protect your organization with penetration testing, incident response, and security assessments.</p>
                    <a href="/services" class="btn">Learn More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/uae-pdpl.svg');"></div>
                  <div class="card-content">
                    <h3>UAE PDPL Compliance</h3>
                    <p>Navigate the UAE Personal Data Protection Law with our specialized compliance solution.</p>
                    <a href="/services" class="btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section class="alternate">
            <div class="container">
              <div class="section-header">
                <h2>Why Choose Intello?</h2>
                <p>With over 22 years of experience, we provide tailored cybersecurity and compliance solutions to organizations across the UAE.</p>
              </div>
              
              <div class="features">
                <div class="feature">
                  <div class="feature-icon">
                    <img src="/images/experience-icon.svg" alt="Experience">
                  </div>
                  <h3>22+ Years of Experience</h3>
                  <p>Established in 2003, we bring decades of expertise in cybersecurity and compliance solutions.</p>
                </div>
                
                <div class="feature">
                  <div class="feature-icon">
                    <img src="/images/experts-icon.svg" alt="Experts">
                  </div>
                  <h3>Certified Security Experts</h3>
                  <p>Our team consists of certified professionals with expertise in various security domains.</p>
                </div>
                
                <div class="feature">
                  <div class="feature-icon">
                    <img src="/images/solutions-icon.svg" alt="Solutions">
                  </div>
                  <h3>Tailored Solutions</h3>
                  <p>We customize our services to meet the specific needs and challenges of your organization.</p>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/about': {
        title: 'About Us | Intello Cyber Technologies',
        content: `
          <section class="hero" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/about-hero.jpg');">
            <div class="container">
              <h1>About Intello Cyber Technologies</h1>
              <p>Leading provider of cybersecurity and compliance solutions in the UAE since 2003.</p>
            </div>
          </section>
          
          <section>
            <div class="container">
              <div class="section-header">
                <h2>Our Story</h2>
              </div>
              
              <div style="max-width: 800px; margin: 0 auto;">
                <p>Intello Cyber Technologies was established in 2003 with a mission to protect organizations from emerging cyber threats and help them navigate complex compliance requirements.</p>
                
                <p>Over the past two decades, we have evolved from a small security consultancy to a comprehensive provider of cybersecurity, compliance, and IT managed services. Our team of experts brings together deep technical knowledge and industry experience to deliver solutions that address the unique challenges faced by businesses in the UAE and beyond.</p>
                
                <p>Today, we are proud to serve clients across various industries, including financial services, healthcare, government, and more. Our commitment to excellence and innovation drives us to continuously enhance our services and stay ahead of evolving threats and regulatory landscapes.</p>
              </div>
            </div>
          </section>
          
          <section class="alternate">
            <div class="container">
              <div class="section-header">
                <h2>Our Vision & Mission</h2>
              </div>
              
              <div style="display: flex; flex-wrap: wrap; gap: 30px; max-width: 1000px; margin: 0 auto;">
                <div style="flex: 1; min-width: 300px; background-color: var(--card-bg); padding: 30px; border-radius: 8px;">
                  <h3>Vision</h3>
                  <p>To be the trusted cybersecurity and compliance partner for organizations in the UAE, helping them securely embrace digital transformation and navigate regulatory requirements.</p>
                </div>
                
                <div style="flex: 1; min-width: 300px; background-color: var(--card-bg); padding: 30px; border-radius: 8px;">
                  <h3>Mission</h3>
                  <p>To deliver innovative, effective, and tailored cybersecurity and compliance solutions that protect our clients' digital assets, meet regulatory requirements, and enable business growth and innovation.</p>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/services': {
        title: 'Services | Intello Cyber Technologies',
        content: `
          <section class="hero" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/services-hero.jpg');">
            <div class="container">
              <h1>Our Services</h1>
              <p>Comprehensive cybersecurity and compliance solutions tailored to your organization's needs.</p>
            </div>
          </section>
          
          <section id="compliance-automation">
            <div class="container">
              <div class="section-header">
                <h2>Compliance Automation</h2>
                <p>Streamline your compliance processes with our AI-powered automation tools.</p>
              </div>
              
              <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 50px;">
                <div style="flex: 1; min-width: 300px;">
                  <h3>ISO 27001 Compliance</h3>
                  <p>Our automated ISO 27001 compliance solution helps organizations implement, maintain, and demonstrate compliance with the ISO 27001 standard for information security management.</p>
                  <ul>
                    <li>Gap analysis and readiness assessment</li>
                    <li>Policy and procedure development</li>
                    <li>Risk assessment and treatment</li>
                    <li>Implementation support and guidance</li>
                    <li>Internal audit and certification preparation</li>
                  </ul>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                  <h3>SOC 2 Compliance</h3>
                  <p>Achieve and maintain SOC 2 compliance with our automated tools and expert guidance.</p>
                  <ul>
                    <li>Readiness assessment and gap analysis</li>
                    <li>Control implementation and documentation</li>
                    <li>Evidence collection and management</li>
                    <li>Audit preparation and support</li>
                    <li>Continuous compliance monitoring</li>
                  </ul>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                  <h3>UAE PDPL Compliance</h3>
                  <p>Navigate the requirements of the UAE Personal Data Protection Law with our specialized compliance solution.</p>
                  <ul>
                    <li>Data mapping and inventory</li>
                    <li>Privacy impact assessments</li>
                    <li>Policy and procedure development</li>
                    <li>Data subject rights management</li>
                    <li>Compliance monitoring and reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          <section id="cybersecurity" class="alternate">
            <div class="container">
              <div class="section-header">
                <h2>Cybersecurity Services</h2>
                <p>Protect your organization with our comprehensive cybersecurity services.</p>
              </div>
              
              <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 50px;">
                <div style="flex: 1; min-width: 300px;">
                  <h3>Penetration Testing</h3>
                  <p>Identify and address security vulnerabilities before they can be exploited by attackers.</p>
                  <ul>
                    <li>Web application penetration testing</li>
                    <li>Network penetration testing</li>
                    <li>Mobile application penetration testing</li>
                    <li>Cloud infrastructure penetration testing</li>
                    <li>Social engineering assessments</li>
                  </ul>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                  <h3>Incident Response</h3>
                  <p>Rapidly respond to and recover from security incidents with our expert incident response services.</p>
                  <ul>
                    <li>Incident response planning</li>
                    <li>24/7 incident response support</li>
                    <li>Malware analysis and removal</li>
                    <li>Forensic investigation</li>
                    <li>Post-incident analysis and reporting</li>
                  </ul>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                  <h3>Security Assessments</h3>
                  <p>Evaluate your organization's security posture and identify areas for improvement.</p>
                  <ul>
                    <li>Vulnerability assessments</li>
                    <li>Security architecture reviews</li>
                    <li>Configuration reviews</li>
                    <li>Security program assessments</li>
                    <li>Cloud security assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/solutions': {
        title: 'Solutions | Intello Cyber Technologies',
        content: `
          <section class="hero" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/solutions-hero.jpg');">
            <div class="container">
              <h1>Our Solutions</h1>
              <p>Tailored cybersecurity and compliance solutions to address your specific industry and organizational needs.</p>
            </div>
          </section>
          
          <section>
            <div class="container">
              <div class="section-header">
                <h2>Industry Solutions</h2>
                <p>Specialized solutions designed for specific industry sectors.</p>
              </div>
              
              <div class="card-grid">
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/finance.svg');"></div>
                  <div class="card-content">
                    <h3>Financial Services</h3>
                    <p>Secure banking systems, ensure regulatory compliance, and protect sensitive financial data.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/healthcare.svg');"></div>
                  <div class="card-content">
                    <h3>Healthcare</h3>
                    <p>Protect patient data, ensure compliance with healthcare regulations, and secure medical systems.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/government.svg');"></div>
                  <div class="card-content">
                    <h3>Government</h3>
                    <p>Secure critical infrastructure, protect sensitive data, and meet government security requirements.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/ecommerce.svg');"></div>
                  <div class="card-content">
                    <h3>Retail & E-commerce</h3>
                    <p>Secure online transactions, protect customer data, and ensure PCI DSS compliance.</p>
                    <a href="#" class="btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/insights': {
        title: 'Insights | Intello Cyber Technologies',
        content: `
          <section class="hero" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/insights-hero.jpg');">
            <div class="container">
              <h1>Insights</h1>
              <p>Expert insights and resources on cybersecurity, compliance, and IT management.</p>
            </div>
          </section>
          
          <section>
            <div class="container">
              <div class="section-header">
                <h2>Latest Articles</h2>
              </div>
              
              <div class="card-grid">
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/uae-pdpl.svg');"></div>
                  <div class="card-content">
                    <h3>Understanding the UAE Personal Data Protection Law</h3>
                    <p>A comprehensive guide to the UAE PDPL and its implications for businesses operating in the UAE.</p>
                    <a href="#" class="btn">Read More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/ml-threat-detection.svg');"></div>
                  <div class="card-content">
                    <h3>Leveraging Machine Learning for Threat Detection</h3>
                    <p>How organizations can use machine learning to enhance their threat detection capabilities.</p>
                    <a href="#" class="btn">Read More</a>
                  </div>
                </div>
                
                <div class="card">
                  <div class="card-image" style="background-image: url('/images/iso-27001.svg');"></div>
                  <div class="card-content">
                    <h3>ISO 27001:2022 Update: What You Need to Know</h3>
                    <p>An overview of the key changes in the ISO 27001:2022 update and how they affect your compliance program.</p>
                    <a href="#" class="btn">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/contact': {
        title: 'Contact | Intello Cyber Technologies',
        content: `
          <section class="hero" style="background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/contact-hero.jpg');">
            <div class="container">
              <h1>Contact Us</h1>
              <p>Get in touch with our team to discuss your cybersecurity and compliance needs.</p>
            </div>
          </section>
          
          <section>
            <div class="container">
              <div style="display: flex; flex-wrap: wrap; gap: 50px;">
                <div style="flex: 1; min-width: 300px;">
                  <h2>Get in Touch</h2>
                  <p>Fill out the form and one of our experts will contact you to discuss your needs and how we can help.</p>
                  
                  <div class="contact-form">
                    <form action="https://formspree.io/f/mwpokerg" method="POST">
                      <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                      </div>
                      
                      <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" name="phone">
                      </div>
                      
                      <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" id="company" name="company">
                      </div>
                      
                      <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                      </div>
                      
                      <button type="submit" class="btn">Send Message</button>
                    </form>
                  </div>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                  <h2>Contact Information</h2>
                  <p>You can also reach us directly using the contact information below.</p>
                  
                  <div style="margin-top: 30px;">
                    <h3>Email</h3>
                    <p>info@intellome.com</p>
                    
                    <h3>Phone</h3>
                    <p>+971 55 355 6787</p>
                    
                    <h3>Address</h3>
                    <p>Intello Cyber Technologies<br>Dubai, United Arab Emirates</p>
                    
                    <h3>Working Hours</h3>
                    <p>Sunday to Thursday: 9:00 AM - 6:00 PM<br>Friday and Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        `
      },
      '/404': {
        title: 'Page Not Found | Intello Cyber Technologies',
        content: `
          <section style="padding: 12rem 0; text-align: center;">
            <div class="container">
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist or has been moved.</p>
              <a href="/" class="btn" style="margin-top: 2rem;">Go to Homepage</a>
            </div>
          </section>
        `
      }
    };

    // Router function
    function router() {
      let path = window.location.pathname;
      
      // Set default route if path is not found
      if (!routes[path]) {
        path = '/404';
      }
      
      // Update content and title
      document.title = routes[path].title;
      document.getElementById('main-content').innerHTML = routes[path].content;
      
      // Set active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === path) {
          link.classList.add('active');
        }
      });
      
      // Scroll to top
      window.scrollTo(0, 0);
    }

    // Initial route
    document.addEventListener('DOMContentLoaded', () => {
      router();
      
      // Handle navigation
      document.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link && link.getAttribute('href').startsWith('/') && !link.getAttribute('target')) {
          event.preventDefault();
          window.history.pushState(null, null, link.getAttribute('href'));
          router();
        }
      });
      
      // Handle browser back/forward
      window.addEventListener('popstate', router);
      
      // Mobile menu toggle
      const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
      const navLinks = document.getElementById('nav-links');
      
      if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      }
    });
  </script>
</body>
</html>`;

// Write the HTML content to index.html
console.log('🔧 Creating HTML files...');
fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), htmlContent);
fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), htmlContent);
console.log('✅ Created index.html and 404.html');

// Create empty placeholder SVG images for the website
console.log('🖼️ Creating placeholder SVG images...');
const svgImages = [
  'iso-27001.svg',
  'cybersecurity.svg',
  'uae-pdpl.svg',
  'experience-icon.svg',
  'experts-icon.svg',
  'solutions-icon.svg',
  'finance.svg',
  'healthcare.svg',
  'government.svg',
  'ecommerce.svg',
  'ml-threat-detection.svg',
];

const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#c10020" opacity="0.2" />
  <text x="50" y="50" font-family="Arial" font-size="14" text-anchor="middle" dominant-baseline="middle" fill="#c10020">Intello</text>
</svg>`;

svgImages.forEach(image => {
  fs.writeFileSync(path.join(OUTPUT_DIR, 'images', image), placeholderSvg);
});
console.log(`✅ Created ${svgImages.length} placeholder SVG images`);

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

This is a complete self-contained static website for Intello Cyber Technologies, a leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.

## Deployment

This static website can be deployed to any web hosting service:

1. Upload all files and folders to your web hosting service
2. Ensure that the server is configured for SPA routing (using the .htaccess file for Apache servers)

## Features

- Complete single-file architecture with all styles and JavaScript embedded
- Modern, professional cybersecurity aesthetic
- Responsive design for all device sizes
- Single Page Application (SPA) routing without dependencies
- Contact forms using Formspree integration
- SEO optimization with proper meta tags

## Files and Structure

- `index.html` - The complete website with all content, styles and JavaScript
- `images/` - Directory containing SVG images used throughout the site
- `.htaccess` - Apache server configuration for SPA routing
- `_redirects` - Netlify configuration for SPA routing
- `vercel.json` - Vercel configuration for SPA routing
- `robots.txt` and `sitemap.xml` - SEO files

## Form Handling

The contact forms use Formspree for handling submissions. The current form ID is 'mwpokerg'. Update this ID if needed.

## Support

For questions about this website, please contact Intello Cyber Technologies.
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
console.log('✅ Created README.md');

// Copy documentation files
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
  execSync(`zip -r intello-website-self-contained.zip ${OUTPUT_DIR}`);
  console.log('✅ Created intello-website-self-contained.zip');
} catch (error) {
  console.log('⚠️ Could not create ZIP package. You can manually zip the dist folder.');
}

// All done!
console.log('\n🎉 Self-contained static website build completed successfully!\n');
console.log('Your static website is available in:');
console.log(`- ${OUTPUT_DIR}/ directory`);
console.log('- intello-website-self-contained.zip (for download)\n');
console.log('Next steps:');
console.log('1. Download the ZIP package');
console.log('2. Extract and test locally by opening dist/index.html in a browser');
console.log('3. Upload to your web hosting service (see GODADDY_DEPLOYMENT_GUIDE.md)');
