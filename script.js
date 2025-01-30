const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonId = button.id;
        if (buttonId === 'equals') {
            if (firstOperand && operator && currentInput) {
                display.value = calculate(firstOperand, operator, currentInput);
                firstOperand = display.value;
                currentInput = '';
                operator = '';
            }
        } else if (buttonId === 'plus' || buttonId === 'minus' || buttonId === 'times' || buttonId === 'divide') {
            if (currentInput) {
                firstOperand = currentInput;
                currentInput = '';
                operator = button.textContent;
            }
        } else if (buttonId === 'clear') {
            currentInput = '';
            operator = '';
            firstOperand = '';
            display.value = '';
        } else {
            currentInput += button.textContent;
            display.value = currentInput;
        }
    });
});

function calculate(firstOperand, operator, secondOperand) {
    const a = parseFloat(firstOperand);
    const b = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
        default:
            return 0;
    }
}
