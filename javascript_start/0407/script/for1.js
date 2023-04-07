//반복문 ⭐⭐⭐⭐⭐
/* 
    for(초기값; 조건식; 증감식){
        조건식이 참일 때 반복실행구문
    }
*/
//for 초기변수명 : i, j, m, n
for(let i=0; i<10; i++){
    console.log(`javascript ${i+1}`)
}
//day1
//day2
//day3
//day4
for(let i=0; i<4; i++){
    console.log(`day${i+1}`)
}
let a = ['html','css','javascript']
for(i=0; i<3; i++){
    console.log(`${a[i]}`)
}
console.log('-----------------------------')
let coffee = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
for(let i=0; i<5; i++){
    console.log(`${i+1}번 메뉴는 ${coffee[i]}입니다.`)
}
console.log('-----------------------------')
let coffee_reverse = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
for(let i=4; i>=0; i--){
    console.log(`${i+1}번 메뉴는 ${coffee_reverse[i]}입니다.`)
}
//------------------------------------------------
let fruits = new Array('사과','망고');
console.log(fruits.length)
console.log('---------------------정방향-------------------------')
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
console.log('---------------------역방향-------------------------')
for(let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i])
}
console.log('-----------------------------')
//반복문 + 조건문
//빈복 { 조건문 }
//1~20 홀수만 출력
for(let i=1; i<21; i++){
    if(i%2){
        console.log(i)
    }
}
console.log('-----------------------------')
//5~15까지 찍수만 출력
for(let i=5; i<16; i++){
    if(i%2==0){
        console.log(i)
    }
}
console.log('-----------------------------')
//1~10까지 역순 홀수 출력
for(let i=10; i>=0; i--){
    if(i%2){
        console.log(i)
    }
}
console.log('-----------------------------')
//10~20 역순 짝수 출력
for(let i=10; i>0; i--){
    if(i%2==0){
        console.log(i)
    }
}
console.log('-----------------------------')
let data = [10,20,30,40,50]
let result = 0
console.log(data.length)
for(i=0; i<data.length; i++){
    result += data[i]    
}
console.log(`data 변수의 총 합은 ${result}입니다.`)
console.log('-----------------------------')
//1~10 반복문
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`)
    }else{
        document.write(`<p class="bg2">${i}</p>`)
    }
}