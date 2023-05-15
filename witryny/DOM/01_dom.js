let h1Element=document.getElementById('h1')
// innerHTML

function changeText(){
    h1Element.innerHTML=`jestem kliknięty`
}

h1Element.addEventListener('click',changeText)


const blueBtnElement=document.getElementById("blueBtn")
console.log(blueBtnElement)

function changeBackgroundColor(){
    document.body.style.backgroundColor="lightblue" 
}

blueBtnElement.addEventListener('click',changeBackgroundColor)

const randomBtn=document.getElementById("buttonRandom")
const randomNmb=document.getElementById("randomNumber")
//Math  random floor
function generateRandom(max){
    return Math.floor(Math.random()*max)
}

function randomNumberGenerator(){
    randomNmb.innerHTML=generateRandom(100)
}

randomBtn.addEventListener('click',randomNumberGenerator)


const tableImages = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pakamera.pl%2Fdziecko-plakaty-obrazki-obrazek-kotek-nr1665586.htm&psig=AOvVaw2aiBzSKWqZdalWkgxRuL5U&ust=1684235692223000&source=images&cd=vfe&ved=2ahUKEwjgmL-Cmff-AhVXsCoKHYEsDg8QjRx6BAgAEAw',

    'https://img.freepik.com/premium-zdjecie/pies-animowany-obrazek-generatywna-sztuczna-inteligencja_786688-641.jpg',

    'https://cebule-kwiatowe.pl/files/fotob/product-443.jpg'
]

const h2Element = document.getElementById('h2')
const imgElement = document.getElementById('imgSomething')

function changeImg() {
    imgElement.src = tableImages[ generateRandom(tableImages.length)]
}

h2Element.addEventListener('click', changeImg)