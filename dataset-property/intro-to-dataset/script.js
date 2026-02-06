/*
This is a demonstration of how to use the dataset property to store custom data attributes on HTML elements. 
Here we select the element with the ID "myElement" and use the dataset property to store and retrieve custom data attributes. 
*/
const element = document.querySelector('#myElement'); // First, we select the element with the ID "myElement"

element.dataset.userId = '12345'; // Then we set the userId to '12345'
console.log(element.dataset.userId); // '12345'

element.dataset.userId = '67890'; // Now we change the userId to '67890'
console.log(element.dataset.userId); // '67890'

element.dataset.userId = '12345'; // Change it back to '12345'
console.log(element.dataset.userId); // '12345'

element.dataset.userId = '67890'; // And change it again to '67890'
console.log(element.dataset.userId); // '67890'

/*
This dataset can be used to store custom data attributes on HTML elements, which can then be accessed and modified using JavaScript. 
You could use this to store additional information about elements without affecting their existing attributes or classes. Common use cases include storing IDs, roles, or other metadata that can be accessed and manipulated via JavaScript.
*/