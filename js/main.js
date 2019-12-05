const change = document.querySelector('#change')
const color = document.querySelector('#color')
const body = document.body

change.addEventListener('click', changeBG)
 
function changeBG() {
    const color1 = getRandomRGB()
    const color2 = getRandomRGB()
    const color3 = getRandomRGB()
    const colorString = `rgb(${color1}, ${color2}, ${color3})`
    body.style.background = colorString
    color.innerHTML = colorString
}

const getRandomRGB = ()=> {
    return Math.floor(Math.random() * 256)
}
