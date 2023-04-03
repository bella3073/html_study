//월 - 맑음
//화 - 맑음
//수 - 비
//목 - 비
//금 - 맑음
//토 - 흐림
//일 - 눈
let week = ['월', '화', '수', '목', '금', '토', '일']
let weather = ['맑음', '비', '흐림', '눈']
console.log(week, weather)

const result = document.querySelectorAll('.result')
const btn = document.querySelector('#answer_btn')
console.log(result, btn)

btn.addEventListener('click',function(){
    //console.log(this) //작동 확인 완료
    result[0].innerHTML = `${week[0]}요일, ${weather[0]}`
    result[1].innerHTML = `${week[1]}요일, ${weather[0]}`
    result[2].innerHTML = `${week[2]}요일, ${weather[1]}`
    result[3].innerHTML = `${week[3]}요일, ${weather[1]}`
    result[4].innerHTML = `${week[4]}요일, ${weather[0]}`
    result[5].innerHTML = `${week[5]}요일, ${weather[2]}`
    result[6].innerHTML = `${week[6]}요일, ${weather[3]}`
})