const exitButton = document.querySelector('.box1-1 img');
const defaultAcount = document.querySelector('.box3 #account');
var sjhm = localStorage.getItem('sjhm');
console.log(sjhm);
var token = localStorage.getItem('token');

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

axios({
  url: 'http://47.113.198.244/user/getPayCard',
  method: 'GET',
  params: {
    phoneNumber: sjhm,
  }
}).then(result => {
  console.log(result);
  var lastFourDigits = result.data.data.slice(-4);
  console.log(lastFourDigits);
  defaultAcount.innerHTML = lastFourDigits;
})
console.log(token);