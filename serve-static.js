import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'static-site-extracted/dist')));

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'static-site-extracted/dist/index.html'));
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static site server running at http://localhost:${PORT}`);
  console.log(`Access your static site at: https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`);
});
