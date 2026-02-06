// The following variables are defined in the global scope. Global scope variables can be accessed from anywhere in the code. They are not enclosed within any function or block.
const firstNum = 20;
const secNum = 3;
const name = "Chamakh";

// This function is also defined in the global scope
function multiply() {
    return firstNum * secNum;
}
console.log(multiply()); // 60



// A nested function example
function getScore() { // While this function is defined in the global scope, it also has its own local scope
    const num1 = 2;
    const num2 = 3;

    function add() { // This function is defined in the local scope of getScore and has access to both the local and global variables. However, it cannot be accessed outside of getScore.
        return `${name} scored ${num1 + num2}`;
    }

    return add(); // The add function can only be accessed within the getScore function, it is not accessible from the global scope. However, it has access to both the local and global variables. You can see we access the global variable 'name' and the local variables 'num1' and 'num2'.
}

console.log(getScore()); // Although add() is defined inside getScore, we can still call getScore() from the global scope, which in turn calls add() and returns the result.