//노드관계연습(형제)
//nextSibling, nextElementSibling
//previousSibling, previousElementSibling
const p = document.querySelectorAll('p') //4

console.log(p[0].nextSibling) //공백포함
console.log(p[0].nextSibling.nextSibling)
console.log(p[0].nextElementSibling) //요소만 인식

p[1].nextElementSibling.style.color = '#fff'
console.log(p[1].previousElementSibling)
console.log(p[2].previousElementSibling.previousElementSibling)

p[1].previousElementSibling.style.border = '3px dashed lightsteelblue'
p[1].nextElementSibling.style.border = '3px dotted #fff'
p[1].nextElementSibling.style.fontStyle = 'italic'
p[0].nextElementSibling.style.transform = 'rotate(5deg)'
p[0].nextElementSibling.style.background = 'pink'

let clone1 = p[1].previousElementSibling.cloneNode(true)
let clone2 = p[0].nextElementSibling.cloneNode(true)
console.log(clone1)

p[3].appendChild(clone1)
p[3].appendChild(clone2)
