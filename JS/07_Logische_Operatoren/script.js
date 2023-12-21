// logische Operatoren
if ((41 > 7)||(4>4)) {

    console.log("Its true");

}

// Erstelle zwei Zufallszahl zwischen 0 und 100
let randomizer1 = Math.random() * 100;
let randomZahl1 = Math.floor(randomizer1);

let randomizer2 = Math.random() * 100;
let randomZahl2 = Math.floor(randomizer2);
// Speichere diese jeweils in einer Variable
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if((randomZahl1<randomZahl2)&&(randomZahl1<50)) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}


// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if((randomZahl1<30)&&(randomZahl2<30)) {
    console.log("Eine der beiden ist kleiner als 30");
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
if((randomZahl1<50)&&(randomZahl2!=50)) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}
