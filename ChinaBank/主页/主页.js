const exitButton = document.querySelector('.box1-1 img');
const clearText = document.querySelector('.clear');
const searchLine = document.querySelector('.inp');
const ZhuanZhangButton = document.querySelector('.transMoney');
const ShouFuKuanButton = document.querySelector('.payCode');
const ZhangHuGuanLiButton = document.querySelector('.account');
const ChaKanLiuShuiButton = document.querySelector('.flow');

exitButton.addEventListener('click', () => {
  location.href = '../三模登录页面/三模登录页面.html';
})

clearText.addEventListener('click', () => {
  searchLine.value = '';
})

ZhuanZhangButton.addEventListener('click', () => {
  location.href = '../转账页面/转账页面.html';
})

ShouFuKuanButton.addEventListener('click', () => {
  location.href = '../收付款二维码/收付款二维码页面.html';
})

ZhangHuGuanLiButton.addEventListener('click', () => {
  location.href = '../账户管理/账户管理.html';
})

ChaKanLiuShuiButton.addEventListener('click', () => {
  location.href = '../查看流水/查看流水.html';
})