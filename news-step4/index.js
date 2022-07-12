const NEWS_URL = "https://api.hnpwa.com/v0/item/@id.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(CONTENT_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      const newsList = [];
      newsList.push("<ul>");
      for(let i=0; i<10; i++){
        newsList.push(`
          <li>
            <a href='#${result[i].id}'>
              ${result[i].title}
            </a>(comments: ${result[i].comments_count})
          </li>
        `);
      }
      newsList.push("</ul>"); 
      container.innerHTML=newsList.join("");
    })
  .catch(error => console.log('에러가 발생하였습니다.', error));
}

const requestOptions2 = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsContent(){
  const id = this.location.hash.substring(1); //#31914288에서 첫번째 자리 #은 잘라내고 쓴다.
  fetch(NEWS_URL.replace("@id", id), requestOptions2)
  .then(response => response.json())
  .then(result => {
    container.innerHTML = `
    <h1>${result.title}</h1>
    <div>
      <a href="#">목록으로</a>
    </div>
    `;
  }) 
  .catch(error => console.log('error', error));
}

  function router(){
  const hashValue = location.hash;
  if(hashValue === ""){
    getNewsList();
    } else getNewsContent();
  }
  window.addEventListener("hashchange", router); // 이벤트 핸들러를 매핑하는 코드.
  router();
