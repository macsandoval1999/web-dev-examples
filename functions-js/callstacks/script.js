function firstFunction() {
    console.log("First Function"); // 1.
    secondFunction(); // 2.
    console.log("Back to First Function"); // 8.
}
function secondFunction() {
    console.log("Second Function"); // 3.
    thirdFunction(); // 4.
    console.log("Back to Second Function"); // 7.
}
function thirdFunction() {
    console.log("Third Function"); // 5.
    console.log("Back to Third Function"); // 6.
}
firstFunction();

/*
Call Stacks in JavaScript is a data structure that keeps track of function calls. 
When a function is called, it is added to the stack, and when it returns, it is removed from the stack. 
This allows JavaScript to keep track of where it is in the code and what functions are currently being executed.
*/

/* In this example, when firstFunction() is called, it adds itself to the call stack.
Then it calls secondFunction(), which adds itself to the stack.
Finally, it calls thirdFunction(), which adds itself to the stack.
When thirdFunction() returns, it is removed from the stack, and control goes back to secondFunction(), and then back to firstFunction(). */