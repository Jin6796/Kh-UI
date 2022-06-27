// 고차함수 (Higher order function)
const colors = ['green', 'red', 'blue'];

// 고차함수를 이용하지 않고 출력하기
for (let i = 0; i<colors.length; i++){
  console.log(colors[i]);
}

// 고차함수를 이용해 출력하기 - 배열을 돌면서 원하는(콜백함수) 것을 할 때 사용함
// 자바스크립트에서도 같은 이름의 함수를 정의할 수 있다? >> NO!!!!!!!!!!! 없다!@
colors.forEach(function(value, index, array){
console.log('value: '+value);
console.log('index: '+index);
console.log('array: '+array);
});

// arrow function으로 바꾸면?
colors.forEach((value) => console.log('foreach문 사용: '+value));

function myForEach(array, action){
  for (let i = 0; i < array.length; i++){
    action(array[i]);
  }
}
console.log('-------------------------------------------------');
myForEach(colors, console.log)

/*
  일급함수 -> first-class function
  : 함수를 값처럼 사용할 수 있는 것을 일급함수라고 한다.(함수가 일반 객체처럼 모든 연산이 가능)
  - 함수의 매개변수로 전달 (*주의* 호출할 때 괄호를 절대 붙이지 않는다.)
  - 함수의 반환값
  - 할당 명령문 사용
  - 동일비교 대상

  일급객체 -> first-class object
  : 일반 객체처럼 모든 연산이 가능함
  - 함수의 매개변수로 전달
  - 함수의 반환값
  - 할당 명령문 사용
  - 동일비교 대상

  함수형 프로그래밍 - 함수들까지 엮어놓은 것을 말함
  함수형 프로그래밍을 하면 데이터 변경, 변수 사용, 조건문&반복문 사용이 없이도 코딩 전개가 가능하다.
  but, 이렇게 하려면 순수함수로 정의하는 것이 중요한데 순수함수란 불변성을 지킨 함수를 말한다.
  함수 내부에서는 외부상태를 절대 변경하지 않는다.
  : 배열에서도 사용할 수 있는 고차함수가 많음.
  인자로 함수를 받거나(콜백함수) 함수를 반환하는 함수를 고차함수라 한다.
*/
console.log('-------------------------------------------------');

// 조건에 맞는 아이템을 찾기 - find
const food1 = {menu: '🍔', price:100};
const food2 = {menu: '🍖', price:150};
const food3 = {menu: '🍦', price:200};

const foods = [food1, food2, food3, food2];
const findItem = foods.find((value)=> {
  return value.menu === '🍖';
})
console.clear;
console.log(findItem);


//findIndex를 사용하여 조건에 맞는 인덱스 출력하기
const findIndex  = foods.findIndex((value)=> value.menu === '🍖');
console.log(findIndex);

const findEvery  = foods.every((value)=> value.menu === '🍔');
console.log(findEvery);

// 조건에 맞는 걸 찾아서 새로운 배열을 생성해 줌 - 리액트 검색처리할 때
// 새로운 배열을 만들어준다 >> 중요
const findFilter = foods.filter((value)=> value.menu === '🍦');
console.log(findFilter);

console.log('-------------------------------------------------');
//map을 이용해서 해보세요
let nums = [1,2,3,4,5];
let map = nums.map(a => a*2-2);
console.log('map: '+map);
map = nums.map((a)=>{
  if(a%2==0){
    return a*0;
  } else return a;
})
console.log(map);

/* console.log('-------------------------------------------------');

let animals = ['😺', '🐵', '🐔', '🐵'];
// 원숭이를 호랑이로 교체하는 함수 만들기 (주어진 배열은 수정되지 않게!!) - react 수업 필수템
let edit_animals = animals;
console.log(animals);
console.log(edit_animals);
edit_animals = animals.map((a)=>{
  if(a==='🐵'){
    return '🐯';
  } else return a;
})
console.log(animals);
console.log(edit_animals); */

console.log('-------------------------------------------------');

let animals = ['😺', '🐵', '🐔', '🐵'];
function change(array){
 const newArray = Array.from(array);
 for (let i = 0; newArray.length>i; i++){
  if(newArray[i] ==='🐵'){
    newArray[i] ='🐯';
  }
 }
 return newArray;
}
console.log(change(animals));

console.log(change(animals, '🐵','🐯'));