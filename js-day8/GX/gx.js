const footer_input = document.querySelector('footer_input'); // input
const items = document.querySelector('items');               // ul
const btn_ins = document.getElementById('btn_ins');
const btn_del = document.getElementById('btn_del');

    // const item_row = document.createElement('li');   
    // item_row.classList.add('item_row');

    // const item = document.createElement('div');
    // item.classList.add('item');
    
    // const item_name = document.createElement('span');
    // item_name.classList.add('item_name');
    
    // const btn_del = document.createElement('button');
    // btn_del.classList.add('btn_del');
    
    // const item_divider = document.createElement('div');
    // item_divider.classList.add('item_divider');
  
    // // ul.li.div(span,button)
    // item_row.appendChild(item);
    // item_row.appendChild(item_divider);

    // item.appendChild(item_name);
    // item.appendChild(btn_del);

    // items.appendChild(item_row);

if(btn_ins) {
    btn_ins.addEventListener('click', () => {
    console.log('btn clicked');
    });
}

/* btn_ins.addEventListener('click', (e) => {
    console.log('버튼 클릭');
    const item_row = document.createElement('li');
    item_row.appendChild(document.createTextNode(footer_input.value));
    items.appendChild(item_row);
    footer_input.value ="";
}); */