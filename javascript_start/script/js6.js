//1. (보유) 보유포인트를 최소 100원 이상 가지고 있음을 설정
//2. 전액 사용 버튼 클릭
//3. (사용) 보유에 넣어둔 포인트가 사용에 넘어가면서 보유가 0이 되도록 설정
//4. x 버튼을 누르면 보유는 기존 금액, 사용은 0이 되도록 설정

const user_point = document.querySelector('#user_point')
const use = document.querySelector('#use_point')
const btn = document.querySelector('#point_all_btn')
const reset = document.querySelector('#point_reset')

let point = 5000000 //보유 포인트
let num = 0 //포인트 변수 (초기값 0)
let total = 0 //최종가격 변수(초기값 0)

console.log(user_point,use,btn,reset)
console.log(num,point,total)

user_point.value = point.toLocaleString('ko-kr')
point_reset.style.display = 'none'
btn.addEventListener('click',()=>{
    // console.log(this) 작동 확인
    // all_point = point
    use.value = point
    user_point.value = 0
    reset_display()
})
reset.addEventListener('click',()=>{
    // console.log(this) 작동 확인
    user_point.value = point.toLocaleString('ko-kr')
    all_point = 0
    use.value = all_point.toLocaleString('ko-kr')
    reset_display()
})

//사용값이 1이상이면 x가 보이고 아니면 x 숨기기
function reset_display(){
    if(use.value >= 1){//사용 값 1 이상이면
        point_reset.style.display = 'inline-block'
    }else{
        point_reset.style.display = 'none'        
    }
}