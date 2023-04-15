//posco
//1. 모든 서브 숨기기
//2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기(Node관계처리)
//3. gnb 자식 li에서 나가면 자식 sub 숨기기

const sub = document.querySelectorAll('.sub')
const gnb_li = document.querySelectorAll('.gnb > li')
console.log(sub, gnb_li)

// for(let j of sub){j.style.display = 'none'}

// gnb_li.forEach((i,index)=>{
//     // console.log(i,index) 확인완료
//     i.addEventListener('mouseover',()=>{
//         for(let j of sub){j.style.display = 'none'}
//         sub[index].style.display = 'block'
//     })
//     i.addEventListener('mouseout',()=>{
//         for(let j of sub){
//             j.style.display = 'none'
//         }
        
//     })
// })

//천천히 오르내리는 효과
/*8 for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'all 0.3s';
}
for(let i of gnb_li){
    i.addEventListener('mouseover',()=>{
        i.children[1].style.height = '250px'
    })
    i.addEventListener('mouseout',()=>{
        i.children[1].style.height = '0'
    })
} */

//한번에 천천히 오르내리는 효과
// for(let i of sub){
//     i.style.height = '0';
//     i.style.overflow = 'hidden';
//     i.style.transition = 'all 0.3s';
// }
// for(let i of gnb_li){
//     i.addEventListener('mouseover',()=>{
//         for(let j of sub){
//             j.style.height = '250px'
//         }
//     })
//     i.addEventListener('mouseout',()=>{
//         for(let j of sub){
//             j.style.height = '0'
//         }
//     })
// }

// header 전체가 천천히 오르내리는 효과
const bground = document.querySelector('nav .bg')
console.log(bground)

bground.style.height = '0'
bground.style.transition = 'height 0.3s'

for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'all 0.3s';
}
// bg.style.display = 'none'
// bg.style.transition = 'all 0.3s';
for(let i of gnb_li){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){
            j.style.height = '250px'
            bground.style.height = '250px'
        }
    })
    i.addEventListener('mouseout',()=>{
        for(let j of sub){
            j.style.height = '0'
            bground.style.height = '0'
        }
    })
}