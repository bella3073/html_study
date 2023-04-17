//1. header 위에 마우스를 올리면
//2. sub 메뉴가 내려오면서
//3. header 색상이 투명에서 불투명으로 바뀜

const h_bg = document.querySelector('.h_bg')
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.nav_bg')
console.log(h_bg,gnb,sub,sub_bg)

// sub 메뉴, bg 가리기
sub_func('none')


for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        // console.log(i) 확인완료
        sub_func('block', '#fff')
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#003a14'
    })
    i.addEventListener('mouseout',()=>{
        sub_func('none', 'rgba(225,225,225,0.6)')
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
    
}
function sub_func(value, bg){//함수
    h_bg.style.background = bg
    sub_bg.style.display = value
    for(let i of sub){i.style.display = value}
}
