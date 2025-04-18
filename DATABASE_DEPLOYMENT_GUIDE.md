# Database Configuration for Deployment

This guide explains how to properly configure database environment variables for deploying the Intello Cyber Technologies website.

## Required Environment Variables

For the website to connect to its database, you need to set one of the following:

### Option 1: Direct DATABASE_URL (Recommended)

Set a single environment variable:

```
DATABASE_URL=postgres://username:password@hostname:port/database
```

### Option 2: Individual PostgreSQL Variables

Set all of these environment variables:

```
PGHOST=your-database-hostname
PGUSER=your-database-username
PGPASSWORD=your-database-password
PGDATABASE=your-database-name
PGPORT=your-database-port (typically 5432)
```

## Deployment Platforms

### Azure Web App

1. In the Azure Portal, navigate to your Web App
2. Go to Settings > Configuration
3. Add the environment variables in the "Application settings" section
4. Click "Save" at the top

### Vercel

1. In your Vercel project dashboard, go to Settings > Environment Variables
2. Add the DATABASE_URL or individual PG* variables
3. Click "Save"

### GitHub Pages

GitHub Pages is a static hosting service and doesn't support server-side code or databases. For GitHub Pages deployment:

1. The project can be built as a static site without the contact form database functionality
2. Use the build-static.js script to generate a static version
3. Contact form submissions will need to be handled by a third-party service like Formspree

## Common Issues and Solutions

### "DATABASE_URL environment variable not set"

This error occurs when the application cannot find the database connection information. To fix it:

1. Verify that you've set either DATABASE_URL or all the PG* variables
2. Check for typos in the environment variable names
3. Ensure the environment variables are set in the correct environment (production, not just development)
4. Restart your web service after setting environment variables

### "Connection refused" or "Unable to connect to database"

This indicates that the database server is not accessible from your deployment environment:

1. Verify the database server is running
2. Check if the database allows connections from your deployment server's IP address
3. Verify port 5432 (or your custom port) is open in any firewalls
4. Check if the username/password combination is correct

## Testing Database Connectivity

To test if your database connection works:

1. Set up the environment variables as described above
2. Run: `node scripts/env-check.js`
3. If successful, it will output: "Environment check passed. All required variables are set."

If you encounter any issues not covered in this guide, please contact support@intellome.com for assistance.