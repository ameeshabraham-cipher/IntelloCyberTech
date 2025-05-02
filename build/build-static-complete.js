/**
 * Complete Static Build Script for Replit
 * 
 * This script creates a more complete static website by properly extracting
 * content from the React application and bundling it with all necessary assets.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = 'dist';

// Ensure output directory exists and is empty
console.log('📦 Starting complete static build process...');
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// Create directories for assets
fs.mkdirSync(path.join(OUTPUT_DIR, 'assets'), { recursive: true });
fs.mkdirSync(path.join(OUTPUT_DIR, 'images'), { recursive: true });
fs.mkdirSync(path.join(OUTPUT_DIR, 'css'), { recursive: true });
fs.mkdirSync(path.join(OUTPUT_DIR, 'js'), { recursive: true });

// Copy all assets from client/public to dist
console.log('🔍 Copying client public assets...');
if (fs.existsSync('client/public')) {
  const files = fs.readdirSync('client/public');
  files.forEach(file => {
    const srcPath = path.join('client/public', file);
    const destPath = path.join(OUTPUT_DIR, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      // Recursively copy directory
      execSync(`cp -r "${srcPath}" "${destPath}"`);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy project assets to dist
console.log('🖼️ Copying project assets...');
if (fs.existsSync('attached_assets')) {
  if (!fs.existsSync(path.join(OUTPUT_DIR, 'images'))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, 'images'), { recursive: true });
  }
  
  const files = fs.readdirSync('attached_assets');
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg')) {
      const srcPath = path.join('attached_assets', file);
      const destPath = path.join(OUTPUT_DIR, 'images', file);
      fs.copyFileSync(srcPath, destPath);
      console.log(`  - Copied ${file} to images/`);
    }
  });
}

// Generate styles
console.log('🎨 Creating styles...');
const styles = `
/* Base styles */
:root {
  --primary: #c10020;
  --secondary: #f0f0f0;
  --background: #121212;
  --text: #ffffff;
  --accent: #0088cc;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary);
}

img {
  max-width: 100%;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header {
  background-color: rgba(18, 18, 18, 0.95);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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

/* Mobile menu */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 24px;
  cursor: pointer;
}

/* Main content */
main {
  padding-top: 80px;
  min-height: calc(100vh - 300px);
}

/* Hero section */
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

/* Sections */
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

.section-title p {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  color: #ccc;
}

/* Cards */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.card {
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  height: 180px;
  background-size: cover;
  background-position: center;
}

.card-content {
  padding: 20px;
}

.card-content h3 {
  margin-top: 0;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-content p {
  color: #bbb;
  margin-bottom: 20px;
}

/* Feature list */
.feature-list {
  margin-top: 50px;
}

.feature-item {
  display: flex;
  margin-bottom: 40px;
  align-items: flex-start;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background-color: rgba(193, 0, 32, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
}

.feature-icon img {
  width: 30px;
  height: 30px;
}

.feature-content h3 {
  margin-top: 0;
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.feature-content p {
  color: #bbb;
  margin-bottom: 0;
}

/* Footer */
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

/* Contact form */
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 12px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 4px;
  color: var(--text);
  font-family: inherit;
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .feature-icon {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .footer-content {
    flex-direction: column;
  }
}`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'css', 'main.css'), styles);

// Generate JavaScript for basic SPA functionality
console.log('📝 Creating JavaScript...');
const javascript = `
// Basic SPA routing
const routes = {
  '/': { title: 'Home | Intello Cyber Technologies', template: 'home' },
  '/about': { title: 'About Us | Intello Cyber Technologies', template: 'about' },
  '/services': { title: 'Services | Intello Cyber Technologies', template: 'services' },
  '/solutions': { title: 'Solutions | Intello Cyber Technologies', template: 'solutions' },
  '/insights': { title: 'Insights | Intello Cyber Technologies', template: 'insights' },
  '/contact': { title: 'Contact | Intello Cyber Technologies', template: 'contact' },
};

// Templates for each page
const templates = {
  'home': `
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
          <h2>Our Services</h2>
          <p>We provide comprehensive cybersecurity and compliance solutions to help organizations protect their digital assets and meet regulatory requirements.</p>
        </div>
        
        <div class="card-grid">
          <div class="card">
            <div class="card-image" style="background-image: url('/images/compliance-automation.jpg');"></div>
            <div class="card-content">
              <h3>Compliance Automation</h3>
              <p>AI-powered tools to streamline compliance processes for ISO 27001, SOC 2, and UAE PDPL.</p>
              <a href="/services#compliance-automation" class="btn">Learn More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/cybersecurity.jpg');"></div>
            <div class="card-content">
              <h3>Cybersecurity Services</h3>
              <p>Expert protection against threats with penetration testing, incident response, and security assessments.</p>
              <a href="/services#cybersecurity" class="btn">Learn More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/managed-services.jpg');"></div>
            <div class="card-content">
              <h3>IT Managed Services</h3>
              <p>Comprehensive IT solutions including cloud security, network management, and 24/7 monitoring.</p>
              <a href="/services#managed-services" class="btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section style="background-color: #1a1a1a;">
      <div class="container">
        <div class="section-title">
          <h2>Why Choose Intello?</h2>
          <p>With over 22 years of experience, we provide tailored cybersecurity and compliance solutions to organizations across the UAE.</p>
        </div>
        
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-icon">
              <img src="/images/icon-experience.svg" alt="Experience">
            </div>
            <div class="feature-content">
              <h3>22+ Years of Experience</h3>
              <p>Established in 2003, we bring decades of expertise in cybersecurity and compliance solutions tailored to the UAE market.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">
              <img src="/images/icon-experts.svg" alt="Experts">
            </div>
            <div class="feature-content">
              <h3>Certified Security Experts</h3>
              <p>Our team consists of certified professionals with expertise in various security domains and compliance frameworks.</p>
            </div>
          </div>
          
          <div class="feature-item">
            <div class="feature-icon">
              <img src="/images/icon-tailored.svg" alt="Tailored Solutions">
            </div>
            <div class="feature-content">
              <h3>Tailored Solutions</h3>
              <p>We customize our services to meet the specific needs and challenges of your organization and industry sector.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  'about': `
    <section class="hero" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/about-hero.jpg');">
      <div class="container">
        <h1>About Intello Cyber Technologies</h1>
        <p>Leading provider of cybersecurity and compliance solutions in the UAE since 2003.</p>
      </div>
    </section>
    
    <section>
      <div class="container">
        <div class="section-title">
          <h2>Our Story</h2>
        </div>
        
        <div style="max-width: 800px; margin: 0 auto;">
          <p>Intello Cyber Technologies was established in 2003 with a mission to protect organizations from emerging cyber threats and help them navigate complex compliance requirements.</p>
          
          <p>Over the past two decades, we have evolved from a small security consultancy to a comprehensive provider of cybersecurity, compliance, and IT managed services. Our team of experts brings together deep technical knowledge and industry experience to deliver solutions that address the unique challenges faced by businesses in the UAE and beyond.</p>
          
          <p>Today, we are proud to serve clients across various industries, including financial services, healthcare, government, and more. Our commitment to excellence and innovation drives us to continuously enhance our services and stay ahead of evolving threats and regulatory landscapes.</p>
        </div>
      </div>
    </section>
    
    <section style="background-color: #1a1a1a;">
      <div class="container">
        <div class="section-title">
          <h2>Our Vision & Mission</h2>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 30px; max-width: 1000px; margin: 0 auto;">
          <div style="flex: 1; min-width: 300px; background-color: #252525; padding: 30px; border-radius: 8px;">
            <h3>Vision</h3>
            <p>To be the trusted cybersecurity and compliance partner for organizations in the UAE, helping them securely embrace digital transformation and navigate regulatory requirements.</p>
          </div>
          
          <div style="flex: 1; min-width: 300px; background-color: #252525; padding: 30px; border-radius: 8px;">
            <h3>Mission</h3>
            <p>To deliver innovative, effective, and tailored cybersecurity and compliance solutions that protect our clients' digital assets, meet regulatory requirements, and enable business growth and innovation.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  
  'services': `
    <section class="hero" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/services-hero.jpg');">
      <div class="container">
        <h1>Our Services</h1>
        <p>Comprehensive cybersecurity and compliance solutions tailored to your organization's needs.</p>
      </div>
    </section>
    
    <section id="compliance-automation">
      <div class="container">
        <div class="section-title">
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
    
    <section id="cybersecurity" style="background-color: #1a1a1a;">
      <div class="container">
        <div class="section-title">
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
    
    <section id="managed-services">
      <div class="container">
        <div class="section-title">
          <h2>IT Managed Services</h2>
          <p>Comprehensive IT solutions to support your business operations and security needs.</p>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 50px;">
          <div style="flex: 1; min-width: 300px;">
            <h3>Cloud Security</h3>
            <p>Secure your cloud environments with our specialized cloud security services.</p>
            <ul>
              <li>Cloud security architecture design</li>
              <li>Cloud configuration management</li>
              <li>Identity and access management</li>
              <li>Cloud security monitoring</li>
              <li>Cloud compliance management</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 300px;">
            <h3>Network Management</h3>
            <p>Ensure the reliability, performance, and security of your network infrastructure.</p>
            <ul>
              <li>Network design and implementation</li>
              <li>Network monitoring and management</li>
              <li>Firewall management</li>
              <li>VPN setup and management</li>
              <li>Network security assessments</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 300px;">
            <h3>24/7 Monitoring</h3>
            <p>Continuous monitoring of your IT infrastructure to detect and respond to issues promptly.</p>
            <ul>
              <li>Security event monitoring</li>
              <li>System performance monitoring</li>
              <li>Availability monitoring</li>
              <li>Incident detection and response</li>
              <li>Regular reporting and analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  
  'solutions': `
    <section class="hero" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/solutions-hero.jpg');">
      <div class="container">
        <h1>Our Solutions</h1>
        <p>Tailored cybersecurity and compliance solutions to address your specific industry and organizational needs.</p>
      </div>
    </section>
    
    <section>
      <div class="container">
        <div class="section-title">
          <h2>Industry Solutions</h2>
          <p>Specialized solutions designed for specific industry sectors.</p>
        </div>
        
        <div class="card-grid">
          <div class="card">
            <div class="card-image" style="background-image: url('/images/finance.jpg');"></div>
            <div class="card-content">
              <h3>Financial Services</h3>
              <p>Secure banking systems, ensure regulatory compliance, and protect sensitive financial data.</p>
              <a href="#" class="btn">Learn More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/healthcare.jpg');"></div>
            <div class="card-content">
              <h3>Healthcare</h3>
              <p>Protect patient data, ensure compliance with healthcare regulations, and secure medical systems.</p>
              <a href="#" class="btn">Learn More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/government.jpg');"></div>
            <div class="card-content">
              <h3>Government</h3>
              <p>Secure critical infrastructure, protect sensitive data, and meet government security requirements.</p>
              <a href="#" class="btn">Learn More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/retail.jpg');"></div>
            <div class="card-content">
              <h3>Retail & E-commerce</h3>
              <p>Secure online transactions, protect customer data, and ensure PCI DSS compliance.</p>
              <a href="#" class="btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section style="background-color: #1a1a1a;">
      <div class="container">
        <div class="section-title">
          <h2>Specialized Solutions</h2>
          <p>Targeted solutions to address specific security and compliance challenges.</p>
        </div>
        
        <div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 50px;">
          <div style="flex: 1; min-width: 300px; background-color: #252525; padding: 30px; border-radius: 8px;">
            <h3>Virtual CISO (vCISO)</h3>
            <p>Access expert security leadership and guidance without the cost of a full-time CISO.</p>
            <ul>
              <li>Security strategy development</li>
              <li>Security program management</li>
              <li>Risk management</li>
              <li>Compliance oversight</li>
              <li>Executive reporting and communication</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 300px; background-color: #252525; padding: 30px; border-radius: 8px;">
            <h3>Security Awareness Training</h3>
            <p>Educate your employees on security best practices and help them recognize and respond to security threats.</p>
            <ul>
              <li>Phishing awareness</li>
              <li>Password security</li>
              <li>Social engineering awareness</li>
              <li>Data handling procedures</li>
              <li>Incident reporting</li>
            </ul>
          </div>
          
          <div style="flex: 1; min-width: 300px; background-color: #252525; padding: 30px; border-radius: 8px;">
            <h3>Data Protection</h3>
            <p>Comprehensive data protection solutions to secure sensitive information throughout its lifecycle.</p>
            <ul>
              <li>Data classification</li>
              <li>Data loss prevention</li>
              <li>Encryption</li>
              <li>Data backup and recovery</li>
              <li>Data privacy management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  
  'insights': `
    <section class="hero" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/insights-hero.jpg');">
      <div class="container">
        <h1>Insights</h1>
        <p>Expert insights and resources on cybersecurity, compliance, and IT management.</p>
      </div>
    </section>
    
    <section>
      <div class="container">
        <div class="section-title">
          <h2>Latest Articles</h2>
        </div>
        
        <div class="card-grid">
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/uae-pdpl.png');"></div>
            <div class="card-content">
              <h3>Understanding the UAE Personal Data Protection Law</h3>
              <p>A comprehensive guide to the UAE PDPL and its implications for businesses operating in the UAE.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/ml-threat-detection.png');"></div>
            <div class="card-content">
              <h3>Leveraging Machine Learning for Threat Detection</h3>
              <p>How organizations can use machine learning to enhance their threat detection capabilities.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/iso-27001.png');"></div>
            <div class="card-content">
              <h3>ISO 27001:2022 Update: What You Need to Know</h3>
              <p>An overview of the key changes in the ISO 27001:2022 update and how they affect your compliance program.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/zero-trust.png');"></div>
            <div class="card-content">
              <h3>Implementing a Zero Trust Security Model</h3>
              <p>A practical guide to implementing the Zero Trust security model in your organization.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/cloud-security.png');"></div>
            <div class="card-content">
              <h3>Cloud Security Best Practices</h3>
              <p>Essential best practices for securing your cloud environments and data.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-image" style="background-image: url('/images/blog/security-assessment.png');"></div>
            <div class="card-content">
              <h3>The Importance of Regular Security Assessments</h3>
              <p>Why regular security assessments are crucial for maintaining a strong security posture.</p>
              <a href="#" class="btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  
  'contact': `
    <section class="hero" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('/images/contact-hero.jpg');">
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
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject">
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
            
            <div style="margin-top: 40px;">
              <h3>Request a Service</h3>
              <p>Interested in a specific service? Select a service below to request more information.</p>
              
              <div class="contact-form">
                <form action="https://formspree.io/f/mwpokerg" method="POST">
                  <div class="form-group">
                    <label for="service">Service</label>
                    <select id="service" name="service" required>
                      <option value="">Select a service</option>
                      <option value="ISO 27001 Compliance">ISO 27001 Compliance</option>
                      <option value="SOC 2 Compliance">SOC 2 Compliance</option>
                      <option value="UAE PDPL Compliance">UAE PDPL Compliance</option>
                      <option value="Penetration Testing">Penetration Testing</option>
                      <option value="Incident Response">Incident Response</option>
                      <option value="Security Assessment">Security Assessment</option>
                      <option value="Cloud Security">Cloud Security</option>
                      <option value="Virtual CISO">Virtual CISO</option>
                      <option value="Security Awareness Training">Security Awareness Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div class="form-group">
                    <label for="request-name">Name</label>
                    <input type="text" id="request-name" name="name" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="request-email">Email</label>
                    <input type="email" id="request-email" name="email" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="request-company">Company</label>
                    <input type="text" id="request-company" name="company" required>
                  </div>
                  
                  <button type="submit" class="btn">Request Service</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

// Function to render a page
function renderPage(route) {
  const contentElement = document.getElementById('page-content');
  const { title, template } = routes[route] || routes['/'];
  document.title = title;
  contentElement.innerHTML = templates[template];
  window.scrollTo(0, 0);
}

// Handle navigation
function handleNavigation() {
  const path = window.location.pathname;
  if (routes[path]) {
    renderPage(path);
  } else {
    // Handle 404 by redirecting to home
    window.history.replaceState(null, '', '/');
    renderPage('/');
  }
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initial page load
  handleNavigation();
  
  // Handle link clicks
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (link && link.getAttribute('href').startsWith('/') && !link.getAttribute('target')) {
      event.preventDefault();
      const href = link.getAttribute('href');
      window.history.pushState(null, '', href);
      handleNavigation();
    }
  });
  
  // Handle browser back/forward
  window.addEventListener('popstate', handleNavigation);
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuButton && navLinks) {
    mobileMenuButton.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'js', 'main.js'), javascript);

// Create index.html
console.log('🔧 Creating HTML files...');
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intello Cyber Technologies</title>
  <meta name="description" content="Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE, specializing in ISO 27001, SOC 2, GDPR, UAE PDPL, and AI-powered compliance automation solutions.">
  <link rel="stylesheet" href="/css/main.css">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
<body>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/" class="logo-link">
          <img src="/images/intello-logo-white.png" alt="Intello Cyber Technologies" class="logo">
        </a>
        <div class="nav-links">
          <a href="/" class="nav-link">Home</a>
          <a href="/about" class="nav-link">About Us</a>
          <a href="/services" class="nav-link">Services</a>
          <a href="/solutions" class="nav-link">Solutions</a>
          <a href="/insights" class="nav-link">Insights</a>
          <a href="/contact" class="nav-link">Contact</a>
        </div>
        <button id="mobile-menu-button" class="mobile-menu-button">☰</button>
      </nav>
    </div>
  </header>

  <main>
    <div id="page-content">
      <!-- Page content will be loaded here -->
    </div>
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

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.html'), indexHtml);
fs.writeFileSync(path.join(OUTPUT_DIR, '404.html'), indexHtml);

// Create SPA routing files
console.log('🔄 Creating SPA routing configuration...');

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

// Create _redirects for Netlify
fs.writeFileSync(path.join(OUTPUT_DIR, '_redirects'), '/* /index.html 200');

// Create vercel.json for Vercel
const vercelConfig = JSON.stringify({
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}, null, 2);

fs.writeFileSync(path.join(OUTPUT_DIR, 'vercel.json'), vercelConfig);

// Create SEO files
console.log('🔍 Creating SEO files...');

// robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://intellome.com/sitemap.xml

# Block access to admin areas
Disallow: /admin/
Disallow: /wp-admin/`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'robots.txt'), robotsTxt);

// sitemap.xml
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

// Create README.md
console.log('📄 Creating documentation files...');
const readmeContent = `# Intello Cyber Technologies Static Website

## Overview

This is a static website for Intello Cyber Technologies, a leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.

## Deployment

This static website can be deployed to any web hosting service:

1. Upload all files to your web hosting service
2. Ensure that the server is configured for SPA routing (using the .htaccess file for Apache servers)

## Features

- Responsive design for all device sizes
- Modern, professional cybersecurity aesthetic
- SPA (Single Page Application) functionality for smooth navigation
- Contact forms using Formspree
- SEO optimization with sitemap.xml and robots.txt

## Files and Structure

- `index.html` - Main HTML file
- `css/main.css` - Styles for the website
- `js/main.js` - JavaScript functionality including SPA routing
- `images/` - Image assets
- `.htaccess` - Apache server configuration for SPA routing
- `_redirects` - Netlify configuration for SPA routing
- `vercel.json` - Vercel configuration for SPA routing

## Form Handling

The contact forms use Formspree for handling submissions. The forms are configured to use the ID 'mwpokerg'.

## Customization

To customize the website:

1. Edit the HTML in index.html
2. Modify the CSS in css/main.css
3. Update the JavaScript in js/main.js
4. Replace images in the images/ directory

## Support

For questions about this website, please contact Intello Cyber Technologies.
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);

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
    console.log(`  - Copied ${file}`);
  }
});

// Create a favicon placeholder
console.log('🔍 Creating favicon...');

// Try to copy logo from attached assets
let faviconCreated = false;
if (fs.existsSync('attached_assets')) {
  const logoFiles = fs.readdirSync('attached_assets').filter(
    file => file.toLowerCase().includes('logo') && 
    (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))
  );
  
  if (logoFiles.length > 0) {
    // Copy the first logo file as favicon.ico
    fs.copyFileSync(
      path.join('attached_assets', logoFiles[0]), 
      path.join(OUTPUT_DIR, 'favicon.ico')
    );
    console.log(`  - Created favicon.ico from ${logoFiles[0]}`);
    faviconCreated = true;
  }
}

// If no logo found, create empty favicon
if (!faviconCreated) {
  // Create an empty file
  fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon.ico'), '');
  console.log('  - Created empty favicon.ico (placeholder)');
}

// Create images directory with placeholders if it doesn't exist
if (!fs.existsSync(path.join(OUTPUT_DIR, 'images'))) {
  fs.mkdirSync(path.join(OUTPUT_DIR, 'images'), { recursive: true });
}

// Creating a zip package
console.log('📦 Creating zip package...');
try {
  execSync(`zip -r intello-website-complete.zip ${OUTPUT_DIR}`);
  console.log('✅ Created intello-website-complete.zip');
} catch (error) {
  console.log('⚠️ Could not create zip package. You can manually zip the dist folder.');
}

console.log('
🎉 Complete static website build finished!');
console.log('✅ The website is available in the dist/ folder');
console.log('✅ You can download intello-website-complete.zip for deployment');
console.log('
Next steps:');
console.log('1. Test the website by opening dist/index.html in your browser');
console.log('2. Deploy to your web hosting service following the instructions in GODADDY_DEPLOYMENT_GUIDE.md');
