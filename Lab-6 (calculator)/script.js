let currentInput = '0'; // Stores the current number being input
  let operator = ''; // Stores the last operator clicked
  let previousInput = ''; // Stores the previous number input
  let shouldResetDisplay = false; // Tracks if the display should reset for new input

  const display = document.getElementById('display');

  // Update the display
  function updateDisplay() {
    display.textContent = currentInput;
  }

  // Append number to the current input
  function appendNumber(number) {
    if (currentInput === '0' || shouldResetDisplay) {
      currentInput = number.toString();
      shouldResetDisplay = false;
    } else {
      currentInput += number.toString();
    }
    updateDisplay();
  }

  // Append decimal point
  function appendDecimal() {
    if (!currentInput.includes('.')) {
      currentInput += '.';
      updateDisplay();
    }
  }

  // Clear the current entry (CE button)
  function clearEntry() {
    currentInput = '0';
    updateDisplay();
  }

  // Clear everything (C button)
  function clearAll() {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateDisplay();
  }

  // Toggle positive/negative sign
  function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }

  // Add operator and store previous input
  function addOperator(op) {
    if (operator) calculate(); // If there's already an operator, calculate the result first
    operator = op;
    previousInput = currentInput;
    shouldResetDisplay = true; // Reset the display for the next number input
  }

  // Perform the calculation
  function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

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
    operator = '';
    updateDisplay();
    shouldResetDisplay = true;
  }

  // Handle special operations like square root and reciprocal
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