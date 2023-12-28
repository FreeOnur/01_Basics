function printmenu(name, age, place) {
    console.log("Wilkommen "+ name +"! You are " + age + " years old and come from " + place)
    console.log("Drücke ");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}

function add(a, b) {
   return a+b - 17*0.4;
}
printmenu("Peter", 17, "Lustenau");
let result = add(4,7)
console.log(result)

//Aufgabe 1

function add1(a, b) {
    return a+b
    
}
function subtract(a, b) {
    return a-b
    
}
function multipls(a, b) {
    return a*b
    
}
function supercalculation(a, b) {
    return (a+b)/2*a
    
}
function printEasterDate(year) {
   let N = year-1900;
   let A = N % 19;
   let B = Math.floor((7*A+1)/19);
   let M = (11*A+4-B)%29;
   let Q = Math.floor(N/4);
   let W = (N+Q+31-M) %7;
   let P = 25-M-W;
    let day;
   if (P > 0) {
    day = P;
} else {
    day = 31 + P;
}
   console.log("Der Ostersonntag ist der " + day +". April oder der "+ day + ". März")
}

printEasterDate(2023);

let addition = supercalculation(2,3)
console.log(addition);
