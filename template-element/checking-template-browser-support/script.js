// Check if the browser supports the template element
if (document.createElement("template").content) {
    console.log("Your browser supports template!");
} else {
        console.log("Your browser does not supports template!");
}



// Sample array of car brands
let myArr = ["Audi", "BMW", "Ford", "Honda", "Jaguar", "Nissan"];



// Function to show content using the template element
function showContent() {
    let temp, item, a, i;
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("div");
    for (i = 0; i < myArr.length; i++) {
        a = document.importNode(item, true);
        a.textContent += myArr[i];
        document.body.appendChild(a);
    }
}



// Call the function to show content
showContent();