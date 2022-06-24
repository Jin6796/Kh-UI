// 연산자 : 특정값을 도출하기 위해 연산 처리 식별자
// 산술연산자
// 대입연산자
// 비교연산자
let num = 0;
num = num + 2;
console.log(num);
// ==
// === 타입까지도 비교한다.
console.log(1 == 1);    // true
console.log(1 === 1);   // true
console.log(2 == '2');  // true
console.log(2 === '2'); // false

const myCar = {
  name: '소나타',
  color: 'blue',
  speed: 50
}

const herCar = {
  name: '소나타',
  color: 'blue',
  speed: 50
}

console.log(myCar == herCar); // 주소번지가 다르기 때문에 false가 맞지
console.log(myCar === herCar);
console.log(myCar.name == herCar.name);
console.log(myCar.name === herCar.name);

let hisCar = herCar;
console.log(hisCar == herCar); // 주소번지가 그대로 복사되었기 때문에 true가 뜰껄?
console.log(hisCar === herCar); 

// 선언문
let b;
b = 2; // 표현식, 할당문
let x = b = 2;
console.log('x'+x); //x2가 출력될껄 아마두


//지수(거듭제곱) **
console.log(Math.pow(5,2));
console.log(5**2);

// + 연산자 주의
let text;
text = 10+'10'; // 숫자와 문자열을 더하면 문자열로 반환
console.log(text);

// 할당연산자
let a = 1;
a+= 2; // 더하기 먼저! 그 다음 대입. - 축약버전
console.log(a);
a*= 2; // 곱하기 먼저! 그 다음 대입. - 축약버전
console.log(a);
a-= 2; // 빼기 먼저! 그 다음 대입. - 축약버전
console.log(a);