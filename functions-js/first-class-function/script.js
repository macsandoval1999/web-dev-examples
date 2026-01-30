/* ASSIGNING AN ANONYMOUS FUNCTION TO A VARIABLE
--------------------------------------------------*/
// We can assign an anonymous function to a variable. In this example, we assign an arrow function to the variable 'foo'. 

const foo = () => {
  console.log("Hello, world!");
}

// Same as:

// const foo = function() {
//   console.log("Hello, world!");
// }

foo();



/* PASSING A FUNCTION AS AN ARGUMENT
--------------------------------------------------*/
// We can pass functions as arguments to other functions. In this example, we pass an anonymous function as an argument to the higher-order function 'bar'.

function sayHello() {
    return "Hello, ";
}
function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaScript!");



/* RETURNING A FUNCTION FROM ANOTHER FUNCTION
--------------------------------------------------*/
// We can return a function from another function. In this example, the function 'makeMultiplier' returns a new function that multiplies its input by a specified factor.

function makeMultiplier(factor) {
    return function(x) {
        return x * factor;
    };
}

const double = makeMultiplier(2);
console.log(double(5));