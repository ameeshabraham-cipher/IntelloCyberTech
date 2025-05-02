// This script serves a download page for the static site package

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3500;

// Handle download request
app.get('/download', (req, res) => {
  const zipPath = path.join(__dirname, 'intello-website.zip');
  
  if (fs.existsSync(zipPath)) {
    res.download(zipPath, 'intello-website.zip', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file. Please try again.');
      }
    });
  } else {
    res.status(404).send('Package file not found. Please generate the static website package first.');
  }
});

// Serve the download page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Download Intello Website Package</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1 {
          color: #c10020;
          border-bottom: 2px solid #eee;
          padding-bottom: 10px;
        }
        .download-box {
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 20px;
          margin: 20px 0;
        }
        .download-btn {
          display: inline-block;
          background-color: #c10020;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          margin-top: 15px;
        }
        .note {
          background-color: #fffde7;
          border-left: 4px solid #ffd600;
          padding: 15px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Intello Website Static Package</h1>
      
      <p>This page allows you to download the static website package for Intello Cyber Technologies.</p>
      
      <div class="download-box">
        <h2>Static Website Package</h2>
        <p>This package includes:</p>
        <ul>
          <li>A simplified static website placeholder</li>
          <li>The .htaccess file needed for GoDaddy hosting</li>
          <li>Detailed instructions for building the complete website</li>
          <li>Deployment guides for GoDaddy hosting</li>
        </ul>
        <a href="/download" class="download-btn">Download Package</a>
      </div>
      
      <div class="note">
        <h3>Important Notes</h3>
        <p>This is a simplified package. Due to Replit resource constraints, the full static website must be built locally.</p>
        <p>After downloading, extract the zip file and follow the instructions in the README.md file.</p>
      </div>
      
      <h2>Changes Made to the Website</h2>
      <ul>
        <li>Removed the Company Profile page from navigation</li>
        <li>Removed the search functionality from the website</li>
      </ul>
      
      <h2>Next Steps</h2>
      <ol>
        <li>Download the static website package</li>
        <li>Download the full project from Replit</li>
        <li>Build the complete static website on your local machine</li>
        <li>Deploy the website to GoDaddy hosting</li>
      </ol>
    </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Static site download server running at http://localhost:${PORT}`);
  console.log(`
You can download the static website package at: http://localhost:${PORT}/download`);
  console.log(`Or visit the download page at: http://localhost:${PORT}`);
});