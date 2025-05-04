#!/bin/bash

# This script builds the React app and prepares files for deployment

# Exit on error
set -e

echo "Starting deployment process..."

# Build React frontend
echo "Building React frontend..."
npm install
npm run build

echo "Creating necessary directories..."
mkdir -p build/client

# Copy static assets to the build/client directory
echo "Copying static assets..."
cp -R client/public/* build/client/

echo "Deployment preparation complete."
echo "You can now commit and push these changes to your Git repository."
echo "Then deploy using cPanel's Git Version Control feature."
