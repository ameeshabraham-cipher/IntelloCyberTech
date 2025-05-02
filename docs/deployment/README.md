# Deployment Guide Index

## Overview

This directory contains various deployment guides for the Intello Cyber Technologies website. The website is designed to be deployed as a static site, but multiple deployment options are available depending on your hosting environment and requirements.

## Recommended Deployment Method

The **recommended deployment method** is to use the pre-built static package:

1. [GoDaddy Deployment Guide](./GODADDY_DEPLOYMENT_GUIDE.md) - Instructions for deploying to GoDaddy hosting
2. [Update GoDaddy Site](./UPDATE_GODADDY_SITE.md) - Instructions for updating the existing site

## Alternative Deployment Options

### Static Site Deployment

- [Static Build Instructions](./STATIC_BUILD_INSTRUCTIONS.md) - How to build the static site from source
- [Static Deployment](./STATIC_DEPLOYMENT.md) - General instructions for deploying the static site to any host

### Cloud Platform Deployment

- [GitHub Pages Deployment](./GITHUB_PAGES_DEPLOYMENT.md) - Deploy to GitHub Pages
- [Azure Deployment Guide](./AZURE_DEPLOYMENT_GUIDE.md) - Deploy to Microsoft Azure
- [Replit Deployment Guide](./REPLIT_DEPLOYMENT_GUIDE.md) - Deploy on Replit

### Other Guides

- [Blog Customization Guide](./BLOG_CUSTOMIZATION_GUIDE.md) - How to customize the blog/insights section
- [Database Deployment Guide](./DATABASE_DEPLOYMENT_GUIDE.md) - Only needed if adding database functionality (not recommended)

## Resource Constraints

Note that there are resource constraints when building the full static site on Replit. For this reason, we provide a pre-built lightweight package (`build/intello-website.zip`) that can be deployed directly without needing to build the site from scratch.

## File Transfer Protocol (FTP) Recommendations

For uploading files to your web hosting:

- Use an FTP client like FileZilla, Cyberduck, or WinSCP
- Ensure binary transfer mode is selected for all files
- Maintain the existing directory structure when uploading
- Upload the `.htaccess` file if using Apache web server

## Common Issues

### Page Not Found Errors

If you encounter 404 errors when navigating directly to a page (e.g., `/services/grc`), ensure that your web server is configured to serve the `index.html` file for all routes. This is critical for single-page applications (SPAs) to work correctly.

For Apache, this is handled by the included `.htaccess` file. For Nginx or other web servers, you'll need to configure URL rewriting according to your server's documentation.

### Resource Path Issues

If images or other resources fail to load, check that:

1. All paths in HTML/CSS/JS files use relative paths
2. The directory structure on the server matches the expected structure
3. File permissions allow the web server to read the files

## Support

For additional deployment assistance, contact Intello Cyber Technologies support.