var box1 = 10
let box2 = 20
const box3 = 30
let box4 = 'hello javascript'
console.log(`box1 변수 값 = ${box1}`)
console.log(`box2 변수 값 = ${box2}`)
console.log(`box3 변수 값 = ${box3}`)
// box1 = box1+1 오른 쪽부터 먼저 읽기!
box1 += 1 // 위와 같은 결과가 나옴, 더 많이 사용하는 쪽은 이것임
box1 += 10 //box1 = box1+10
console.log(`box1 변수 값 = ${box1}`)
box2 = box2%2 //나머지 연산자를 산술연산자라고 한다 +=는 복합대입연산자
console.log(`box2 변수 값 = ${box2}`)
box2 = box1++ //box1 값이 1증가 (마지막 값이 21이었음으로 1더하면 22)
console.log(`box2 변수 값 = ${box2}`)
console.log(`box2=${box2}, box1=${box1}`)
box1 = box3
console.log(`box1=${box1}, box3=${box3}`)
console.log(box4.length)
//------------------------------------------------------------------
let array1 = ['aqua','lime','yellow']
let array2 = new Array('black','white','gray')
let array3 = new Array(10)
console.log(array1)
console.log(array1[0], array1[1], array1[2])
console.log(array2)
console.log(array3)
array3[9] = 'black'
console.log(array3)
//-----------------------------------------------------------------
let array4 = [10,20,30,40,50] //문자와 숫자 구분이 중요하다
let total
console.log(array4)
console.log(array4[0]+1)
console.log(array4[1]%2)
console.log(++array4[4])
console.log(array4[3]++)
total = array4[3]++ //40
console.log(`total=${total}, array4[3]=${array4[3]}`) //41, 40