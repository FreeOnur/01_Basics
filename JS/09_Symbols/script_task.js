//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
//X X X X 
//O O O O 
//X X X X 
//O O O O 

//2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
//XX X XX X 
//X    X X   X 
//X            X
//X            X
const rows = 4;
const zeilen = 4;

for (let i = 1; i <= rows; i++) {
    let rowOutput = "";

    for (let j = 1; j <= zeilen; j++) {
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

