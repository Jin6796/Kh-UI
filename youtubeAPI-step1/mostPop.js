const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ";
ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);
