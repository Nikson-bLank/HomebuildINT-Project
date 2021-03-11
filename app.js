const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));




app.get("/", function(req, res){
    res.render("home",{
        
    })
});
app.get("/login",function(req, res){
    res.render("login")
});

app.get("/signup", function(req, res){
    res.render("SignUp")
});

app.get("/post", function(req, res){
    res.render("Post")
});

app.get("/services", function(req, res){
    res.render("Services")
});

app.get("/findjobs", function(req, res){
   res.render("findjobs")
});


app.listen(4000, function(){
 console.log("Server running at 4000.....");
 
});