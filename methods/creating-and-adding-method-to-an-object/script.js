// Create an object with properties
let user = {
    name: "John",
    age: 30
};
// Adding a method to the object called sayHi that alerts a greeting
user.sayHi = function () {
    alert("Hello!");
};
// Calling the method
user.sayHi();



/* Alternative way to add a method
    // first, declare the function
        function sayHi() {
            alert("Hello!");
        }

    // then add as a method. Here we change the method name to greet but it could be any name including sayHi
        user.greet = sayHi;

        user.greet();
*/