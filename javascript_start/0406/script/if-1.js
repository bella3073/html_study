console.log('논리데이터-----------------------------')
console.log(true) //숫자와 함께 할때는 true = 1, false = 0 으로 인식한다.
console.log(false)
console.log(true+2)//3
console.log(false+10)//10
console.log(typeof true) //boolean(논리데이터)
console.log(typeof false+1) //boolean1 -> 논리데이터는 기본적으로 논리데이터로 인식한다.
let bo = true+10
console.log(typeof bo)//number
console.log(true+null)//1 -> null:없다 -> 0으로 인식함.
console.log(false+null)//0
console.log('-------------------------------------------')
// let a = 10
// let b = 20
// let c = '20'
// let d = 0
// console.log(a,b,c)
// console.log(a==b)//false
// console.log(b===c)
// console.log(a!=b)
// console.log(b!==c)
// console.log(a>b)
// console.log(a<=b)
// console.log(!b) //0이 아닌 값은 기본적으로 true로 인식
console.log('조건식------------------------------------')
/* 
    if(날씨 == '비'){우산챙기기}
    if(날씨 != '맑음'){우산챙기기}
    if(점수 >= 60){자격증합격}
    if(점수 < 60){재시험}
*/
// let weather = window.prompt('오늘 날씨 어때?')
// if(weather == '비'){
//     window.alert('우산챙기기')
// }
let a = true
let b = false
let c = 10
let d = 20
if(a==true){'a는 ture와 동일하다'}//0
if(c>10){'c는 10보다 크다'}//x
if(d<c){'d는 c보다 작다'}//x
if(d<=20){'d는 20보다 작거나 같다'}//0
if(b!=true){'b는 참이 아니다'}//0

console.log(a==true, c>10, d<c, d<=20)
console.log(b!=true)