function add(a, b) { return a + b; }

function sub(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function calculate(operator, a, b) {
  try {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return sub(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        throw new Error("Invalid operator");
    }
  } catch (error) {
    console.error("Error during calculation:", error.message); // Handle the error gracefully
    return null; // Or return a default value
  }
}

let result = calculate('/', 10, 0); 
console.log(result); // Outputs: Error during calculation: Division by zero
                    //          null