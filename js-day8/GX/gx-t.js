const footer_input = document.querySelector('.footer_input'); // input
const items = document.querySelector('.items');               // ul
const btn_ins = document.querySelector('.btn_ins');
const btn_del = document.querySelector('.btn_del');

function addList(){
  const text = footer_input.value;  // 내용 추가
  if(text === ""){
    footer_input.focus();
    return;
  }
  const list = updateList(text);
  items.appendChild(list);

  list.scrollIntoView({block: 'center'}); // 새로 선언된 곳으로 스크롤 위치 이동
  footer_input.value='';
  footer_input.focus();
}

function updateList(text) {
  const item_row = document.createElement('li');   
  item_row.setAttribute('class', 'item_row');
  items.appendChild(item_row);
  
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  item_row.appendChild(item); 
  
  const item_name = document.createElement('span');
  item_name.setAttribute('class', 'item_name');
  item.appendChild(item_name); 
  item_name.innerText = text; // name.textContent = text;
  
  const btn_del = document.createElement('button');
  btn_del.setAttribute('class', 'btn_del');
  btn_del.innerHTML = '<i class="fas fa-trash-alt"></i>';
  item.appendChild(btn_del);  
  btn_del.addEventListener('click', () => {
    items.removeChild(item_row);
  });
  
  const item_divider = document.createElement('div');
  item_divider.setAttribute('class', 'item_divider');
  item_row.appendChild(item_divider); 
  
  return item_row;


  // ul.li.div(span,button)
  // items.appendChild(item_row);         // ul에 li넣기

  // item_row.appendChild(item);          // li에 div넣기
  // item_row.appendChild(item_divider); 
  
  // item.appendChild(item_name);         // div에 span넣기
  // item.appendChild(btn_del);           // div에 button넣기
}

btn_ins.addEventListener('click', () => {
  addList();
});

footer_input.addEventListener('keypress', (e) =>{
  console.log('key값: ' + e.key);
  if(e.key==='Enter') {
    addList();
    }
})
