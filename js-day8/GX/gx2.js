// const e = require("express");

const btn_del = document.querySelector(".btn_del");
const btn_ins = document.querySelector(".btn_ins");

const items = document.querySelector(".items");               // ul
const footer_input = document.querySelector(".footer_input"); // input
/* 
const item_row = document.createElement("item_row");         // li
const item = document.createElement("item");                 // div
const item_name = document.createElement("item_name");       // span
const item_divider = document.createElement("item_divider"); // div
 */

let lists = [];
let list = 0;









/* function insertList(e){
  e.preventDeFault();
  const footer_input = document.querySelector("footer_input"); // input
  if(footer_input !== ''){
    addList(footer_input.value);
    footer_input.value = '';
  }
}

function addList(value){
  const items = document.querySelector("items");       // ul
  const item_row = document.createElement("item_row"); // li
  item_row.innerHTML =``;
  items.appendChild(item_row);
} */

// for (let i=1; i<input.length; i++) {
//   items.appendChild(item_row);
//   item_row.appendChild(item);
//   item.appendChild(item_name);
//   item.appendChild(btn_del);
// }

// if(!footer_input.value) alert('내용을 입력해주세요.');


btn_ins.addEventListener('click', (event) => {
  console.log('추가');
  alert(event.textContent);
})

btn_del.addEventListener('click', (event) => {
  console.log('삭제');
  console.log(event);
})