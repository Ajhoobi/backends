// Import the connection pool and query execution function from the db module
const { pool } = require('../db/db');

function queryAsync(sql, values) {
  return new Promise((resolve, reject) => {
    // Get a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }

      // Execute the query using the connection
      connection.query(sql, values, (error, results) => {
        // Release the connection back to the pool after the query is done
        connection.release();

        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  });
}


const adjustDateFormat = (isoDateString) => {
  const date = new Date(isoDateString);
  
  // Extract components of the date and time
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getUTCHours() + 6).padStart(2, '0'); // Adjusting the time to your desired offset (e.g., UTC+6)
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};
// Async function to fetch blog data and return JSON
async function fetchBlogData() {
  try {
    // Query to get all blog entries
    const blogQuery = 'SELECT * FROM blog';
    const blogs = await queryAsync(blogQuery);

    // Organize the blog data into a JSON structure
    let blogData = blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      contents: blog.contents,
      category: blog.category, // Corrected typo from 'catogery' to 'category'
      date: adjustDateFormat(blog.date),
      src: blog.src
    }));


    const data = {blog : blogData}
    // Return the final organized JSON data
    return { data: data };

  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: 'Error fetching data' };
  }
}

module.exports = fetchBlogData;
