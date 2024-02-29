
let sequence = "ATGCTTCAGAAAAGGTCAGCG";
let ergebnisA = sequence.match(/A/gi) || [];
let längeA = ergebnisA.length
let ergebnisC = sequence.match(/C/gi) || [];
let längeC = ergebnisC.length
let ergebnisG = sequence.match(/G/gi) || [];
let längeG = ergebnisG.length
let ergebnisT = sequence.match(/T/gi) || [];
let längeT = ergebnisT.length

console.log(längeA + " " + längeC +  " " + längeG + " " + längeT);
