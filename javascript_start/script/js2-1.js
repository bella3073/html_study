const result = document.querySelector('#result').value
const result1 = document.querySelector('#result1')
const result2 = document.querySelector('#result2')
const answer_btn = document.querySelector('#answer_btn')
// let result2_ = `${result}`
console.log(result, result1, result2)

answer_btn.addEventListener('click', function(){
    // console.log(this)
    result2.value = result
})