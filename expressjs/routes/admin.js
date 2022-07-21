const express = require('express');
const router = express.Router();

router.get("/add",(req,res,next) => {
    console.log("Hello World!");
    console.log("Hello World one");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"></form>');
});

router.use("/product",(req,res,next) => {
    console.log(req.body);
    console.log("Hello World two");
    res.send('<h1><br>Hello World</h1>');
});

module.exports = router;