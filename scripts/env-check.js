/**
 * Environment Check Script
 * 
 * This script checks if all required environment variables are set
 * before running the application or deployment process.
 */

// Load environment variables from .env file
require('dotenv').config();

// Check for required database environment variables
const requiredVars = ['DATABASE_URL'];
const missingVars = [];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    missingVars.push(varName);
  }
}

// If any required variables are missing, try to construct them
if (missingVars.includes('DATABASE_URL')) {
  const pgVars = ['PGHOST', 'PGUSER', 'PGPASSWORD', 'PGDATABASE', 'PGPORT'];
  const hasPgVars = pgVars.every(varName => !!process.env[varName]);
  
  if (hasPgVars) {
    // Construct DATABASE_URL from individual PG* environment variables
    const port = process.env.PGPORT || '5432';
    process.env.DATABASE_URL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${port}/${process.env.PGDATABASE}`;
    console.log('Constructed DATABASE_URL from PostgreSQL environment variables');
    
    // Remove DATABASE_URL from missing vars
    missingVars.splice(missingVars.indexOf('DATABASE_URL'), 1);
  }
}

// If there are still missing variables, display an error
if (missingVars.length > 0) {
  console.error('Error: The following required environment variables are missing:');
  missingVars.forEach(varName => console.error(`  - ${varName}`));
  
  if (missingVars.includes('DATABASE_URL')) {
    console.error('\nTo fix this issue:');
    console.error('1. Set DATABASE_URL directly, OR');
    console.error('2. Set all PostgreSQL variables (PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT)');
  }
  
  process.exit(1);
}

console.log('Environment check passed. All required variables are set.');
process.exit(0);