//1. 아이디를 적지 않고 로그인 누를 시,
//'아이디를 입력하세요.' 라고 나오게 하기 #error_result

const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const error = document.querySelector('#error_result')
const btn = document.querySelector('#login_btn')
let Id = null
console.log(userId,userPw,error,btn,Id)


btn.addEventListener('click',()=>{
    if(userId.value == ''){
        error_result.innerHTML = '아이디를 입력하세요.'
    }
})