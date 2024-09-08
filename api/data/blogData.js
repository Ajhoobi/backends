var connection = require('../db/db');

function queryAsync(sql, values) {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  
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
        catogery: blog.catogery,
        date: blog.date,
        src: blog.src
      }));
  
      // Return the final organized JSON data
      return { blog: blogData };
  
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: 'Error fetching data' };
    } finally {
      // Close the MySQL connection
    
    }
  }

module.exports = fetchBlogData;  