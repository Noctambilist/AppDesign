const HuoQuYanZhengMaButton = document.querySelector('.box2-3 button');
const exitButton = document.querySelector('.box1-1 img');

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../设置页面.html';
  }, 100);
})

HuoQuYanZhengMaButton.addEventListener('click', () => {

})