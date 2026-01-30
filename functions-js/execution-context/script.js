// Execution Context Example in JavaScript

function outerFunction() {
    console.log("Entering outerFunction");
    function innerFunction() {
        console.log("Entering innerFunction");
        console.log("Inside innerFunction");
        console.log("Exiting innerFunction");
    }
    innerFunction();
    console.log("Exiting outerFunction");
}
outerFunction();

console.log("Global Execution Context");
 


/* 
In this example, we have a global execution context created when the script runs. When `outerFunction` is called, a new execution context is created for it. Inside `outerFunction`, when `innerFunction` is called, another execution context is created for `innerFunction`. Each function has its own execution context, which includes its own variable environment and scope chain.

The console output will show the order of execution and how the contexts are created and exited.
*/