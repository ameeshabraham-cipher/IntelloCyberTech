# GoDaddy Deployment Guide

## Prerequisites

1. A GoDaddy hosting account with cPanel access
2. FTP client (like FileZilla)
3. The static website files in the `dist` folder

## Step 1: Access Your cPanel

1. Log in to your GoDaddy account
2. Navigate to "My Products" and find your hosting account
3. Click on "Manage" beside your hosting account
4. Select "cPanel Admin" to access the cPanel dashboard

## Step 2: Set Up FTP Access

1. In cPanel, find and click on "FTP Accounts"
2. Create a new FTP account or use the main account credentials
3. Note the following information:
   - FTP hostname (usually ftp.yourdomain.com)
   - FTP username
   - FTP password
   - FTP port (usually 21)

## Step 3: Connect With FileZilla

1. Open FileZilla or your preferred FTP client
2. Enter the FTP credentials from Step 2
3. Click "Quickconnect" to establish a connection

## Step 4: Upload Static Website Files

1. In the left panel (local files), navigate to the `dist` folder containing your static website files
2. In the right panel (remote files), navigate to the public_html directory

### Option A: Upload to Root (yourdomain.com)

1. Select all files and folders in the `dist` folder
2. Drag them to the `public_html` directory

### Option B: Upload to Subdirectory (yourdomain.com/subfolder)

1. Create or navigate to a subdirectory in the `public_html` folder
2. Select all files and folders in the `dist` folder
3. Drag them to the subdirectory

## Step 5: Verify .htaccess Configuration

The `.htaccess` file is crucial for proper SPA routing. Make sure it's properly uploaded:

1. Check if the `.htaccess` file is visible in the root of your uploaded files
2. If not visible, make sure your FTP client is set to show hidden files
3. Verify the `.htaccess` file has the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Step 6: Configure Domain (If Needed)

If you're deploying to a new domain or subdomain:

1. In cPanel, go to "Domains" or "Subdomains"
2. Set up the domain to point to the directory where you uploaded the files

## Step 7: Test Your Website

1. Open a browser and navigate to your domain
2. Verify that the home page loads correctly
3. Test navigation to ensure all routes work properly
4. Test forms to ensure they submit correctly

## Troubleshooting

### 404 Errors When Accessing Routes Directly

If you encounter 404 errors when trying to access routes directly (e.g., yourdomain.com/about), this indicates an issue with the SPA routing configuration:

1. Verify that the `.htaccess` file is properly uploaded and has the correct content
2. Check if mod_rewrite is enabled on the server (contact GoDaddy support if needed)
3. Try adding the following line to your `.htaccess` file at the top:
   ```
   Options -MultiViews
   ```

### Forms Not Working

If forms aren't working properly:

1. Check if the Formspree IDs are correctly set in the JavaScript files
2. Verify that you've activated the forms in your Formspree account
3. Test with the browser developer console open to check for JavaScript errors

### Missing Assets

If images or other assets aren't loading:

1. Check the browser's developer console for 404 errors on specific files
2. Verify that all asset folders were properly uploaded
3. Check if the paths in the HTML/CSS files match the actual asset locations

## Updating Your Website

When you need to update your website:

1. Make changes to the source code
2. Rebuild the static website using the build script
3. Upload the new files to your hosting, replacing the old files

For detailed update instructions, see `UPDATE_GODADDY_SITE.md`

## Support

If you encounter any issues with your GoDaddy hosting, contact their support team:

GoDaddy Support: https://www.godaddy.com/contact-us