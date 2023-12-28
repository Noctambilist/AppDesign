const HuoQuYanZhengMaButton = document.querySelector('.box2-3 button');
const exitButton = document.querySelector('.box1-1 img');


const ShuRuYanZhengMa = document.querySelector('.verCode');//弹窗大窗体
const closeTanChuang = document.querySelector('.verCode1 img');//关闭弹窗
const passwordInput = document.querySelector('.verCode2 input');//弹窗密码框
const confirmPasswordButton = document.querySelector('.verCode3 button');//确认密码
const hint = document.querySelector('.verCode p');//提示密码错误

const phoneNumber = document.querySelector('.box2-2-1 p');//当前账户手机号，需要在页面加载的时候连后端渲染
var sjhm=localStorage.getItem('sjhm');
phoneNumber.innerHTML=sjhm;
let varifyToBack;

function slideMe() {
  document.body.style.marginRight = "0"
  document.body.style.opacity = "1";
}

function getRandomVarify() {
  return (Math.floor(Math.random() * (999999 - 100000 + 1) + 100000));
}

exitButton.addEventListener('click', () => {
  document.body.style.marginRight = "-15%";
  document.body.style.opacity = "0";
  setTimeout(function () {
    location.href = '../设置页面.html';
  }, 100);
})

HuoQuYanZhengMaButton.addEventListener('click', () => {
  varifyToBack = +getRandomVarify();  //生成给后端的验证码
  console.log(varifyToBack);
  axios({
    url: 'http://47.113.198.244/pre/send',
    method:'POST',
    params:{
      phoneNumber:sjhm,
      code:varifyToBack
    }
  }).then(result => {
    console.log(result);
    if (result.data.data=="OK") {
      
    } else {
      alert(result.data.data);
    }

  })
  console.log(varifyToBack);
  document.getElementById("overlay").classList.add("show");
  ShuRuYanZhengMa.classList.add("show");
})

closeTanChuang.addEventListener('click', () => {
  ShuRuYanZhengMa.classList.remove("show");
  passwordInput.value = '';
  document.getElementById("overlay").classList.remove("show");
})

confirmPasswordButton.addEventListener('click', () => {
  if (Number(passwordInput.value) === varifyToBack) {//直接前端做验证
    document.body.style.marginRight = "-15%";
    document.body.style.opacity = "0";
    axios({
      url: 'http://47.113.198.244/pre/checkLogin',
      params:{
        phoneNumber:sjhm,
        code:varifyToBack
      }
    }).then(result => {
      console.log(result);
        if (result.data.code==200) {
          console.log(result);
          localStorage.setItem('token',result.data.data.token);
        } else {
          alert(result.data.msg);
        }
    })
    setTimeout(function () {
      location.href = './手机换绑页面.html';
    }, 100);
  } else {
    hint.style.visibility = 'visible';
  }
})





let aliveDetector = setInterval(() => {
  if (passwordInput.value.length == 6) {
    confirmPasswordButton.style.opacity = '1';
  } else {
    confirmPasswordButton.style.opacity = '0.5';
  }

  // console.log(selecttt.options[selecttt.selectedIndex].text);

}, 50)