const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
// const temperaturesWeek2 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttwlwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"
let temperaturFirstWeek = temperaturesWeek1.split(",")
let temperaturSecondWeek = temperaturesWeek2.split(",")
let sum1 = 0;
let sum2 = 0;
temperaturFirstWeek.forEach(element => {
    sum1 += parseInt(element)
});
let mittelwertWeek1 = sum1 / temperaturFirstWeek.length
temperaturSecondWeek.forEach(element => {
    sum2 += parseInt(element)
});
let mittelwertWeek2 = sum2 / temperaturSecondWeek.length
if (mittelwertWeek1 > mittelwertWeek2) {
    console.log("Woche 1 war wärmer")
}
if (mittelwertWeek1 < mittelwertWeek2) {
    console.log("Woche 2 war wärmer")
}
if (mittelwertWeek1 == mittelwertWeek2) {
    console.log("Beide Wochen waren gleich warm")
}