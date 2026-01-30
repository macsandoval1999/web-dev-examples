// Higher-order function that takes a function as an argument
function applyOperation(a, b, operation) {
    return operation(a, b);
}

// Example operation functions
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using the higher-order function
console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, multiply)); // Output: 15



/*
In this example, `applyOperation` is a higher-order function that takes two numbers and a function (`operation`) as arguments. It applies the provided operation to the two numbers and returns the result. The `add` and `multiply` functions are passed as arguments to demonstrate how different operations can be performed using the same higher-order function.
*/