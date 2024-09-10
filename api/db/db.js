const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'salah123',
  database: process.env.MYSQL_DATABASE || 'web_data',
  waitForConnections: true,
  connectionLimit: 10,  // Limits the number of concurrent connections
  queueLimit: 0
});

// Export the pool to be used in other files
module.exports = { pool };
