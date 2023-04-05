const btn = document.querySelector('#btn')
console.log(btn)
//function(){} =화살표 함수 변경=> ()=>{}
btn.addEventListener('click',()=>{
    fun1(20,147)
}) //이벤트 만족 시, 실행함수
fun1(14,147) //함수호출 자동실행
function fun1 (n,m){//함수생성
    console.log(n+m)
}
console.log('--------------------------------------------------')
function re1(){console.log(1)}
function re1_window(){window.alert(1)}
// re1()
// rel_window()
function re2(){
    return 1
}
re1()
console.log(re2())
window.alert(re2())
function fun(a,b){
    return a+b
}
console.log(fun(10,20))

function japangi(drink){
    return drink
}
let data = japangi('콜라')+'출력'
console.log(data)