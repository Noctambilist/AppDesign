const exitButton = document.querySelector('.box1-1 img');
const YinHangZhangHaoZhuanZhangButton = document.querySelector('.box2-1-1 img');
const ShouJiHaoZhuanZhangButton = document.querySelector('.box2-1-2 img');

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../主页/主页.html';
  }, 100);
})

YinHangZhangHaoZhuanZhangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../银行账号转账/银行卡号转账.html';
  }, 100);
})

ShouJiHaoZhuanZhangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../手机号转账页面/手机号转账.html';
  }, 100);
})