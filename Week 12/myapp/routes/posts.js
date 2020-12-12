const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET posts listing. */
router.get('/', function (req, res, next) {
    fs.readFile('./data/posts.json', (err, data) => {
        if (err) throw err;
        let posts = JSON.parse(data);
        res.json(posts);
    });
});

module.exports = router;