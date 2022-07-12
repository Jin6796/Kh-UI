const express = require('express');
const app = express(); //객체생성 > heap 영역에! 함수 > stack 메모리! (함수의 호출 순서대로)
/* 
  app.all과 app.use와의 차이점
  all은 정해진 url에 대해서만 반응함
  use는 tomato가 들어간 어떤 url에 대해서도 모두 반응함
  curl http://localhost:5000/kh?mem_id=abc
  curl http://localhost:5000/tomato?mem_id=abc
  curl http://localhost:5000/tomato/bbb - 에러
  curl http://localhost:5000/kh/bbb - 에러
 */
app.all("/kh", (req,res,next) =>{
  console.log('all');
  next();
});

app.all("/tomato", (req,res,next) =>{
  console.log('use');
  next();
});

app.get("/:id", (req, res, next) => {
  console.log('middle1');
  res.send('Hello Express!!!');
});

// 에러처리 핸들러 코드 추가
// 이 과정을 생략하면 사용자에게 에러메세지가 그대로 노출됨.
// >> 해커에게 아주 유용한 힌트를 제공하기도 하기 때문에 보안상 좋지 않음
app.use((error, req, res, next) => {
  console.log(error);
  // 500번 서버 에러를 강제로 
  res.status(500).send("서버 관리자에게 문의 바랍니다.")
})

const port = 5000;
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});