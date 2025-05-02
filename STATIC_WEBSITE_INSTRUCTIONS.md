# Creating a Static Website for Intello Cyber Technologies with VS Code

This guide provides step-by-step instructions for converting the Intello Cyber Technologies React project into a static website using Visual Studio Code.

## Prerequisites

- Visual Studio Code installed (https://code.visualstudio.com/)
- Node.js installed (https://nodejs.org/) - version 16 or higher recommended
- Basic familiarity with the command line
- Git installed (optional, for version control)

## Steps to Create a Static Website

### 1. Clone or Download the Project

```bash
# If using Git
git clone <repository-url>
cd intello-project

# Or download and extract the ZIP file from Replit
```

### 2. Install Dependencies

Open the project folder in VS Code, then open the integrated terminal (Terminal → New Terminal) and run:

```bash
npm install
```

### 3. Create a Static Build Script

Create a new file `build-static.js` in the project root:

```javascript
/**
 * Static Website Builder for Intello Cyber Technologies
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR = 'dist';

// Create output directory if it doesn't exist
console.log('📦 Creating static website...');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Create subdirectories
console.log('📂 Creating folder structure...');
const dirs = ['css', 'js', 'images', 'images/blog', 'images/services', 'images/team'];
dirs.forEach(dir => {
  if (!fs.existsSync(path.join(OUTPUT_DIR, dir))) {
    fs.mkdirSync(path.join(OUTPUT_DIR, dir), { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Copy assets from client/public and attached_assets
console.log('🖼️ Copying images and assets...');
const assetDirs = ['client/public', 'attached_assets'];

assetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (file.match(/\.(png|jpg|jpeg|svg|ico|gif)$/i)) {
        fs.copyFileSync(
          path.join(dir, file),
          path.join(OUTPUT_DIR, 'images', file)
        );
        console.log(`✅ Copied ${file}`);
      }
    });
  }
});

// Extract CSS from client/src/index.css
console.log('🎨 Creating CSS files...');
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

fs.writeFileSync(path.join(OUTPUT_DIR, 'css', 'styles.css'), cssContent);
console.log('✅ Created styles.css');

// Create a simple JavaScript file
console.log('🔧 Creating JavaScript files...');
const jsContent = `// Static website JavaScript
document.addEventListener('DOMContentLoaded', () => {
  console.log('Intello Cyber Technologies static website loaded');
});
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'js', 'main.js'), jsContent);
console.log('✅ Created main.js');

// Create HTML files
console.log('📄 Creating HTML files...');
const createHtmlFile = (fileName, title, content) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Intello Cyber Technologies</title>
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="icon" type="image/png" href="/images/intello-logo.png">
</head>
<body>
  <header>
    <nav>
      <a href="/"><img src="/images/Intello New Logo - White.png" alt="Intello Logo" height="40"></a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">About Us</a></li>
        <li><a href="/services.html">Services</a></li>
        <li><a href="/solutions.html">Solutions</a></li>
        <li><a href="/insights.html">Insights</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>${title}</h1>
    ${content}
  </main>

  <footer>
    <div>
      <h3>About Intello</h3>
      <p>Leading provider of Cybersecurity, GRC, and IT Managed Services in UAE.</p>
    </div>
    <div>
      <h3>Contact</h3>
      <p>Email: info@intellome.com</p>
      <p>Phone: +971 55 355 6787</p>
    </div>
    <div>
      <p>&copy; ${new Date().getFullYear()} Intello Cyber Technologies. All rights reserved.</p>
    </div>
  </footer>

  <script src="/js/main.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(OUTPUT_DIR, fileName), html);
  console.log(`✅ Created ${fileName}`);
};

// Create index.html
createHtmlFile('index.html', 'Home', `
  <section class="hero">
    <h2>Cybersecurity & Compliance Solutions</h2>
    <p>Comprehensive security services tailored for UAE businesses since 2003.</p>
    <a href="/contact.html" class="cta-button">Get Started</a>
  </section>

  <section class="services">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div class="service-card">
        <img src="/images/iso-27001.svg" alt="ISO 27001">
        <h3>ISO 27001 Compliance</h3>
        <p>Implement and maintain ISO 27001 certification.</p>
      </div>
      <div class="service-card">
        <img src="/images/soc2.svg" alt="SOC 2">
        <h3>SOC 2 Compliance</h3>
        <p>Achieve and maintain SOC 2 compliance.</p>
      </div>
      <div class="service-card">
        <img src="/images/uae-pdpl.svg" alt="UAE PDPL">
        <h3>UAE PDPL Compliance</h3>
        <p>Navigate UAE Personal Data Protection Law.</p>
      </div>
    </div>
  </section>
`);

// Create other pages
createHtmlFile('about.html', 'About Us', `
  <section>
    <h2>Our Story</h2>
    <p>Intello Cyber Technologies was founded in 2003 with a clear mission: to help organizations protect their digital assets and navigate complex regulatory landscapes.</p>
    <p>Over the past two decades, we have grown to become a trusted leader in cybersecurity and compliance solutions in the UAE and beyond.</p>
  </section>
`);

createHtmlFile('services.html', 'Our Services', `
  <section>
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
  </section>
`);

createHtmlFile('solutions.html', 'Our Solutions', `
  <section>
    <h2>Tailored Security Solutions</h2>
    <p>We provide customized solutions for various industries and compliance needs.</p>
  </section>
`);

createHtmlFile('insights.html', 'Insights', `
  <section>
    <h2>Industry Insights</h2>
    <p>Stay updated with the latest trends and developments in cybersecurity and compliance.</p>
  </section>
`);

createHtmlFile('contact.html', 'Contact Us', `
  <section>
    <h2>Get in Touch</h2>
    <p>Have questions or need assistance? Contact our team today.</p>
    <form>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </section>
`);

// Create 404.html
createHtmlFile('404.html', 'Page Not Found', `
  <section>
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <a href="/">Return to Home</a>
  </section>
`);

// Create configuration files for hosting platforms
console.log('⚙️ Creating configuration files...');

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

// Create SEO files
console.log('🔍 Creating SEO files...');

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
</urlset>`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapXml);
console.log('✅ Created sitemap.xml');

// Create README.md
console.log('📑 Creating documentation...');
const readmeContent = `# Intello Cyber Technologies Static Website

## Overview
This is a static website build for Intello Cyber Technologies.

## Deployment
To deploy this website, upload all contents of the dist/ directory to your web hosting service.

## Structure
- HTML files: Main content pages
- css/: Stylesheets
- js/: JavaScript files
- images/: Image assets
- .htaccess, _redirects, vercel.json: Configuration files for different hosting services

## Contact
For questions about this website, please contact Intello Cyber Technologies.
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
console.log('✅ Created README.md');

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
console.log('- intello-static-site.zip (if ZIP creation was successful)\n');
console.log('Next steps:');
console.log('1. Review the generated static files');
console.log('2. Enhance CSS styling in dist/css/styles.css as needed');
console.log('3. Upload the contents of the dist/ directory to your web hosting service');
```

### 4. Run the Static Build Script

In the VS Code terminal, run:

```bash
node build-static.js
```

This will create a `dist` directory containing all the static website files and a zip package `intello-static-site.zip`.

### 5. Customize the Static Website (Optional)

1. **Enhance CSS Styling**:
   - Open `dist/css/styles.css` and add more styling to match the Intello brand

2. **Add More Content**:
   - Edit the HTML files in the `dist` directory to add more content

3. **Add Additional Images**:
   - Copy additional images to the `dist/images` directory

### 6. Preview the Static Website

You can preview the static website using a local server. If you have Node.js installed, you can use the `serve` package:

```bash
npm install -g serve
serve dist
```

This will start a local server and provide you with a URL to view your static website.

### 7. Deploy the Static Website

Deploy the static website to your web hosting service:

1. **Traditional Hosting**:
   - Upload all files from the `dist` directory to your web hosting service via FTP

2. **Netlify**:
   - Drag and drop the `dist` directory to Netlify.com
   - Or connect your GitHub repository and set the build directory to `dist`

3. **Vercel**:
   - Install Vercel CLI: `npm install -g vercel`
   - Navigate to the `dist` directory: `cd dist`
   - Deploy: `vercel`

4. **GitHub Pages**:
   - Create a GitHub repository
   - Push the `dist` directory contents to the repository
   - Enable GitHub Pages in the repository settings

## Tips for a Better Static Website

1. **Optimize Images**:
   - Use tools like [TinyPNG](https://tinypng.com/) to optimize images before adding them to the `dist/images` directory

2. **Add Meta Tags**:
   - Edit the HTML files to include proper meta tags for SEO and social sharing

3. **Test Responsiveness**:
   - Test the website on different devices and screen sizes
   - Add responsive CSS rules to `styles.css`

4. **Add Analytics**:
   - Consider adding Google Analytics or other analytics scripts to track website usage

5. **Performance Optimization**:
   - Minify CSS and JavaScript files for production
   - Consider using a tool like [PurgeCSS](https://purgecss.com/) to remove unused CSS

## Troubleshooting

- **Missing Images**: Ensure all image paths are correct in the HTML files
- **Styling Issues**: Check the CSS file is properly linked and contains all necessary styles
- **SPA Routing**: Ensure the appropriate configuration file (.htaccess, _redirects, or vercel.json) is uploaded to your hosting service

---

For any additional assistance or questions, please contact the Intello Cyber Technologies development team.
