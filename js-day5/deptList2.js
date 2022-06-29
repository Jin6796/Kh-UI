const ajax = new XMLHttpRequest(); 
const NEWS_URL = 'http://localhost:8000/json/deptToJSON.jsp'; // I/O 통신 -> dead lock, crash
ajax.open('GET', NEWS_URL, false); // true: 동기적 처리, false: 비동기 처리
ajax.send(); // 전송이 일어난다
// 서버로부터 응답받은 내용을 출력하기
console.log(ajax.response);
const deptList = JSON.parse(ajax.response);
console.log('size : ',deptList.length); // 콘솔창에서 사이즈 출력하는 문장
const table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('width','400');
table.setAttribute('height','400');
const htr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
th1.appendChild(document.createTextNode('부서번호'));
th2.appendChild(document.createTextNode('부서이름'));
th3.appendChild(document.createTextNode('지역'));
htr.appendChild(th1);
htr.appendChild(th2);
htr.appendChild(th3);
table.appendChild(htr);
for(let i=0; i<deptList.length; i++){
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  td1.appendChild(document.createTextNode(`${deptList[i].deptno}`));
  td2.appendChild(document.createTextNode(`${deptList[i].dname}`));
  td3.appendChild(document.createTextNode(`${deptList[i].loc}`));
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
}
document.getElementById('root').appendChild(table);