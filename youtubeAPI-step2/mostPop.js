const ajax = new XMLHttpRequest();
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ";
// const IMG_URL = 
ajax.open("GET", MOST_URL, false);
ajax.send();
 
// console.log(ajax.response);
const result = JSON.parse(ajax.response);
const items = result.items;
content += `<ul class='videos'>`;
for (let i=0; i < items.length; i++){
  content += `<li class='container'>`;
  content += `<div class='video'>`;
  content +=`<img src='${items[i].snippet.thumbnails.medium.url}' alt='이미지' class='thumbnail'/>`;
  content += `<div class='titles'>`;
  content +=`<p class='title'>${items[i].snippet.title}</p>`;
  content +=`<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
  content += `</li>`;
}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;