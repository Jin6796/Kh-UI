const ajax = new XMLHttpRequest(); 
const NEWS_URL = 'http://localhost:8000/json/deptToJSON.jsp'; // I/O 통신 -> dead lock, crash
ajax.open('GET', NEWS_URL, false); // true: 동기적 처리, false: 비동기 처리
ajax.send(); // 전송이 일어난다
// 서버로부터 응답받은 내용을 출력하기
console.log(ajax.response);
const deptList = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for(let i=0; i<deptList.length; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerHTML = `부서번호: ${deptList[i].deptno}, 부서명: ${deptList[i].dname}, 지역: ${deptList[i].loc}`;
  li.appendChild(a);
  ul.appendChild(li);
}
document.getElementById('root').appendChild(ul);