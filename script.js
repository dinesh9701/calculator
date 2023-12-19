let display = document.getElementById('display');
let equation = '';

function appendNumber(number) {
    equation += number;
    display.textContent = equation;
}

function appendOperator(operator) {
    equation += operator;
    display.textContent = equation;
}

function clearDisplay() {
    equation = '';
    display.textContent = equation;
}
function clearnumber(){
    equation='';
    display.textContent = equation;
}

function calculateResult() {
    try {
        let result = eval(equation);
        display.textContent = result;
        equation = '';
    } catch (error) {
        alert('Invalid input. Please enter a valid expression.');
        clearDisplay();
    }
}