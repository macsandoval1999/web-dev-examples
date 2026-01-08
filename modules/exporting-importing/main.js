/* Importing example when using default export */
import User from './user.js';


/* Importing example when using named exports. This allows you to import specific functions or classes by name. It is useful when you don't need to import the entire module, or when you dont have/need a default export */
import { printAge, printUser } from './user.js';




const user1 = new User("Alice", 30);
printUser(user1);
printAge(user1);
console.log(user1);
