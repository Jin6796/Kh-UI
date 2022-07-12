const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
*/
fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    const ul = document.createElement("ul");
    for(let i=0; i<10; i++){
      const li = document.createElement("li");
      const a = document.createElement('a');
      const span = document.createElement('span');
      a.href = `#${requestOptions[i].id}`;
      a.innerHTML = `${requestOptions[i].title}`
      li.appendChild(a);
      li.appendChild(span);
      ul.appendChild(li); 
    }
    document.getElementById("root").appendChild(ul);
  })
  .catch(error => console.log('error', error));