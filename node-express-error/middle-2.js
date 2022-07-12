const express = require('express');
const app = express(); //객체생성 > heap 영역에! 함수 > stack 메모리! (함수의 호출 순서대로)

app.get("/", (req, res, next) => {
  console.log('first');
  next(new Error("error")); //에러를 던진다(throw) - 사용자에게 에러 결과가 그대로 출력되는 건 좋지 않음
  // 반드시 마지막 체인에서 에러를 처리하는 코드를 추가하자
},
(req, res, next) => {
  console.log('first2');
  next();
});

app.use((req, res, next) => {
  //http://localhost:5000/6 와 같은 url로 요청하면 아래 메세지가 화면에 출력된다.
  res.status(404).send("해당 url은 존재하지 않습니다.");
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
});

const port = 5000;
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});