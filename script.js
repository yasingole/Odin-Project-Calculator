//Create Functions for Basic Math Operations:
const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const multiply = function(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
};

const divide = function(firstNumber, secondNumber) {
	return firstNumber / secondNumber;
};

//Operation:
function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "x") {
        return multiply(firstNumber,secondNumber)
    } else if (operator === "÷") {
        if (secondNumber === 0) {
            return "DIV ERROR"
        }
        return divide(firstNumber, secondNumber);
    }
}

//Create Variables for Calculator Operation:
let firstNumber= null;
let secondNumber= null;
let operator= null; //+ | - | * | /

//Display:
const display= document.querySelector(".display p");

//number buttons
const numberButtons= document.querySelectorAll(".btn.number");
numberButtons.forEach((button) => {
    button.addEventListener("click", function() {
        if (resetDisplay) {
            display.textContent= "";
            resetDisplay= false;
        }
        display.textContent += this.textContent;
    })
})

//Operator
const operatorButtons= document.querySelectorAll(".btn.operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", function() {
        firstNumber= parseFloat(display.textContent);
        operator= button.textContent;
        //reset:
        display.textContent= "";
    })
})

//Equals:
const equalsButton= document.querySelector(".btn.equals");
//FLAG:
let resetDisplay= false;
//Listener
equalsButton.addEventListener("click", function() {
    secondNumber= parseFloat(display.textContent);
    //reset display:
    display.textContent= "";
    //result:
    const result= operate(operator, firstNumber, secondNumber);
    display.textContent= result;
    //reset vars:
    firstNumber = null;
    secondNumber = null;
    operator = null;
    //RESET FLAG:
    resetDisplay= true;
})

//Clear display:
const clear= document.querySelector(".btn.clear");
clear.addEventListener("click", function(){
    display.textContent= "";
    //reset vars:
    firstNumber = null;
    secondNumber = null;
    operator = null;
})

//Backspace:
const backspace= document.querySelector(".btn.backspace");
backspace.addEventListener("click", function() {
    let currentChars= display.textContent;
    if (currentChars.length > 0) {
        currentChars= currentChars.slice(0,-1);
    }
    display.textContent= currentChars;
})

//Plus/minus:
const sign= document.querySelector(".btn.sign");
sign.addEventListener("click", function() {
    let currentValue= display.textContent;
    if (currentValue) {
        let newValue = parseFloat(currentValue) * -1;
        display.textContent= "";
        display.textContent = newValue;
    }
})

//Decimal:
const decimal= document.querySelector(".btn.decimal");
decimal.addEventListener("click", function() {
    if (resetDisplay) {
        // If the display was reset, we want to append a decimal point to the existing result
        if (!display.textContent.includes(".")) {
            display.textContent += ".";
        }
        resetDisplay = false;
    } else {
        // If there's no decimal point yet, add one
        if (!display.textContent.includes(".")) {
            display.textContent += this.textContent;
        }
    }
})

