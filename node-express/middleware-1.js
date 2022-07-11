const express = require("express"); 
const app = express();

app.get("/", (req,res,next) => {
  console.log("First");
  next();
});

app.get("/", (req,res,next) => {
  console.log("Second");
  res.send('응답');
  return;
  next();
});

app.get("/", (req,res) => {
  console.log("Third");
});
app.listen(3000);