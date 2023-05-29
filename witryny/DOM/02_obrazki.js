console.log('test')
const imageTable = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pakamera.pl%2Fdziecko-plakaty-obrazki-obrazek-kotek-nr1665586.htm&psig=AOvVaw2aiBzSKWqZdalWkgxRuL5U&ust=1684235692223000&source=images&cd=vfe&ved=2ahUKEwjgmL-Cmff-AhVXsCoKHYEsDg8QjRx6BAgAEAw',

    'https://img.freepik.com/premium-zdjecie/pies-animowany-obrazek-generatywna-sztuczna-inteligencja_786688-641.jpg',

    'https://cebule-kwiatowe.pl/files/fotob/product-443.jpg'
]
const imageBtn = document.getElementById("imageBtn")
const image = document.getElementById("image")
console.log(imageBtn)
console.log(image)
function randomNumber (max){
    return Math.floor(Math.random() * max)
}
console.log(randomNumber(3))

function showImage(){
    let number = randomNumber(imageTable.length)
    image.src = imageTable[number]
}

imageBtn.addEventListener("click",showImage)
