const money1 = document.querySelector('#result1')
const money2 = document.querySelector('#result2')
const total = document.querySelector('#result')
const btn = document.querySelector('#answer_btn')
console.log(money1, money2, total, btn)

btn.addEventListener('click',function(){
    // console.log(this)
    console.log(money1.value)
    // console.log(typeof money1.value)
    let num_money1 = Number(money1.value)
    let num_money2 = Number(money2.value)
    // console.log(num_money1+10)
    let str_total = num_money1+num_money2 //계산은 앞에서 끝내고
    total.value = `총 ${str_total.toLocaleString('ko-kr')}만원` //마지막에 , 붙이기
})
