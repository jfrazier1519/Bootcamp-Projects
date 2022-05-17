const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
//Javascript allows you to push new items to a const
//Declaring as a const doesn't protect items inside
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

//Tells our app, which is generated using express to use ejs as its view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

//call function bound to const date and store it in variable day
const day = date.getDate()

  //Going to look in folder 'views' for ejs file 'list', pass in variable 'day'
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

//Catches post request
app.post("/", function(req, res) {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    //redirects to home route which will re-run 'app.get' and pass in the 'item' to 'render'
    res.redirect("/");
  }
})

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
})

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res){
  res.render("about");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
