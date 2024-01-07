
let currencyRate = [
    { id: 1, rate:1.0934104},
    { id: 2, rate:1},
    { id: 3, rate:158.13223},
    { id: 4, rate:0.85959982},
    { id: 5, rate:7.7914917},
    { id: 6, rate:1.6307856},
    { id: 7, rate:1.4612035},
    { id: 8, rate:0.92929992},
    { id: 9, rate:8.5409739},
    { id: 10, rate:1.4538364},
    { id: 11, rate:11.213112},
    { id: 12, rate:1438.3033},
    { id: 13, rate:11.261929},
    { id: 14, rate:1.7519759},
    { id: 15, rate:90.948934},
    { id: 16, rate:18.471522},
    { id: 17, rate:33.882074},
    { id: 18, rate:20.476565},
    { id: 19, rate:5.330573},
    { id: 20, rate:7.4531127},
    { id: 21, rate:4.3486135},
    { id: 22, rate:37.807429},
    { id: 23, rate:4.0056077},
    { id: 24, rate:16972.764},
    { id: 25, rate:24.610671},
    { id: 26, rate:4.0155498},
    { id: 27, rate:32.580866},
    { id: 28, rate:377.72104},
    { id: 29, rate:972.72482},
    { id: 30, rate:4.1002891},
    { id: 31, rate:60.778141},
    { id: 32, rate:5.0898528},
    { id: 33, rate:4250.5758},
    { id: 34, rate:99.426283},
    { id: 35, rate:4.9770509},
    { id: 36, rate:4.0648897},
    { id: 37, rate:0.41112232},
    { id: 38, rate:1.95583},
    { id: 39, rate:888.00967}
]

let währung1 = document.getElementById("währung1").value;

function währungsumrechner() {
    let valueRate = parseInt(document.getElementById("währung2").value);
    let betrag = document.getElementById("input").value;
    let rateObject = currencyRate.find(rate => rate.id === valueRate);
    let foundRate = rateObject.rate;
    let ergebnis = betrag*foundRate
    console.log(ergebnis);

}

