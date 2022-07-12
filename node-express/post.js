const express = require('express');
const app = express();

app.use(express.json());
app.post("/", (req, res) =>{
  console.log(req.body);
});

app.listen(3000);

/* 
  http://localhost:3003/kh/tomato  -> id값은 tomato
  http://localhost:3003/kh/tomato?mem_id=apple&mem_pw=123
*/