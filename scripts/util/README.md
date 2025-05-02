# Utility Scripts

## Overview

This directory contains utility scripts used for maintenance, builds, and special-case fixes for the Intello Cyber Technologies website.

## Files

### temp_chevron_fix.tsx

A temporary fix for chevron icon rendering issues in certain browsers. This script patches the component rendering to ensure proper display across all platforms.

### update_image_paths.js

Utility script to update image paths throughout the codebase. Used during the static site build process to ensure all image paths are correctly formatted for the production environment.

### update_post_image_paths.js

Similar to `update_image_paths.js` but specifically designed for blog post images. This ensures that all blog post images are correctly referenced in the static build.

## Usage

These utility scripts are typically called from other build scripts and are not meant to be run directly by end users. They are maintained here for development and debugging purposes.

## Maintenance

When modifying the build process or fixing specific issues, you may need to update these utility scripts. Always test any changes thoroughly before rebuilding the production site.

## Dependencies

These scripts depend on the Node.js runtime and may require additional dependencies as specified in the project's package.json file.