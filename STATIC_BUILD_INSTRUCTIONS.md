# How to Build the Intello Static Website with Recent Changes

This guide will walk you through the process of creating a static build of the Intello website that includes the recent changes (removing Company Profile page and search functionality).

## Prerequisites

- Node.js installed on your local machine
- Git installed (optional, for downloading the repository)

## Step 1: Download the Project

Download the entire project from Replit. You can do this by:

1. Clicking the three dots in the top-right corner of the Replit interface
2. Selecting "Download as ZIP"
3. Extracting the ZIP file to a local folder

## Step 2: Install Dependencies

Open a terminal or command prompt, navigate to the project folder, and run:

```bash
npm install
```

This will install all the necessary dependencies for the project.

## Step 3: Build the Static Website

Run the build script by executing:

```bash
node build-static.js
```

This process might take a few minutes. It will create a `dist` folder containing all the static files for the website with the recent changes.

## Step 4: Deploy to GoDaddy Hosting

Follow the instructions in the GODADDY_DEPLOYMENT_GUIDE.md file to deploy the contents of the `dist` folder to your GoDaddy hosting account.

## What Changed

The following changes have been made to the website:

1. Removed the Company Profile page:
   - Removed from navbar navigation
   - Removed the route and import in App.tsx

2. Removed the search functionality:
   - Removed search bar from desktop navigation
   - Removed search bar from mobile navigation
   - Removed search-related state and handlers

## Testing After Deployment

After deploying the website, make sure to check that:

1. The Company Profile link no longer appears in the navigation menu
2. There is no search bar in either desktop or mobile views
3. All other functionality continues to work properly

## Troubleshooting

If you encounter any issues during the build or deployment process:

1. Make sure Node.js is properly installed and updated to a recent version
2. Check that all dependencies were installed correctly
3. Review the error messages in the console for specific issues
4. Ensure your GoDaddy hosting account has enough space for the website files
5. Verify that the `.htaccess` file was uploaded and has the correct permissions

For any additional questions or issues, please contact your website developer.