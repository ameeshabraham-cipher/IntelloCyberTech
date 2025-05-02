# Installation Guide

## Overview

This guide provides instructions for setting up the Intello Cyber Technologies website project for local development. These steps are only necessary if you intend to make significant modifications to the site's structure or functionality.

## Prerequisites

- Node.js 18.x or higher
- npm 8.x or higher
- Git (for version control)

## Initial Setup

### 1. Clone the Repository

```bash
git clone <repository-url> intello-website
cd intello-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=5000
# Only needed if using the form submission backend
# FORMSPREE_ENDPOINT=https://formspree.io/f/mwpokerg
```

## Development Workflow

### Starting the Development Server

```bash
npm run dev
```

This will start the development server at http://localhost:5000.

### Project Structure

See the main README.md for a detailed breakdown of the project structure.

## Making Changes

### Frontend Changes

All frontend code is located in the `client/src` directory. The site uses React with TypeScript, Tailwind CSS, and shadcn/ui components.

- Modify pages in `client/src/pages`
- Update components in `client/src/components`
- Adjust styles with Tailwind classes directly in the TSX files

### Building for Production

The site can be built as a static website using one of the following methods:

#### Full Build (Local Development)

```bash
node build/build-static.js
```

This creates a `dist` directory with the optimized static site.

#### Lightweight Build (Replit)

```bash
node build/build-static-light.js
```

This creates a `build-temp` directory with a lighter version of the static site.

## Troubleshooting

### Common Issues

1. **Memory Errors During Build**
   - The full build process requires significant memory and may fail in restricted environments like Replit
   - Use the lightweight build or the pre-built package instead

2. **Missing Dependencies**
   - If you encounter errors about missing dependencies, run `npm install` again
   - Check that you're using the correct Node.js version

3. **Port Conflicts**
   - If port 5000 is already in use, modify the PORT environment variable in the `.env` file

## Next Steps

After installation, refer to the following documentation for specific tasks:

- `docs/QUICK_START.md` - Fast track guide
- `docs/deployment/` - Deployment guides
- `docs/assets/` - Asset management documentation