let study = ['html','css','js','jq','sass','git']
let device = ['desktop','tablet','mobile','tv']
let weather = ['맑음','비','눈','흐림','태풍']
let num = 0
console.log(study,device,weather)
//----------------------------배열속성 및 메서드()
console.log(Array.isArray(study)) //true
console.log(Array.isArray(device))
console.log(Array.isArray(weather))
console.log(Array.isArray(num)) //false
//----------------------------
// console.log(study.pop())
// console.log(study)
// console.log(study.pop())
// console.log(study)
console.log(study.shift())
console.log(study)
study.unshift('html5')
console.log(study)
study.pop()
console.log(study)
study.push('gitHub')
console.log(study)
console.log('------------------------------------')
// study.concat(device)
console.log(study.concat(device))
console.log(device.concat(study))
console.log('-----------------------------------')
study.reverse()
console.log(study)
device.sort()
console.log(device)
console.log('-----------------------------------')
// weather = ['맑음','비','눈','흐림','태풍']
console.log(weather.slice(0,2))
console.log(weather.slice(1,3))
console.log(weather.slice(0,-1))
console.log(weather.slice(2))
console.log(weather.slice(-1))
//slice는 원본 배열에 영향을 주지 않는다.
console.log('-----------------------------------')
//weather.splice(0,2) //0부터 2개를 지운다
weather.splice(0,2,'sunny') //맑음 대신에 추가한 문자열이 들어감
console.log(weather)
console.log('-----------------------------------')
let yoil = ['월','화','수','목','금','토','일']
console.log(yoil.join('/')) //글자 사이사이에만 들어가짐
console.log(`오늘은 ${yoil[4]}요일입니다.`)

yoil.push('')
console.log(yoil.join('요일 '))

let month = ['1','2','3','4','5','6','7','8','9','10','11','12']
console.log(month)
month.push('')
console.log(month.join('월 '))
console.log(month.slice(5,12))