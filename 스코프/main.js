let ename = "scott"; //전역스코프
// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
// 함수 선언 방법 2가지가 있다.
// 함수문, 함수식
function methodA(){
  let i = 5;
  console.log(ename);
  console.log(i);

// before
  innerMethod(); // 호이스팅

  // 함수문
  function innerMethod(){
    let j = 10;
    console.log(i);
  }
// after
  // methodB();
  //함수식
  const methodB = function(){
    console.log('methodB');
  }
  methodB();
}

methodA();
console.log(i);





/* 
  글로벌 스코프 - 자바에서는 member variable, global variable! 전역 변수!!!
  : 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐

  함수 스코프 - 함수 안에서 선언될 때 정의됨 main.ival, sub.ival 지역 변수!!
  : 함수가 만들어졌다 해서 스코프가 생긴다? NO! 

  블록 스코프 - 중괄호로 묶여있음
  : for(int i; 1!=1;)
  init() -> service() -> destroy() 
  주체는 library 서버. 서버가 회수를 함 (자바에서는 candidate라고 함)
*/