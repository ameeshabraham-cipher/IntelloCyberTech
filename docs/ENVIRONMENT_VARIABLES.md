# Environment Variables Guide

## Overview

This document describes the environment variables used in the Intello Cyber Technologies website. For the static site deployment (recommended), most of these variables are not required as the site functions without server-side processing.

## Essential Variables for Form Processing

### Formspree Integration

The website uses Formspree for form processing in the static site version. The Formspree form IDs are hardcoded in the respective form components:

- Contact form: ID `mwpokerg`
- Assessment request form: ID `mwpokerg`

No environment variables are needed for Formspree integration as the form endpoints are already configured in the components.

## Variables for Server Deployment (Optional)

If you choose to deploy the website with the server component (not recommended), the following environment variables may be relevant:

### Database Configuration

```
DATABASE_URL=postgresql://username:password@hostname:port/database
```

The database connection string is used for storing form submissions and other data if server functionality is enabled.

### Email Service Configuration

If you implement server-side email functionality, you would need to set up email service credentials. The recommended approach is to use Formspree instead, which doesn't require any environment variables.

## Local Development

For local development, you can create a `.env.local` file with any necessary variables. This file should not be committed to version control.

## Production Deployment

For the recommended static site deployment, no environment variables are needed as all functionality is client-side or handled through third-party services like Formspree.

If you're deploying with server functionality, set the environment variables according to your hosting provider's documentation:

- **GoDaddy**: Set in cPanel > Software > Setup PHP > Environment Variables
- **Azure**: Set in App Service > Configuration > Application settings
- **Replit**: Set in Secrets tab

## Security Considerations

- Never commit API keys or sensitive credentials to version control
- Use environment variables for all sensitive information
- Regularly rotate API keys and credentials for security

## Troubleshooting

If you encounter issues with environment variables:

1. Verify that variables are correctly set in your hosting environment
2. Check for typos in variable names
3. Ensure that the application has permission to access the environment variables
4. For local development, confirm that your `.env.local` file is in the correct location

## Additional Resources

Refer to the deployment guides in the `docs/deployment` directory for platform-specific environment variable configuration.