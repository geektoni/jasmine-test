var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
This is a function
*/

function fun() {
	console.log(1);
}

module.exports = router;
