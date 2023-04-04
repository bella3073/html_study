//출금하기 버튼 클릭
//얼마 출금하시겠습니까?
//3자리 간격 콤마 ?00,000원 출금되었습니다.
//(선택) 남은 잔액은 ????원 남았습니다.

const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)

//1. 출금하기 버튼 클릭
order.addEventListener('click',money_ch)

function money_ch() {
    //console.log(this) 작동확인
    // let money = window.prompt('얼마 출금하시겠습니까?')
    // // console.log(money+100) 작성되는 금액이 -> 문자임
    // let money_n = Number(money) //문자 -> num 으로 변경
    // console.log(money_n+100) num으로 변경된 것이 맞는지 확인
    let money = Number(window.prompt('얼마 출금하시겠습니까?'))
    let money_type = money.toLocaleString('ko-kr')
    let t_money = 5000000000
    let bank_m = t_money - money
    result.innerHTML = `${money_type}원 출금되었습니다.`
    result.innerHTML += `<br>남은 잔액은 ${bank_m.toLocaleString('ko-kr')}원 입니다.`

}