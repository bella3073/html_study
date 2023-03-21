//변수
const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')
//출력
console.log(btn1) //정상적으로 작동되는지 확인 (테스트 도구)
console.log(btn1.innerHTML)
console.log(btn)
//내용변경 == 대입한다
btn1.innerHTML = '확인완료'
btn[0].innerHTML = 'Home'
btn[1].innerHTML = 'Email'
btn[2].innerHTML = 'Cafe'
btn[3].innerHTML = 'Blog'