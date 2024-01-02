import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};

console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Ende");
let userFirstInput = await readLineAsync();
switch(userFirstInput) {
    case "1":
        console.log("Geben Sie den Betrag ein den Sie einzahlen möchten:");
        let userEinzahlenInput = await readLineAsync();
        console.log("Sie haben " + userEinzahlenInput + "€ eingezahlt");
    break;
    case 2 : 
        console.log("Wie viel würden Sie gerne abheben?");
        let userAbhebenInput = await readLineAsync();
        console.log("Sie haben " + userAbhebenInput + " abgehoben");
    break;
}
readline.close();