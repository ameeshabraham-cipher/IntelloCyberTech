/**
 * Setup Deployment Environment Variables
 * 
 * This script ensures that all necessary environment variables are set during the build process.
 * It's intended to be run as part of the deployment process to make sure database connections work.
 */

const fs = require('fs');
const path = require('path');

// Check for environment variables
console.log('Setting up deployment environment variables...');

// Get environment variables from the build environment or use defaults for local development
const {
  DATABASE_URL = process.env.DATABASE_URL,
  PGHOST = process.env.PGHOST,
  PGUSER = process.env.PGUSER,
  PGPASSWORD = process.env.PGPASSWORD,
  PGDATABASE = process.env.PGDATABASE,
  PGPORT = process.env.PGPORT
} = process.env;

// If DATABASE_URL is not provided but individual PG* vars are, construct the DATABASE_URL
if (!DATABASE_URL && PGHOST && PGUSER && PGPASSWORD && PGDATABASE) {
  process.env.DATABASE_URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT || '5432'}/${PGDATABASE}`;
  console.log('Constructed DATABASE_URL from individual PostgreSQL environment variables');
}

// Check if DATABASE_URL is available now
if (!process.env.DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is still not set');
  console.error('Please set DATABASE_URL or the individual PostgreSQL environment variables');
  console.error('(PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT)');
  process.exit(1);
}

// Create a .env file for local development if it doesn't exist
// This won't affect production deployments that use environment variables
if (!fs.existsSync(path.join(__dirname, '../.env'))) {
  let envContent = '';
  
  if (process.env.DATABASE_URL) {
    envContent += `DATABASE_URL=${process.env.DATABASE_URL}\n`;
  }
  
  // Add other environment variables if they exist
  if (process.env.NODE_ENV) {
    envContent += `NODE_ENV=${process.env.NODE_ENV}\n`;
  }
  
  if (process.env.SENDGRID_API_KEY) {
    envContent += `SENDGRID_API_KEY=${process.env.SENDGRID_API_KEY}\n`;
  }
  
  if (envContent) {
    fs.writeFileSync(path.join(__dirname, '../.env'), envContent);
    console.log('Created .env file with available environment variables');
  }
}

console.log('Environment setup complete');