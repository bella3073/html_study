const money = document.querySelector('#result1')
const money_plus = document.querySelector('#result2')
const total = document.querySelector('#result')
const btn = document.querySelector('#answer_btn')
console.log(money, money_plus, total, btn)

btn.addEventListener('click',function(){
    // console.log(this)
    let pop_up = Number(window.prompt('입금액을 입력하세요.'))
    money.value = pop_up.toLocaleString('ko-kr')
    // let num_money = Number(money.value)
    money_plus.value = 100
    let num_money_p = Number(money_plus.value)
    // console.log(num_money_p+200)
    let str_total = pop_up+num_money_p
    total.value = `${str_total.toLocaleString('ko-kr')}원`
})