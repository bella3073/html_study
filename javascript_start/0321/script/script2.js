// 객체지향프로그래밍 언어 자바스크립트 기본순서
// 객체 변수 선언 -> 변수 속성, 메소드 활영 결과 값
// 객체 아이디 변수 선언\
// *변수 생성 후 콘솔로 올바른 변수인지 반드시 체크한다!
//변수 (아이디 DOM)
const title = document.getElementById('title')
const contents = document.getElementById('contents')
const link = document.getElementById('link')
//변수 (클래스 DOM)
const first = document.getElementsByClassName('first')[0] //여러개의 class=first 중에 몇 번째 first를 가지고 오는지 (0부터 숫자가 시작됨)
const last = document.getElementsByClassName('last')[0]
const menu = document.getElementsByClassName('menu')
const a = document.getElementsByClassName('a')
const a1 = document.getElementsByClassName('a')[0]
const a2 = document.getElementsByClassName('a')[1]
const a3 = document.getElementsByClassName('a')[2]
const a4 = document.getElementsByClassName('a')[3]
//변수(태그 DOM)
const li = document.getElementsByTagName('li')
const nav = document.getElementsByTagName('nav')[0]
const ul = document.getElementsByTagName('ul')
//출력
console.log(ul)
console.log(nav)
console.log(li)
console.log(a[0], a[1], a[2], a[3])
console.log(a1, a2, a3, a4)
console.log(menu[2])
console.log(first)
console.log(last)
console.log(title, contents, link)
console.log(title)
console.log(contents)
console.log(link)