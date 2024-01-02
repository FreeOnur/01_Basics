let field = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];



field[0][1] = 1;
field[0][0] = 1;
field[0][2] = 1;

field[1][1] = 2;
checkWinner();
printField();
function printField(){
    
    
    
    for (let row = 0; row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let col = 0; col < actualRow.length; col++) {
            let sign = " ";
            
            if(actualRow[col]==1) {
                sign = "X";

            }else if (actualRow[col]==2) {
                sign = "0";
            }
            
            output += sign + "  |  ";
            
        }
       
        console.log(output);
    }
    
    
    
}
//field[x][y]
for(let i=0; i <3; i++ ){
    if(field[0][i] && field[0][i] === field[1][i] && field[1][i] === field[2][i]&&field[2][i] ){
        console.log("Spieler " + field[1][i] + "hat gewonnen");
    }
    if(field[i][0] && field [i][0] === field[i][1] && field[i][1]===field[i][2] && field[i][2]) {
        console.log("Spieler " + field[i][1] + "hat gewonnen");
    }
}


   // [0,0,0],
   // [0,0,0],
   // [0,0,0]
