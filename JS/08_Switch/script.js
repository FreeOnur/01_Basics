// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight

let randomizer = Math.random() * 5 + 5;
let randomZahl1 = Math.floor(randomizer);
switch(randomZahl1) {
    
    case 5:
        console.log("FIVE");
    break;
    case 6:
        console.log("SIX");
    break;
    case 7:
        console.log("SEVEN");
    break;
    case 8:
        console.log("EIGHT");
    break;
    case 9:
        console.log("NINE");
    break;
    case 10:
        console.log("TEN");
    break;

    
}
