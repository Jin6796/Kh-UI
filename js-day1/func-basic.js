// 함수
// 함수도 객체이다
// 메소드 오버로딩, 오버라이딩 지원 없음.
// 같은 이름의 함수를 중복정의할 수 없다.

function hap(a, b){
  const result = a+b;
  return a+b;
}

console.log(hap(1,3));

let lastName = '최';
let firstName = '경진';
let fullName = `${lastName} ${firstName}`;
let lastName2 = '지';
let firstName2 = '성호';
let fullName2 = `${lastName2} ${firstName2}`;


// console.log(lastName);
// console.log(firstName);
// console.log(fullName);

function namePrint(firstName, lastName){
  return `${firstName} ${lastName}`;
}

console.log(namePrint(firstName,lastName));
console.log(namePrint(lastName2, firstName2));

//total 변수도 hap과 동일한 메모리 주소를 갖는다.
const total = hap;
console.log(hap(2,3));
console.log(total(2,3));

