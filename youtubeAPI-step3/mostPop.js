const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ";
ajax.open("GET", MOST_URL, false);
ajax.send();
const videoList = [];

// console.log(ajax.response);
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