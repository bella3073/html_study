//header
const fixed = document.querySelector('#fixed')

window.addEventListener('scroll',function(){
	if(window.pageYOffset > 0){
        // console.log('this') 확인
        fixed.style.height = 0
    }else{
        // console.log('that') 확인
        fixed.style.height = '40px'
    }
})




//탭 부분 변수 생성
const nav = document.querySelectorAll('nav a')
const contents = document.querySelectorAll('.container .contents')
console.log(nav,contents)

//sky, flower 내용 숨기기
contents[1].style.display = 'none'
contents[2].style.display = 'none'

nav.forEach((i,index)=>{
    console.log(i,index)
    i.addEventListener('click',(e)=>{
        e.preventDefault() //a 기본 기능 억제
        for(let j of contents){j.style.display = 'none'}
        contents[index].style.display = 'block'
    })
})

//아코디언
const acodian = document.querySelectorAll('.aco .title')
const aco_contents = document.querySelectorAll('.aco > .contents')

console.log(acodian,aco_contents)


let right = true
hideall()

acodian.forEach((i,index)=>{
    i.addEventListener('click',function(){
        hideall();
        console.log(i,index)
        if(right){
            aco_contents[index].style.display = 'inline-block'
        }else{hideall();}
        !right
        console.log(right)
    })
})

function hideall(){
    for(j of aco_contents){
        j.style.display = 'none'
    }
}