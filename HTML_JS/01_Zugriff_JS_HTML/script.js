function buttonClicked() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let operator = document.getElementById("Operator").value;
    let output = document.getElementById("output")
    switch(operator) {
        case "%":
           let result= parseInt(num1) % parseInt(num2);
           output.innerHTM = result
            break;
        case "/":
           let result1= parseInt(num1)/ parseInt(num2);
           output.innerHTML = result1;
            break;
        case "+":
           let result2= parseInt(num1)+ parseInt(num2);
           output.innerHTML = result2;
            break;
        case "-":
            let result3= parseInt(num1)- parseInt(num2);
            output.innerHTML = result3;
            break;

        case "+":
               let result4= parseInt(num1)* parseInt(num2)
               output.innerHTML = result4;
                break;
    }
    
    
}