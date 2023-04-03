const inform = {
    weather:'맑음',
    precipitation:'20%',
    wind:'3.4m/s',
    humidity:'15%'
}
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('#result')
console.log(inform.weather, btn, result)

btn[0].addEventListener('click',function(){
    result.innerHTML = `${inform.weather}`
    // console.log(this)
})
btn[1].addEventListener('click',function(){
    result.innerHTML = `${inform.precipitation}`
})
btn[2].addEventListener('click',function(){
    result.innerHTML = `${inform.wind}`
})
btn[3].addEventListener('click',function(){
    result.innerHTML = `${inform.humidity}`
})