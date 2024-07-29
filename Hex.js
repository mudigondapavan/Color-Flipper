const button = document.querySelector('button')
const span = document.querySelector('main span')
const color = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hexCode = []

button.addEventListener('click', ()=>{
    for(let i=1; i<7; i++){
        const randomNumber = Math.floor(Math.random()*color.length)
        const letter = color[randomNumber]
        hexCode.push(letter)
    }
    const colors = '#' + hexCode.join('')
    console.log(colors)
    document.body.style.backgroundColor = colors
    span.innerHTML=colors
    hexCode =[]
})