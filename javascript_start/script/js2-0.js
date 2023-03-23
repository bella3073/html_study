//window.alret
const input_res1 = document.querySelector('#result1')
const input_res2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
console.log(input_res1, input_res2, answer_btn)
answer_btn.addEventListener('click', function(){
    // // console.log(this)
    let data = window.prompt('인증번호를 입력하세요.')
    input_res1.value = typeof data
    input_res2.value = data
})