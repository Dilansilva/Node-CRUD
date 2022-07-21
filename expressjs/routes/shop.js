const express = require('express');

const router = express.Router();


router.use("/",(req,res,next) => {
    console.log("Hello World three");
    res.send('<h1>Hello World</h1>');
});

module.exports = router;