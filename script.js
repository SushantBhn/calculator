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

let displayBuffer = " ";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let buttonValue = event.target.textContent;

        if("1234567890.".includes(buttonValue)) {
            //Ignore '.' if already present in the operand
            if(display.textContent.includes(".") && buttonValue === ".") {
                display.textContent = display.textContent;
            }
            else {
            displayBuffer += buttonValue;
            display.textContent = displayBuffer;
            }
        }
        else if("/*+-".includes(buttonValue)) {
            operand1 = Number(display.textContent);
            operator = buttonValue;
            displayBuffer = " ";
        }
        else if(buttonValue === "=") {
            operand2 = Number(display.textContent);
            if(operator === null) {
                //Do no operation
                display.textContent = display.textContent;    
            }
            else {
                displayBuffer = operate(operand1, operator, operand2);
                display.textContent = displayBuffer;
                displayBuffer = " ";
            }
            //Reset operator so no operations get performed when repeatedly pressing =
            operator = null;
        }
        else if(buttonValue === "NEG") {
            display.textContent = negate(display.textContent);
        }
        else if(buttonValue === "%") {
            display.textContent = percent(display.textContent);
        }
        else if(buttonValue === "AC") {
            operand1 = 0;
            operator = null;
            operand2 = 0;
            displayBuffer = " ";
            display.textContent = displayBuffer;  
        }
        else if(buttonValue === "BKSP") {
            display.textContent = display.textContent.slice(0, -1);
        }
    });
});