/**
 * Static Site Viewer
 * 
 * This simple Express server displays the enhanced static site.
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Path to the static files from the unzipped package
const STATIC_FILES_PATH = path.join(__dirname, 'enhanced-static-site/dist');

console.log(chalk.cyan.bold(`\n🌐 Intello Cyber Technologies Static Site Viewer`));
console.log(chalk.yellow(`👀 Serving static files from: ${STATIC_FILES_PATH}\n`));

// Serve static files directly
app.use(express.static(STATIC_FILES_PATH));

// For any non-file routes, serve index.html (SPA routing)
app.get('*', (req, res) => {
  if (!req.path.includes('.')) {
    console.log(chalk.blue(`📄 SPA route requested: ${req.path}`));
    res.sendFile(path.join(STATIC_FILES_PATH, 'index.html'));
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(chalk.green.bold(`✅ Static site server running at http://localhost:${PORT}`));
  console.log(chalk.magenta.bold(`🔗 Access your Intello static site at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`));
  console.log(chalk.cyan('\n📝 Key features of the static site:'));
  console.log(chalk.white('  - Complete responsive design with dark-mode styling'));
  console.log(chalk.white('  - Multiple HTML pages: Home, About, Services, Solutions, etc.'));
  console.log(chalk.white('  - Properly structured CSS and JavaScript files'));
  console.log(chalk.white('  - SPA-routing configuration files for different hosting platforms'));
  console.log(chalk.white('  - SEO optimizations including robots.txt and sitemap.xml'));
  console.log(chalk.white('  - Detailed hosting instructions in documentation files'));
  
  console.log(chalk.yellow('\n📦 The complete package is available in intello-static-site.zip'));
});
