# Client Public Assets

## Overview

This directory contains client-specific public assets for the Intello Cyber Technologies website. These files are used specifically by the React application during development.

## Purpose

The assets in this directory are used during development and are distinct from the global `public/` directory at the project root. During the static site build process, assets from both directories are merged appropriately.

## Contents

- Client-specific images and icons
- JSON data files used for development
- Placeholder content used during development

## Asset Management

When adding new assets to the website:

1. Client-specific assets should be placed in this directory
2. Global assets that are used across the entire application should be placed in the root `public/` directory

This separation helps maintain a clear organization between client-side specific assets and global assets.

## Usage in Code

Refer to these assets using relative paths:

```tsx
// In client components
<img src="/client-logo.png" alt="Client Logo" />
```

## Static Build Process

During the static site build:

1. Assets from this directory are copied to the build output directory
2. Global assets from the root `public/` directory are also copied
3. Paths are preserved to maintain all references

This ensures that all assets are properly included in the final static website.