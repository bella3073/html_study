const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')
let money = 10000
let s_money = 1000
let total = money+s_money
//객체.메서드()
//객체.toLocalString('ko-kr')
let total_replace = total.toLocaleString('ko-kr')
console.log(total_replace)
console.log(answer_btn, answer_input, total)
answer_btn.addEventListener('click', function(){
    //이벤트 조건 만족 시 실행 결과
    // console.log(this)
    answer_input.value = `총 ${total_replace}원 입니다.`
})