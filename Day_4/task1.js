// Task 1: Functions and Callback

// Step 1: Multiply function
function multiply(a, b) {
  return a * b;
}

// Step 2: Calculate function (accepts two numbers + operation function)
function calculate(num1, num2, operation) {
  const result = operation(num1, num2);
  displayResult(result);
}

// Step 3: Callback to display the result
function displayResult(result) {
  console.log("The result is:", result);
}

// Step 4: Call calculate with multiply function
calculate(6, 4, multiply);  // Output: The result is: 24
