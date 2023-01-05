const express = require("express");
const bodyParser=require("body-parser");


const app=express();
var newItems=[]
var minus=""

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({expended:true}))
app.use(express.static("public"))

var today=new Date();
var options={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var day= today.toLocaleDateString("en-US",options)

console.log(today.getDay())
app.get("/",function(req,res){

 
    res.render("list",{kindofday:day,itemNew:newItems,minusitem:minus})
})

app.post("/",function(req,res){
    var newItem=req.body.newitem
    minus=req.body.submitminus
    newItems.push(newItem)
    res.redirect("/");
})

app.get("/about",function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("3000 port is working now")
})