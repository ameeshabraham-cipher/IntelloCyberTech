# Public Assets

## Overview

This directory contains public static assets for the Intello Cyber Technologies website. These files are served directly and include images, icons, fonts, and other static resources.

## Directory Structure

- `images/` - Website imagery including logos, photos, and illustrations
- `icons/` - UI icons and favicon files
- `fonts/` - Custom web fonts (if not loaded from CDN)
- `documents/` - Downloadable documents like whitepapers and brochures

## Asset Guidelines

### Images

- Use optimized formats (WebP where possible, with JPEG/PNG fallbacks)
- Keep file sizes reasonable (typically under 200KB for large images)
- Provide appropriate dimensions for responsive layouts
- Use descriptive filenames (e.g., `cybersecurity-assessment-hero.webp`)

### Icons

- Prefer SVG format for scalable, crisp display
- Optimize SVGs to remove unnecessary metadata
- Use consistent styling across icon sets

### Static Files

- Ensure PDFs and other documents are optimized for web delivery
- Use clear naming conventions

## Adding New Assets

When adding new assets:

1. Place them in the appropriate subdirectory
2. Optimize for web delivery
3. Use consistent naming conventions
4. Update documentation if introducing new asset categories

## Usage in Code

Reference public assets with relative paths:

```tsx
// In React components
<img src="/images/logo.png" alt="Intello Cyber Technologies Logo" />
<link rel="icon" href="/icons/favicon.ico" />
```

## Build Process

During the static site build process, these assets are copied to the appropriate output directory and all references are maintained.