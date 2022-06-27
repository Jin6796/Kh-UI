const colors = ['blue', 'orange', 'yellow'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

// const colorss = [...colors, 'black'];
// console.log(colorss[4]);

colors[4] = 'white';
console.log(colors);

delete colors[1];
console.log(colors);

let array = new Array(3);
console.log(array);
array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5);
console.log(array);

const deptnos = [10,20,30];
array = Array.from(deptnos);
console.log(array);

array = Array.from({
  0: 10,
  1: '개발부',
  2: '서울'
});
console.log(array);

// 자바에서 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져있는 것에 비해
// 자바스크립트의 배열은 반드시 연속적이 아닐 수 있으며 오브젝트와 더 유사함
// 자바스크립트에서 배열은 자바의 배열을 흉내낸 특수한 객체이다.
// 단점을 보완하기 위해서 타입배열을 따로 제공하고 있음