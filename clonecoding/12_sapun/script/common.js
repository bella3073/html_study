// console.log('.') //연결 확인 작업
//---------------------------------------------변수
//1. KR
const kr_lnb = document.querySelector('.right li:nth-child(1)')
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
//3. ACC gnb + sub
const nav_acc = document.querySelectorAll('nav>ul>li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
//------------------------------------------------event
//1. 이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'

//2. 버튼 클릭했을때 팝업창이 뜨도록 하기
// 메뉴창
all_nav.addEventListener('click',function(){
    // console.log(this) 작동 확인
    all_nav_open.style.display = 'block'
})

//3. x버튼 눌렀을 때 팝업창이 사라지도록 하기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
})

//4. 메뉴에 마우스 오버 시 서브 메뉴 보이기
nav_acc[12].addEventListener('mouseover',function(){
    // console.log(this) 작동 확인
    nav_acc_sub[0].style.display = 'block'
})
//5. 메뉴에 마우스 나갈 시 서브 메뉴 숨기기
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})

//6. 4-5동일
// 언어창
kr_lnb.addEventListener('mouseover',function(){
    // console.log(this) 작동 확인
    kr_lnb_open.style.display = 'block'
    
})

kr_lnb_open.addEventListener('mouseout',function(){
    kr_lnb_open.style.display = 'none'
})
//---------------------------------------------right popup
const right_pop = document.querySelector('#right_popup')
const popup_btn = document.querySelector('#popup_btn a:first-child')
console.log(right_pop, popup_btn)
//1. right 500 숨기기
right_pop.style.transform = 'translateX(500px)'
//2. popup_btn 클릭 -> right 보이기
popup_btn.addEventListener('click',function(){
    right_pop.style.transition = 'all 0.5s'
    right_pop.style.transform = 'translateX(0)'
})
popup_btn.addEventListener('mousedown',function(){
    right_pop.style.transform = 'translateX(500px)'
})