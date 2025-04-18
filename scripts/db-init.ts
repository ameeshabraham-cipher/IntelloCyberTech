import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import { sql } from 'drizzle-orm';
import ws from 'ws';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// ES modules replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file (if it exists)
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Configure Neon for WebSocket support
neonConfig.webSocketConstructor = ws;

// Try to construct DATABASE_URL from PG* vars if not already set
if (!process.env.DATABASE_URL) {
  const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT } = process.env;
  if (PGHOST && PGUSER && PGPASSWORD && PGDATABASE) {
    const port = PGPORT || '5432';
    process.env.DATABASE_URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${port}/${PGDATABASE}`;
    console.log('Constructed DATABASE_URL from PostgreSQL environment variables');
  }
}

// This script ensures the database tables are created
async function main() {
  console.log('Initializing database tables...');
  
  // Skip database initialization if DATABASE_URL is not set
  // This allows deployment to succeed even without database credentials
  if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL environment variable not set. Skipping database initialization.');
    console.log('Please set DATABASE_URL after deployment to enable database features.');
    return; // Exit function but don't fail the script
  }
  
  let pool;
  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    
    const db = drizzle(pool);
    
    // Create tables if they don't exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS contact_forms (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        company TEXT,
        subject TEXT,
        message TEXT NOT NULL,
        service TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS assessment_requests (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        company TEXT NOT NULL,
        industry TEXT,
        message TEXT,
        service TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS appointments (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        appointment_type TEXT NOT NULL,
        scheduled_date TIMESTAMP WITH TIME ZONE NOT NULL,
        status VARCHAR(20) NOT NULL DEFAULT 'scheduled',
        notes TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `);
    
    console.log('Database tables initialized successfully!');
  } catch (error) {
    console.warn('Warning: Could not initialize database tables:', error.message);
    console.log('The application will still be deployed, but database features may not work until database is properly configured.');
    // Don't throw error to allow deployment to continue
  } finally {
    if (pool) await pool.end();
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });