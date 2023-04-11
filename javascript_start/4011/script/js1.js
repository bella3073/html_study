let array = new Array(1,2,3,'H','e','l','l','o')
for (let i=0; i<array.length; i++){
    console.log(array[i])
    console.log(typeof array[i])
}

let num = 100
for(let i=1; i<10; i++){
    num += i
    break;
    console.log(num, i)
}
console.log(num)

/* for(let i=0; i<5; i++){
    if(i%2==0){
        continue;
        num += i
    }else{break;}
}
console.log(num) //10
//num=num+i */

//다중 for
//1단 for
for(let i=1; i<3; i++){
    //2단 for : 1단 for가 한번 루프할 때 2단 for는
    //도건이 거짓이 될때까지 모두 루프한다.
    for(let j=3; j>=0; j--){
        console.log(`i=${i}, j=${j}`)
    }
}

//다중 for 활용 태그 생성
let p_tag = '<p>test</p>'
let li = '<li>list</li>'
for(let i=0; i<1; i++){
    document.write('<ul>')
    for(let j=0; j<5; j++){
        document.write(li)
    }
    document.write('</ul>')
}

//다중 for 1행 3열 표
let td = '<td>call</td>'
for(let n=0; n<2; n++){
    document.write('<table border="1">')
    for(let i=0; i<2; i++){
        document.write('<tr>')
        for(let j=0; j<3; j++){
            document.write(td)
        }
        document.write('</tr>')
    }
    document.write('</table>')
}


//다중 for 활용한 영화관 좌석 만들기
let seat = 1
let number = ['A','B','C','D']
for(let i=0; i<1; i++){
    document.write('<table border="1">')
    for(let j=0; j<4; j++){
        document.write('<tr>')
        document.write(`<td>${number[j]}</td>`)
        if(seat>4){seat=1}
        for(let n=1; n<5; n++){
            document.write(`<td>${seat++}</td>`)
        }
        // seat=1
        document.write('</tr>')
    }
    document.write('</table>')
}

console.log('=============================')

//무한반복 while
for(let i=0; i<10; i++){
    console.log(i)
}

let i = 0
while(i<10){
    console.log(i)
    i++
}
console.log('=============================')
let qa = confirm('점심시간이에요?')
while(qa!=true){
    qa = confirm('점심시간이에요?')
}
alert('밥먹자')