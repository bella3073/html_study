// let num = Number(window.prompt('숫자입력'))
// if(num%2 == 1){
//     console.log('홀수')
// }else{
//     console.log('짝수')
// }

//admin : 관리자 아이디
//아이디 입력받기
//admin이면 -> 관리자님 어서오세요
//아니면 -> 관리자 페이지 접근 불가

let id = window.prompt('관리자 아이디를 입력하세요.')
let adminId = 'bella'
if(id == adminId){
    console.log('관리자님 어서오세요.')
}else{
    console.log('관리자 페이지 접근 불가')
}