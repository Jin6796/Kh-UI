const footer_input = document.querySelector('.footer_input'); // input
const items = document.querySelector('.items');               // ul
const btn_ins = document.querySelector(".btn_ins");
const btn_del = document.querySelector(".btn_del");

const addList = () => {
  const content = footer_input.value;
  if(!content){
    footer_input.focus();
    return;
  }
  const list = updateList(content);
  items.appendChild(list);
}

const updateList = (content) => {
  const item_row = document.createElement('li');   
  item_row.classList.add('item_row');
  items.appendChild(item_row);

  const item = document.createElement('div');
  item.classList.add('item');
  item_row.appendChild(item);
  
  const item_name = document.createElement('span');
  item_name.classList.add('item_name');
  item.appendChild(item_name);
  item_name.innerText = content;
  
  const btn_del = document.createElement('button');
  btn_del.classList.add('btn_del');
  item.appendChild(btn_del);
    
  const item_divider = document.createElement('div');
  item_divider.classList.add('item_divider');
  item_row.appendChild(item_divider);
  }

btn_ins.addEventListener('click', () =>{
  addList();
})

// btn_ins.addEventListener('click', (e) => {
//   if(!footer_input.value)
//     alert('내용을 입력하세요');
//     else{
//       item_row.innerText = footer_input.value;
//       items.appendChild(item_row);
//       footer_input.value ="";
//     }
// // console.log('버튼 클릭');
// });
