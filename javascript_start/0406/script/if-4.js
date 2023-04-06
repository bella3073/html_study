let id = 'admin'
let pw = '1234'
if(id=='admin' && pw=='1234'){
    console.log('관리자 로그인 성공')
}else{
    console.log('로그인 실패')
}
//----------------------------------
//1~20 사이 숫자를 입력받고 해당 숫자가
//10보다 작다면 '10이하입니다.',
//아니라면 '11이상입니다.'를 출력하세요.

// // let num = Number(window.prompt('1~20사이 숫자를 입력해주세요.'))
// if(num <= 10 && num > 0){
//     console.log('10이하 입니다.')
// }else{
//     console.log('11이상 입니다.')
// }
//----------------------------------
let a = 5
if(a > 10){
    console.log('a>10')
}else if(a == 10){/* 필요하면 조건을 연달아서 사용할 수 있다. (2단까지만 자주 사용, 그 이상은 잘 사용하지 않는다.) */
    console.log('a==10')
}else if(a < 9){
    console.log('a>9')
}
console.log('if종료')
console.log('----------------------------')
let number = 12
if(number > 0 && number < 21){//1~20
    if(number < 11){
        console.log('10이하')
    }else{
        console.log('10이상')
    }
    console.log('1단 if 종료위치')
}else{
    console.log('error')
}
console.log('if종료')
//------------------------------------------
console.log('----------------------------')
let cat = 3
if(cat > 0 && cat < 5){
    if(cat <= 3){
        console.log('고양이가 3마리 이하 있습니다.')
    }else{
        console.log('고양이가 4마리 이상 있습니다.')
    }
    console.log('몇 마리의 고양이가 있는지 1차 확인완료')
}else{
    console.log('고양이가 너무 많습니다.')
}
console.log('고양이 확인 종료')