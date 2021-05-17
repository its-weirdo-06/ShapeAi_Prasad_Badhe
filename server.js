const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req, res)
 {
    res.sendFile(__dirname+"/index.html");
 });

app.post("/",function(req, res)
 {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    Result = n1/(n2*n2);
    res.send("The answer is " + Result);
 });

app.listen(3000,function()
 {
 console.log("Server has strated on port 3000");
 })