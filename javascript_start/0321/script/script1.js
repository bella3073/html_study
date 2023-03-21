// F12 -> console 항상 실행하기
// Javascript == 객체 지향 프로그래밍 언어
// 변수 = 데이터 저장소
// var, let const
// var vs let ==> 중복변수명 에러 구분
// const 상수
// a.typeof() 타입 오브 메소드 혹은 타입 오브 함수라고 부름
let a = 10
let b = 'hello'
let c = a
console.log(a.lenght) //a라는 변수 데이터의 길이를 콘솔에 출력해라 //데이터가 숫자이기에 문자로 정의할 수가 없어 undefined로 나옴
console.log(a+b) //a와 b를 더했을 때 데이터를 콘솔에 출력해라 //10hello
console.log(typeof b) //b 데이터 값의 데이터 타입을 콘솔에 출력해라 //string
window.alert(c) //c라는 데이터를 윈도우 팝업창으로 띄워라 //10
window.alert(a+c) //a와 c를 더한 데이터를 윈도우 팝업창으로 띄워라 //20