if (true) {
    var varVariable = "This is true"
}

// let beispiel = 1;
// let beispiel = 4;

//Bei var Variablen kann man erneut die Werte definieren und bei letvariablen kann man sie nicht nochmal definieren

var varVariable = "This is false"
console.log(varVariable);
let letVariable = "true"

//bei erstellung von var variablen in einem code block wie zum beispiel If
console.log(letVariable);

// console.log(varVariable);
// if(true) {
//      letVariable = "This is true"
//     console.log(letVariable);
// }
// console.log(letVariable);
// if(true) {
//     const constVariable = "This is true"
//     console.log(constVariable);
// }
// console.log(constVariable);



//var Variablen kann man auch nachdem man sie aufgerufen hat erst erstellen jedoch werden sie undefined
//const und let sind fast gleich, der einzige Unterschied bei const ist dass man const nicht erneut definieren kann

console.log(varVariable2);
var varVariable2 = 2;
console.log(varVariable2);



// console.log(letvar);
// let letvar = 2;
// console.log(letvar);


// man kann const arrays/json bearbeiten und erneut definieren: 
const constArr = {name: "Bob"}

constArr.name = "sally"
console.log(constArr);