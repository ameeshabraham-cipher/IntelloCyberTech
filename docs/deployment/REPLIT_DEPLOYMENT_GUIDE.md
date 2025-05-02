# Intello Cyber Technologies Website
# Replit Deployment Guide

This guide provides instructions for deploying the Intello Cyber Technologies website using Replit's built-in deployment service.

## Overview

The Intello Cyber Technologies website consists of:

1. **Frontend**: React-based single-page application
2. **Backend API**: Express.js server handling form submissions and admin functions
3. **Database**: PostgreSQL database for storing contact form and assessment request submissions

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] The application runs correctly in the Replit workspace
- [ ] All features are working as expected
- [ ] The database is properly configured (if needed)
- [ ] Any necessary environment variables are set

## Deployment Steps

### 1. Set Up Environment Variables

Replit automatically provides database credentials via environment variables:

- `DATABASE_URL` - Complete database connection string
- Individual PostgreSQL variables (`PGHOST`, `PGUSER`, `PGPASSWORD`, `PGDATABASE`, `PGPORT`)

No action is needed for these as they are automatically set up by Replit.

If you need additional environment variables (like API keys):

1. Click on the **Tools** menu in Replit
2. Select **Secrets**
3. Add your secrets with appropriate key names (e.g., `SENDGRID_API_KEY`)

### 2. Deploy the Application

1. Click on the **Run** button to ensure your application is running in the workspace
2. Once the application is running, look for the "Deploy" button in the upper right corner of the Replit interface
3. Click **Deploy**
4. In the deployment modal:
   - Choose a suitable subdomain (or use the auto-generated one)
   - Leave other settings at their defaults
5. Click **Deploy** again to start the deployment process

Deployment will take a few minutes as Replit:
- Builds your application
- Sets up the necessary infrastructure
- Configures a domain for your site

### 3. Post-Deployment Steps

After deployment completes:

1. Visit your deployed site at the URL provided
2. Test all major features:
   - Navigation between pages
   - Contact form submission
   - Assessment request form
   - WhatsApp floating button
   - Calendly scheduling button
   - Admin area access (if applicable)

### 4. Database Configuration (If Needed)

If database features aren't working properly after deployment:

1. Go to the Replit console
2. Run `node scripts/env-check.js` to verify environment variables
3. If issues persist, check if the database was initialized by running `node scripts/db-init.ts`

**Note**: The application is designed to function even without a database connection, but form submissions will not be stored without a working database.

## Troubleshooting Deployment Issues

### Common Issues

#### Application Not Loading

- Check deployment logs for errors
- Ensure the application starts properly in the workspace
- Verify that all necessary dependencies are installed

#### Database Connection Issues

- Verify that the database exists and is accessible
- Check if environment variables are properly set
- Run `node scripts/db-init.ts` to initialize database tables

#### API Endpoints Not Working

- Check server logs for errors
- Verify the API routes are correctly defined in `server/routes.ts`
- Ensure frontend requests are using the correct URLs

## Updating Your Deployment

To update your deployed site after making changes:

1. Make and test your changes in the workspace
2. Click the **Deploy** button again
3. Your site will be rebuilt and updated automatically

## Getting Support

If you encounter deployment issues:

1. Check Replit's deployment documentation: https://docs.replit.com/hosting/deployments/deploying-http-servers
2. Visit the Replit Discord community for help
3. Contact your technical support team

## Document Information
- **Version**: 1.0
- **Last Updated**: April 18, 2025
- **Prepared For**: Intello Cyber Technologies