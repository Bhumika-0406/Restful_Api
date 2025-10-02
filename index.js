const express = require ("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username: "bhumi_kaa",
        content : "Want to be that girl shayar talks about"
    },

     {
        username: "rahulkumar",
        content : "Got my 1st internship"
    },
    {
        username: "apnacollege",
        content : "We are studying backend"
    }
];

app.listen(port , ()=>{
    console.log("app is listening to port number 8080");
});

app.get("/posts" , (req,res) =>{
    res.render("index.ejs", {posts});
});

app.get("/posts/new" , (req ,res)=>{
    res.render("form.ejs");
});

app.post("/posts" , (req,res) =>{
    let {username , content} = req.body;
    posts.push({username , content}); 
    res.redirect("/posts"); // bydefault get request will be sent
})