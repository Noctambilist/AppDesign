const exitButton = document.querySelector('.box1-1 img');
var swiperWrapper = document.querySelector('.box3-1 .swiper-wrapper');
var eyeClose = document.querySelector('.eyeClose');
var eyeOpen = document.querySelector('.eyeOpen');
var assetElement = document.getElementById('asset');
const refreshimg = document.querySelector('.box2-1-2 img');
var asset = 0;//资产

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



/***********************************************/
/*  12月24日15:12增加 */
function getaccount(){
let token = localStorage.getItem('token');
console.log(token);
axios({
  url: 'http://47.113.198.244/user/getRelatedCard',
  headers: {
    token
  }
}).then(result => {
  console.log(result);
  var cardData=result.data.data;
  console.log(cardData);
  for(var i=0;i<cardData.length;i++){
    var swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    let lastFourDigits = cardData[i].cardID.slice(-4);    
    var content = document.createTextNode(lastFourDigits);
    console.log(cardData[i].cardID);
    swiperSlide.appendChild(content);

    var transactionDetailBtn = document.createElement('button');
    transactionDetailBtn.value=cardData[i].cardID
    transactionDetailBtn.textContent = '交易明细';
    swiperSlide.appendChild(transactionDetailBtn);
    
    var transferBtn = document.createElement('button');
    transferBtn.value=cardData[i].cardID
    transferBtn.textContent = '转账';
    swiperSlide.appendChild(transferBtn);
    
    var balanceContent = document.createTextNode(cardData[i].balance);
    swiperSlide.appendChild(balanceContent);
    
    swiperWrapper.appendChild(swiperSlide);
    
    // 添加按钮的点击事件监听器往别的页面跳并传数据
    transactionDetailBtn.addEventListener('click', function() {
      console.log(this.value);
      const url = '../查看流水页面/查看流水页面.html?cardID=' +this.value;
      window.location.href =url;
    });
    
    transferBtn.addEventListener('click', function() {
      console.log(this.value);
      const url = '../银行账号转账页面/银行账号转账页面.html?cardID=' +this.value;
      window.location.href =url;
    });
  }
})
}

refreshimg.addEventListener('click', () => {
  refresh();
  console.log("dianji");
})//刷新按钮

function refresh(){
  let token = localStorage.getItem('token');
  console.log(token);
  axios({
      url: 'http://47.113.198.244/user/getRelatedCard',
      headers: {
        token
      }
    }).then(result => {
      if (result.data.code==200) {
        var optionsData =result.data.data;
        asset=0;
        for (var i = 0; i < optionsData.length; i++) {
              asset= optionsData[i].balance+asset;
          }       
        var eyeOpenStyle = window.getComputedStyle(eyeOpen);
        if (eyeOpenStyle.display === 'block') {
          assetElement.innerHTML = asset;
        } else {
          assetElement.innerHTML = "*******";
        }
      } else {
        var eyeOpenStyle = window.getComputedStyle(eyeOpen);
        if (eyeOpenStyle.display === 'block') {
          assetElement.innerHTML = asset;
        } else {
          assetElement.innerHTML = "*******";
        }
      }
    console.log(result)
    })
}
refresh();
getaccount();
function toggleVisibility() {
  if (eyeClose.style.display === 'none') {
      eyeClose.style.display = 'block';
      eyeOpen.style.display = 'none';
      assetElement.innerHTML = "*******";
  } else {
      eyeClose.style.display = 'none';
      eyeOpen.style.display = 'block';
      assetElement.innerHTML = asset;
  
  }
}