function add(a, b) { return a + b; } 

function sub(a, b) { return a - b; } 

function multiply(a, b) { return a * b; }

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero"); // This is the bug
  } 
  return a / b;
}

function calculate(operator, a, b) {
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
}

let result = calculate('/', 10, 0); // this will throw an error
console.log(result);