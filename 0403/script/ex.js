//-------------------------------DOM 변수
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const result = document.querySelector('#result')
console.log(btn1,btn2,btn3,result)
let qa = window.confirm('let과 const의 차이점을 서술하시오.')
btn1.addEventListener('click',function(){
    // console.log(this) //버튼 클릭했을 때 console에 정보가 뜸, this:현재 대상을 알려주는 키워드
    result.innerHTML = `let은 값이 변하는 변수,<br> const는 변하지 않는 상수이다.`
})
btn2.addEventListener('click',function(){
    qa = window.confirm('변수와 배열의 차이점을 서술하시오.')
    result.innerHTML = '변수는 한 가지 값을 배열은 두 개 이상의 값을 담을 수 있는 데이터 저장소다.'
})
btn3.addEventListener('click',function(){
    qa = window.confirm('증감연산자의 전위연산, 후위연산의 차이점을 서술하시오.')
    result.innerHTML = '변수의 값을 1씩 증가하는 증감연산자는 전위, 후위 위치에 따라 값을 대입 후 증가할지, 증가하고 대입할지가 결정된다.'
})