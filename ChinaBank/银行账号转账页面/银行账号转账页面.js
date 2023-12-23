const creator = '老张'
const tranferbtn = document.querySelector('.box4 .tranfer');//转账按钮

/***********************************************/
/*  12月24日0:52增加 */
const exitButton = document.querySelector('.box1-1 img');//退出按钮
const confirmButton = document.querySelector('.box4 button');//转账按钮
const ShouKuanRen = document.querySelector('.box2-2 input');//收款人
const ShouKuanShouJiHao = document.querySelector('.box2-3 input');//收款手机号
const ZhuanZhangJinE = document.querySelector('.box3-2 input');//转账金额
const payButton = document.querySelector('.payPassword3 .payBtn');//密码按钮
const clear1 = document.querySelector('.box2-2 img');
const clear2 = document.querySelector('.box2-3 img');
const clear3 = document.querySelector('.box3-2 .actNumCancel');
const QueRenXinXiTanChuang = document.querySelector('.tranferInformation');//确认信息大窗体
const QueDingButton = document.querySelector('.information5 .yesBtn');
const QuXiaoButton = document.querySelector('.information5 .noBtn');
// QueRenXinXiTanChuang.style.visibility = 'visible';
const selecttt = document.querySelector('select');
const MiMaTanChuang = document.querySelector('.payPassword');//确认密码大窗体
const closeMiMaTanChuang = document.querySelector('.payPassword1 img');//关密码窗口
const passwordInput = document.querySelector('.payPassword2 input');//弹窗密码框
const confirmPasswordButton = document.querySelector('.payPassword3 button');//确认密码
const hint = document.querySelector('.payPassword p');//提示密码错误

clear1.addEventListener('click', () => {
    document.querySelector('.box2-2 input').value = '';
})

clear2.addEventListener('click', () => {
    document.querySelector('.box2-3 .actID').value = '';
})

clear3.addEventListener('click', () => {
    document.querySelector('.box3-2 .actNum').value = '';
})

function slideMe() {
    document.body.style.marginRight = "0"
    document.body.style.opacity = "1";
}



exitButton.addEventListener('click', () => {
    document.body.style.marginRight = "-15%";
    document.body.style.opacity = "0";
    setTimeout(function () {
        location.href = '../转账页面/转账页面.html';
    }, 100);
})

confirmButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'visible';
    document.getElementById("overlay").classList.add("show");

    //渲染确认信息文字
    document.querySelector('.information1 p').innerHTML = document.querySelector('.box2-2 input').value;
    document.querySelector('.information2 p').innerHTML = document.querySelector('.box2-3 input').value;
    document.querySelector('.information3 p').innerHTML = document.querySelector('.box3-2 input').value;
    document.querySelector('.information4 p').innerHTML = selecttt.options[selecttt.selectedIndex].text;

})

QueDingButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'hidden';
    MiMaTanChuang.style.visibility = 'visible';
})

QuXiaoButton.addEventListener('click', () => {
    QueRenXinXiTanChuang.style.visibility = 'hidden';
    document.getElementById("overlay").classList.remove("show");
})

closeMiMaTanChuang.addEventListener('click', () => {
    MiMaTanChuang.style.visibility = 'hidden';
    passwordInput.value = '';
    document.getElementById("overlay").classList.remove("show");
})

confirmPasswordButton.addEventListener('click', () => {
    /*
    *
    *
    * 
    * 
    * 
    *       张伟写
    * 
    * 
    * 
    * 
    * 
    *
    */
    //把flag换了：验证数据，如果输入密码和账号密码不一样
    let flag = false;
    if (flag) {
        hint.style.visibility = 'visible';
    }
    else {  //如果正确，弹成功动画，并且传数据
        MiMaTanChuang.style.visibility = 'hidden';
        document.getElementById("success").classList.add("show");
        setTimeout(() => {
            document.getElementById("success").classList.remove("show");
            document.getElementById("overlay").classList.remove("show");
            passwordInput.value = '';
        }, 2000)
    }

})

/***********************************************/


function getaccount() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {

            creator
        }
    }).then(result => {
        console.log(result)

        var optionsData = result.data.data;
        var selectElement = document.getElementById("account");
        var currentOptionValue = 1;
        selectElement.innerHTML = '';

        for (var i = 0; i < optionsData.length; i++) {
            var optionElement = document.createElement('option');
            optionElement.value = currentOptionValue++;
            optionElement.text = optionsData[i].bookname;
            selectElement.appendChild(optionElement);
        }
    })
}//获取银行卡号并渲染，没有接口，用黑马获取书籍代替，已测试，没有说明后台数据被人删完了
getaccount();

// function pButton(){
//     payButton.addEventListener('click', () => {
//     const passwordValue = passwordInput.value;
//     console.log(passwordValue);
//     //*********下面传数据**********


//     //****************************
//     var payPasswordElement = document.querySelector('.payPassword');
//     payPasswordElement.style.visibility = 'hidden';
//     })
// }

// confirmButton.addEventListener('click', () => {
//     var selectElement = document.querySelector('select');
//     if (selectElement) {
//         var selectedOptionValue = selectElement.value;
//         var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
//         console.log('选中的选项值：', selectedOptionValue);
//         console.log('选中的选项文本：', selectedOptionText);
//     } else {
//         console.log('请先渲染选项');
//     }
//     var payPasswordElement = document.querySelector('.payPassword');
//     payPasswordElement.style.visibility = 'visible';
//     pButton()
// })
// closeButton.addEventListener('click', () => {
//     var payPasswordElement = document.querySelector('.payPassword');
//     payPasswordElement.style.visibility = 'hidden';
// })

let aliveDetector = setInterval(() => {
    if (ShouKuanRen.value !== '' && ShouKuanShouJiHao.value !== '' && ZhuanZhangJinE.value !== '') {
        confirmButton.style.opacity = '1';
        confirmButton.disabled = false;
    } else {
        confirmButton.style.opacity = '0.5';
        confirmButton.disabled = true;
    }

    if (passwordInput.value.length == 6) {
        confirmPasswordButton.style.opacity = '1';
    } else {
        confirmPasswordButton.style.opacity = '0.5';
    }

    // console.log(selecttt.options[selecttt.selectedIndex].text);
}, 50)