
function magic() {
    let  größe = parseInt(document.getElementById("größe").value);
    let gewicht = parseInt(document.getElementById("gewicht").value);
    let magic = ((größe*1.43)/gewicht)- 3.4;
    
    return magic
}

let output = magic()

function ausgabe(magic) {

    if(magic > 0) {
        document.getElementById("output").innerHTML = "Positiv";
        for(let i = 0; magic >=i; i++) {
            document.getElementById("output").innerHTML = i;
        }
    } else if ( magic < 0) {
        document.getElementById("output").innerHTML = "Negativ";
        for(let i = 0; magic <= i; i--) {
            document.getElementById("output").innerHTML = i;
        }
    }
}
