// Object with a method using 'this'
const person = {
    name: "Maria",
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

const output = document.getElementById("output");

// 1. Calling greet() directly from object
output.innerText += "1. Direct call: " + person.greet() + "\n";

// 2. Assigning method to a variable (context loss)
const lostGreet = person.greet;
output.innerText += "2. Lost context: " + lostGreet() + "\n";

// 3. Using .bind() to restore context
const boundGreet = person.greet.bind(person);
output.innerText += "3. Bound context: " + boundGreet() + "\n";

// 4. Event listener example (this refers to the button)
document.getElementById("greet").addEventListener("click", function () {
    output.innerText += `4. Button clicked. this.textContent = "${this.textContent}"\n`;
});
