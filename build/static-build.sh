#!/bin/bash

# Static Build Script for Intello Cyber Technologies Website
# This script will build the static version of the website

echo "🚀 Starting static build process for Intello Cyber Technologies website..."
echo ""

# Run the build-static.js script
echo "📦 Running build-static.js..."
node build-static.js

# Check if build was successful
if [ -d "dist" ]; then
  echo ""
  echo "✅ Static build completed successfully!"
  echo "📁 Your static website is available in the 'dist' folder"
  echo ""
  echo "💡 Remember to update the Formspree form IDs before deploying:"
  echo "   - client/src/components/ContactFormWithCalendly.tsx"
  echo "   - client/src/components/AssessmentRequestForm.tsx"
  echo ""
  echo "📝 For complete deployment instructions, see STATIC_SITE_GUIDE.md"
else
  echo ""
  echo "❌ Build failed. Check the error messages above."
fi