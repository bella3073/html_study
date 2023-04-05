//아메리카노 1개 가격 4700원
// 1. 버튼을 누르면
// 2. 수량과 가격이 증가함

const btn = document.querySelector('#order')
const number = document.querySelector('#number')
const result = document.querySelector('#result')
const reset = document.querySelector('#reset')
let price = 4700 //고정가격
let num = 0 //변수 수량 변수 (초기값0)
let total = 0 //변경 최종가격 변수(초기값 0)

console.log(btn,number,result,reset,price,num,total)

function order_reset(){
    num = 0
    total = price*num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
}
function order_add(){
    num++
    total = price*num
    number.innerHTML = num
    result.innerHTML = total.toLocaleString('ko-kr')
}
btn.addEventListener('click',order_add)
reset.addEventListener('click',order_reset)