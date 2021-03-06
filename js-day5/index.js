const ajax = new XMLHttpRequest(); 
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는
// 데이터셋을 활용해서 dom(html요소-활용-> React수업을 위한 선수학습)을 조작해보자.
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json'; // I/O 통신 -> dead lock, crash
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/@id.json';
ajax.open('GET', NEWS_URL, false); // true: 동기적 처리, false: 비동기 처리
ajax.send(); // 전송이 일어난다
// 서버로부터 응답받은 내용을 출력하기
// console.log(ajax.response);

// 어떻게 클릭했는지 알 수 있을까요? 
// URL에 파라미터가 조금이라도 달라지면 새로운 요청이라고 판단해 서버에 재요청이 일어날 수 있음.
// get방식(비동기)이더라도..

window.addEventListener('hashchange', function(){
  const id = location.hash.substr(1);
  console.log('id', id);
  console.log('CONTENT_URL.replace', CONTENT_URL.replace('@id', id));
  ajax.open('GET', CONTENT_URL.replace('@id', id), false);
  ajax.send();
  const newContent = JSON.parse(ajax.response);
  // console.log(newContent);
  this.alert("사용자가 선택한 뉴스 제목은 [ "+ newContent.title+ " ] 입니다.");
  console.log(`뉴스 내용: ${newContent.content}`);
});

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i<30; i++){
  const li = document.createElement('li');
  const a = document.createElement('a');
  const span = document.createElement('span');
  /* 
  comment에 하이퍼링크를 빼고 싶으면
  
    인라인 요소인 <span> 태그를 생성해서 li 자식 태그로 입력
  <li>
    <a></a> <span></span>
  </li>
  `comments (${newsFeed[i].comments_count})` 추가
   */


  a.href = `#${newsFeed[i].id}`;
  a.innerHTML = `${newsFeed[i].title}`; // (comments: ${newsFeed[i].comments_count}) 에 밑줄처리를 없애기 위에 span태그 생성.
  // span.
  span.innerHTML = ` comments (${newsFeed[i].comments_count})`
  li.appendChild(a);
  li.appendChild(span);
  ul.appendChild(li);
}
document.getElementById('root').appendChild(ul);