/**
 * This is a minimal mock database module.
 * The actual database functionality has been removed since we're using Formspree for forms.
 * This file provides a mock interface to prevent errors in any code that still expects db functions.
 */

// Create a mock database implementation
const createMockDb = () => {
  return {
    query: async () => { return { rows: [] }; },
    select: () => ({ from: () => ({ where: () => [], orderBy: () => [] }) }),
    insert: () => ({ values: () => ({ returning: () => [] }) }),
    // Add other mock methods as needed
  };
};

// Create the mock pools and connections
const pool = { 
  end: async () => {}, 
  query: async () => ({ rows: [] })
};

const db = createMockDb();

console.log('Using simplified static site mode - no database connection required');

export { pool, db };
