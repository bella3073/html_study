// const h1 = document.getElementsByTagName('h1')
// const sub_title = document.getElementsByClassName('sub_title')
// const h3 = document.getElementsByTagName('h3')
// const p = document.getElementsByTagName('p')
// const main = document.getElementById('main')
// const btn = document.getElementById('btn')
// const link = document.getElementById('link')

// console.log(h1, sub_title, h3, p, main, btn, link)
const box_h4 = document.querySelector('.box h4')
const h1_tag = document.querySelector('h1')
const h1_after = document.querySelector('h1::after')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p_tag = document.querySelector('p')
const p_id = document.querySelector('#main')
const btn_id = document.querySelector('#btn')
const a_id = document.querySelector('#link')
console.log(h1_tag, h3_tag, p_tag) //변수 값 확인
console.log(h2_cls[1])
console.log(p_id, btn_id, a_id)
console.log(h1_after, box_h4)
//객체.style.css속성 = '속성값'
// h1_after.style.content = 'ABC'
h1_tag.style.backgroundColor = '#ff0'