const exitButton = document.querySelector('.box1-1 img');
const YinHangZhangHaoZhuanZhangButton = document.querySelector('.box2-1-1 img');
const ShouJiHaoZhuanZhangButton = document.querySelector('.box2-1-2 img');
const ZhuanZhangJiLu = document.querySelector('.box2-2-1 p');
const ShouKuanErWeiMa = document.querySelector('.box2-2-2 p');

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

YinHangZhangHaoZhuanZhangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../银行账号转账页面/银行账号转账页面.html';
  }, 100);
})

ShouJiHaoZhuanZhangButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../手机号转账页面/手机号转账页面.html';
  }, 100);
})

ZhuanZhangJiLu.addEventListener('click', () => {
  var ioe=4;
  const url = '../查看流水页面/查看流水页面.html?ioe=' +ioe;
  window.location.href =url;
  //转账方式传递

})

ShouKuanErWeiMa.addEventListener('click', () => {
  location.href = '../收付款页面/收付款页面.html';
})