import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";
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
  } else {
    throw new Error(
      "DATABASE_URL must be set or provide all PostgreSQL connection variables (PGHOST, PGUSER, PGPASSWORD, PGDATABASE)."
    );
  }
}

// Create the database connection pool
let pool;
let db;

try {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
  console.log('Database connection pool initialized successfully');
} catch (error) {
  console.error('Failed to initialize database connection:', error);
  throw error;
}

export { pool, db };