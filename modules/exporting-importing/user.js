/* To start I have a simple class called
user that has a bunch of information
about a user it has a user class and two
functions for printing the user's name
and printing the users page */



// default export since this is the main class in this module
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Inline export method
export function printUser(user) {
    console.log(`User's name is ${user.name}`);
}
export function printAge(user) {
    console.log(`User is ${user.age} years old`);
}


// Alternative way to export. Export using default and named exports example
/*
export default User;
export { printUser, printAge };
*/