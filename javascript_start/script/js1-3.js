let money = 10000
let snack = 2000
let ice = 1000
let total = money-(snack+ice)
let total_replace = total.toLocaleString('ko-kr')
const btn = document.querySelector('#answer_btn')
const input_btn = document.querySelector('#result')
console.log(btn, total, input_btn, total_replace)
btn.addEventListener('click', function(){
    // console.log(this)
    input_btn.value = `총 ${total_replace}원 입니다.`
})