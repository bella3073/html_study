//사이트에 미리 저장된 회원정보 변수(배열)
let userId = ['a','b','c','d','e','f']
let userPw = ['1','2','3','4','5','6']
//DOM 제어 변수
const id_pw_result = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')
console.log(userId, userPw, id_pw_result, id_pw_result[0], id_pw_result[1], btn)

btn.addEventListener('click',function(){
    //console.log(this) //버튼 작동 확인
    id_pw_result[0].innerHTML = userId[1]
    id_pw_result[1].innerHTML = userPw[1]
})