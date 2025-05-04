/**
 * Sitemap Generator for Intello Cyber Technologies Website
 * 
 * This script generates a sitemap.xml file based on the defined routes in the application.
 * It can be run manually or as part of the build process.
 */

const fs = require('fs');
const path = require('path');

// Base URL for the website
const BASE_URL = 'https://intellome.com';

// Define your routes here - keep this in sync with your application routes
const routes = [
  // Main Pages
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/assessment', changefreq: 'monthly', priority: 0.8 },
  
  // Service Pages
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/grc', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/offensive-security', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/advisory', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/professional', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/managed', changefreq: 'monthly', priority: 0.7 },
  
  // ISO and Compliance Service Pages
  { url: '/services/iso27001', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/soc2', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/gdpr', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/uae-pdpl', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/cloud-security', changefreq: 'monthly', priority: 0.7 },
  
  // Solution Pages
  { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions/soc', changefreq: 'monthly', priority: 0.7 },
  { url: '/solutions/zero-trust', changefreq: 'monthly', priority: 0.7 },
  { url: '/solutions/devsecops', changefreq: 'monthly', priority: 0.7 },
  { url: '/solutions/ai-security', changefreq: 'monthly', priority: 0.7 },
  
  // Industry Pages
  { url: '/industries/bfsi', changefreq: 'monthly', priority: 0.6 },
  { url: '/industries/healthcare', changefreq: 'monthly', priority: 0.6 },
  { url: '/industries/government', changefreq: 'monthly', priority: 0.6 },
  { url: '/industries/retail', changefreq: 'monthly', priority: 0.6 },
  
  // Insights Pages
  { url: '/insights', changefreq: 'weekly', priority: 0.7 },
];

// Generate sitemap XML content
function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each route to the sitemap
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.url}</loc>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>\n';
  return xml;
}

// Write sitemap to file
function writeSitemapToFile() {
  const sitemapContent = generateSitemapXml();
  const outputPath = path.resolve(__dirname, '../client/public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemapContent, 'utf8');
  console.log(`Sitemap generated successfully at ${outputPath}`);
}

// Execute the function
writeSitemapToFile();
