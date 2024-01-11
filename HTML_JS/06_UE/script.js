let  größe = document.getElementById("größe").value;
let gewicht = document.getElementById("gewicht").value;
function magic(größe, gewicht) {
    let magic = ((größe*1.43)/gewicht)- 3.4;
    return magic
}
console.log(magic(2, 3));


if(magic > 0) {
    document.getElementById("output").innerHTML = "Positiv";
    for(let i = 0; i >=magic; i++) {
        document.getElementById("output").innerHTML = i;
    }
} else if ( magic < 0) {
    document.getElementById("output").innerHTML = "Negativ";
    for(let i = 0; i <=magic; i--) {
        document.getElementById("output").innerHTML = i;
    }
}
