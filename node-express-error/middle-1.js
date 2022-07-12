const express = require('express');
const app = express(); //객체생성 > heap 영역에! 함수 > stack 메모리! (함수의 호출 순서대로)

app.get("/", (req, res, next) => {
  console.log('first');
  res.send('hello');
  if(true) return;
  next();
},
(req, res, next) => {
  console.log('first2');
  next();
});

app.get("/:id", (req, res, next) => {
  console.log('middle1');
  res.send('Hello Express!!!');
});

const port = 5000;
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});