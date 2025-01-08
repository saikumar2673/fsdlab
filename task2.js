function calculator() {
    console.log("Simple Calculator");
    console.log("Choose an operation:");
    console.log("1 Add");
    console.log("2 Subtract");
    console.log("3 Multiply");
    console.log("4 Division");

    const operation = parseInt(prompt("Enter the number corresponding to the operation (1-4): "));

    if (![1, 2, 3, 4].includes(operation)) {
        console.log("Invalid operation. Please select a number between 1 and 4.");
        return;
    }

    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));
    let result;

    switch (operation) {
        case 1:
            result = num1+num2;
            console.log(`The sum is: ${result}`);
            break;
        case 2:
            result = num1-num2;
            console.log(`The diff is: ${result}`);
            break;
        case 3:
            result = num1*num2;
            console.log(`The product is: ${result}`);
            break;
        case 4:
            if(num2==0)
               console.log("division by zero error");
               else
               {
                   
            result = num1/num2;
            console.log(`The result of division is: ${result}`);
               }
            break;
    }
}

calculator();