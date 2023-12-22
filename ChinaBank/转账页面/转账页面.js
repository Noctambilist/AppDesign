const exitButton = document.querySelector('.box1-1 img');
const YinHangZhangHaoZhuanZhangButton = document.querySelector('.box2-1-1 img');
const ShouJiHaoZhuanZhangButton = document.querySelector('.box2-1-2 img');


exitButton.addEventListener('click', () => {
  location.href = '../主页/主页.html';
})

YinHangZhangHaoZhuanZhangButton.addEventListener('click', () => {
  location.href = '../银行账号转账/银行卡号转账.html';
})

ShouJiHaoZhuanZhangButton.addEventListener('click', () => {
  location.href = '../手机号转账页面/手机号转账.html';
})