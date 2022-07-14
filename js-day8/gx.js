const btn_ins = document.querySelector(".btn_ins");
const btn_del = document.querySelector(".btn_del");

btn_ins.addEventListener('click', (event) => {
  console.log('추가');
  console.log(`${event.target}, ${event.currentTarget}`);
  alert(event.textContent);
})

btn_del.addEventListener('click', (event) => {
  console.log('삭제');
  console.log(event);
})