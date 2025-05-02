# GoDaddy Deployment Guide for Intello Website

## Prerequisites

- A GoDaddy hosting account
- FTP credentials for your GoDaddy hosting
- An FTP client (such as FileZilla, Cyberduck, or WinSCP)
- The static website build (created following the STATIC_BUILD_INSTRUCTIONS.md guide)

## Step 1: Prepare Your Static Website Build

Before deploying, ensure you have generated the static website build by following the instructions in the STATIC_BUILD_INSTRUCTIONS.md file. You should have a `dist` directory containing all the necessary files for your website.

## Step 2: Backup Your Existing Website (if applicable)

If you're updating an existing website, it's always a good practice to create a backup:

1. Connect to your GoDaddy hosting using FTP
2. Navigate to your web directory (usually public_html)
3. Download a copy of all files to your local machine
4. Create a timestamped backup folder (e.g., backup-20240501)

## Step 3: Connect to Your GoDaddy Hosting Using FTP

1. Open your FTP client
2. Enter your FTP credentials:
   - Host: usually ftp.yourdomain.com (replace with your actual domain)
   - Username: provided by GoDaddy (often your cPanel username)
   - Password: your FTP password
   - Port: 21 (default FTP port)
3. Connect to the server

## Step 4: Upload the Static Website

1. Navigate to your web directory on the server (usually public_html)
2. Upload all files and folders from your local `dist` directory to this directory
   - Make sure to include the .htaccess file, which is crucial for proper routing
   - You can either upload the files directly or upload the zip file and extract it
3. If you encounter file permission issues, set the correct permissions:
   - Folders: 755 (drwxr-xr-x)
   - Files: 644 (rw-r--r--)

## Step 5: Verify the Deployment

After uploading all files:

1. Open your website in a browser to check if it loads correctly
2. Test navigation to different pages
3. Verify that the Company Profile page and search functionality have been removed
4. Test any forms or interactive elements

## Troubleshooting Common Issues

### Issue: Pages Not Found (404 errors) When Refreshing or Direct URL Access

**Solution:** This is usually related to .htaccess configuration

1. Make sure the .htaccess file was properly uploaded
2. Verify it has the correct content for URL rewriting
3. Ensure .htaccess files are allowed on your hosting (they should be on GoDaddy)

### Issue: Missing Images or Assets

**Solution:** Check file paths and permissions

1. Ensure all assets were uploaded
2. Check that the paths in the HTML are correct
3. Verify that file permissions allow read access

### Issue: Website Not Updating After Upload

**Solution:** Clear cache or force refresh

1. Clear your browser cache
2. Try a hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Check if GoDaddy has a caching service that needs to be flushed

## Additional Resources

- [GoDaddy's FTP Help Documentation](https://www.godaddy.com/help/connect-to-a-hosting-account-via-ftp-000068)
- [GoDaddy's File Manager Help](https://www.godaddy.com/help/file-manager-30272)

## After Deployment

After a successful deployment, consider:

1. Testing all forms and user interaction points
2. Submitting your sitemap to search engines for reindexing
3. Clearing any CDN or server caches

## Contact Information

If you encounter any issues that you cannot resolve, please contact your website developer for assistance.