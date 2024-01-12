
function magic(größe, gewicht) {

    let magic = ((größe*1.43)/gewicht)- 3.4;
    
    return magic
}



function ausgabe() {
    let  größe = parseInt(document.getElementById("größe").value);
    let gewicht = parseInt(document.getElementById("gewicht").value);

    let input = magic(größe, gewicht)
    if(input > 0) {
        document.getElementById("output").innerHTML = "Positiv ";
        for(let i = 0; input >=i; i++) {
            document.getElementById("output").innerHTML +=i+ ",";
        }
    } else if ( input < 0) {
        document.getElementById("output").innerHTML = "Negativ ";
        for(let i = 0; input <= i; i--) {
            document.getElementById("output").innerHTML += i + ",";
        }
    }
}
