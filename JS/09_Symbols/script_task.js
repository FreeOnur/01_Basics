//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
//X X X X 
//O O O O 
//X X X X 
//O O O O 

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
//
//   XXXXX
//  X     X 
//  X     X
//  X     X
//  X     X
//   XXXXX

const reihen = 6;
const zeilen = 7;

for(let d = 1; d <= reihen; d++) {
    let Output = "";
    if (d==6 || d==1) {
        Output += " "
    }
    for(let f = 5; f <= zeilen; f++ ) {
        if(d ==6 || d==1) {
            Output += "X";
        }
    }

    for(s = 1; s<= zeilen ; s++) {
        if(s==1 || s==6) {
            Output += "X"

        } else if(s==2||s==3||s==4|| s==5) {
            Output+=" "
        }
    }
    console.log(Output);
    
}


const rows = 4;
const colummns = 4;

for (let i = 1; i <= rows; i++) {
    let rowOutput = "";

    for (let j = 1; j <= colummns; j++) {
        if (i % 2 == 0) {
            
            rowOutput += "O ";
        } else {
    
            rowOutput += "X ";
        }
    }

    console.log(rowOutput);
}


nul = 0
for (let i = 0; i <=100; i++) {

    if (i%2==0) {
        nul+=i
        
    }
}
console.log("Die Summe aller Geraden 0-100 ist " + nul);

