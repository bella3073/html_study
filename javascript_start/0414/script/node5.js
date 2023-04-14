//노드 생성, 제거
//DOM.createElement(노드생성)
//DOM.remove()
//DOM.removeChild(자식노드)

const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

p[2].remove() //제거
box.removeChild(p[0]) //특적 부모 안에 있는 p를 지우겠다.

let img = document.createElement('img') //img 태그 생성
img.alt = '연습 이미지'
// img.src = './image/test.jpg'
console.log(img)

let pTag = document.createElement('p')
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)

let em = document.createElement('em')
console.log(em)

pTag.appendChild(em)
console.log(pTag)

box.appendChild(pTag)