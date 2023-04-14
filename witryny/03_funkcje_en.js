// 1. Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

console.log("zadanie 1 telFortune")
function tellFortune(children,partner,location,job){
    console.log(`You will be a ${job} in ${location}, and married to ${partner} with ${children} kids`)

}
tellFortune(2,"Emilia","Paterek","informatyk")



// 2. You know how old your dog is in human years, but what about dog years? Calculate it!

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values

console.log("zadanie 2")
function calculateDogAge(age){
    console.log(`Your doggie is ${age*7} years old in dog years!`)
}
calculateDogAge(5)

// 3. Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

console.log("zadanie_3")
function calculateSupply(age,amountPerDay){
    const maxAge = 90
    console.log(`You will need ${(maxAge - age)* 365 * amountPerDay} to last you until the ripe old age of ${maxAge}`)
}
calculateSupply(17,6)

// 4. 
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

console.log("zadanie_4")
const pi=3.14
function calcCircumfrence(radius){
    console.log(`The circumference is ${2*pi*radius}`)
}
calcCircumfrence(5)

function calcArea(radius){
   console.log(`The area is ${(pi*radius**2)}`)
}
calcArea(7)
// 5. 

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
let celsius=30
let  fahrenhei=27

console.log('zadanie5')
function celsiusToFahrenheit(celsius){
    return celsius*9/5+32
}
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`)

function fahrenheitToCelecius(fahrenheit){
    return (fahrenheit-32)*5/9
}
console.log(`${fahrenhei}°F is ${fahrenheitToCelecius(fahrenhei)}°C.`)
