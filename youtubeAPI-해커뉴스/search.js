function handleEnter(){
  if(event.keyCode === 13){ // 키를 눌렀을 때 13번이면 Enter 코드값
    searchList();
  }
}
//var는 사용하지 않음(호이스팅 때문에) -ES5 
function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : ' + query);
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyA-mwx857fMztPfaoSHuJ2iq-tsnlGyYvQ&type=video`, requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result.items))
    .then(result =>{
      const items = result.items;
      const videoList =[];
      videoList.push(`<ul class='videos'>`);
      for (let i=0; i < items.length; i++){
        videoList.push(`<li class='container'>`);
        videoList.push(`<div class='video'>`);
        videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
        videoList.push(`<div class='titles'>`);
        videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
        videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
        videoList.push(`</div>`);
        videoList.push(`</div>`);
        videoList.push(`</li>`);
      }
      videoList.push(`</ul>`);
      document.querySelector('#root').innerHTML = videoList.join("");
    })
    .catch(error => console.log('error', error));
/*

 // Array
  const videoList = [];
  const items = result.items;

  videoList.push(`<ul class='videos'>`);
  for (let i=0; i < items.length; i++){
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
  */
  // document.querySelector('#root').innerHTML = '111';
}
