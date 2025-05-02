# Intello Cyber Technologies Website

A modern, professional website showcasing Intello Cyber Technologies' expertise in Governance, Risk, and Compliance (GRC), Audit, AI-Powered Compliance Automation, Cybersecurity consultancy, and IT Managed Services.

## Project Overview

This website is designed to position Intello Cyber Technologies as a leader in cybersecurity and compliance services with a clean, professional interface that effectively communicates their comprehensive service offerings and value proposition across multiple specialized solution areas and industry verticals.

## Key Features

- Modern, dark-themed professional design with cybersecurity aesthetics
- Comprehensive service and solutions catalog
- Industry-specific verticals and case studies
- Contact forms and service request capabilities
- SEO optimization for UAE/Dubai markets
- Mobile-responsive design

## Development Approach

The website was developed using React with TypeScript, and converted to a static site for easier deployment and hosting. This approach eliminates server-side dependencies while maintaining a modern, interactive user experience.

## Deployment Options

The website can be deployed using two main methods:

1. **Full Build Process** - For local development and customization
   - See `docs/deployment/STATIC_BUILD_INSTRUCTIONS.md`

2. **Quick Deployment** - Using pre-built package for hosting
   - See `docs/deployment/GODADDY_DEPLOYMENT_GUIDE.md`

## Documentation

All project documentation is available in the `docs` directory:

- `docs/QUICK_START.md` - Fast track to deploying or modifying the site
- `docs/INSTALLATION_GUIDE.md` - Setting up the project for local development
- `docs/PROJECT_DOCUMENTATION.md` - Comprehensive project guide
- `docs/ENVIRONMENT_VARIABLES.md` - Environment configuration details
- `docs/SITEMAP.md` - Website structure and navigation
- `docs/deployment/` - Hosting and deployment guides
  - `docs/deployment/GODADDY_DEPLOYMENT_GUIDE.md` - GoDaddy-specific instructions
  - `docs/deployment/HTACCESS_GUIDE.md` - Apache server configuration
- `docs/assets/` - Asset information and guidelines

## Project Structure

```
intello-website/
├── client/            # Frontend React application (see client/README.md)
│   ├── public/        # Client-side public assets
│   ├── src/           # React source code
│   │   ├── components/  # Reusable UI components
│   │   ├── lib/         # Utility functions and helpers
│   │   └── pages/       # Page components
├── server/            # Express server (see server/README.md)
├── shared/            # Shared code between client and server (see shared/README.md)
├── build/             # Build scripts and static site generators (see build/README.md)
│   ├── build-static.js        # Full static site builder
│   ├── build-static-light.js  # Lightweight builder
│   └── intello-website.zip    # Pre-built website package
├── public/            # Global static assets (see public/README.md)
├── docs/              # Documentation (see docs/README.md)
│   ├── deployment/    # Deployment guides
│   └── assets/        # Asset documentation
└── scripts/           # Utility scripts for maintenance (see scripts/README.md)
    └── util/          # Helper utilities for scripts
```

Each directory contains its own README.md with detailed information about its contents and usage.

## Contributing

Contributions to this project are welcome. Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on how to contribute.

## Contact

For questions about this implementation, please contact Intello Cyber Technologies.