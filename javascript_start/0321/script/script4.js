//변수
const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')
//출력
console.log(more[0], img[0], join_btn)
console.log(plus[0], plus[1])
console.log(li[0], li[1], li[2], li[3], li[4])

//-------------------------------------style 속성
//객체.속성
//style == css
//객체.style.속성 = 값
more[0].style.color = 'red'
li[0].style.backgroundColor = '#333'
li[1].style.backgroundColor = '#444'
li[2].style.backgroundColor = '#555'
li[3].style.backgroundColor = '#666'
li[4].style.backgroundColor = '#777'
li[4].style.fontSize = '1.5rem'