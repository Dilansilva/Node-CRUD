const express = require('express');

const app = express();

app.use("/add",(req,res,next) => {
    console.log("Hello World!");
    console.log("Hello World one");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"></form>');
});

app.use("/product",(req,res,next) => {
    console.log(req.body);
    console.log("Hello World two");
    res.send('<h1><br>Hello World</h1>');
});

app.use("/",(req,res,next) => {
    console.log("Hello World three");
    res.send('<h1>Hello World</h1>');
});

app.listen(3000);