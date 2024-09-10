var express = require('express');
var router = express.Router();
var fetchBlogData = require('../data/blogData')
var fetchData = require('../data/skillData')
const cors = require('cors');

// Middleware to handle CORS
router.use(cors({
  origin: '*', // Adjust this as needed
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
/* GET users listing. */


// Promisify the query function to use async/await

router.get('/blog', async (req, res) => {
  const delay = 2000
  try {
    const data = await fetchBlogData();  // Fetch the data from the database
    setTimeout(() => {
    res.json(data);  // Send the JSON response to the client
  }, delay);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


  router.get('/', async (req, res) => {
    try {
      const delay = 2000
      const data = await fetchData();  // Fetch the data from the database
      setTimeout(() => {
<<<<<<< HEAD
      res.json(data);  // Send the JSON response to the client
=======
      res.json(data.fields);  // Send the JSON response to the client
>>>>>>> adb54085371c460836e5dd6f5b36e08bf6b3bbc0
    }, delay);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.get('/blogfocus', async (req, res) => {
    const { id } = req.query;
    const idInt = parseInt(id, 10);
  
    try {
      // Validate ID parameter
      if (!id || isNaN(idInt)) {
        return res.status(400).json({ message: 'Invalid parameter or ID is required' });
      }
  
      // Fetch blog data from the database
      const blogData = await fetchBlogData();
<<<<<<< HEAD
     
=======
  
>>>>>>> adb54085371c460836e5dd6f5b36e08bf6b3bbc0
      // Check for errors in fetching blog data
      if (blogData.error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Filter blog entries based on the provided ID
<<<<<<< HEAD
      const blog = blogData.data.blog.filter(item => item.id === idInt);
=======
      const blog = blogData.blog.filter(item => item.id === idInt);
>>>>>>> adb54085371c460836e5dd6f5b36e08bf6b3bbc0
  
      // Check if the blog entry was found
      if (blog.length === 0) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-Frame-Options', 'DENY');
      // Return the found blog entry
      return res.json({ data: blog });

     
  
    } catch (error) {
      console.error('Error processing request:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });


module.exports = router;







