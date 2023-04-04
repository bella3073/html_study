function fun1(a) { //1. 매개변수 a 생성
    console.log(a) //console에 a변수가 가진 값을 보여라 3. 값이 대입된 매개변수를 전달 후 출력
}
fun1(10) //2. a매개변수에 10 값을 대입
console.log('----------------------------')
function fun2(a,b) {
    //두 자리 더하기 계산기
    console.log(a+b)
}
fun2(16,23)
fun2(18,28)
console.log('----------------------------')
function japangi(drink,count){
    console.log(`${drink} ${count}개 출력`)
}
japangi('콜라',2)
japangi('사이다',1)
japangi('커피',10)
console.log('----------------------------')
function dan99(num) {
    result.innerHTML += `${num}x1=${num*1}<br>`
    result.innerHTML += `${num}x2=${num*2}<br>`
    result.innerHTML += `${num}x3=${num*3}<br>`
    result.innerHTML += `${num}x4=${num*4}<br>`
    result.innerHTML += `${num}x5=${num*5}<br>`
    result.innerHTML += `${num}x6=${num*6}<br>`
    result.innerHTML += `${num}x7=${num*7}<br>`
    result.innerHTML += `${num}x8=${num*8}<br>`
    result.innerHTML += `${num}x9=${num*9}<br>`
}
dan99(2)
dan99(3)
dan99(4)
dan99(5)
dan99(6)
dan99(7)
dan99(8)
dan99(9)
console.log('----------------------------')
const cat = {
    name:'쿠키',
    birthday:'12/25',
    birth:function(){
        return `${cat.name}야 ${cat.birthday} 생일 축하해!`
    }
}
console.log(cat)
console.log(cat.birth())
