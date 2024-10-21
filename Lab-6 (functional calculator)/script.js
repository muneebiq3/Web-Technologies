let currentInput = '0';
let operator = '';
let previousInput = '';
let result = 0;
let isCalculated = false;

const display = document.getElementById('display');
const preview = document.getElementById('preview');

function updateDisplay() {
  display.textContent = currentInput || '0';

  if (operator && previousInput) {
    preview.textContent = `${previousInput} ${operator} ${currentInput !== '' ? currentInput : ''}`;
  } else {
    preview.textContent = currentInput;
  }
}

function appendNumber(number) {
  if (currentInput === '0' || isCalculated) {
    currentInput = number.toString();
    isCalculated = false;
  } else {
    currentInput += number.toString();
  }
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearEntry() {
  currentInput = '0';
  updateDisplay();
}

function clearAll() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  result = 0;
  isCalculated = false;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function addOperator(op) {
  if (previousInput && operator && currentInput !== '') {
    calculate();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = '';
  isCalculated = false;
  updateDisplay();
}

function calculate() {
  if (!previousInput) return;

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput) || prev;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case 'X':
      result = prev * current;
      break;
    case '÷':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  previousInput = '';
  operator = '';
  isCalculated = true;
  updateDisplay();
}

function handleEquals() {
  if (previousInput && operator) {
    calculate();

    preview.textContent = `${previousInput} ${operator} ${currentInput} =`;

    isCalculated = true;
  }
}

function operate(op) {
  let result;
  const current = parseFloat(currentInput);

  switch (op) {
    case 'sqrt':
      result = Math.sqrt(current);
      break;
    case 'square':
      result = Math.pow(current, 2);
      break;
    case '1/x':
      result = 1 / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  updateDisplay();
}