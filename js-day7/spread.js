// 리액트에서 우선 순위
// 리액트는 데이터 변경이 있는 경우에만 새로 렌더링을 한다.
// Array에 추가하기
const colors = ["red", "green", "blue"];
// 기존의 배열이 새로운 배열로 복제됨 -> 리액트에서 상태변화 감지 -> 자동렌더링
// 기존의 DOM과 가상의 DOM을 비교해서 데이터에 대한 변경사항이 발생이 될 때 자동으로 렌더링을 처리해준다.
const colors2 = [...colors, "black"]; 
const colors3 = ["white", ...colors];

console.log(colors2);
console.log(colors3);

// 리액트에서는 상태를 관리하는 훅(함수)이 있다. useState
// useState훅에서는 원본을 바꾸지 않는다.

let dept = {
  deptno: 10,
  dname: "총무부",
  loc: "인천"
};

let emp = {
  empno: 7566,
  ename: "SCOTT"
};

let newObj = { ...dept, ...emp};
console.log(newObj);

let newObj2 = {...emp, empno: 7499, ename: 'KING'};
// 기존의 emp 객체를 덮어 씌운다.
console.log(newObj2);
// useState({}), useState([]), useState([{}])
let depts= [
  {deptno:10, dname:"총무부", loc:"인천"},
  {deptno:20, dname:"개발부", loc:"서울"},
  {deptno:30, dname:"인사부", loc:"울산"},
]

let depts2 = [...depts, {deptno:40, dname:"운영부", loc:"제주"}];
console.log(depts2);

let depts3 = [...depts, {deptno:50}]
console.log(depts3);