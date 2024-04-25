const data = "Hans geht heute schwimmen"

let data_arr = data.split(" ")

let output = ""

for (let i = data_arr.length; i >= 0; i--) {
    output += data_arr[i] + " "

}
console.log(output)



const numbers = "3,2,1,4,6,8,7";

let numbers1 = numbers.split(",").map(Number)

let smallnumbers1 = Math.min(parseInt(numbers1))
let numbers2 = numbers1.filter(element => element === smallnumbers1).length


console.log(smallnumbers1 + " " + numbers2);


const temperatures = "-1,5,51,-10,-11,2,90,-8,-44"

let temperaturesArr = temperatures.split(",");
let temperatures1 = parseInt(temperaturesArr)

let temperatureFilter = temperaturesArr.filter(e => e <= 50 && e > -30)
let summe = 0
temperatureFilter.forEach(element => {

    summe += parseInt(element)

});

console.log(summe / temperatureFilter.length)
