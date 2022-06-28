// 변수 선언 시 var를 사용하지 않는다. let, const 사용.
// 웹 서비스 시 비동기적 처리를 위해 제공하는 객체
const ajax = new XMLHttpRequest(); // 객체 생성 - 비동기 통신 객체
// 해커뉴스에서 제공하는 뉴스 정보 수집
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // I/O 통신 -> dead lock, crash
// open 함수는 XMLHttpRequest에서 제공하는 함수
// 1. GET of POST
// 2. URL - 데이터셋
// 3. false - 일반적
ajax.open('GET', NEWS_URL, false); // true: 동기적 처리, false: 비동기 처리
ajax.send(); // 전송이 일어난다
// console.log(ajax.response);
// URL로 해커뉴스 서버에 요청을 했을 때 응답값을 받아올 수 있다.
console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i<5; i++){
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
  // console.log(newsFeed[i].title);
}
// defer가 있으면 비동기적으로 js처리가 됨
//  >> js가 root보다 먼저 있어도 '비동기'니까 root를 먼저 읽을 수 있다.
// defer가 없으면? root 다음에 js를 위치하도록 하면 정상적으로 진행됨.
document.getElementById('root').appendChild(ul);