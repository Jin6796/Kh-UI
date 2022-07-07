const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 2000);
  // reject('Fail');
});
p.then((ok) => {
  console.log('첫번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      console.log('두번째 성공');
    }, 3000);
  })
}).then(function(ok){
  console.log(ok);
})
.catch((error) => {
  console.log(error);
});