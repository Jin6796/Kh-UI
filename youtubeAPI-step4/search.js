function handleEnter(){
  if(event.keyCode === 13){ // 키를 눌렀을 때 13번이면 Enter 코드값
    searchList();
  }
}
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : ' + query);
  const ajax = new XMLHttpRequest();
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ&type=video`;
  ajax.open("GET", SEARCH_URL, false);
  ajax.send();
  const videoList = [];

  console.log(ajax.response);
  const result = JSON.parse(ajax.response);
  const items = result.items;
  videoList.push(`<ul class='videos'>`);
  for (let i=0; i < items.length; i++){
    videoList.push(`<li class='container'>`);
    videoList.push(`<div class='video'>`);
    videoList.push(`<img src='${items[i].snippet.thumbnails.medium.url}' alt='이미지' class='thumbnail'/>`);
    videoList.push(`<div class='titles'>`);
    videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
    videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
}
