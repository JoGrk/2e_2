// Math.floor()
// Math.random() * max

//napisz funkcję genereRandom z jednym parametrem max
// funkcja zwraca wylosowaną wartość z zakresu od 0 do max

function genereRandom(max){
    return Math.floor(Math.random()*max)
}

// łapię przycisk o id colorBtn do stałej  colorBtn 
const colorBtn = document.getElementById('colorBtn');

// nasłuchuję zdarzenie kliknięcia 'click' , funkcja strzałkowa ()=>{}
colorBtn.addEventListener('click', ()=>{
    //losuje do zmiennej color liczbę z zakresu do 256
    //przy użyciu funkcji genereRandom()
    const color = genereRandom(256)
    document.body.style.backgroundColor = `hsl(${color}, 50%, 90%)`
})