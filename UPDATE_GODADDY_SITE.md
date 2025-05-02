# Updating the Intello Cyber Technologies Website on GoDaddy

This document provides step-by-step instructions for updating the Intello Cyber Technologies website that is hosted on GoDaddy.

## Prerequisites

- FTP credentials for your GoDaddy hosting account
- FTP client software (e.g., FileZilla, Cyberduck)
- The updated static website files (generated using the `build-static-site.js` script)

## Update Process

### 1. Generate the Updated Static Website

1. Open your project in Visual Studio Code
2. Make any necessary changes to the content or design
3. Run the static site generator script:
   ```bash
   node build-static-site.js
   ```
4. Verify the updates in the `dist` directory

### 2. Connect to GoDaddy via FTP

1. Open your FTP client (e.g., FileZilla)
2. Enter the following connection details:
   - Host: Your FTP host (typically `ftp.yourdomain.com`)
   - Username: Your FTP username (provided by GoDaddy)
   - Password: Your FTP password
   - Port: 21 (default FTP port)
3. Click "Connect" to establish the FTP connection

### 3. Backup the Existing Website (Recommended)

1. Navigate to the public_html directory (or wherever your website is hosted)
2. Download a complete copy of the existing website to your local machine
3. Store this backup in a safe location

### 4. Upload the Updated Files

#### Option 1: Full Site Update

1. In your FTP client, navigate to the public_html directory (or relevant directory)
2. Delete all existing files (after ensuring you have a backup)
3. Upload all files from your local `dist` directory to the server

#### Option 2: Selective Update

1. Navigate to the specific files or directories you want to update
2. Upload only the changed files, replacing the existing ones

### 5. Verify Special Files

Ensure these critical files are correctly uploaded and have appropriate permissions:

1. **Hidden Files**:
   - `.htaccess` - Make sure this file is uploaded and has read permissions

2. **Configuration Files**:
   - Check that `robots.txt` and `sitemap.xml` are properly uploaded
   - Verify that the domain in these files matches your actual domain

3. **Assets**:
   - Confirm that all assets, images, CSS, and JavaScript files were uploaded correctly

### 6. Test the Website

1. Open a web browser and navigate to your website
2. Test all pages and functionality:
   - Check that all pages load without errors
   - Verify that images and styling appear correctly
   - Test any forms to ensure they submit properly
   - Check responsive design on different devices

3. Clear your browser cache if necessary to see the updates

### 7. Troubleshooting Common Issues

1. **404 Errors**:
   - Ensure the `.htaccess` file was uploaded correctly
   - Check that file paths in HTML are correct

2. **Missing Styles or Images**:
   - Verify that all assets were uploaded to the correct directories
   - Check for any case-sensitivity issues in file paths

3. **Form Submission Problems**:
   - Ensure the Formspree endpoint is correctly configured
   - Check for any JavaScript errors in the console

4. **Permission Issues**:
   - Set appropriate file permissions (typically 644 for files and 755 for directories)

## Regular Maintenance

1. **Regular Backups**:
   - Create backups before and after any significant changes

2. **Content Updates**:
   - For simple content updates, you can edit the HTML files directly using GoDaddy's file manager

3. **Security**:
   - Regularly check for any unauthorized file changes
   - Keep your FTP credentials secure

---

If you encounter any issues during the update process, contact your web development team or GoDaddy support for assistance.
