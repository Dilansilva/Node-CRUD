import express from "express";
import bodyParse from "body-parser";//this allows us to take in incoming post request body

const app = express();//Initialize the express application
const PORT = 5000;

app.use(bodyParse.json())//Initialize the body-parser

app.get('/', (req,res) => {
    console.log("Hello Earth!");
    
    res.send("Hello Earth from the node.js")
});

app.listen(PORT,() => console.log(`Server running on port: http ${PORT}`));
//MADE application listen to the incoming request