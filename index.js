import express from "express";
import bodyParser from "body-parser";
/////////////////////////////////////
const app = express();
const port = 3000;

var today = new Array();
var thisWeek = new Array();
var capstone = new Array();

function addTask (array, task) {
        //verifying the existance----------------
        var i =0;
        while (task !== array[i] && i< array.length){ i++;};
        //ading new tasks------------------------
        if (i == array.length)
            array[i] = (task);     
}

function removeTask (array, index) {
    // splice work: index=>start, 1=> nbr of removed items  
    array.splice(index, 1);
}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

///////////////DAY_LIST///////////////
app.get("/",(req,res)=>{
    res.render("today.ejs",{task:today});
});

app.post("/today-add",(req,res)=>{
    addTask(today, req.body["task"]);
    res.render("today.ejs",{task:today}); 
});

app.post("/today-remove",(req,res)=>{
    removeTask(today, req.body["remove"])
    res.render("today.ejs",{task:today});
});
//...........................................................//

///////////////THIS-WEEK///////////////
app.get("/this-week",(req,res)=>{
    res.render("this-week.ejs",{task:thisWeek});
});

app.post("/this-week-add",(req,res)=>{
    addTask(thisWeek, req.body["task"]);
    res.render("this-week.ejs",{task:thisWeek}); 
});

app.post("/this-week-remove",(req,res)=>{
    removeTask(thisWeek, req.body["remove"])
    res.render("this-week.ejs",{task:thisWeek});
});
//...........................................................//

///////////////CAPSTONE///////////////
app.get("/capstone",(req,res)=>{
    res.render("capstone.ejs",{task:capstone});
});

app.post("/capstone-add",(req,res)=>{
    addTask(capstone, req.body["task"]);
    res.render("capstone.ejs",{task:capstone}); 
});

app.post("/capstone-remove",(req,res)=>{
    removeTask(capstone, req.body["remove"])
    res.render("capstone.ejs",{task:capstone});
});
//...........................................................///
///////////////ABOUT///////////////
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
//...........................................................///

app.listen(port, ()=>{
    console.log(`Listening port ${port}`);
});