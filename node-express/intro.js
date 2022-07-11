// import express from "express"
const express = require("express"); 
// >> 이 코드를 사용하기 위해서는 설치가 되어있어야하고, (npm i --save-dev express)
// >> package.json 파일 내에 type을 commonjs으로 바꿔주어야함. (module로 되어있음)
// NodeJS 에서 CommandJS를 사용하면
// ES6 import express from "express" 와 같은 코드이다.
const app = express();

app.get("/", (req,res) => {
  // console.log("get");
  console.log("하이루? 디스 이즈 .. 이건 뭐징?");
  res.send("하이루? 디스 이즈 <font color=yellowgreen>서버</font>😁");
  // res.send("하이루? 디스 이즈 <font color=rainbow>엇절티비</font>😁");
});
app.listen(3000);