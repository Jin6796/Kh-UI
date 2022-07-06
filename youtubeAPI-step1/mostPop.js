const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ";
ajax.open("GET", MOST_URL, false);
ajax.send();
// console.log(ajax.response);

const result = JSON.parse(ajax.response);
// console.log(result);
const items = result.items;
const ul = document.createElement('ul');
for (let i=0; i < items.length; i++){
  const li = document.createElement('li');
  li.innerHTML = items[i].snippet.title;
  // li.innerHTML = items[i].snippet.thumbnails.medium.url;
  ul.appendChild(li);
  console.log([li.innerHTML]);
}
document.getElementById('root').appendChild(ul);
