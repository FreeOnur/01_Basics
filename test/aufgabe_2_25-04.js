const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

let num = numbers.split(",").map(Number)

let begrenzung = Math.random() * 4 + 4
let begrenzung1 = Math.floor(begrenzung)
let numbers2 = num.filter(element => element >= 4 && element < 8).length
console.log(numbers2)


