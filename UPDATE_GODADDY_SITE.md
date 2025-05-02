# Updating Your GoDaddy-Hosted Static Website

## Introduction

This guide outlines the process for updating your Intello Cyber Technologies website after it has been deployed to GoDaddy hosting. Follow these steps when you need to make content changes, design updates, or functionality improvements.

## Prerequisites

1. Access to the website's source code repository
2. Node.js and NPM installed on your local machine
3. FTP client (like FileZilla)
4. Your GoDaddy FTP credentials

## Step 1: Update the Source Code

1. Make the necessary changes to the website's source code
2. Test the changes locally by running:
   ```bash
   npm run dev
   ```
3. Ensure all features work correctly in the development environment

## Step 2: Build the Updated Static Website

1. Use the build script to generate the updated static website:
   ```bash
   node build/build-static.js
   ```
2. If you encounter memory issues, use the lightweight build script:
   ```bash
   node build/build-static-light.js
   ```
   Note: The lightweight build might not include all assets and will require additional steps

## Step 3: Backup Current Live Site (Recommended)

Before uploading new files, it's good practice to backup the current version:

1. Connect to your GoDaddy hosting using FileZilla
2. Navigate to the `public_html` directory or your website's subdirectory
3. Download all files to a local backup folder
4. Name the folder with the current date for easy reference

## Step 4: Upload Updated Files

### Option A: Full Upload (Recommended for Major Updates)

1. Connect to your GoDaddy hosting using FileZilla
2. Navigate to the `public_html` directory or your website's subdirectory
3. Delete all existing files and folders **EXCEPT**:
   - Any custom server configuration files you might have added
   - User-uploaded content (if any)
   - Any database files (if applicable)
4. Upload all files and folders from the newly built `dist` directory

### Option B: Selective Upload (For Minor Updates)

1. Connect to your GoDaddy hosting using FileZilla
2. Compare the new `dist` folder with the current live site
3. Upload only the files that have changed

## Step 5: Verify .htaccess File

The `.htaccess` file is critical for SPA routing. After uploading:

1. Check if the `.htaccess` file is visible in your hosting directory
2. If it's not visible, make sure your FTP client is showing hidden files
3. If needed, manually upload the `.htaccess` file from the `dist` directory

## Step 6: Test the Updated Website

1. Open your website in multiple browsers
2. Test all navigation paths
3. Verify that all new content and features work correctly
4. Test responsive behavior on different device sizes
5. Clear your browser cache if you're not seeing the expected changes

## Step 7: Monitor for Issues

After updating:

1. Monitor the website for any issues or errors
2. Check if forms are submitting correctly
3. Verify that all links work as expected

## Common Issues and Solutions

### Cache-Related Issues

If changes aren't visible after updating:

1. Clear your browser cache
2. Try accessing the site in an incognito/private window
3. Test on a different device or network

### Missing Assets

If images or files are missing:

1. Check that all asset folders were properly uploaded
2. Verify file paths in the HTML/CSS
3. Check case sensitivity (some servers are case-sensitive)

### Routing Problems

If route navigation isn't working:

1. Verify the `.htaccess` file is properly uploaded
2. Try accessing the problem route directly, and check the server response
3. Contact GoDaddy support if you suspect a server configuration issue

## Need Assistance?

If you encounter issues during the update process that you cannot resolve, consider:

1. Reviewing the documentation in the website repository
2. Consulting with your development team
3. Contacting GoDaddy support for hosting-related issues