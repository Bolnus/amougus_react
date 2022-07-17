let fileReader = require("fs");
let express = require("express");
const path = require('path');

let app = express();
//app.set("view engine","ejs");

let fullFileText = "";
let cfgStrings = fullFileText.split("\r\n");
let isBinary = 0;
let portNumber = 3001;
let serverIP = "";
let date;
let img;

app.use(express.static(path.join("../", __dirname)));
console.log(path.join("../", __dirname)); //path.join(__dirname, "../src")

app.get('/recordsdata', function(request,response)
{
    date = new Date();
    console.log("request | "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+" | "+request.path);
    fileReader.readFile("backend/records.json", "UTF8", function(error,data)
    {
        let recordsObject = JSON.parse(data);
        response.json(recordsObject);
    });
});

// app.get('/', function(request,response)
// {
//     date = new Date();
//     console.log("request | "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+" | "+request);
//     response.render("play");
// });

app.get('*', function(request, response)
{
    date = new Date();
    console.log("request | "+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+" | 404");
    response.status(404).sendFile(__dirname+"/404.html");
});

app.listen(portNumber);
console.log("Listening to port "+portNumber);