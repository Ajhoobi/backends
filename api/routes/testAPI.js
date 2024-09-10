var express = require('express');
var router = express.Router();
var jsonData = require( '../data/skillData');
router.get('/testAPI', function(req, res, next) {


try {

  res.json({ data : jsonData.data , cyber : jsonData.cyber});
 

} catch (error) {
  console.error(error);
  next(error);
   
}
      
});


module.exports = router;

