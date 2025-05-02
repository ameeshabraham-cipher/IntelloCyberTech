#!/bin/bash

# This script prepares and runs the static site viewer

echo "🌐 Setting up static site viewing environment..."

# Check if the enhanced-static-site directory exists
if [ ! -d "enhanced-static-site" ]; then
  echo "🔄 Extracting static site package..."
  unzip -o intello-static-site.zip -d enhanced-static-site
fi

echo "🚀 Starting static site viewer..."
echo "✨ You can access the static site at: https://$REPL_SLUG.$REPL_OWNER.repl.co"
echo "📦 Static site files are located in: enhanced-static-site/dist/"

# Run the static site viewer
node view-static-site.js
