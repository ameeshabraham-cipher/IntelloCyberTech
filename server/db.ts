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
    console.warn(
      "WARNING: DATABASE_URL not set and PostgreSQL variables incomplete. Database features will be disabled."
    );
  }
}

// Create the database connection pool
let pool;
let db;

// Create a mock database implementation for deployment without DB
const createMockDb = () => {
  console.warn('Using mock database - form submissions will not be stored');
  return {
    query: async () => { return { rows: [] }; },
    select: () => ({ from: () => ({ where: () => [] }) }),
    insert: () => ({ values: () => ({ returning: () => [] }) }),
    // Add other mock methods as needed
  };
};

// Only try to connect to database if DATABASE_URL is available
if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle(pool, { schema });
    console.log('Database connection pool initialized successfully');
  } catch (error) {
    console.warn('Warning: Failed to initialize database connection:', error.message);
    console.log('Using mock database implementation - form submissions will not be stored');
    db = createMockDb();
  }
} else {
  console.log('No database connection information available');
  console.log('Using mock database implementation for deployment');
  db = createMockDb();
}

export { pool, db };