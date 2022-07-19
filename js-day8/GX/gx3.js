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
  console.log('확인');
  items.appendChild(list);//************** */
  console.log('확인2');

  itemList.push(content);
  footer_input.value=''; // 빈 칸으로 초기화
  
}

let itemList = [];

function updateList(content) {
  for(let i=0; i<= itemList.length; i++){
    itemList.innerText = content;
    items.innerHTML = `
    <li class="item_row">
      <div class="item">
        <span class="item_name" id="${i}">
        ${itemList.innerText}
        </span>
        <button class="btn_del"><i class="fas fa-trash-alt"></i></button>
      </div>
    </li>
    <div class="item_divider"></div>
  `;
  }
  // console.log(document.getElementById(0));
  console.log(content);
  console.log(itemList.length);
}

btn_ins.addEventListener('click', () =>{
  addList();
});

// btn_del.addEventListener('click', () => {
//   items.removeChild(item_row);
// })