let operand1, operator, operand2;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand1, operator, operand2) {
    switch(operator) {
        case "+":
            return add(operand1, operand2);
            break;

        case "-":
            return subtract(operand1, operand2);
            break;

        case "*":
            return multiply(operand1, operand2);
            break;

        case "/":
            return divide(operand1, operand2);
            break;
    }
}

const display = document.querySelector(".display");
const buttonList = document.querySelectorAll("button");

buttons = Array.from(buttonList);

let displayValue = "";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let buttonValue = event.target.textContent;

        if("1234567890".includes(buttonValue)) {
        displayValue += buttonValue;
        display.textContent = displayValue;
        }
    });
});