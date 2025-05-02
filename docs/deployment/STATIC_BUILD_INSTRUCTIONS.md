# Static Build Instructions for Intello Website

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Git (optional, for cloning the repository)

## Step 1: Download the Project

### Option 1: Download ZIP from Replit
1. In Replit, click on the three dots menu in the Files panel
2. Select "Download as ZIP"
3. Extract the ZIP file to a folder on your local machine

### Option 2: Clone with Git (if you have the repository URL)
```bash
git clone <repository-url>
cd <repository-directory>
```

## Step 2: Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all necessary dependencies defined in package.json.

## Step 3: Run the Static Build Script

The project includes a specialized build script for creating a static version of the website:

```bash
node build-static.js
```

This script:
1. Builds the React application with static configurations
2. Processes all assets and creates optimized files
3. Generates routing configurations for static hosting
4. Produces a complete static site in the `dist` directory

## Step 4: Verify the Build

After the build completes, you should have a `dist` directory containing:
- index.html (main entry point)
- assets/ (directory with CSS, JS, and media files)
- .htaccess (for proper routing on Apache servers)

You can test the static build locally using a simple HTTP server:

```bash
npx serve dist
```

This will serve the static site on a local port (usually 3000 or 5000).

## Step 5: Prepare for Deployment

Zip the contents of the `dist` directory for easy upload:

```bash
cd dist
zip -r ../intello-website.zip .
```

Or on Windows, right-click the dist folder and select "Send to > Compressed (zipped) folder".

## Troubleshooting

### If you encounter "Out of Memory" errors during build:

On systems with limited RAM, you may need to increase Node's memory allocation:

```bash
node --max-old-space-size=4096 build-static.js
```

### If the build script fails with missing dependencies:

Ensure you've installed all dependencies first:

```bash
npm install
```

Then try running the build again.

## Important Notes

- The build process may take several minutes depending on your machine's specifications
- The final static site will have the Company Profile page and search functionality removed as requested
- All assets will be properly linked with relative paths for deployment anywhere
- The .htaccess file is crucial for proper routing on Apache servers (like GoDaddy)