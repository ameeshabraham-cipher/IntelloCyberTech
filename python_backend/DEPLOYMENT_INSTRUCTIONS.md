# Deployment Instructions for Intello Website with Python Backend

## Overview

This document provides step-by-step instructions for deploying the Intello Cyber Technologies website with a Python backend to GoDaddy cPanel hosting.

## Prerequisites

1. GoDaddy cPanel hosting account
2. Python App feature enabled in cPanel
3. SSH access (optional but helpful)

## Deployment Steps

### 1. Build the Frontend

Before deploying, build the React frontend:

```bash
npm run build:client
```

This will create optimized static files in the `build/client` directory.

### 2. Set Up Python App in cPanel

1. Log in to your cPanel account
2. Navigate to the "Software" section
3. Click on "Setup Python App"
4. Click "Create Application"
5. Fill in the details:
   - Python version: 3.8 or newer
   - Application root: Your domain's document root (e.g., `/home/username/public_html`)
   - Application URL: Your domain name
   - Application startup file: `app.py`
   - Application entry point: `app`
   - Passenger mode: enabled
6. Click "Setup"

### 3. Upload Files

#### Using File Manager

1. In cPanel, go to "File Manager"
2. Navigate to your document root
3. Create a directory called `build/client`
4. Upload all files from your local `build/client` directory to this directory
5. Upload all Python files from the `python_backend` directory to your document root:
   - `app.py`
   - `passenger_wsgi.py`
   - `requirements.txt`
   - `.htaccess`

#### Using FTP

1. Connect to your server using an FTP client
2. Navigate to your document root
3. Create a directory called `build/client`
4. Upload all files from your local `build/client` directory to this directory
5. Upload all Python files from the `python_backend` directory to your document root

### 4. Install Python Dependencies

1. If you have SSH access:
   ```bash
   cd ~/public_html
   pip install -r requirements.txt --user
   ```

2. If you don't have SSH access, you can use cPanel's "Run Python Code" feature to install packages.

### 5. Configure .htaccess

Ensure the `.htaccess` file is in place and contains the proper rewrite rules. This file has been uploaded as part of step 3.

### 6. Restart Python Application

1. In cPanel, go to "Setup Python App"
2. Find your application in the list
3. Click "Restart Application"

### 7. Configure SSL (Optional but Recommended)

1. In cPanel, go to "SSL/TLS"
2. Use the SSL management tools to install and configure SSL for your domain

## Troubleshooting

### Common Issues

1. **500 Internal Server Error**
   - Check the Python error logs in cPanel
   - Ensure all file paths are correct in app.py
   - Verify all requirements are installed

2. **404 Not Found for API Endpoints**
   - Check if the Python application is running
   - Verify .htaccess rewrite rules

3. **Static Assets Not Loading**
   - Ensure the paths in app.py static_folder setting are correct
   - Check if the build/client directory structure is preserved

### Checking Logs

1. In cPanel, go to "Logs"
2. Check "Error Log" for any Python errors

## Testing the Deployment

After deployment, test the following:

1. Visit your domain to ensure the website loads correctly
2. Test navigation between pages to verify SPA routing
3. Test the client logo display to verify API functionality
4. Test form submissions through Formspree
5. Test appointment scheduling through Calendly

## Support

If you encounter any issues with the deployment, please contact your web development team for assistance.
