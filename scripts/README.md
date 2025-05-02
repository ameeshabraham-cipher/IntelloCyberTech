# Utility Scripts

## Overview

This directory contains various utility scripts for the Intello Cyber Technologies website project. These scripts are used for tasks such as database initialization, image path updates, and other maintenance operations.

## Scripts

### Database Scripts

- `db-init.ts` - Initialize the database schema
- `db-push.ts` - Push schema changes to the database

### Build Scripts

- `env-check.js` - Check if required environment variables are set
- `setup-deployment-env.js` - Set up environment variables for deployment
- `download-blog-images.js` - Download blog images from Unsplash

### Utility Scripts

Located in the `util` subdirectory:

- `update_image_paths.js` - Update image paths in HTML/CSS files
- `update_post_image_paths.js` - Update image paths specifically for blog posts
- `temp_chevron_fix.tsx` - Temporary fix for chevron icon display issues

## Usage

### Database Initialization

```bash
npm run db:init
```

### Database Schema Push

```bash
npm run db:push
```

### Environment Setup

```bash
node scripts/setup-deployment-env.js
```

### Image Path Updates

```bash
node scripts/util/update_image_paths.js
```

## Notes

- Most scripts are designed to be run through npm scripts defined in `package.json`
- For the static site deployment, database scripts are not necessary
- Utility scripts in the `util` directory are for specific maintenance tasks and should be used with caution