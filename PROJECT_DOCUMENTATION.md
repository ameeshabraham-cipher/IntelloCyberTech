# Intello Cyber Technologies Website Documentation

## Project Overview

This is a modern, professional website for Intello Cyber Technologies, showcasing their expertise in cybersecurity services, governance, risk management, compliance (GRC), audit, AI-powered compliance automation, and more.

### Key Features

- **Modern Professional Design**: Dark-themed, futuristic cybersecurity aesthetic with high contrast for readability
- **Comprehensive Service Catalog**: Detailed information about various service offerings including GRC Services, Offensive Security, and Cybersecurity Solutions
- **Interactive Elements**: Contextual help bubbles, animations, and responsive components for enhanced user experience
- **Industry-Specific Content**: Dedicated pages for different industry verticals (BFSI, Healthcare, Government, etc.)
- **Insights Section**: Blog posts on cybersecurity topics with search and filter functionality
- **Contact and Assessment Forms**: Easy ways for potential clients to request services

## Technology Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS with ShadCN UI components
- **Animations**: Framer Motion for smooth transitions and effects
- **Routing**: Wouter for client-side navigation
- **Form Processing**: Formspree integration for static form submissions

## Project Structure

The application follows a modular structure for easy maintenance:

```
/client
  /src
    /components      - Reusable UI components
    /hooks           - Custom React hooks
    /lib             - Utility functions and shared code
    /pages           - Main website pages
      /components    - Page-specific components
      /industries    - Industry-specific pages
      /services      - Service-specific pages 
      /solutions     - Solution-specific pages
/server              - Backend server (optional, not needed for static deployment)
/public              - Static assets
/shared              - Shared types and schemas
```

## Deployment Options

### Static Deployment (Recommended)

The website is configured for static deployment without backend dependencies:

1. Forms use Formspree for processing submissions
2. No database dependencies
3. Client-side routing with SPA configuration
4. See `STATIC_DEPLOYMENT.md` for detailed deployment instructions

### Server Deployment (Alternative)

For applications requiring backend functionality:

1. Node.js Express server included
2. In-memory storage for form submissions
3. API endpoints for retrieving form data

## Customization Guide

### Updating Content

Edit the relevant files in the `client/src/pages` directory to update copy, images, and other content.

### Adding New Services or Solutions

1. Create a new file in the appropriate directory (`services`, `solutions`, or `industries`)
2. Use the existing layout components (`ServicePageLayout`, `SolutionPageLayout`, or `IndustryPageLayout`)
3. Update the navigation components to include the new page

### Modifying Design Elements

1. Color scheme is defined in `theme.json`
2. UI components are located in `client/src/components/ui`
3. Layout components are in the main components directory

### Form Processing

1. Create a Formspree account and set up forms
2. Replace the placeholder endpoints in:
   - `client/src/pages/Contact.tsx`
   - `client/src/pages/Assessment.tsx`

## Browser Compatibility

The website is designed to work with modern browsers including:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Maintenance and Troubleshooting

See the troubleshooting section in `STATIC_DEPLOYMENT.md` for common issues and their solutions.

## License

All rights reserved. Unauthorized copying of this file, via any medium is strictly prohibited.