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

for (let index = 0; index<2; index++) {
    console.log("x x x x");
    if(index%1==0)
    console.log("O O O O")
    
}

nul = 0
for (let i = 0; i <=100; i++) {

    if (i%2==0) {
        nul+=i
        
    }
}
console.log("Die Summe aller Geraden 0-100 ist " + nul);

