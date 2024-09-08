const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',      // Use the 'db' service name for the MySQL container
  user: process.env.DB_USER || 'root',    // Use the DB_USER from .env or default to 'root'
  password: process.env.DB_PASSWORD || 'salah123', // Use the DB_PASSWORD from .env or default to 'salah123'
  database: process.env.DB_NAME || 'web_data'  // Use the DB_NAME from .env or default to 'web_data'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = connection;
