const express = require("express"); 

const app = express();
app.set("view engine", "ejs");

app.get("/hello/:nameParam", (req,res) => {
  res.render("hello", {name: req.params.nameParam});
});

app.listen(3000);