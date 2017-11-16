var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    moment          = require("moment");

mongoose.connect("mongodb://localhost/portfolio");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server listening");
});