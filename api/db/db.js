const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',      // Use the 'db' service name for the MySQL container
  user: process.env.MYSQL_USER || 'root',    // Use the DB_USER from .env or default to 'root'
  password: process.env.MYSQL_PASSWORD || 'salah123', // Use the DB_PASSWORD from .env or default to 'salah123'
  database: process.env.MYSQL_DATABASE || 'web_data'  // Use the DB_NAME from .env or default to 'web_data'
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
