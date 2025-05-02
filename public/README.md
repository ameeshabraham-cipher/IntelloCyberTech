# Public Assets

## Overview

This directory contains global static assets for the Intello Cyber Technologies website. These files are served directly from the root of the website and include common images, global resources, and site-wide assets.

## Contents

This directory includes:

- Global images and icons used throughout the site
- Favicon and browser icons
- Site-wide resources (fonts, common styles)
- Robots.txt and sitemap files
- Manifest files for PWA capabilities

## Usage in Production

During the static site build process, these files are copied to the root of the output directory. This ensures that all assets are accessible from their expected paths.

## Relationship to Client Assets

This directory contains global assets that are used across the entire application, while client-specific assets are located in the `client/public/` directory. During the build process, both sets of assets are properly integrated into the final static site.

## Asset Guidelines

### Images

- Use optimized formats (WebP where possible)
- Compress images appropriately for web use
- Use descriptive filenames

### Organization

- Group related assets in subdirectories (e.g., `/icons`, `/backgrounds`)
- Maintain consistent naming patterns

## Adding New Assets

When adding new global assets:

1. Ensure they belong in this global directory and not in `client/public/`
2. Optimize for web delivery
3. Use consistent naming patterns
4. Update documentation if introducing new asset categories