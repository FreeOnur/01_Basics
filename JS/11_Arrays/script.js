let a = 4;
let b = 9;
let c = 8;

let arr = [4,9,8];
console.log(arr[1]);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
}

arr.push(10);
arr.push(3);

//Erstelle ein Array mit folgendne Werten:
//4,1,2,3

let array = [4,1,2,3];

//Füge die Werte 17 und 199 dazu
array.push(17);
array.push(199);

//a Gib alle Werte in einer Schleife aus!
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}
let sum = 0;
//b Zähle alle Werte zusammen und gib das Ergebnis aus
for(let i = 0; i<array.length; i++){
    
    sum += array[i];
    
}


console.log(sum);
//c Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
let arrayanzahl = array.length;
let durchschnitt = sum/arrayanzahl;
console.log(durchschnitt);

//Erstelle ein Array mit folgenden Strings:
//"Susi", "Paula", "Hans"
let namen = ["Susi", "Paula", "Hans"];

//Gib folgenden Satz aus:
//"Meine Freunde sind Susi, Paula und Hans
console.log("Meine Freunde sind " + namen[0]+", " + namen[1] + " und " + namen[2]);

//Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
namen.push("Sepp");
//"Meine Freunde sind Susi, Paula, Hans und Sepp"
console.log("Meine Freunde sind " + namen[0]+", " + namen[1]  + ", " + namen[2] + " und " +  namen[3]);