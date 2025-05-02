# Apache .htaccess Configuration Guide

## Overview

This document explains the purpose and usage of the `.htaccess` file included with the Intello Cyber Technologies website. The `.htaccess` file is crucial for proper functioning of the React single-page application when deployed to Apache web servers.

## What is an .htaccess File?

An `.htaccess` (hypertext access) file is a directory-level configuration file supported by Apache web servers. It allows for decentralized management of web server configuration without requiring direct access to the server's main configuration files.

## Purpose in This Project

For a single-page application (SPA) like the Intello website, the `.htaccess` file serves several critical functions:

1. **URL Rewriting**: Ensures that all routes (e.g., `/services/grc`, `/about-us`) are properly directed to the main `index.html` file, allowing React's client-side routing to handle navigation

2. **Cache Control**: Sets appropriate caching headers for different types of files to optimize loading performance

3. **GZIP Compression**: Enables compression to reduce file sizes and improve load times

4. **Security Headers**: Adds security-related HTTP headers to protect against common web vulnerabilities

## Location

The `.htaccess` file is located in the `build` directory of the project and should be included in the root directory of your web hosting when deploying the site.

## Usage

1. When deploying to an Apache server (such as GoDaddy's shared hosting), ensure that the `.htaccess` file is uploaded to the root directory of your website (typically `public_html` or `www`)

2. Make sure the file is named exactly `.htaccess` (with the leading dot)

3. Ensure the file has appropriate permissions (typically `644`)

## Common Issues

### 404 Errors on Page Refresh

If you encounter 404 errors when refreshing pages or accessing deep links directly, it might indicate that:

1. The `.htaccess` file is missing from your deployment
2. The `.htaccess` file was not properly uploaded (some FTP clients may hide files starting with a dot)
3. The server is not configured to allow `.htaccess` overrides

### Solution

1. Make sure the `.htaccess` file is included in your deployment
2. In your FTP client, ensure "show hidden files" is enabled when uploading
3. Contact your hosting provider if `.htaccess` overrides are not allowed

## Alternative Web Servers

If you're not using Apache, you'll need equivalent configuration for your web server:

### Nginx

For Nginx, you would need to add the following to your server block configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### IIS

For Microsoft IIS, you would need to use a web.config file with URL Rewrite module installed.

## Customization

The provided `.htaccess` file is optimized for the Intello website's needs. If you need to make changes, please consult with a web server administrator or developer familiar with Apache configuration.