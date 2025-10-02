const express = require ("express");
const app = express();
const path = require("path");



const { v4 : uuidv4 } =require ('uuid');



const port = 8080;

app.use(express.urlencoded({extended:true}));

app.set("view engine" , "ejs");
app.set("views" ,path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {   id : uuidv4(),
        username: "bhumi_kaa",
        content : "Want to be that girl shayar talks about"
    },

     {  id : uuidv4(),
        username: "rahulkumar",
        content : "Got my 1st internship"
    },
    {   id : uuidv4(),
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
    let id = uuidv4();
    posts.push({id ,username , content}); 
    res.redirect("/posts"); // bydefault get request will be sent
})
app.get("/posts/:id" , (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id ==p.id);
    res.render("show.ejs" , {post});
})