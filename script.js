const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.querySelector('button')
const span = document.querySelector('main span')

button.addEventListener('click', ()=>{
    const randomNumber = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    span.innerHTML=colors[randomNumber]
})

