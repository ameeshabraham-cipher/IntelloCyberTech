import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from 'ws';
import { db } from '../server/db';
import * as schema from '../shared/schema';

// Required for Neon database connection in serverless environments
neonConfig.webSocketConstructor = ws;

async function main() {
  console.log('🔄 Pushing schema changes to database...');
  
  try {
    // Create tables if they don't exist
    // This is a simple push operation, not a full migration
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);
    
    await db.execute(`
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
    `);
    
    await db.execute(`
      CREATE TABLE IF NOT EXISTS assessment_requests (
        id SERIAL PRIMARY KEY,
        company_name TEXT NOT NULL,
        contact_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        industry TEXT NOT NULL,
        company_size TEXT NOT NULL,
        assessment_type TEXT NOT NULL,
        additional_info TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    `);
    
    await db.execute(`
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
    
    console.log('✅ Database schema updated successfully');
  } catch (error) {
    console.error('❌ Error updating database schema:', error);
    process.exit(1);
  }
}

main();