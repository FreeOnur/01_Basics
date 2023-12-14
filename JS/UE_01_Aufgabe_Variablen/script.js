// Erstelle eine Variable banana mit dem Wert "Banane"
let a = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple"
let b = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
let applePricePerKilo = 3.43;
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
let apfelgewicht = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
let bananengewicht = 0.22;
// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

let apfelAnzahl = 1 / apfelgewicht;
let bananenAnzahl = 1 / bananengewicht;


console.log("Mann kann " + apfelAnzahl+ " Äpfel pro Kilo kaufen"); 
console.log("Mann kann " + bananenAnzahl + " Bananen pro Kilo kaufen"); 


let apfelPricePer =  applePricePerKilo/apfelAnzahl;
let bananenPricePer =  bananaPricePerKilo/bananenAnzahl;

console.log("1 Banane kostet " + bananenPricePer);
console.log("1 Apfel kostet " + apfelPricePer);
// Preis von 8 Äpfeln
console.log("8 Äpfel kosten " + 8*apfelPricePer);
// Preis von 17 Bananen
console.log("17 Bananen kosten " + 17*bananenPricePer);
// Preis von 1 Tonne Äpfel
console.log("1 Tonne Apfel sind " + applePricePerKilo*1000)
// Preis von 1 Tonne Bananen
onsole.log("1 Tonne Bananen sind " + bananaPricePerKilo*1000)