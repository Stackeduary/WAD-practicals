/*
// import express library
var express = require('express');
// create a new variable called router from express.Router
var router = express.Router();

/* GET users listing. */
// registering get endpoint as a root for this router
// pass a callback function that will be executed when users access this endpoint...

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


/*
router.get('/', function(req, res, next) {
  res.json(
      {
        message: 'respond with a resource'
      }
  );
});

// ...and then executes this router
module.exports = router;
*/


const express = require('express');
const router = express.Router();
// importing a file system library that allows us to read and write files in node.js
const fs = require('fs');

/* GET users tasks listing. */
// why does get only have '/'? because in
// app.use('/users', usersRouter);
// in app, we are telling it that all the routes that usersRouter will register go under or after /users
router.get('/', function (req, res, next) {

  // here, we're invoking the readFile method of the file system library, sending the path to our file, ./data/users.json, and then we're passing a callback ...
  fs.readFile('./data/users.json', (err, data) => {
    if (err) throw err;
    // using JSON library's parse method to parse the text information into a JSON object
    let users = JSON.parse(data);
    // in the response, we are returning the list of users in the users.json file
    // in real life, we wouldn't use the readFile file reading, we would get this information from the database
    res.json(users);
  });

});

// ... the callback we're passing:
// (err, data) => {
//   if (err) throw err;
//   let tasks = JSON.parse(data);
//   res.json(tasks);
// });


router.get('/:userId', function(request, response){
  let userId = request.params.userId
  console.log(userId)
});



module.exports = router;


// when we register an endpoint, we are passing a callback function to it to be executed when client enters the specific route;
// three arguments: req, res, next
// 1. request: with all the request information, request headers, request body, request query parameters, etc.
// 2. a response object: to return the response back
// 3. next function: can invoke the next endpoint that matches the url that the user entered