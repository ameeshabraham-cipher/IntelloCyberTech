# Quick Start Guide

## Introduction

This guide provides the fastest way to get started with the Intello Cyber Technologies website, whether you're deploying the pre-built site or making modifications to the codebase.

## Deploying the Pre-built Site (Recommended)

The simplest way to deploy the website is to use the pre-built package:

1. Download the `intello-website.zip` file from the `build` directory
2. Extract the contents to your local machine
3. Upload the extracted files to your web hosting via FTP
4. Ensure the `.htaccess` file is included if using Apache server

For detailed GoDaddy-specific instructions, see [GoDaddy Deployment Guide](./deployment/GODADDY_DEPLOYMENT_GUIDE.md).

## Development Quick Start

If you need to make changes to the website:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the website at http://localhost:5000

## Making Content Changes

### Updating Text Content

1. Navigate to the relevant page component in `client/src/pages/`
2. Modify the text content as needed
3. Save the file

### Updating Images

1. Place new images in the appropriate directory under `public/images/`
2. Update image references in the component files

### Adding New Pages

1. Create a new component file in the appropriate directory under `client/src/pages/`
2. Add the route to the new page in `client/src/App.tsx`
3. Update navigation menus as needed

## Building for Production

After making changes, you'll need to rebuild the static site:

### Option 1: Lightweight Build (For Replit)

```bash
node build/build-static-light.js
```

### Option 2: Full Build (Run Locally)

```bash
node build/build-static.js
```

## Common Tasks

### Modifying the Navigation Menu

Edit the `NavbarModern.tsx` component in `client/src/components/`.

### Updating Footer Content

Edit the `FooterModern.tsx` component in `client/src/components/`.

### Changing Contact Information

Modify the `Contact.tsx` component in `client/src/pages/`.

### Updating Service Offerings

Edit the respective service page in `client/src/pages/services/`.

## Getting Help

Refer to the comprehensive documentation in the `docs` directory for detailed information about specific aspects of the project.