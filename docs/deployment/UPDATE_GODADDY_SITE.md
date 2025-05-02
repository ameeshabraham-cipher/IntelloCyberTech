# Updating the GoDaddy Hosted Website

## Introduction

This guide provides step-by-step instructions for updating your existing Intello website on GoDaddy with the recent changes (removing Company Profile page and search functionality).

## Option 1: Full Rebuild and Deploy (Recommended)

For the most reliable results, we recommend downloading the project, rebuilding it locally, and then uploading the results to GoDaddy.

### Steps:

1. **Download the full project** from Replit
2. **Build locally**:
   ```
   npm install
   node build-static.js
   ```
3. **Upload to GoDaddy**:
   - Connect to your GoDaddy hosting via FTP
   - Backup your existing site files if needed
   - Upload the contents of the `dist` directory to your GoDaddy hosting

## Option 2: Partial Update of Existing Files (Advanced)

If you're comfortable with manual editing and want to avoid a complete reupload, you can selectively update just the key files that were modified.

### Key Changed Files:

1. **client/src/components/NavbarModern.tsx**
   - Removed Company Profile from the navigation items
   - Removed search bar functionality from desktop and mobile views
   - Removed search-related state and functions

2. **client/src/App.tsx**
   - Removed CompanyProfile import
   - Removed route for /company-profile

After making these specific changes, you would need to rebuild the application and upload just the updated JavaScript bundle files.

## Verifying the Update

After deploying, check your website to ensure:

- The Company Profile link is no longer in the navigation menu
- The search functionality has been removed
- All other functionality works correctly

## Important Notes

- The site uses Formspree for contact forms (ID: mwpokerg)
- Make sure you don't overwrite any custom settings or files you've added to your hosting
- Consider creating a backup of your current site before making changes

## Need Help?

If you encounter any issues during this process, please refer to the GODADDY_DEPLOYMENT_GUIDE.md for more detailed information about deploying to GoDaddy hosting, or contact your website developer for assistance.