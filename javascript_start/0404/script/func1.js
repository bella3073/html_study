const order = document.querySelector('.order')
const result = document.querySelector('#result')
console.log(order, result)
// japangi() //함수호출(함수명())
order.addEventListener('click',japangi)

//함수 기본 문법
//function 함수명() {실행재사용문법}
function japangi() {
    let menu = window.prompt('주문하시겠습니까?')
    result.innerHTML = `주문하신 ${menu} 나왔습니다.`
}
//함수 생성과 호출은 별개로 처리한다.
//함수는 무한정 재사용 가능하기 때문에 필요한만큼 호출할 수 있도록 한다.