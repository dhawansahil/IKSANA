var express =  require("express");
var bodyParser = require("body-parser");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/index.html");

});

app.get("/myWorks", function(req,res){
    res.sendFile(__dirname+ "/Myworks.html");

});

app.get("/notification", function(req,res){
    res.sendFile(__dirname+ "/notifications.html");

});

app.get("/profile", function(req,res){
    res.sendFile(__dirname+ "/profile.html");

});

app.listen(3000,function(req,res){
    console.log("Server Started at port 3000");
});






const video = document.querySelector("video");
if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
}