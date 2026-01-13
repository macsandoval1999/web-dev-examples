// these objects do the same


// traditional way of defining a method for an object
user = {
    sayHi: function () {
        alert("Hello");
    }
};



// method using shorthand syntax
user = {
    sayHi() { 
        alert("Hello");
    }
};



// Calling the method works the same way
user.sayHi();