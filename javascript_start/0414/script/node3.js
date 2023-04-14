//자식 노드
//nth-child(n), first-child, last-child CSS 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild) //공백 포함
console.log(box.firstElementChild) //요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.3)'
box.firstElementChild.style.background = 'lightgrey'

box.lastElementChild.classList.add('a')

let clone1 = box.lastElementChild.cloneNode(true)
let clone2 = box.firstElementChild.cloneNode(true)
let clone3 = box.lastElementChild.cloneNode()
console.log(clone1, clone2, clone3)

// result.appendChild(clone1) //마지막 자식 추가

//DOM.insertBefore(복제대상, 기준위치)
result.insertBefore(clone1, result.firstChild)
result.insertBefore(clone2, result.firstChild)
box.appendChild(clone3, result.firstChild)