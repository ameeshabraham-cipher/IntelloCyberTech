# Deploying to GoDaddy Web Hosting (Economy Plan)

This guide will walk you through deploying the Intello Cyber Technologies website to a GoDaddy Economy web hosting plan.

## Prerequisites

1. A GoDaddy web hosting account (Economy or higher plan)
2. FTP credentials for your GoDaddy hosting account
3. An FTP client like FileZilla or WinSCP
4. Your domain is already set up and pointing to your GoDaddy hosting

## Step 1: Build the Static Version of the Website

First, we need to create a static build of the website:

1. In your terminal, run:
```bash
node build-static.js
```

2. This will create a `dist` folder containing all the static files needed for your website.

## Step 2: Configure Your Forms

Before uploading, make sure your forms are properly configured with Formspree:

1. Create a Formspree account at [formspree.io](https://formspree.io) if you don't have one already
2. Create two forms (one for contact, one for assessment requests)
3. Get your form IDs (they look like `xgejpkwy`)
4. Update the form IDs in these files:
   - `client/src/components/ContactFormWithCalendly.tsx` - Line 71
   - `client/src/components/AssessmentRequestForm.tsx` - Line 71
5. Rebuild the static version after making these changes

## Step 3: Connect to Your GoDaddy Hosting via FTP

1. Get your FTP credentials from your GoDaddy account dashboard
   - Host: usually `ftp.yourdomain.com` or provided in your GoDaddy dashboard
   - Username: provided by GoDaddy
   - Password: your GoDaddy hosting password

2. Connect using an FTP client like FileZilla:
   - Open FileZilla
   - Enter your FTP credentials
   - Connect to your server

## Step 4: Upload the Website Files

1. In your FTP client, navigate to the public web directory:
   - This is usually `/public_html/` or `/www/`
   - If you want to deploy to a subdirectory, navigate to that folder (e.g., `/public_html/newsite/`)

2. If you want to replace an existing website:
   - Backup any existing files you want to keep
   - Delete existing files (or move them to a backup folder)

3. Upload all contents of the `dist` folder to your web directory:
   - Select all files in your local `dist` folder
   - Drag and drop them to the remote server panel
   - Wait for the upload to complete

## Step 5: Set Up SPA Routing

For single-page application routing to work properly, you'll need to set up server redirection rules:

1. In your FTP client, navigate to the root directory where your website files are located.

2. Create or modify a `.htaccess` file with the following content:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

3. Upload this `.htaccess` file to the same directory as your `index.html` file.

## Step 6: Verify Your Deployment

1. Visit your website in a browser to make sure everything is working correctly.
2. Check that:
   - The homepage loads properly
   - Navigation works (try different pages)
   - Images and styles load correctly
   - Submit a test form to verify Formspree integration

## Troubleshooting

### Routes Not Working (404 Errors)
- Make sure the `.htaccess` file is properly uploaded and has the correct permissions
- Some GoDaddy plans may require enabling the Apache mod_rewrite module in your hosting control panel

### Images or Assets Not Loading
- Check that all file paths are correct
- Ensure all assets were properly uploaded
- Verify file permissions (usually 644 for files, 755 for directories)

### Forms Not Working
- Verify your Formspree form IDs are correct
- Check that the forms are active in your Formspree dashboard
- Ensure you have proper CORS settings in Formspree (allow your domain in the dashboard)

### For Additional Help
- Contact GoDaddy support for hosting-specific issues
- Check Formspree documentation for form-related problems