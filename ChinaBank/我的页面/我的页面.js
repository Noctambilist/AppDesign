const refresh = document.querySelector('.box3-1-2 img');//刷新图片
var assetElement = document.getElementById('asset');//资产空
const creator = '老张';//实验

/***********************************************/
/*  12月22日23:24增加基本事件*/

const exitButton = document.querySelector('.box1-1 img');//退出按钮

exitButton.addEventListener('click', () => {
  location.href = '../三模登录页面/三模登录页面.html'
})

/***********************************************/

function getaccountInfo() {
  var d = new Date();
  var currentTime = d.toLocaleString();
  var currentTimeElement = document.getElementById('currentTime');
  if (currentTimeElement) {
    currentTimeElement.innerHTML = currentTime;
  }

  var asset = 0;
  /*axios({
      url: '',
      Headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(result => {
      var optionsData =result.data.data;
      for (var i = 0; i < optionsData.length; i++) {
          asset= optionsData[i].balance+asset;
      }       
      if (assetElement) {
          assetElement.innerHTML = asset;
      }
    })*///正式调用
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      creator
    }
  }).then(result => {
    console.log(result)
    var optionsData = result.data.data;
    for (var i = 0; i < optionsData.length; i++) {
      asset = optionsData[i].id + asset;
    }
    if (assetElement) {
      assetElement.innerHTML = asset;
    }
  })//实验调用
}//获取资产金额以及刷新时间修改

getaccountInfo();

refresh.addEventListener('click', () => {
  getaccountInfo();
})//刷新按钮