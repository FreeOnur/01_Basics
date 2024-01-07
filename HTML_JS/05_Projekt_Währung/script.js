
let currencyRate = [
    { id: 1, rate:1.0934104, zeichen:"$"},
    { id: 2, rate:1, zeichen:"€"},
    { id: 3, rate:158.13223, zeichen:"¥"},
    { id: 4, rate:0.85959982, zeichen:"£"},
    { id: 5, rate:7.7914917, zeichen:"¥"},
    { id: 6, rate:1.6307856, zeichen:"A$"},
    { id: 7, rate:1.4612035, zeichen:"C$"},
    { id: 8, rate:0.92929992, zeichen:"CHF"},
    { id: 9, rate:8.5409739, zeichen:"HK$"},
    { id: 10, rate:1.4538364, zeichen:"S$"},
    { id: 11, rate:11.213112, zeichen:"kr"},
    { id: 12, rate:1438.3033, zeichen:"₩"},
    { id: 13, rate:11.261929, zeichen:"kr"},
    { id: 14, rate:1.7519759, zeichen:"NZ$"},
    { id: 15, rate:90.948934, zeichen:"₹"},
    { id: 16, rate:18.471522, zeichen:"MXN$"},
    { id: 17, rate:33.882074, zeichen:"NT$"},
    { id: 18, rate:20.476565, zeichen:"R"},
    { id: 19, rate:5.330573, zeichen:"R$"},
    { id: 20, rate:7.4531127, zeichen:"kr"},
    { id: 21, rate:4.3486135, zeichen:"zł"},
    { id: 22, rate:37.807429, zeichen:"฿"},
    { id: 23, rate:4.0056077, zeichen:"₪"},
    { id: 24, rate:16972.764, zeichen:"Rp"},
    { id: 25, rate:24.610671, zeichen:"Kč"},
    { id: 26, rate:4.0155498, zeichen:"د.إ"},
    { id: 27, rate:32.580866, zeichen:"₺"},
    { id: 28, rate:377.72104, zeichen:"Ft"},
    { id: 29, rate:972.72482, zeichen:"CLP$"},
    { id: 30, rate:4.1002891, zeichen:"﷼"},
    { id: 31, rate:60.778141, zeichen:"₱"},
    { id: 32, rate:5.0898528, zeichen:"RM"},
    { id: 33, rate:4250.5758, zeichen:"COL$"},
    { id: 34, rate:99.426283, zeichen:"₽"},
    { id: 35, rate:4.9770509, zeichen:"L"},
    { id: 36, rate:4.0648897, zeichen:"S/"},
    { id: 37, rate:0.41112232, zeichen:".د.ب"},
    { id: 38, rate:1.95583, zeichen:"BGN"},
    { id: 39, rate:888.00967, zeichen:"ARG$"}
]

let currencyUSD = [
    { id: 1, rate:1, zeichen:"$"},
    { id: 2, rate:0.91430647, zeichen:"€"},
    { id: 3, rate:144.62738, zeichen:"¥"},
    { id: 4, rate:0.78619295, zeichen:"£"},
    { id: 5, rate:7.13229, zeichen:"¥"},
    { id: 6, rate:1.4907917, zeichen:"A$"},
    { id: 7, rate:1.3363178, zeichen:"C$"},
    { id: 8, rate:0.84993909, zeichen:"CHF"},
    { id: 9, rate:7.8113675, zeichen:"HK$"},
    { id: 10, rate:1.3296378, zeichen:"S$"},
    { id: 11, rate:10.254929, zeichen:"kr"},
    { id: 12, rate:1314.527, zeichen:"₩"},
    { id: 13, rate:10.299812, zeichen:"kr"},
    { id: 14, rate:1.6023042, zeichen:"NZ$"},
    { id: 15, rate:83.112398, zeichen:"₹"},
    { id: 16, rate:16.880617, zeichen:"MXN$"},
    { id: 17, rate:30.997115, zeichen:"NT$"},
    { id: 18, rate:18.71744, zeichen:"R"},
    { id: 19, rate:4.8756482, zeichen:"R$"},
    { id: 20, rate:6.8163912, zeichen:"kr"},
    { id: 21, rate:3.9744514, zeichen:"zł"},
    { id: 22, rate:34.657933, zeichen:"฿"},
    { id: 23, rate:3.6693898, zeichen:"₪"},
    { id: 24, rate:15520.511, zeichen:"Rp"},
    { id: 25, rate:22.513819, zeichen:"Kč"},
    { id: 26, rate:3.6725, zeichen:"د.إ"},
    { id: 27, rate:29.819294, zeichen:"₺"},
    { id: 28, rate:345.41424, zeichen:"Ft"},
    { id: 29, rate:889.62461, zeichen:"CLP$"},
    { id: 30, rate:3.75, zeichen:"﷼"},
    { id: 31, rate:55.615152, zeichen:"₱"},
    { id: 32, rate:4.6477904, zeichen:"RM"},
    { id: 33, rate:3887.4276, zeichen:"COL$"},
    { id: 34, rate:90.88184, zeichen:"₽"},
    { id: 35, rate:4.5508163, zeichen:"L"},
    { id: 36, rate:3.7176067, zeichen:"S/"},
    { id: 37, rate:0.376, zeichen:".د.ب"},
    { id: 38, rate:1.7884823, zeichen:"BGN"},
    { id: 39, rate:812.19082, zeichen:"ARG$"}
]


let valueRate = parseInt(document.getElementById("währung2").value);


function währungsUmrechner(valueRate) {
    let betrag = document.getElementById("input").value;
    let währung1 = parseInt(document.getElementById("währung1").value);

    if(währung1 === 2){
        let rateCurrency = currencyUSD.find(rate => rate.id === valueRate);
        let foundRate = rateCurrency.rate;
        let zeichen = rateCurrency.zeichen;
        let ergebnis = betrag*foundRate
        ergebnis = ergebnis.toFixed(2);
        document.getElementById("output").innerHTML = ergebnis + " " + zeichen;
    }else if(währung1 === 1) {
        let rateCurrency = currencyRate.find(rate => rate.id === valueRate);
    let foundRate = rateCurrency.rate;
    let zeichen = rateCurrency.zeichen;
    let ergebnis = betrag*foundRate
    ergebnis = ergebnis.toFixed(2);
    document.getElementById("output").innerHTML = ergebnis + " " + zeichen;
    }
    
}

