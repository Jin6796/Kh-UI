import {deptVO} from "./deptVO.js";
// ES6 지원 > import문
// nodeJS 지원 > require('express') - CommonJS
const myDVO = new deptVO(50, '개발부', '부산');

console.log(myDVO.dname);
console.log(myDVO.deptno);
console.log(myDVO.loc);