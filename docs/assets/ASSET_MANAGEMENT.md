# Asset Management Guide

## Overview

This document provides information about the assets used in the Intello Cyber Technologies website and how to manage them effectively.

## Asset Locations

### Primary Asset Directories

- `/public/images/` - Main website images (logos, icons, backgrounds)
- `/public/images/services/` - Service-specific images
- `/public/images/solutions/` - Solution-specific images
- `/public/images/industries/` - Industry-specific images
- `/public/images/clients/` - Client logos and testimonial images
- `/attached_assets/` - Project development assets and references

### Logo Files

- `public/images/intello-logo-white.png` - White logo for dark backgrounds
- `public/images/intello-logo-dark.png` - Dark logo for light backgrounds
- `logo_base64.txt` - Base64 encoded logo for inline use

## Asset Guidelines

### Image Optimization

All images should be optimized for web use to ensure fast loading times:

1. Use WebP format where possible for best compression
2. PNG format for logos and graphics requiring transparency
3. JPEG format for photographs with appropriate compression
4. SVG format for icons and simple graphics that need to scale

### Recommended Image Dimensions

- Hero Images: 1920×1080px (16:9 aspect ratio)
- Service Cards: 600×400px
- Team Photos: 400×400px (1:1 aspect ratio)
- Blog Thumbnails: 800×450px
- Client Logos: 200×100px (maintain aspect ratio, transparent background)

### Color Guidelines

Ensure all images follow the Intello brand color scheme:

- Primary Blue: #0066B3
- Secondary Red: #FF0000
- Dark Gray: #181818
- Light Gray: #F5F5F5
- White: #FFFFFF

## Adding New Assets

1. Place new images in the appropriate directory
2. Optimize images before adding to the project
3. Use descriptive filenames (e.g., `penetration-testing-hero.webp` rather than `image1.webp`)
4. Update references in the corresponding component files

## Asset Update Process for Production

When updating assets on the live site:

1. Back up existing assets
2. Upload new assets to the server's corresponding directories
3. Clear browser cache to see changes
4. Verify assets appear correctly across different devices

## Troubleshooting

### Common Issues

- **Missing Images**: Check file paths and ensure files exist in the correct location
- **Slow Loading**: Check image file sizes and optimize as needed
- **Responsive Issues**: Ensure images scale properly on different devices

## Special Notes

### Reference Files

- The `attached_assets/` directory contains development resources and references that are not part of the production build. These files are for reference only and should not be included in the final deployment package.

- `docs/assets/intello-logo-reference.png` - Logo reference for design consistency

- `docs/assets/logo_base64.txt` - Base64 encoded logo that can be embedded directly in HTML/CSS. This is useful for cases where you need to include the logo without an external file request, such as in emails or certain application environments.

### Base64 Logo Usage

To use the base64 encoded logo:

1. Open the `logo_base64.txt` file
2. Copy the entire contents
3. Use in HTML with the format: `<img src="data:image/png;base64,PASTE_CONTENT_HERE" alt="Intello Logo">`
4. Use in CSS with the format: `background-image: url("data:image/png;base64,PASTE_CONTENT_HERE");`