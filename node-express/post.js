const express = require('express');
const app = express();

// nodejs로부터 요청객체와 응답객체는 주입을 받게 됨.
app.post("/", (req, res) =>{
  console.log(req.body);
});

app.listen(3003);

/* 
  http://localhost:3003/kh/tomato  -> id값은 tomato
  http://localhost:3003/kh/tomato?mem_id=apple&mem_pw=123
*/