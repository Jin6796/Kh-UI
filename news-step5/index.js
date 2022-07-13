// 페이징 처리에 필요한 변수 선언하기
// insert here - currentPage -> react에서는 redux
const totalData = 30;       // 총 데이터
const pageCount = dataCount = 7;  // 한 페이지에 나타낼 기사 수 
currentPage = 1;
// const store={currentPage : 1}; // 현재 페이지 

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  // console.log('getNewsList 호출 성공');
  fetch(NEWS_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      const newsList = [];
      const max = result.length/dataCount;
      newsList.push("<ul>");
      // insert here - 페이징 처리를 고려한 for문으로 변경 (0~9, 10~19, ...)
      for (let i = (currentPage-1)*dataCount; i < currentPage*dataCount; i++) {
        if(i == totalData) break;
        newsList.push(`
        <li>
          <a href='#${result[i].id}'>
            ${result[i].title}
          </a>(comments: ${result[i].comments_count})
        </li>
        `);
      }
      newsList.push("</ul>"); 
      // insert here [이전 페이지: 현재 페이지에서 -1] - #/page/이동할 페이지 번호
      // 조건문 ? 참일 때: 거짓일때 3항 연산자
      // 현재 페이지 - 1 = -1일 때 > 1
      // insert here [다음 페이지: 현재 페이지에서 +1] - #/page/이동할 페이지 번호
      // <a href="#/page/${currentPage+1}">다음 페이지</a>
      newsList.push(`
        <div>
          <a href="#/page/${currentPage>1? currentPage-1:1}">이전 페이지</a>
          <a href="#/page/${currentPage< max ? currentPage+1:max}">다음 페이지</a>
          
          </div>
      `);
      container.innerHTML=newsList.join("");
    }).catch(error => console.log('에러가 발생하였습니다.', error));
}

const requestOptions2 = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsContent(){
  const id = this.location.hash.substring(1); //#31914288에서 첫번째 자리 #은 잘라내고 쓴다.
  fetch(CONTENT_URL.replace("@id", id), requestOptions2)
    .then(response => response.json())
    .then(result => {
        container.innerHTML = `
          <h1>${result.title}</h1>
          <div>
            <a href="#/page/${currentPage}">목록으로</a>
            
          </div>
        `;
      }) 
    .catch(error => console.log('에러가 발생하였습니다.', error));
}

  function router() {
    const hashValue = location.hash;//#/page/2
    // http://localhost:5000/index.html# - 디폴트 처음일때
    // http://localhost:5000/index.html#3214567
    if(hashValue === "") {
      getNewsList();
    }
    //#/page/2   ** 여기서 숫자2(currentPage)는 이동해야 하는 이전 페이지의 번호!
    //"http://localhost:5000/index.html/#/page/2"가 있는거야? > 없으면 -1, 있으면 0 이상의 값이 도출된다.
    //console.log("http://localhost:5000/index.html/#/page/2".indexOf("#/page/"));
    else if(hashValue.indexOf("#/page/") >= 0) {
      // hashValue.substring(7); // 문자열
      currentPage = Number(hashValue.substring(7));
      console.log(currentPage); // 상세보기 전에 페이지 정보를 확인한다.
      getNewsList();
    }
    else getNewsContent();
  }
  window.addEventListener("hashchange", router); // 이벤트 핸들러를 매핑하는 코드.
  router();
