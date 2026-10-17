// JavaScript Calculator

// Store calculation history
const history = [];

function validateNumbers(num1, num2) {
    return typeof num1 === "number" && typeof num2 === "number";
}


// Function to add a calculation to history
function addToHistory(num1, num2, operator, result) {
    history.push({
        operands: [num1, num2],
        operator: operator,
        result: result
    });
}


// Addition function
function add(num1, num2) {
    const result = num1 + num2;

    addToHistory(num1, num2, "+", result);

    return result;
}

// Subtraction function
function subtract(num1, num2) {
    const result = num1 - num2;

    addToHistory(num1, num2, "-", result);

    return result;
}


// Multiplication function
function multiply(num1, num2) {
    const result = num1 * num2;

    addToHistory(num1, num2, "*", result);

    return result;
}


// Division function
function divide(num1, num2) {

    if (num2 === 0) {
        return "Cannot divide by zero";
    }

    const result = num1 / num2;

    addToHistory(num1, num2, "/", result);

    return result;
}


// Function to display calculation history
function displayHistory() {

    if (history.length === 0) {
        console.log("No stored calculations.");
        return;
    }

    history.forEach(calculation => {
        console.log(
            `${calculation.operands[0]} ${calculation.operator} ${calculation.operands[1]} = ${calculation.result}`
        );
    });
}


// Testing the calculator

console.log(add(10, 5));

console.log(subtract(10, 3));

console.log(multiply(4, 5));

console.log(divide(20, 4));


console.log("Calculation History:");
displayHistory();