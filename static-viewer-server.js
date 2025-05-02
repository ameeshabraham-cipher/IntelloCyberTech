/**
 * Static Site Viewer Server
 * 
 * This is a simple Express server that serves the static site files
 * from the unzipped directory.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Path to the static files from the unzipped package
const STATIC_FILES_PATH = path.join(__dirname, 'static-site-extracted/dist');

console.log(`\n🌐 Intello Cyber Technologies Static Site Viewer`);
console.log(`👀 Serving static files from: ${STATIC_FILES_PATH}\n`);

// Serve static files from the static-site-extracted/dist directory
app.use(express.static(STATIC_FILES_PATH));

// Enable SPA mode by redirecting all requests to index.html
app.get('*', (req, res) => {
  if (!req.path.includes('.')) {
    console.log(`SPA route requested: ${req.path}`);
    res.sendFile(path.join(STATIC_FILES_PATH, 'index.html'));
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Static site server running at http://localhost:${PORT}`);
  console.log(`🔗 Access the static site at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
  console.log(`\n📝 Features available in the static site:`);
  console.log(`   - All web pages with SPA-style navigation`);
  console.log(`   - Complete branding and styling`);
  console.log(`   - All images and assets included`);
  console.log(`   - SEO-optimized with robots.txt and sitemap.xml`);
  console.log(`   - Deployment configurations for various hosting platforms\n`);
  console.log(`💡 To download the full static site package: intello-static-site.zip\n`);
});
