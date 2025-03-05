let operand1 = 0, operator = null, operand2 = 0;

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

function negate(a) {
    return -a;
}

function percent(a) {
    return a / 100;
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

let displayValue = " ";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let buttonValue = event.target.textContent;

        if("1234567890".includes(buttonValue)) {
        displayValue += buttonValue;
        display.textContent = displayValue;
        }
        else if("/*+-".includes(buttonValue)) {
            operand1 = Number(displayValue);
            operator = buttonValue;
            displayValue = " ";
        }
        else if(buttonValue === "=") {
            operand2 = Number(displayValue);
            if(operator === null) {
                //Do no operation
                display.textContent = displayValue;    
            }
            else {
                displayValue = operate(operand1, operator, operand2);
                display.textContent = displayValue;
                displayValue = " ";
            }
            //Reset operator so no operations get performed when repeatedly pressing =
            operator = null;
        }
        else if(buttonValue === "NEG") {
            displayValue = negate(displayValue);
            display.textContent = displayValue;
        }
        else if(buttonValue === "%") {
            displayValue = percent(displayValue);
            display.textContent = displayValue;
        }
    });
});