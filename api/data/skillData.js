
var connection = require('../db/db')

function queryAsync(sql, values) {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  }
  
  // Async function to fetch data and return JSON
  async function fetchData() {
    try {
      // Query to get all fields
      const fieldsQuery = 'SELECT * FROM fields';
      const fields = await queryAsync(fieldsQuery);
  
      // Initialize an array to hold the organized data
      let data = [];
  
      // Loop through each field
      for (const field of fields) {
        // Query to get subfields for the current field
        const subfieldsQuery = 'SELECT * FROM subfields WHERE field_id = ?';
        const subfields = await queryAsync(subfieldsQuery, [field.id]);
  
        // Organize the field and its subfields into a JSON structure
        let fieldData = {
          id: field.id,
          name: field.name,
          percentage: field.percentage,
          subfields: subfields.map(sub => ({
            id: sub.id,
            name: sub.name,
            percentage: sub.percentage
          }))
        };
  
        // Add the field data to the array
        data.push(fieldData);
      }
  
      // Return the final organized JSON data
      return { fields: data };
  
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: 'Error fetching data' };
    } finally {
      // Close the MySQL connection
      connection.end();
    }
  }

  module.exports = fetchData;