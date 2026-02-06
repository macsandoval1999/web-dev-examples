// This function creates a new function that adds a specific value to its argument.
function createAdder(x) {
    return function (y) {
        return x + y;
    };
}

const addFive = createAdder(5); // Here we create a function that adds 5 to its argument called addFive()
const addTen = createAdder(10); // Here we create a function that adds 10 to its argument called addTen()

console.log(addTen(3)); // Here we call the addTen() function with the argument 3

/*
explanation:
    This  -->           const addTen = createAdder(10);

    Is basically        const addTen = function (y) {
    This  -->               return 10 + y;
                        };   
                        
    Which could         function addTen(y) {
    also be                 return 10 + y;
    written as -->      };   
                        

    Hence, addTen(3) is equivalent to 10 + 3 = 13
    




*/