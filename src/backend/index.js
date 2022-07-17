let fileReader = require("fs");
let express = require("express");
const path = require('path');

let app = express();
app.set("view engine","ejs");

let fullFileText = "";
let cfgStrings = fullFileText.split("\r\n");
let isBinary = 0;
let portNumber = 3001;
let serverIP = "";
let date;
let img;

app.use(express.static(path.join("../", __dirname)));
console.log(path.join("../", __dirname)); //path.join(__dirname, "../src")

app.get('/api', function(request,response)
{
    date = new Date();
    console.log("request | "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+" | "+request);
    response.json({
        message: "HELLO!"
    });
});

// app.get('/', function(request,response)
// {
//     date = new Date();
//     console.log("request | "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+" | "+request);
//     response.render("play");
// });

app.listen(portNumber);
console.log("Listening to port "+portNumber);