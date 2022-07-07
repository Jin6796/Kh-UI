// Javascript는 synchronous하다.

console.log(1);
setTimeout(() => {
  console.log(2);

},2000);
console.log(3);