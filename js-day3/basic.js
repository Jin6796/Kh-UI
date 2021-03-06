function hap(a, b){
  return a+b;
}
// react에서는 arrow function을 사용합니다.
const hap2 = (a,b) => {
  return a+b;
}
const hap3 = (a,b) => a+b;
const total = hap; // 함수도 오브젝트이므로 주소번지를 갖기 때문에...
console.log(total(2,3));
console.log(hap2(2,3));
console.log(hap3(2,3));

const minus = (a,b) => a-b;
const multiply = (a,b) => a*b;

// 전달된 action은 콜백함수이다. - java actionPerformed(ActionEvent ae)
// 언젠가 실행해줄게! 단, 네가 요청할 때에!
function account(a,b, action){
  let result = action(a,b); // action은 minus or multiply >> '고차함수'라고 한다.
  console.log(result);
  return result;
}
// 어떤 함수가 전달되는 가에 따라 계산 결과가 달라진다.
console.log(account(2,1, minus)); // 함수를 가리키는 주소번지를 넘김
console.log(account(2,1, multiply));

// 즉시실행함수 - IIFE


/*
  입력 - 처리 - 출력
  처리와 관련있는 것 - function, operator
  함수의 정의 - 특정한 일을 수행하는 집합
  함수도 오브젝트이다.
  콜백함수에서의 함수의 이름은 함수를 참조함
*/