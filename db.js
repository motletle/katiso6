// db.js
const { Client } = require('pg');

// Function to get a new PostgreSQL client connection
const getConnection = () => {
  const client = new Client({
    host: 'localhost',  // Host where the PostgreSQL server is running (use 'localhost' for local server)
    user: 'postgres',  // Your PostgreSQL username
    password: 'mphosi88',  // Your PostgreSQL password
    database: 'School',  // Database name
    port: 5432,  // Default PostgreSQL port
  });

  return client;
};

module.exports = getConnection;
