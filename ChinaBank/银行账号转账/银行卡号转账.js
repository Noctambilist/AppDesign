const creator = '老张'
const tranferbtn = document.querySelector('.box4 .tranfer');//转账按钮

function getaccount(){
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params: {

          creator
        }
      }).then(result => {
        console.log(result)

    var optionsData =result.data.data;
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

    tranferbtn.addEventListener('click', (e) => {
        var selectElement = document.querySelector('select');
        if (selectElement) {
            var selectedOptionValue = selectElement.value;
            var selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
            console.log('选中的选项值：', selectedOptionValue);
            console.log('选中的选项文本：', selectedOptionText);
        } else {
            console.log('请先渲染选项');
        }
        //下面传数据
    
      }) 

