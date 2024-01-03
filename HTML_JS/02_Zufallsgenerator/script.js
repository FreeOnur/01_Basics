
function buttonClicked() {
let x = document.getElementById("num1").value;
let y = document.getElementById("num2").value;
let output = document.getElementById("output");

let ZahlX = parseInt(x)
let ZahlY = parseInt(y)


let random = Math.random()* ZahlY + ZahlX;
console.log(Math.floor(random));
output.innerHTML = Math.floor(random);


}


