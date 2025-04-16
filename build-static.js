import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a simple build script for static deployment
console.log('📦 Starting static build process...');

// Step 1: Build the static site with Vite
console.log('🔨 Building with Vite...');
exec('npx vite build --outDir dist', (err, stdout, stderr) => {
  if (err) {
    console.error('❌ Build failed:', err);
    return;
  }
  
  console.log('✅ Vite build successful');
  console.log(stdout);
  
  // Step 2: Copy all public files
  console.log('📋 Copying public files...');
  
  try {
    // Ensure 404.html exists for SPA routing
    if (fs.existsSync('public/404.html')) {
      fs.copyFileSync('public/404.html', 'dist/404.html');
      console.log('✅ Copied 404.html');
    }
    
    // Copy other necessary public files
    if (fs.existsSync('public/_redirects')) {
      fs.copyFileSync('public/_redirects', 'dist/_redirects');
      console.log('✅ Copied _redirects for Netlify');
    }
    
    console.log('🎉 Build completed successfully!');
    console.log('');
    console.log('Your static site is ready in the dist/ folder.');
    console.log('');
    console.log('📝 Deployment options:');
    console.log('1. Netlify: Upload the dist folder or connect your repository');
    console.log('2. Vercel: Upload the dist folder or connect your repository');
    console.log('3. GitHub Pages: Push the dist folder to the gh-pages branch');
    console.log('');
  } catch (error) {
    console.error('❌ Error copying files:', error);
  }
});