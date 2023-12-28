const exitButton = document.querySelector('.box1-1 img');
const defaultAccount = document.querySelector('.box3 #account');//默认收款账户后的那几个数字

/*
*
*
*   调接口，渲染默认卡号
*   defaultAccount.innerHTML = 
*
*/

var sjhm = localStorage.getItem('sjhm');
console.log(sjhm);
var token = localStorage.getItem('token');
console.log(token);
function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../首页/首页.html';
  }, 100);
})
/*axios({
  url: '',

  params:{
    phoneNumber:sjhm
  },
}).then(result => {
  var lastFourDigits = result.data.data.cardID.slice(-4);
  document.getElementById("account").textContent = lastFourDigits;
}) */