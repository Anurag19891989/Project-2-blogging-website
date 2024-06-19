const express=require("express");
const app=express();
const port=5555;
const path=require("path");
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const { v4: uuidv4 } = require('uuid');


let posts=[
{    id:uuidv4(),
    username:"Aman",
    content :"i love coding",


},
{     id:uuidv4(),
    username:"kumar",
    content :"i love c++ coding",
    
    
},
{       id:uuidv4(),
    username:"mittal",
    content :"i love java coding",
        
        
}

]
app.get("/posts",(req,res)=>{

    res.render("index.ejs",{posts});
    
    });

app.get("/posts/new",(req,res)=>{

    res.render("new.ejs");
        
    });

app.post("/posts",(req,res)=>{

let{username,content}=req.body;
let id=uuidv4();
posts.push({id,username,content});
res.redirect("/posts");

});
app.get("/posts/:id",(req,res)=>{
let {id}=req.params;
let post=posts.find((p)=>id===p.id);
res.render("show.ejs",{post});



});
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
   let newContent=req.body.content;
   console.log(newContent);
   let post=posts.find((p)=>id===p.id);
   post.content=newContent;
res.send("patch request working0");


});

app.listen(port,()=>{

console.log(`listening to port:${port}`);




});