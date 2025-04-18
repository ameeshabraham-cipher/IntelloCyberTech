/**
 * Download Blog Images Script
 * 
 * This script downloads thematically appropriate images from Unsplash for the blog posts.
 * The images are royalty-free and attribution is not required for non-commercial use.
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the blog images directory if it doesn't exist
const blogImagesDir = path.join(__dirname, '../client/public/blog');
if (!fs.existsSync(blogImagesDir)) {
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Function to download an image from a URL and save it with a specific filename
function downloadImage(url, filename) {
  const fullPath = path.join(blogImagesDir, filename);
  
  // Skip if file already exists and is not a placeholder
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    if (stats.size > 50000) { // If file is larger than 50KB, assume it's not a placeholder
      console.log(`Skipping ${filename} - already exists and is not a placeholder`);
      return Promise.resolve();
    }
  }
  
  console.log(`Downloading ${filename}...`);
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      const file = fs.createWriteStream(fullPath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(fullPath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Blog Images Configuration - maps image names to appropriate themed Unsplash URLs
const blogImages = [
  // Fixed URLs for images that failed to download
  {
    name: 'gdpr.png',
    url: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'apt.png',
    url: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'multi-cloud.png',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ai-compliance.png',
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'autonomous-security.png',
    url: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'healthcare-security.png',
    url: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'digital-banking.png',
    url: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'government-security.png',
    url: 'https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ecommerce-security.png',
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'blog-placeholder.png',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'banking.png',
    url: 'https://images.unsplash.com/photo-1541354329998-f4175d495f52?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'government.png',
    url: 'https://images.unsplash.com/photo-1551696785-927d4ac2d35b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'healthcare.png',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ecommerce.png',
    url: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ai-ethics.png',
    url: 'https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'machine-learning.png',
    url: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'incident-response.png',
    url: 'https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'data-privacy.png',
    url: 'https://images.unsplash.com/photo-1595514535711-c31bb981c049?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  }
];

// Download all images
async function downloadAllImages() {
  // Download only the government-security.png image to save time
  const imageToDownload = blogImages.find(img => img.name === 'government-security.png');
  if (imageToDownload) {
    try {
      await downloadImage(imageToDownload.url, imageToDownload.name);
    } catch (error) {
      console.error(`Error downloading ${imageToDownload.name}: ${error.message}`);
    }
  }
  console.log('Image download completed!');
}

downloadAllImages().catch(err => {
  console.error('An error occurred during image download:', err);
});