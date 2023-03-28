const result = document.querySelector('#result')
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
// let result2_ = `${result}`
console.log(result, result1, result2)

answer_btn.addEventListener('click', function(){
    // console.log(this)
    console.log(result.value)//이벤트 추적 가능확인
    console.log(typeof result.value)//str -> num
    // result의 값을 숫자로 변환하는 저장 변수
    let number_type = Number(result.value)
    //위 변수가 숫자인지 +1을 통해 숫자+숫자=숫자 인지 결과 확인
    console.log(number_type+1)
    //위 변수가 number 데이터값인지 typeof 연산자 확인
    console.log(typeof number_type)
    //모든 결과 console 확인 후 각 변수에 최종 데이터 결과 대입
    result2.value = result.value
    result1.value = typeof number_type
})