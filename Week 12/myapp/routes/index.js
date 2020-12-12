var express = require('express');
var router = express.Router();

/* GET home page. */
// registering get endpoint as a root for this router
// pass a callback function that will be executed when users access this endpoint...
// only difference between index.js and users.js is that index router renders the index.html page that is placed in the public folder
// but since we're going to build the frontend as an entirely separate application, we're not going to use
// res.render('index', { title: 'Express' });

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// instead, return a json response and we can send any javascript object
router.get('/', function(req, res, next) {
  res.json(
      {
        message: "You are at the root"
      }
  );
});

// ...and then executes this router
module.exports = router;
