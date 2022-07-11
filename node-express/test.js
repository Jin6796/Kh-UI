
const imsi2 = document.querySelector('p');
imsi2.addEventListener('click', updateName2);

function updateName2(){
  const imsi2 = prompt('Enter a new name');
  para.textContent = `Player 1: ${imsi2}`;
}