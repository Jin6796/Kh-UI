const totalData = 30;       // 총 데이터
const pageCount = dataCount = 8;  // 페이지에 나타나는 기사 수, 한 페이지에 나타낼 기사 수 
currentPage = 1;
// const store={currentPage : 1}; // 현재 페이지 

const NEWS_URL = "https://api.hnpwa.com/v0/item/@id.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/news/1.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  // console.log('getNewsList 호출 성공');
  fetch(CONTENT_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      const newsList = [];
      let templete = `
        <div>
          <h1>Hacker News</h1>
          <ul>
            {{__news_list__}}
          </ul>
          <div>
            <a href="#/page/{{__prev_page__}}">이전 페이지</a>
            <a href="#/page/{{__next_page__}}">다음 페이지</a>
          </div>
        </div>
      `;
      for (let i = (currentPage-1)*pageCount; i < currentPage*dataCount; i++) {
        if(i == totalData) break;
        newsList.push(`
        <li>
          <a href='#${result[i].id}'>
            ${result[i].title}
          </a>(comments: ${result[i].comments_count})
        </li>
        `);
      } // end of for
      templete = templete.replace("{{__news_list__}}", newsList.join(""));
      templete = templete.replace("{{__prev_page__}}", currentPage>1 ? currentPage-1 : 1);
      templete = templete.replace("{{__next_page__}}", currentPage+1);
      container.innerHTML=newsList.join("");
    }).catch(error => console.log('에러가 발생하였습니다.', error));
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
      <a href="#/page/${currentPage}">목록으로</a>
    </div>
    `;
  }) 
  .catch(error => console.log('error', error));
}

  function router(){
  const hashValue = location.hash; // #/page/2
  if(hashValue === ""){
    getNewsList();
    } 
    else if(hashValue.indexOf("#/page/") >= 0) {
      currentPage = Number(hashValue.substring(7));
      console.log(currentPage); // 상세보기 전에 페이지 정보를 확인한다.
      getNewsList();
    }
    else getNewsContent();
  }
  window.addEventListener("hashchange", router); // 이벤트 핸들러를 매핑하는 코드.
  router();
