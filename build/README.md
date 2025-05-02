# Build Tools

## Overview

This directory contains build scripts and tools for generating the static version of the Intello Cyber Technologies website. Due to resource constraints in the Replit environment, multiple build options are provided.

## Contents

- `build-static.js` - Full static site builder (resource-intensive)
- `build-static-light.js` - Lightweight static site builder designed to work within Replit's limitations
- `download-static-site.js` - Script to download the built static site
- `intello-website.zip` - Pre-built website package ready for deployment

## Build Options

### Option 1: Using Pre-built Package

The simplest option is to use the pre-built package `intello-website.zip`, which contains all the static files needed for deployment. This package can be downloaded and extracted directly to your web hosting environment.

### Option 2: Light Build Process

If you need to make minor changes, you can use the lightweight build process:

```bash
node build/build-static-light.js
```

This will create a `build-temp` directory with the static files, but with some optimizations skipped to reduce memory usage.

### Option 3: Full Build Process

For a complete build with all optimizations, use the full build process. Note that this may exceed Replit's memory limits and should be run locally:

```bash
node build/build-static.js
```

This will create a `dist` directory with the fully optimized static site.

## Resource Considerations

The full build process may fail in the Replit environment due to memory constraints. If you encounter memory-related errors, consider:

1. Using the pre-built package (`intello-website.zip`)
2. Using the lightweight build process (`build-static-light.js`)
3. Downloading the project and building locally

## Support

For build-related issues, refer to the deployment guides in the `docs/deployment` directory.