//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


// SEND LINK(of gallery) BY NODE JS
app.get('/gallery', function (req, res) {
  res.statusCode = 302;
  res.setHeader("Location", "https://tranquil-sierra-39258.herokuapp.com/");
  res.end();
});

// BACK TO MAIN HOMEPAGE
app.get("/home", function(req, res){
  res.redirect('..');
});




app.listen(process.env.PORT || 9000 , function(){
  console.log("Server is being started on port 9000.");
});
