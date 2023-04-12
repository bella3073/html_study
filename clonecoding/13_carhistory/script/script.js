//main-row1 카테고리 제목 글자 색 마우스 이벤트 변경
const category_a = document.querySelectorAll('.category a')
console.log(category_a)
for(let i of category_a){
    console.log(i)
    i.addEventListener('click',()=>{
        for(let j of category_a){
            j.style.background = 'rgba(225,225,225,0.8)'
            j.style.color = '#222'
        }
        i.style.background = '#ff5252'
        i.style.color = '#fff'
    })
}

//main-video 안내, 사용방법 클릭 시 관련 내용 보이기
//초기 : 안내 기본 활성화 = 안내제목 밑줄, 안내 내용 보이기
//사용방법 클릭=>방법 제목 밑줄/안내 숨기기/방법 보이기
//안내 클릭=>안내 제목 밑줄/안내 보이기/방법 숨기기
const video_t = document.querySelectorAll('#video .tab a')
const video_c = document.querySelectorAll('#video .tab_contents > div')
console.log(video_t, video_c)

//사용방법 내용 숨기기
video_c[1].style.display = 'none'

//안내, 사용방법 클릭한 대상에 밑줄 표시
video_t.forEach((i,index)=>{
    console.log(i, index)
    i.addEventListener('click',(event)=>{/* href 라는 event에 들어가 있는 기본 기능을 무시가능 */
        event.preventDefault();
        for(let j of video_t){
            j.style.border = 'none'
        }
        i.style.borderBottom = '4px solid #189bfa'
        //내용 추가
        for(let j of video_c){j.style.display = 'none'}
        video_c[index].style.display = 'block'
    })
})

//main-row3 자주사용하는 메뉴
//탭 제목 클릭 시 탭 활성화 디자인 적용하기
//탭 제목 클릭 시 관련 탭내용 보이기/나머지 숨기기
const tab_a = document.querySelectorAll('#menu .tab a')
const tab_all = document.querySelectorAll('#menu .tab_contents > div')
console.log(tab_a, tab_all)
//tab2-4 내용 숨기기
for(let i of tab_all){i.style.display = 'none'}
tab_all[0].style.display = 'grid'

tab_a.forEach((tab,index)=>{
    console.log(tab,index)
    tab.addEventListener('click',(tab_cli)=>{
        tab_cli.preventDefault();//href 기능 막기
        for(let i of tab_a){
            i.style.border = '1px solid #222'
        }
        tab.style.borderBottom = 'none'
        for(let j of tab_all){j.style.display = 'none'}
        tab_all[index].style.display = 'grid'
    })
})