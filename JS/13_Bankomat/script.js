import { createInterface } from "readline";

const readLineAsync = () => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            readline.close();
            resolve(userRes);
            
            
        });
    });
    
};

let bankautomat = true;

console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Ende");
let userBasicStand = 0;

let userFirstInput = await readLineAsync();
switch(userFirstInput) {
    case "1":
    console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
    let userEinzahlenInput = await readLineAsync();
    console.log("Sie haben " + userEinzahlenInput + "€ eingezahlt");
    userBasicStand += parseFloat(userEinzahlenInput);
    console.log(userBasicStand);

    break;
    case "2":
        console.log("Geben Sie den Betrag ein den Sie auszahlen möchten:");
        let userAuszahlenInput = await readLineAsync();
        console.log("Sie haben" + userAuszahlenInput + "€ ausgezahlt");
        userBasicStand -= userAuszahlenInput;
        break;
}
