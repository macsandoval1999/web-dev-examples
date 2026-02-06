/*Basic example
The closure in this example is the inner function "getName". It is in getName where the "name" variable is remembered, even after the outer function has finished executing. That is the essence of a closure.
The order of execution is as follows:
    1. A pets function is defined, which takes a "name" parameter. It does the following:
    2. It defines an inner function called `getName` that returns the value of the `name` parameter. In other words, it returns the same value that was passed to the outer function. The function is only defined, not called yet.
    3. The inner function `getName` is called, which returns the value of the `name` parameter that was passed to the outer function.
*/
const pets = function (name) {
    const getName = function () {
        return name; // The inner function has access to the "name" variable of the outer function

    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};
/*Here we call the pets function, and pass in the name "Vivie". Whatever it returns, store it in the variable `myPet`. */
const myPet = pets("Vivie");
console.log(myPet()); // "Here we can see that it indeed remembers the value of the `name` variable from the outer function's scope which is 'Vivie'"



//****************************************************************/



/*Advanced example
In this example, we create a function `createPet` that returns an object with methods to get and set the pet's name and sex. The closure allows the inner functions to access and modify the `name` and `sex` variables even after the outer function has finished executing. Here the closure is the inner functions `getName`, `setName`, `getSex`, and `setSex`. These are closures because they "close over" the `name` and `sex` variables, allowing them to be accessed and modified from outside the outer function.
The order of execution is as follows:
    1. A createPet function is defined, which takes a "name" parameter.
    2. A sex variable is defined within the createPet function to store the pet's sex.
    3. A pet object is created with the following methods:
        - setName(newName): Sets the pet's name to the new value.
        - getName(): Returns the pet's name.
        - getSex(): Returns the pet's sex.
        - setSex(newSex): Sets the pet's sex to the new value if it is "male" or "female".
    4. The pet object is returned, exposing the methods to the outer scope.
*/
const createPet = function (name) {
    let sex;
    const pet = {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },
        getName() {
            return name;
        },
        getSex() {
            return sex;
        },
        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };
    return pet;
};
/* Now lets see it in action */
const pet = createPet("Vivie"); // Create a new pet named "Vivie"
console.log(pet.getName()); // Here we verify the initial name

pet.setName("Oliver"); // We use the object's setName method to change the name
pet.setSex("male"); // We use the object's setSex method to change the sex

console.log(pet.getSex()); // Here we verify the sex
console.log(pet.getName()); // Here we verify the updated name



//****************************************************************/



/*Here we create a closure to protect the apiCode variable from being modified directly 
By using a closure, we can ensure that the apiCode variable is only accessible through the getCode function, preventing direct modification from outside the closure.
The outer function is getCode, and the inner function is the one that returns the apiCode. The inner function is a closure because it "closes over" the apiCode variable, allowing it to be accessed even after the outer function has finished executing.
The order of execution is as follows:
    1. The getCode function is defined as an immediately invoked function expression (IIFE).
    2. Inside the IIFE, the apiCode variable is defined.
    3. The IIFE returns a function that has access to the apiCode variable.
    4. The returned function is assigned to the getCode variable.
    5. When getCode is called, it returns the value of apiCode.
*/
const getCode = (function () {
    const apiCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify…

    return function () {
        return apiCode;
    };
})();

console.log(getCode()); // "0]Eal(eh&2"