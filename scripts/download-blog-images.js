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
  {
    name: 'iso-27001.png',
    url: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'gdpr.png',
    url: 'https://images.unsplash.com/photo-1563674644564-52c5ac2fe726?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'uae-pdpl.png',
    url: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'soc2.png',
    url: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'apt.png',
    url: 'https://images.unsplash.com/photo-1624969862293-b084f804a4f2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'cloud-security.png',
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'security-assessment.png',
    url: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'web3-security.png',
    url: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'vciso.png',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'zero-trust.png',
    url: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'data-transfers.png',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'multi-cloud.png',
    url: 'https://images.unsplash.com/photo-1560732488-7b5f5684471a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ai-compliance.png',
    url: 'https://images.unsplash.com/photo-1677442135136-20525f674ec2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ethical-ai.png',
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ml-threat-detection.png',
    url: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'autonomous-security.png',
    url: 'https://images.unsplash.com/photo-1631032032190-ca7a005dd811?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'healthcare-security.png',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'digital-banking.png',
    url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'government-security.png',
    url: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ecommerce-security.png',
    url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'blog-placeholder.png',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'banking.png',
    url: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'government.png',
    url: 'https://images.unsplash.com/photo-1604938500036-ef7492ab8859?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'healthcare.png',
    url: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ecommerce.png',
    url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'ai-ethics.png',
    url: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'machine-learning.png',
    url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'incident-response.png',
    url: 'https://images.unsplash.com/photo-1631029718786-8c9293cf1d9d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  },
  {
    name: 'data-privacy.png',
    url: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800&h=450'
  }
];

// Download all images
async function downloadAllImages() {
  for (const image of blogImages) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`Error downloading ${image.name}: ${error.message}`);
    }
  }
  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(err => {
  console.error('An error occurred during image download:', err);
});