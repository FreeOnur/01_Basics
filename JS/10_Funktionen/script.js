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